import {referencePage} from './reference-page.mjs';
import {page,analytics} from './html.mjs';
import {SITE} from './config.mjs';
import {api,gameFile,validateRun} from './game-api.mjs';
export {validateRun};
const json=(value,status=200)=>new Response(JSON.stringify(value),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':'no-store'}});
const paths=['/','/sky-climb','/unlimited','/how-to-play','/scoring','/privacy','/terms','/archive','/leaderboard','/suggest'];
export default{
  async fetch(request,env){
    const url=new URL(request.url),path=url.pathname.replace(/\/$/,'')||'/';
    if(url.hostname==='www.opennoillirk.com')return Response.redirect(SITE.origin+url.pathname+url.search,301);
    if(path.startsWith('/game/daily/v2/')){try{const file=gameFile(path);if(file)return file;}catch{return json({error:'Invalid daily'},400);}}
    if(path==='/integrations.js')return new Response(analytics(env).replace(/^<script>/,'').replace(/<\/script>$/,''),{headers:{'content-type':'text/javascript; charset=utf-8','cache-control':'no-cache'}});
    if(path.startsWith('/api/')){
      if(!['GET','HEAD'].includes(request.method)){const origin=request.headers.get('origin');if(origin&&origin!==url.origin)return json({error:'Origin not allowed'},403);}
      try{return await api(request,env,path);}catch(error){return json({error:error.message||'Invalid request'},400);}
    }
    if(path==='/sitemap.xml')return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(p=>`<url><loc>${SITE.origin}${p}</loc></url>`).join('')}</urlset>`,{headers:{'content-type':'application/xml; charset=utf-8'}});
    if(path==='/robots.txt')return new Response(`User-agent: *\nAllow: /\nDisallow: /api/\nDisallow: /c/\nSitemap: ${SITE.origin}/sitemap.xml\n`,{headers:{'content-type':'text/plain'}});
    if(path==='/llms.txt'||path==='/llms-full.txt')return new Response(`# OpenNoillirk\n\n${SITE.description}\n\n- Website: ${SITE.origin}\n- Source: ${SITE.repository}\n- Rules: ${SITE.origin}/how-to-play\n- Scoring: ${SITE.origin}/scoring\n\nDaily, Tabletop and Sky Climb with 10/20/endless Unlimited. Each prompt allows thirty seconds. Answers are checked against a prepared list in the browser. Scores are 10, 25, 50, 75 or 100 multiplied by [1,1,2,2,2,3,3,3,4,4]. The board is an estimate, not a live survey. A perfect climb earns 2,500 points and reaches 14 km. No account or payment required. Progress and audio settings stay in this browser. Completed results can be stored to make a challenge link. Daily questions rotate at local midnight. Unlimited uses seeded, non-repeating question order until the full bank is exhausted.\n`,{headers:{'content-type':'text/plain; charset=utf-8'}});
    if(path==='/index.md'||path==='/sky-climb.md'||path==='/how-to-play.md'||path==='/scoring.md')return new Response(`# OpenNoillirk — Noillirk Game\n\n${SITE.description}\n\nPlay: ${SITE.origin}\nSource code: ${SITE.repository}\n\nTen questions, thirty seconds each. Guess the most familiar accepted answer. The five bands are Off the Board (10), Top 10 (25), Top 5 (50), Runner-up (75), #1 Answer (100). Later rounds multiply points. A pass or timeout scores zero. Every accepted answer raises the krill. Review your answers, save a share image and challenge a friend on the same ten questions.\n`,{headers:{'content-type':'text/markdown; charset=utf-8'}});
    if(path.startsWith('/media/')){const obj=await env.BUCKET?.get(path.slice(7));if(obj){const headers=new Headers();obj.writeHttpMetadata(headers);headers.set('etag',obj.httpEtag);headers.set('cache-control','public,max-age=31536000,immutable');return new Response(obj.body,{headers});}}
    if(paths.includes(path)||path==='/unlimited'||path.startsWith('/c/')||/^\/archive\/\d+$/.test(path))return new Response(referencePage(path,env),{headers:{'content-type':'text/html; charset=utf-8','cache-control':'no-cache','x-content-type-options':'nosniff','referrer-policy':'strict-origin-when-cross-origin'}});
    const asset=await env.ASSETS.fetch(request);if(asset.status!==404)return asset;
    return new Response(page('/404',env),{status:404,headers:{'content-type':'text/html; charset=utf-8','x-robots-tag':'noindex'}});
  },
};
