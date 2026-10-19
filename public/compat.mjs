import guide from '/noillirk-guide.mjs';
import {t as audio} from '/assets/v2/audio-BdxWxAxT.js';
const audioEvents=[];const originalPlay=audio.play.bind(audio);audio.play=(name,...args)=>{audioEvents.push(name);if(audioEvents.length>80)audioEvents.shift();return originalPlay(name,...args);};
const source='https://github.com/VulcanEon/opennoillirk.com-service';
function patch(){
 const existing=document.querySelector('[data-noillirk-guide]');
 if(location.pathname==='/'&&document.querySelector('.rarely-home > footer')&&!existing)document.querySelector('.rarely-home > footer').insertAdjacentHTML('beforebegin',guide);
 if(location.pathname!=='/'&&existing)existing.remove();
 for(const footer of document.querySelectorAll('footer')){
  if(!footer.querySelector('.home-footer-source')){const p=document.createElement('p');p.className='home-footer-source';const a=document.createElement('a');a.href=source;a.textContent='GitHub · Deployable source code ↗';a.target='_blank';a.rel='noopener';p.append(a);footer.append(p);}
  const disclaimer=footer.querySelector('.home-footer-bottom p');if(disclaimer&&!disclaimer.dataset.open){disclaimer.textContent='OpenNoillirk is an independently hosted adaptation using authorized game assets.';disclaimer.dataset.open='true';}
 }
 for(const a of document.querySelectorAll('a[href^="mailto:hello@"]')){a.href=source+'/issues';if(a.textContent.includes('@'))a.textContent='Contact on GitHub';}
 for(const el of document.querySelectorAll('input,textarea'))el.setAttribute('data-clarity-mask','true');
}
new MutationObserver(patch).observe(document.documentElement,{childList:true,subtree:true});patch();
window.render_game_to_text=()=>{
 const d=window.__openGame?.snapshot(),r=d?.run,p=r?.prompts?.[r.index];
 return JSON.stringify({screen:d?.screen||document.querySelector('.og-game')?.dataset.screen,stage:document.querySelector('.climb-stage')?'climb':'table',coordinateSystem:'origin top-left; x right; y down; scene coordinates projected to viewport',phase:r?.phase||'idle',round:r?r.index+1:0,prompt:p?{id:p.id,text:p.text}:null,kind:d?.setup?.kind,length:r?.length===Infinity?'endless':r?.length,remainingMs:d?.remaining,points:r?.results?.reduce((s,x)=>s+x.points,0)||0,people:r?.results?.reduce((s,x)=>s+x.people,0)||0,results:r?.results?.map(x=>({promptId:x.promptId,aid:x.aid,band:x.band,points:x.points,reason:x.reason,corrected:x.corrected})),cardShown:!!d?.reveal?.card,ready:d?.ready,shareOpen:!!document.querySelector('[role=dialog]'),sound:{muted:audio.isMuted(),music:audio.isMusicOn(),played:audioEvents.slice(-30)}});
};
window.advanceTime=async ms=>{window.__openGame?.advance?.(ms);await new Promise(r=>requestAnimationFrame(r));};
// Midnight refresh applies only to an idle Daily; an in-progress run keeps its original date.
setInterval(()=>{const d=window.__openGame?.snapshot(),now=new Date(),date=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')}`;if(['/', '/sky-climb'].includes(location.pathname)&&d?.screen==='intro'&&d.setup?.kind.kind==='daily'&&d.setup.kind.date!==date)location.reload();},1000);
