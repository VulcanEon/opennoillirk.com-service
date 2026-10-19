// Import the authorized reference UI and renderer. Production services stay project-owned.
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import prettier from 'prettier';
import {parseHTML} from 'linkedom';
const root=path.resolve(new URL('../',import.meta.url).pathname),source=path.resolve(process.argv[2]||path.join(root,'private/phase2'));
const brand=s=>s.replace(/(?<!open)noillirk\.com/g,'opennoillirk.com').replaceAll('%20Noillirk%20','%20OpenNoillirk%20').replace(/\bNoillirk\b/g,'OpenNoillirk').replaceAll('rarely:','opennoillirk:').replaceAll("OpenNoillirk is an independent game we made. It isn't affiliated with Daily Games or any other site. Inspired by Krillion.","OpenNoillirk is an independently hosted adaptation using authorized Noillirk assets. It is not affiliated with Daily Games.").replaceAll('The game, its prompts and its boards are our own.','The game uses authorized reference assets and independently hosted services.').replaceAll('mailto:hello@opennoillirk.com','https://github.com/VulcanEon/opennoillirk.com-service/issues');
const files=await fs.readdir(path.join(source,'assets')),manifest=[];
await fs.mkdir(path.join(root,'public/assets/v2'),{recursive:true});
await fs.mkdir(path.join(root,'vendor/reference'),{recursive:true});
const namespace=s=>s.replace(/\/assets\/([\w.-]+\.(?:js|css))/g,'/assets/v2/$1').replace(/(["'`])assets\/([\w.-]+\.(?:js|css))/g,'$1assets/v2/$2');
for(const file of files){
 let s=await fs.readFile(path.join(source,'assets',file),'utf8');
 if(file.startsWith('main-')){
   s=s.replace(/wu=yu\(\{method:`GET`\}\)\.handler\(Zo\(`[^`]+`\)\)/,'wu=async({data})=>{const r=await fetch(`/api/challenge/${encodeURIComponent(data)}`);if(!r.ok)throw Error("Challenge unavailable");return r.json()}');
   // Remove upstream analytics and chat destinations, and keep the head script consistent for hydration.
   s=s.replace(/vl=`\(function\(\)\{if\(window\.__outriviaAnalytics[\s\S]*?\}\)\(\);`;/,'vl=``;');
   s=s.replace('e.hydrateRoot=function(e,t,n){','e.createRoot=function(e){if(!s(e))throw Error(o(299));var r=tp(e,1,false,null,null,false,"",null,Js,Ys,Xs,Fp);e[vt]=r.current;Cd(e);return new Ip(r)};e.hydrateRoot=function(e,t,n){');
   s=s.replace('(0,rd.hydrateRoot)(document,','(0,rd.createRoot)(document).render(');
   s=s.replace('function wl(){','function wl(){(0,V.useEffect)(()=>window.dispatchEvent(new Event("opennoillirk:hydrated")),[]);');
   s=s.replaceAll('https://data.1back.link/api/send','/api/analytics-disabled').replaceAll('https://data.1back.link/js/app.js','/analytics-disabled.js').replaceAll('https://embed.tawk.to','/chat-disabled');
 }
 if(file.startsWith('web-config-'))s='var config={AppName:"OpenNoillirk",AppUrl:"https://opennoillirk.com",adminUserManagementEnabled:false,adminPaidUsersEnabled:false,pwa:{enabled:true},creditsEnabled:false,storageEnabled:false,auth:{methods:{}}};export{config as t};';
 if(file.startsWith('privacy-')||file.startsWith('terms-')){const name=file.split('-')[0];const {document:d}=parseHTML(await fs.readFile(path.join(root,'src/content',name+'.html'),'utf8'));const html=d.querySelector('main').innerHTML;s='import{t}from"./jsx-runtime-D_h4s5mO.js";var j=t();function component(){return j.jsx("main",{className:"home-legal",dangerouslySetInnerHTML:{__html:'+JSON.stringify(html)+'}})}export{component};';}
 if(file.startsWith('admin-')&&file.endsWith('.js'))s='function component(){return null}export{component};';
 if(file.startsWith('tawkto-chat-'))s='function component(){return null}export{component as default};';
 if(file.startsWith('runs-'))s=s.replace('return e===!0&&!u.test(t)','return e===!0&&!u.test(t)&&!window.OPENNOILLIRK_AUDIT');
 if(file.startsWith('use-share-run-')&&file.endsWith('.js')){s=s.replace('$=()=>performance.now()', '$=()=>performance.now()+(window.__openClockOffset||0)');s=s.replace('return{screen:i,run:s,remaining:l,', 'window.__openGame={snapshot:()=>({screen:Ce.current,run:z.current,remaining:l,refused:ne,reveal:le,people:ue,points:de,setup:B.current,ready:be}),skip:Fe,pass:Pe,quit:Ie,advance:ms=>{window.__openClockOffset=(window.__openClockOffset||0)+ms;if(ms>=500&&H.current)V.current?.fastForward()}};return{screen:i,run:s,remaining:l,');}
 s=namespace(brand(s)).replaceAll('/images/home/og.jpg','/og.png').replaceAll('/images/sky-climb/og.jpg','/og.png');
 await fs.writeFile(path.join(root,'public/assets/v2',file),s);
 await fs.writeFile(path.join(root,'vendor/reference',file),await prettier.format(s,{parser:file.endsWith('.css')?'css':'babel'}));
 manifest.push({path:'/assets/v2/'+file,source:'https://noillirk.com/assets/'+file,originalSha256:crypto.createHash('sha256').update(await fs.readFile(path.join(source,'assets',file))).digest('hex'),sha256:crypto.createHash('sha256').update(s).digest('hex')});
}
const snapshots={};
for(const f of (await fs.readdir(source)).filter(x=>x.endsWith('.html'))){
 const {document:d}=parseHTML(await fs.readFile(path.join(source,f),'utf8'));
 // Preserve TanStack's route hydration payload and the reference local stage/daily pre-paint hints.
 for(const script of d.querySelectorAll('script')){
   if(script.src||/cloudflareinsights|data\.1back\.link/.test(script.textContent)){script.remove();continue;}
   if(script.textContent.includes('__outriviaAnalytics'))script.textContent='';
 }
 if(['privacy.html','terms.html'].includes(f)){const own=parseHTML(await fs.readFile(path.join(root,'src/content',f),'utf8')).document.querySelector('main');d.querySelector('main')?.replaceWith(own);}
 d.querySelector('link[rel="icon"]')?.setAttribute('href','/favicon.svg');
 for(const meta of d.querySelectorAll('meta[property="og:image"],meta[name="twitter:image"]'))meta.setAttribute('content','https://opennoillirk.com/og.png');
 let s=namespace(brand('<!doctype html>'+d.documentElement.outerHTML)).replaceAll('The Daily Dive — guess the answer most people give','The Noillirk game — guess the answer most people give');
 // The same replacement is applied to the client intro module below.
 snapshots[f.slice(0,-5)]=s;
}
for(const f of files.filter(f=>f.startsWith('intro-'))){const p=path.join(root,'public/assets/v2',f);const text=(await fs.readFile(p,'utf8')).replaceAll('The Daily Dive — guess the answer most people give','The Noillirk game — guess the answer most people give');await fs.writeFile(p,text);await fs.writeFile(path.join(root,'vendor/reference',f),await prettier.format(text,{parser:'babel'}));}
await fs.writeFile(path.join(root,'src/reference-pages.generated.mjs'),'// Authorized SSR templates. Rebuild from the recorded import only.\nexport default '+JSON.stringify(snapshots)+';\n');
await fs.writeFile(path.join(root,'docs/client-manifest.json'),JSON.stringify({imported:'2026-10-19',authorization:'User-authorized reference UI, independently hosted with original backend. Branding, service configuration, telemetry and test hooks are adapted.',assets:manifest},null,2)+'\n');
console.log('Imported '+files.length+' authorized client modules and '+Object.keys(snapshots).length+' page templates');
