import {buildVersion} from './build-version.generated.mjs';
import * as R from './rules.mjs';
import {bank,classic,daily,firstDate,index,prompts,runQuestions,validDate} from './game-data.mjs';
const json=(value,status=200)=>new Response(JSON.stringify(value),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});
const empty=()=>new Response(null,{status:204});
const id=x=>typeof x==='string'&&/^[A-Za-z0-9]{8}$/.test(x);
const device=x=>typeof x==='string'&&/^[A-Za-z0-9]{16}$/.test(x);
export async function hash(s){return[...new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)))].map(v=>v.toString(16).padStart(2,'0')).join('');}
export async function readBody(request){if(Number(request.headers.get('content-length')||0)>32768)throw Error('Request too large');const text=await request.text();if(text.length>32768)throw Error('Request too large');return JSON.parse(text);}
export function validateRun(data){
 if(!id(data.id)||!device(data.device))throw Error('Invalid run identity');
 const run=data.run||data;
 const ps=runQuestions(run);
 if(!Array.isArray(run.rounds)||run.rounds.length!==ps.length)throw Error('Incomplete run');
 const results=run.rounds.map((r,i)=>{
  const p=ps[i];if(r.p!==p.id)throw Error('Prompt order mismatch');
  if(r.a===null){if(r.b!==null)throw Error('Invalid pass');return{band:null,points:0,people:0};}
  if(!Number.isInteger(r.a)||r.a<0)throw Error('Invalid answer');const row=R.roster(p)[r.a];if(!row||row[1]!==r.b)throw Error('Answer band mismatch');
  const points=R.bands[row[1]].points*R.weights[i%10];return{band:row[1],points,people:Math.floor(points/25)};
 });
 const title=R.titleFor(results);
 return {run,results,name:R.normalizeName(data.name||''),points:results.reduce((s,r)=>s+r.points,0),people:results.reduce((s,r)=>s+r.people,0),title:title.id};
}
function publicRun(row){return{id:row.id,name:row.name,points:row.points,people:row.people,title:R.titleFor(JSON.parse(row.rounds).map(r=>({band:r.b}))).id,stage:row.stage,aids:JSON.parse(row.rounds).map(r=>r.a)};}
async function percentile(env,row){const a=await env.DB.prepare('SELECT COUNT(*) AS total,SUM(CASE WHEN people<? THEN 1 ELSE 0 END) AS lower FROM runs WHERE mode=\'daily\' AND date=?').bind(row.people,row.date).first();return a?.total>1?{kind:'better',value:Math.floor((a.lower||0)/a.total*100),players:a.total}:null;}
async function rowsFor(env,row){const {results}=await env.DB.prepare('SELECT * FROM runs WHERE root=? ORDER BY people DESC,points DESC,created_at,id LIMIT 1000').bind(row.root).all();return results;}
async function challengeView(env,code){const row=await env.DB.prepare('SELECT * FROM runs WHERE id=?').bind(code).first();if(!row)return{found:false};const all=await rowsFor(env,row);const starter=all.find(x=>x.id===row.root)||row;const selected=[row,...all.filter(x=>x.id!==row.id)].slice(0,5);return{found:true,mode:row.mode==='classic'?'daily':row.mode,date:row.date,seed:row.seed,bank:row.bank,length:row.length,inviter:publicRun(row),starter:publicRun(starter),players:selected.map(publicRun),board:{root:row.root,count:all.length,leader:publicRun(all[0]||row)}};}
async function board(env,row,req,ownerHash){const all=await rowsFor(env,row);const header=req.headers.get('x-outrivia-device')||req.headers.get('x-opennoillirk-device');const owner=ownerHash??(device(header)?await hash(header+'|opennoillirk'):null);const rank=all.findIndex(x=>x.id===row.id)+1;return{root:row.root,own:row.device_hash===owner,owner:(all.find(x=>x.id===row.root)||row).name,count:all.length,leader:publicRun(all[0]||row),top:all.slice(0,100).map((r,i)=>({...publicRun(r),rank:i+1,you:r.device_hash===owner})),rank,players:all.slice(0,100).map(publicRun)};}
async function createRun(req,env){
 const data=await readBody(req),score=validateRun(data),run=score.run,deviceHash=await hash(data.device+'|opennoillirk');
 if(run.mode==='daily'&&run.date>new Date(Date.now()+86400000).toISOString().slice(0,10))throw Error('Future Daily run');
 const old=await env.DB.prepare('SELECT * FROM runs WHERE id=?').bind(data.id).first();
 if(old)return old.device_hash===deviceHash?json({...publicRun(old),root:old.root,board:await board(env,old,req,deviceHash),percentile:await percentile(env,old)}):json({error:'Run id exists'},409);
 let root=data.id;
 if(id(data.via)){const parent=await env.DB.prepare('SELECT * FROM runs WHERE id=?').bind(data.via).first();if(parent){if((parent.mode==='classic'?'daily':parent.mode)!==run.mode||parent.date!==(run.date??null)||parent.seed!==(run.seed??null)||parent.length!==run.rounds.length)throw Error('Challenge questions mismatch');root=parent.root;}}
 const prior=run.mode==='daily'?await env.DB.prepare('SELECT id FROM runs WHERE device_hash=? AND mode=\'daily\' AND date=? LIMIT 1').bind(deviceHash,run.date).first():null;
 const first=run.mode==='daily'&&!prior&&!data.reposted&&Date.now()<Date.parse(run.date+'T00:00:00Z')+36*3600000?1:0;
 const row={...score,id:data.id,root,mode:run.mode,date:run.mode==='classic'?classic.date:run.date??null};
 await env.DB.prepare('INSERT INTO runs(id,root,device_hash,name,mode,date,seed,bank,length,rounds,points,people,title,created_at,stage,first_daily) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)').bind(data.id,root,deviceHash,score.name,run.mode,row.date,run.seed??null,run.bank??bank.bank,run.rounds.length,JSON.stringify(run.rounds),score.points,score.people,score.title,Date.now(),data.stage==='table'?'table':'climb',first).run();
 const saved=await env.DB.prepare('SELECT * FROM runs WHERE id=?').bind(data.id).first();return json({...publicRun(saved),root,board:await board(env,saved,req,deviceHash),percentile:run.mode==='daily'?await percentile(env,row):null});
}
export async function api(req,env,path){
 if(path==='/api/health')return json({ok:true,phase:2,game:'OpenNoillirk',database:!!env.DB,storage:!!env.BUCKET,bank:bank.bank,questions:index.prompts.length});
 if(path==='/api/pwa-version')return json({buildId:buildVersion,version:buildVersion});
 if(path==='/api/runs'&&req.method==='POST')return createRun(req,env);
 const view=path.match(/^\/api\/challenge\/([A-Za-z0-9]{8})$/);if(view)return json(await challengeView(env,view[1]));
 const legacy=path.match(/^\/api\/challenges\/([A-Za-z0-9]{8})$/);if(legacy){const r=await env.DB.prepare('SELECT id,root,name,date,rounds,points,people,title FROM runs WHERE id=?').bind(legacy[1]).first();return r?json({...r,rounds:JSON.parse(r.rounds)}):json({error:'Challenge not found'},404);}
 const run=path.match(/^\/api\/runs\/([A-Za-z0-9]{8})(\/board)?$/);
 if(run){const r=await env.DB.prepare('SELECT * FROM runs WHERE id=?').bind(run[1]).first();if(!r)return json({error:'Run not found'},404);
  if(req.method==='PATCH'&&!run[2]){const data=await readBody(req);if(!device(data.device)||await hash(data.device+'|opennoillirk')!==r.device_hash)return json({error:'Not your run'},403);await env.DB.prepare('UPDATE runs SET name=? WHERE id=?').bind(R.normalizeName(data.name||''),r.id).run();return empty();}
  if(req.method==='GET'&&run[2])return json(await board(env,r,req));
 }
 const lb=path.match(/^\/api\/leaderboard\/(\d{4}-\d{2}-\d{2})$/);
 if(lb){if(!validDate(lb[1]))throw Error('Invalid date');const {results}=await env.DB.prepare('SELECT * FROM runs WHERE mode=\'daily\' AND date=? AND first_daily=1 ORDER BY points DESC,people DESC,created_at,id LIMIT 100').bind(lb[1]).all();const count=await env.DB.prepare('SELECT COUNT(*) AS n FROM runs WHERE mode=\'daily\' AND date=?').bind(lb[1]).first();return json({date:lb[1],players:count.n,rows:await Promise.all(results.map(async(r,i)=>({name:r.name,points:r.points,people:r.people,title:publicRun(r).title,stage:r.stage,rank:i+1,tag:(await hash('board|'+r.id)).slice(0,12)})))});}
 const archive=path.match(/^\/api\/archive\/(\d+)$/);
 if(archive){const number=Number(archive[1]),date=new Date(Date.parse(firstDate+'T00:00:00Z')+(number-1)*86400000).toISOString().slice(0,10);if(number<1||date>new Date(Date.now()+86400000).toISOString().slice(0,10))return json(null,404);return json({day:{number,date,latest:R.dailyNumber(new Date(Date.now()+14*3600000).toISOString().slice(0,10)),prompts:daily(date).prompts.map(p=>({id:p.id,text:p.text}))},seo:{title:`OpenNoillirk #${number} — Daily Archive`,description:`Replay the ten questions from ${date}.`,canonicalPath:`/archive/${number}`,siteName:'OpenNoillirk',locale:'en',type:'website',image:'/og.png'}});}
 if(path==='/api/refused'&&req.method==='POST'){const d=await readBody(req);if(!prompts.has(d.p)||typeof d.t!=='string'||d.t.length>60)throw Error('Invalid report');const answer=d.t.normalize('NFD').replace(/\p{M}/gu,'').toLowerCase().replace(/[^\p{L}\p{N} ]/gu,'').trim();if(answer)await env.DB.prepare('INSERT INTO refused_answers(prompt_id,answer,count,reported,updated_at) VALUES(?,?,1,?,?) ON CONFLICT(prompt_id,answer) DO UPDATE SET count=count+1,reported=MAX(reported,excluded.reported),updated_at=excluded.updated_at').bind(d.p,answer,d.r?1:0,Date.now()).run();return json({ok:true});}
 if(path==='/api/feedback'&&req.method==='POST'){const d=await readBody(req);if(!device(d.device)||!['prompt','stage'].includes(d.kind)||!['up','down'].includes(d.rating)||!['climb','table'].includes(d.stage)||!['daily','unlimited'].includes(d.mode))throw Error('Invalid feedback');if(d.mode==='daily'&&!validDate(d.date)||d.mode==='unlimited'&&(!Number.isSafeInteger(d.seed)||d.seed<0||d.seed>0xffffffff))throw Error('Invalid feedback run');if(d.kind==='prompt'&&(!prompts.has(d.promptId)||!Number.isInteger(d.slot)||d.slot<0||d.slot>999||typeof d.answer!=='string'||d.answer.length>60))throw Error('Invalid prompt feedback');if(typeof d.note==='string'&&d.note.length>300)throw Error('Note too long');const dh=await hash(d.device+'|opennoillirk');const key=d.kind+'|'+d.stage+'|'+d.mode+'|'+(d.date??d.seed)+'|'+(d.slot??'');delete d.device;await env.DB.prepare('INSERT INTO feedback(device_hash,feedback_key,kind,payload,updated_at) VALUES(?,?,?,?,?) ON CONFLICT(device_hash,feedback_key) DO UPDATE SET payload=excluded.payload,updated_at=excluded.updated_at').bind(dh,key,d.kind,JSON.stringify(d),Date.now()).run();return empty();}
 if(path==='/api/suggestions'&&req.method==='POST'){const d=await readBody(req);if(!['question','idea'].includes(d.kind)||typeof d.text!=='string'||d.text.trim().length<3)throw Error('Invalid suggestion');const question=String(d.question??d.prompt??(d.kind==='question'?d.text:'')??'').trim(),note=String(d.note??d.message??(d.kind==='idea'?d.text:JSON.stringify({category:d.category,examples:d.examples}))??'').trim();if(!question&&!note)throw Error('Suggestion is empty');if(question.length>300||note.length>1000)throw Error('Suggestion too long');await env.DB.prepare('INSERT INTO suggestions(question,note,created_at) VALUES(?,?,?)').bind(question,note,Date.now()).run();return empty();}
 return json({error:'Not found'},404);
}
export function gameFile(path){const m=path.match(/^\/game\/daily\/v2\/(\d{4}-\d{2}-\d{2})\.json$/);if(m)return json(daily(m[1]));return null;}
