import pages from './reference-pages.generated.mjs';
import content from './content.generated.mjs';
import {SITE} from './config.mjs';
export function referencePage(path,env={}){
 const key=path==='/'?'index':path.slice(1);
 let html=(pages[key]||pages.index).replace(/(?<!open)noillirk\.com/g,'opennoillirk.com').replaceAll('%20Noillirk%20','%20OpenNoillirk%20').replaceAll('hello@opennoillirk.com','Contact on GitHub');
 if(!html.includes('home-footer-source'))html=html.replace('</footer>','<p class="home-footer-source"><a href="https://github.com/VulcanEon/opennoillirk.com-service" target="_blank" rel="noopener">GitHub · Deployable source code ↗</a></p></footer>');
 if(path==='/'){
  const escape=s=>s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');
  html=html.replace(/<title>[\s\S]*?<\/title>/,()=>`<title>${escape(SITE.title)}</title>`)
   .replace(/(<meta (?:property|name)="(?:og:title|twitter:title)" content=")[^"]*/g,(_,prefix)=>prefix+escape(SITE.title))
   .replace(/(<meta (?:property|name)="(?:description|og:description|twitter:description)" content=")[^"]*/g,(_,prefix)=>prefix+escape(SITE.description))
   .replace('</head>','<meta name="keywords" content="noillirk, noillirk game, noillirk daily, noillirk unlimited, sky climb, tabletop game"></head>');
  html=html.replace(/<footer\b/,()=>content['noillirk-guide']+'<footer');
 }
 const canonical='https://opennoillirk.com'+path;
 // Server metadata also describes links opened without executing JavaScript.
 if(path.startsWith('/c/')||/^\/archive\/\d+$/.test(path)){
  const archive=path.match(/^\/archive\/(\d+)$/),title=archive?`OpenNoillirk #${archive[1]} — Daily Archive`:'OpenNoillirk — Take the challenge';
  html=html.replace(/<title>[\s\S]*?<\/title>/,`<title>${title}</title>`)
   .replace(/(<meta (?:property|name)="(?:og:title|twitter:title)" content=")[^"]*/g,`$1${title}`)
   .replace(/(<meta (?:property|name)="(?:og:url|twitter:url)" content=")[^"]*/g,`$1${canonical}`)
   .replace(/(<link rel="canonical" href=")[^"]*/g,`$1${canonical}`);
  if(path.startsWith('/c/'))html=html.replace(/(<meta name="robots" content=")[^"]*/, '$1noindex,follow');
 }

 const integration='<script type="module" src="/migrate.mjs"></script><script src="/integrations.js"></script><script src="/compat.mjs" type="module"></script>';
 return html.replace('</head>','<link rel="manifest" href="/manifest.webmanifest"><link rel="apple-touch-icon" href="/pwa/icon-192.png"><link rel="stylesheet" href="/compat.css">'+(env.GSC_VERIFY?`<meta name="google-site-verification" content="${env.GSC_VERIFY}">`:'')+(env.BING_VERIFY?`<meta name="msvalidate.01" content="${env.BING_VERIFY}">`:'')+integration+'</head>');
}
