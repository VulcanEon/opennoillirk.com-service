import fs from 'node:fs/promises';
import path from 'node:path';
import { parseHTML } from 'linkedom';

const root = new URL('../', import.meta.url).pathname;
const files = await fs.readdir(path.join(root, 'public/assets'));
const pick = prefix => {
  const candidates=files.filter(f=>f.startsWith(prefix));
  if(!candidates.length) throw new Error('Missing reference module '+prefix);
  return candidates;
};
const stage=pick('src-').find(f=>files.includes(f)&&f!=='src-eercGixD.js' );
const stageFile=(await Promise.all(pick('src-').map(async f=>[f,await fs.readFile(path.join(root,'public/assets',f),'utf8')]))).find(([f,s])=>s.includes('as createClimbStage'))?.[0];
if(!stageFile) throw new Error('Missing climb renderer');
const stageSource=await fs.readFile(path.join(root,'public/assets',stageFile),'utf8');
const rulesFile=stageSource.match(/from"\.\/(rules-[^"]+)"/)?.[1];
const mapFile=stageSource.match(/from"\.\/(map-[^"]+)"/)?.[1];
const formatFile=stageSource.match(/import"\.\/(format-[^"]+)"/)?.[1];
const css=['game-base-','outrivia-tokens-','landing-','outrivia-','climb-','climb-game-','result-popup-','climb-popup-'].map(p=>files.find(f=>f.startsWith(p)&&f.endsWith('.css')&&(p!=='outrivia-'||!/tokens/.test(f))&&(p!=='climb-'||!/(game|popup)/.test(f)))).filter(Boolean);
const modules={stage:`/assets/${stageFile}`,rules:`/assets/${rulesFile}`,map:`/assets/${mapFile}`,format:`/assets/${formatFile}`,css:css.map(f=>`/assets/${f}`)};
await fs.writeFile(path.join(root,'src/reference-config.json'),JSON.stringify(modules,null,2));
await fs.mkdir(path.join(root,'src/content'),{recursive:true});
const brand = text => text.replace(/\bnoillirk\.com/g,'opennoillirk.com').replace(/\bNoillirk\b/g,'OpenNoillirk');
for(const name of ['index','how-to-play','scoring','sky-climb','unlimited','privacy','terms']){
  const html=await fs.readFile(path.join(root,'private/reference',`${name}.html`),'utf8');
  const {document}=parseHTML(html);
  for(const s of document.querySelectorAll('script, link[rel="modulepreload"]'))s.remove();
  let body=name==='index'?document.querySelector('.home-reading')?.outerHTML:document.querySelector('main')?.outerHTML;
  if(body) await fs.writeFile(path.join(root,'src/content',`${name}.html`),brand(body));
  if(name==='index'){
    const footer=document.querySelector('footer');
    const p=footer.querySelector('.home-footer-disclaimer');
    if(p)p.textContent='OpenNoillirk is an independently hosted adaptation using authorized game assets.';
    const source=document.createElement('p');source.className='home-footer-source';source.innerHTML='<a href="https://github.com/VulcanEon/opennoillirk.com-service" target="_blank" rel="noopener">GitHub · Deployable source code ↗</a>';
    footer.append(source);
    await fs.writeFile(path.join(root,'src/content/footer.html'),brand(footer.outerHTML));
  }
}
// Publish only the renderer graph; unrelated upstream app/admin bundles are not part of this app.
const retained=new Set();
async function visit(file){
  if(retained.has(file))return;retained.add(file);
  const body=await fs.readFile(path.join(root,'public/assets',file),'utf8');
  const refs=new Set([...body.matchAll(/["'`]\.\/([\w.-]+\.js)["'`]/g)].map(m=>m[1]));
  for(const m of body.matchAll(/["'`](?:\/)?assets\/([\w.-]+\.js)["'`]/g))refs.add(m[1]);
  for(const dep of refs){if(files.includes(dep))await visit(dep);}
}
await visit(stageFile);
for(const file of files.filter(f=>f.endsWith('.js')&&!retained.has(f)))await fs.unlink(path.join(root,'public/assets',file));
await fs.writeFile(path.join(root,'public/engine.mjs'),`// Authorized reference renderer, pinned to the imported distribution.\nexport {createClimbStage} from '${modules.stage}';\n`);
console.log('Pinned renderer:',stageFile,'with',retained.size,'modules');
