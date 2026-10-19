import fs from 'node:fs/promises';
import path from 'node:path';
import { build,transform } from 'esbuild';
import crypto from 'node:crypto';
import {parseHTML} from 'linkedom';
import referencePages from '../src/reference-pages.generated.mjs';
import sharp from 'sharp';
const root=new URL('../',import.meta.url).pathname;
const content={};
for(const f of await fs.readdir(path.join(root,'src/content')))if(f.endsWith('.html'))content[f.slice(0,-5)]=await fs.readFile(path.join(root,'src/content',f),'utf8');
await fs.writeFile(path.join(root,'public/noillirk-guide.mjs'),'// Generated from src/content/noillirk-guide.html.\nexport default '+JSON.stringify(content['noillirk-guide'])+';\n');
await fs.writeFile(path.join(root,'src/content.generated.mjs'),'// Generated from the checked-in authorized content templates.\nexport default '+JSON.stringify(content)+';\n');
await build({entryPoints:[path.join(root,'src/app.mjs')],bundle:true,format:'esm',target:'es2022',outfile:path.join(root,'public/app.mjs'),external:['/assets/*','/engine.mjs'],logLevel:'warning'});
await fs.copyFile(path.join(root,'src/styles.css'),path.join(root,'public/style.css'));
const svg=await fs.readFile(path.join(root,'src/brand/favicon.svg'),'utf8');
await fs.writeFile(path.join(root,'public/favicon.svg'),svg);
await fs.mkdir(path.join(root,'public/pwa'),{recursive:true});
for(const size of [192,512])await sharp(Buffer.from(svg)).resize(size,size).png().toFile(path.join(root,'public/pwa',`icon-${size}.png`));
await fs.writeFile(path.join(root,'public/manifest.webmanifest'),JSON.stringify({id:'/',name:'OpenNoillirk',short_name:'OpenNoillirk',start_url:'/',scope:'/',display:'standalone',background_color:'#0E1330',theme_color:'#0E1330',icons:[{src:'/pwa/icon-192.png',sizes:'192x192',type:'image/png'},{src:'/pwa/icon-512.png',sizes:'512x512',type:'image/png',purpose:'any maskable'}]}));
// Readable, adapted client sources are included in the public repository.
for(const file of await fs.readdir(path.join(root,'vendor/reference'))){
 const input=await fs.readFile(path.join(root,'vendor/reference',file),'utf8');
 const output=file.endsWith('.js')?(await transform(input,{loader:'js',format:'esm',target:'es2022',minify:true,legalComments:'inline'})).code:input;
 await fs.writeFile(path.join(root,'public/assets/v2',file),output);
}
// Legal content remains editable without requiring another upstream import.
for(const key of ['privacy','terms']){
 const {document:d}=parseHTML(content[key]);const main=d.querySelector('main');
 const moduleFile=(await fs.readdir(path.join(root,'public/assets/v2'))).find(f=>f.startsWith(key+'-')&&f.endsWith('.js'));
 await fs.writeFile(path.join(root,'public/assets/v2',moduleFile),`import{t}from"./jsx-runtime-D_h4s5mO.js";var j=t();function component(){return j.jsx("main",{className:"home-legal",dangerouslySetInnerHTML:{__html:${JSON.stringify(main.innerHTML)}}})}export{component};`);
 const {document:s}=parseHTML(referencePages[key]);s.querySelector('main')?.replaceWith(main);referencePages[key]='<!doctype html>'+s.documentElement.outerHTML;
}
await fs.writeFile(path.join(root,'src/reference-pages.generated.mjs'),'// Authorized page templates; client sources are in vendor/reference.\nexport default '+JSON.stringify(referencePages)+';\n');
const hash=crypto.createHash('sha256');
async function fingerprint(dir){for(const f of (await fs.readdir(dir,{withFileTypes:true})).sort((a,b)=>a.name.localeCompare(b.name))){const p=path.join(dir,f.name);if(f.isDirectory())await fingerprint(p);else if(f.name!=='service-worker.js'){hash.update(path.relative(root,p));hash.update(await fs.readFile(p));}}}
await fingerprint(path.join(root,'public'));const version=hash.digest('hex').slice(0,12);
await fs.writeFile(path.join(root,'src/build-version.generated.mjs'),`export const buildVersion="${version}";\n`);
const sw=path.join(root,'public/service-worker.js');await fs.writeFile(sw,(await fs.readFile(sw,'utf8')).replace(/const CACHE='[^']+'/,`const CACHE='opennoillirk-${version}'`));
const manifestPath=path.join(root,'docs/client-manifest.json');const manifest=JSON.parse(await fs.readFile(manifestPath,'utf8'));for(const item of manifest.assets)item.deployedSha256=crypto.createHash('sha256').update(await fs.readFile(path.join(root,'public',item.path))).digest('hex');await fs.writeFile(manifestPath,JSON.stringify(manifest,null,2)+'\n');
console.log('Built OpenNoillirk full game, editable legal pages, icons and version '+version);
