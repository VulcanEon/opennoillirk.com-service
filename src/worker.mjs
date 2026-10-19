import {page} from './html.mjs';
import {SITE} from './config.mjs';
import * as R from './rules.mjs';
import classic from '../public/game/classic.json' with {type:'json'};

const json=(value,status=200)=>new Response(JSON.stringify(value),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});
const safeId=x=>typeof x==='string'&&/^[A-Za-z0-9]{8}$/.test(x);
const safeDevice=x=>typeof x==='string'&&/^[A-Za-z0-9]{16}$/.test(x);
async function hash(s){const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s));return [...new Uint8Array(b)].map(v=>v.toString(16).padStart(2,'0')).join('');}
async function body(request){if(Number(request.headers.get('content-length')||0)>32768)throw Error('Request too large');const text=await request.text();if(text.length>32768)throw Error('Request too large');return JSON.parse(text);}
export function validateRun(data){
  if(!safeId(data.id)||!safeDevice(data.device)||data.mode!=='classic'||!Array.isArray(data.rounds)||data.rounds.length!==10)throw Error('Invalid run');
  const results=data.rounds.map((r,i)=>{
    const p=classic.prompts[i];if(r.p!==p.id)throw Error('Prompt order mismatch');
    if(r.a===null){if(r.b!==null)throw Error('Invalid pass');return{band:null,points:0,people:0};}
    if(!Number.isInteger(r.a)||r.a<0)throw Error('Invalid answer');const row=R.roster(p)[r.a];if(!row||row[1]!==r.b)throw Error('Answer band mismatch');
    const points=R.bands[row[1]].points*R.weights[i];return{band:row[1],points,people:Math.floor(points/25)};
  });
  return{name:R.normalizeName(data.name||''),points:results.reduce((s,r)=>s+r.points,0),people:results.reduce((s,r)=>s+r.people,0),title:R.titleFor(results).title};
}
async function api(request,env,path){
  if(path==='/api/health')return json({ok:true,phase:1,game:'OpenNoillirk',database:!!env.DB,storage:!!env.BUCKET});
  if(path==='/api/pwa-version')return json({version:'opennoillirk-1'});
  if(path==='/api/runs'&&request.method==='POST'){
    const data=await body(request),score=validateRun(data);
    const deviceHash=await hash(data.device+'|opennoillirk');
    const existing=await env.DB.prepare('SELECT device_hash, root FROM runs WHERE id=?').bind(data.id).first();
    if(existing)return existing.device_hash===deviceHash?json({id:data.id,root:existing.root}):json({error:'Run id exists'},409);
    let root=data.id;
    if(safeId(data.via)){const parent=await env.DB.prepare('SELECT root FROM runs WHERE id=?').bind(data.via).first();if(parent)root=parent.root;}
    await env.DB.prepare('INSERT INTO runs (id,root,device_hash,name,mode,date,seed,bank,length,rounds,points,people,title,created_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)').bind(data.id,root,deviceHash,score.name,'classic',classic.date,null,4,10,JSON.stringify(data.rounds),score.points,score.people,score.title,Date.now()).run();
    return json({id:data.id,root});
  }
  const challenge=path.match(/^\/api\/challenges\/([A-Za-z0-9]{8})$/);
  if(challenge){const row=await env.DB.prepare('SELECT id,root,name,date,rounds,points,people,title FROM runs WHERE id=?').bind(challenge[1]).first();return row?json({...row,rounds:JSON.parse(row.rounds)}):json({error:'Challenge not found'},404);}
  const run=path.match(/^\/api\/runs\/([A-Za-z0-9]{8})(\/board)?$/);
  if(run){
    const row=await env.DB.prepare('SELECT * FROM runs WHERE id=?').bind(run[1]).first();if(!row)return json({error:'Run not found'},404);
    if(request.method==='PATCH'&&!run[2]){const data=await body(request);if(!safeDevice(data.device)||await hash(data.device+'|opennoillirk')!==row.device_hash)return json({error:'Not your run'},403);await env.DB.prepare('UPDATE runs SET name=? WHERE id=?').bind(R.normalizeName(data.name||''),row.id).run();return new Response(null,{status:204});}
    if(request.method==='GET'&&run[2]){const {results}=await env.DB.prepare('SELECT id,name,points,people,title FROM runs WHERE root=? ORDER BY points DESC, created_at LIMIT 100').bind(row.root).all();return json({root:row.root,players:results});}
  }
  if(path==='/api/refused'&&request.method==='POST'){
    const data=await body(request);if(!classic.prompts.some(p=>p.id===data.p)||typeof data.t!=='string'||data.t.length>60)return json({error:'Invalid report'},400);
    const answer=data.t.normalize('NFD').replace(/\p{M}/gu,'').toLowerCase().replace(/[^\p{L}\p{N} ]/gu,'').trim();if(!answer)return json({ok:true});
    await env.DB.prepare('INSERT INTO refused_answers(prompt_id,answer,count,reported,updated_at) VALUES(?,?,1,?,?) ON CONFLICT(prompt_id,answer) DO UPDATE SET count=count+1,reported=MAX(reported,excluded.reported),updated_at=excluded.updated_at').bind(data.p,answer,data.r?1:0,Date.now()).run();return json({ok:true});
  }
  return json({error:'Not found'},404);
}
const paths=['/','/sky-climb','/how-to-play','/scoring','/privacy','/terms'];
export default{
  async fetch(request,env){
    const url=new URL(request.url),path=url.pathname.replace(/\/$/,'')||'/';
    if(url.hostname==='www.opennoillirk.com')return Response.redirect(SITE.origin+url.pathname+url.search,301);
    if(path.startsWith('/api/')){
      if(!['GET','HEAD'].includes(request.method)){const origin=request.headers.get('origin');if(origin&&origin!==url.origin)return json({error:'Origin not allowed'},403);}
      try{return await api(request,env,path);}catch(error){return json({error:error.message||'Invalid request'},400);}
    }
    if(path==='/sitemap.xml')return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p=>`<url><loc>${SITE.origin}${p}</loc></url>`).join('')}</urlset>`,{headers:{'content-type':'application/xml; charset=utf-8'}});
    if(path==='/robots.txt')return new Response(`User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /c/\nSitemap: ${SITE.origin}/sitemap.xml\n`,{headers:{'content-type':'text/plain'}});
    if(path==='/llms.txt'||path==='/llms-full.txt')return new Response(`# OpenNoillirk\n\n${SITE.description}\n\n- Website: ${SITE.origin}\n- Source: ${SITE.repository}\n- Rules: ${SITE.origin}/how-to-play\n- Scoring: ${SITE.origin}/scoring\n\nPhase 1: a complete ten-question classic Sky Climb. Each prompt allows thirty seconds. Answers are checked against a prepared list in the browser. Scores are 10, 25, 50, 75 or 100 multiplied by [1,1,2,2,2,3,3,3,4,4]. The board is an estimate, not a live survey. A perfect climb earns 2,500 points and reaches 14 km. No account or payment required. Progress and audio settings stay in this browser. Completed results can be stored to make a challenge link. Tabletop, refreshed dailies and Unlimited are subsequent phases.\n`,{headers:{'content-type':'text/plain; charset=utf-8'}});
    if(path==='/index.md'||path==='/sky-climb.md'||path==='/how-to-play.md'||path==='/scoring.md')return new Response(`# OpenNoillirk — Noillirk Game\n\n${SITE.description}\n\nPlay: ${SITE.origin}\nSource code: ${SITE.repository}\n\nTen questions, thirty seconds each. Guess the most familiar accepted answer. The five bands are Off the Board (10), Top 10 (25), Top 5 (50), Runner-up (75), #1 Answer (100). Later rounds multiply points. A pass or timeout scores zero. Every accepted answer raises the krill. Review your answers, save a share image and challenge a friend on the same ten questions.\n`,{headers:{'content-type':'text/markdown; charset=utf-8'}});
    if(path.startsWith('/media/')){const obj=await env.BUCKET?.get(path.slice(7));if(obj){const headers=new Headers();obj.writeHttpMetadata(headers);headers.set('etag',obj.httpEtag);headers.set('cache-control','public,max-age=31536000,immutable');return new Response(obj.body,{headers});}}
    if(paths.includes(path)||path==='/unlimited'||path.startsWith('/c/'))return new Response(page(path,env),{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-cache','x-content-type-options':'nosniff','referrer-policy':'strict-origin-when-cross-origin'}});
    const asset=await env.ASSETS.fetch(request);if(asset.status!==404)return asset;
    return new Response(page('/404',env),{status:404,headers:{'content-type':'text/html; charset=utf-8','x-robots-tag':'noindex'}});
  },
};
