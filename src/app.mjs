import {createClimbStage} from '/engine.mjs';
import * as R from './rules.mjs';
import {brand,icon,esc} from './icons.mjs';
import {ClimbAudio} from '../public/audio.mjs';
import QRCode from 'qrcode';

const $=(s,root=document)=>root.querySelector(s);
const config=window.OPENNOILLIRK||{};
const game=$('#game');
const audio=new ClimbAudio();
const save=(k,v)=>{try{localStorage.setItem('opennoillirk:'+k,JSON.stringify(v));}catch{}};
const read=(k,f=null)=>{try{return JSON.parse(localStorage.getItem('opennoillirk:'+k))??f;}catch{return f;}};
const fmt=R.formatNumber;
const height=n=>{const m=R.altitude(n);return m<1000?`${Math.round(m)}m`:m<100000?`${(m/1000).toFixed(1)} km`:`${fmt(m/1000)} km`;};
const uid=(n=8)=>{let s='';const a='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';for(const v of crypto.getRandomValues(new Uint8Array(n)))s+=a[v%a.length];return s;};
let device=read('device');if(!device){device=uid(16);save('device',device);}
let name=read('nickname')||R.nickname();save('nickname',name);
let stage=null,state=null,setup=null,screen='intro',view=null,refused=null,cardShown=false,startedAt=0,clockOffset=0,lastSecond=null,challenge=null,runRecord=null,sharePromise=null,shareCards=[],activeCard=0,modalReturn=null,zoneSeen=0,zoneSoundAt=0,recorded=false;
const storageKey='classic:v1';
let best=read('best',0);
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
const announced=$('#game-announcement');
const announce=t=>{announced.textContent=t;};
const event=(name,props={})=>{if(config.analyticsEnabled){window.plausible?.(name,{props});window.gtag?.('event',name,props);}};
const toast=t=>{let el=$('#toast');el.textContent=t;el.hidden=false;clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.hidden=true,3000);};
function setScreen(value){screen=value;game.dataset.screen=value;document.body.classList.toggle('in-game',value==='run');$('.home-reading')?.toggleAttribute('hidden',value==='run');$('footer')?.toggleAttribute('hidden',value==='run');if(value==='run')window.scrollTo({top:0,behavior:'instant'});}
function stageSwitch(){return `<div class="og-stage-toggle" role="group" aria-label="Game style"><button type="button" aria-pressed="true" data-action="climb">Sky climb</button><button type="button" aria-pressed="false" data-action="table">Tabletop</button></div>`;}
function intro(){
  setScreen('intro');cardShown=false;game.removeAttribute('data-card');$('#hud').innerHTML='';$('#lower').innerHTML='';$('#ruler').innerHTML='';$('#banner').innerHTML='';stage?.setMode('home',[]);stage?.setScores({you:0});audio.setActive(false);
  const saved=read(storageKey),resumable=saved&&!saved.done&&saved.results.length;
  const isChallenge=!!challenge;
  $('#screen').innerHTML=`<p class="climb-title" aria-hidden="true">OpenNoillirk</p><div class="og-intro-top"><header class="home-header home-game-header">${brand()}<nav aria-label="Main navigation"></nav></header></div><div class="og-hero">${isChallenge?`<p class="og-kicker">A challenge from ${esc(challenge.name)}</p><h1><span class="og-h1-brand">Can you climb higher?</span><span class="og-h1-tag">${esc(challenge.name)} reached ${height(challenge.points)}.</span></h1><p class="og-line">Same 10 questions. See what ${esc(challenge.name)} said after each answer.</p>`:`<p class="og-kicker">Classic · 10 questions · Free</p><h1><span class="og-h1-brand">OpenNoillirk</span><span class="visually-hidden">: </span><span class="og-h1-tag">The Noillirk game — guess the answer most people give</span></h1><p class="og-line"><b>Think like everyone.</b> Name what most people would say and pull the crowd your way.</p>`}<div class="og-actions"><button id="start-btn" class="og-play" data-action="start">${isChallenge?`Take ${esc(challenge.name)}'s challenge`:resumable?`Resume at question ${saved.results.length+1}`:"Play today's 10"}</button><a class="og-link" href="/unlimited">Unlimited · free</a></div>${stageSwitch()}<p class="og-small">New questions at midnight · <span data-countdown></span></p><nav class="og-guide" aria-label="About the game"><a href="/how-to-play">How to play</a><a href="/scoring">Scoring</a></nav>${resumable?'<button class="start-over-link" data-action="restart">Start a fresh climb</button>':''}</div>`;
  updateCountdown();
}
function hud(){
  $('#hud').innerHTML=`<div class="climb-score"><div class="climb-altitude" id="height">${height(R.totalPoints(state))}</div><div class="climb-points" id="points">${fmt(R.totalPoints(state))} pts</div>${best?`<div class="climb-best">Best ${height(best)}</div>`:''}</div><div class="climb-progress"><ol class="climb-squares" aria-label="Question progress">${setup.prompts.map((p,i)=>{const r=state.results[i];return`<li class="climb-square" ${i===state.index?'aria-current="step"':''} aria-label="Question ${i+1}${r?': '+(r.band===null?r.reason:R.bands[r.band].name):''}" style="${r?'background:'+(r.band===null?'#9aa3b1':R.bands[r.band].color):''}"></li>`;}).join('')}</ol><div class="climb-round">Q ${Math.min(state.index+1,10)} / 10${R.weights[state.index]>1?' · ×'+R.weights[state.index]:''}</div></div><div class="climb-switches"><button class="climb-switch" data-action="sound" aria-label="Sound" aria-pressed="${!audio.muted}">${icon('sound')}</button><button class="climb-switch" data-action="music" aria-label="Music" aria-pressed="${audio.music}">${icon('music')}</button><button class="climb-switch" data-action="leave" aria-label="Leave and resume later">${icon('exit')}</button></div>`;
}
function answerForm(){return `<div class="climb-answer-bar"><div class="climb-refused" role="status" ${refused?'':'hidden'}>Not on our list — try another.</div><form class="og-dock" aria-label="Your answer"><div class="climb-clock"><svg class="climb-clock-ring" viewBox="0 0 48 48" aria-hidden="true"><circle class="climb-clock-track" cx="24" cy="24" r="20" fill="none"/><circle class="climb-clock-arc" cx="24" cy="24" r="20" fill="none" stroke-dasharray="125.664" stroke-dashoffset="0" transform="rotate(-90 24 24)"/></svg><span class="climb-clock-seconds">30</span></div><label class="og-field"><span class="visually-hidden">Your answer</span><input name="answer" data-clarity-mask="true" type="text" aria-label="Your answer" aria-describedby="prompt-text" placeholder="What would most people say?" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" enterkeyhint="go" maxlength="60"></label><button class="og-pass" type="button" data-action="pass">Pass</button><button class="og-go" type="submit" aria-label="Submit answer">→</button></form></div>`;}
async function start(fresh=false){
  if(!setup)return;await audio.unlock();sharePromise=null;runRecord=null;shareCards=[];cardShown=false;refused=null;recorded=false;zoneSeen=0;
  const saved=!fresh&&!challenge?read(storageKey):null;
  state=R.startRun(R.createRun({prompts:setup.prompts,length:10}),now());
  if(saved&&!saved.done&&saved.results.length<10){state={...state,index:saved.results.length,results:saved.results};}
  setScreen('run');$('#screen').innerHTML='';stage.setMode('home',[]);stage.setMode('run',challenge?[{key:'f1',name:challenge.name,team:'f1'}]:[]);
  const friendPoints=challenge?challenge.rounds.slice(0,state.index).reduce((sum,r,i)=>sum+(r.b===null?0:R.bands[r.b].points*R.weights[i]),0):0;
  stage.setScores({you:R.totalPoints(state),...(challenge?{f1:friendPoints}:{})});audio.setActive(true);audio.play('start');renderQuestion();event('run_start',{mode:'classic',resumed:state.index>0,challenge:!!challenge});
}
function renderQuestion(){
  cardShown=false;refused=null;lastSecond=null;startedAt=now();hud();game.removeAttribute('data-card');
  const p=state.prompts[state.index];$('#lower').innerHTML=`<section class="climb-card"><p class="climb-card-category">${esc(p.category)}</p><h2 class="climb-card-text" id="prompt-text">${esc(p.text)}</h2><p class="climb-card-hint">The more people say it, the higher you go.</p></section>${answerForm()}`;
  $('form',game).addEventListener('submit',e=>{e.preventDefault();submit();});
  $('input',game).focus({preventScroll:true});audio.play('question');announce(`Question ${state.index+1} of 10. ${p.text}`);
}
function now(){return performance.now()+clockOffset;}
function submit(){
  if(screen!=='run'||state.phase!=='playing')return;
  const input=$('input',game),typed=input.value;
  const next=R.submitAnswer({...state,typed},typed,now());
  if(next.phase==='playing'){
    state=next;refused=typed;$('.climb-refused').hidden=false;audio.play('refused');stage.refused();input.select();event('answer_refused',{round:state.index+1});announce('Not on our list — try another.');return;
  }
  state=next;reveal();
}
function pass(reason){
  if(screen!=='run'||state.phase!=='playing')return;
  state=reason==='timeout'?R.tickRun({...state,typed:$('input',game)?.value||''},now()+30001):R.passAnswer({...state,typed:$('input',game)?.value||''},now());reveal();
}
function persist(){if(!challenge)save(storageKey,{results:state.results,done:state.phase==='done',index:state.index});}
function reveal(){
  const r=state.results.at(-1);persist();cardShown=false;game.dataset.card='pending';$('.climb-answer-bar')?.classList.add('is-dim');for(const b of game.querySelectorAll('form button'))b.disabled=true;
  hud();const f=challenge?.rounds[state.index];
  stage.reveal({round:state.index,weight:r.weight,you:{band:r.band,aid:r.aid,reason:r.reason},friends:f?[{key:'f1',band:f.b,aid:f.a}]:[]});
  event('answer',{round:state.index+1,band:r.band??-1,points:r.points});
}
function showResult(){
  if(screen!=='run'||state.phase!=='reveal'||cardShown)return;
  cardShown=true;game.dataset.card='shown';const r=state.results.at(-1),p=state.prompts[state.index],ranked=R.board(p);
  const band=r.band===null?{name:r.reason==='timeout'?'Out of time':'Passed',color:'#9aa3b1'}:R.bands[r.band];
  const f=challenge?.rounds[state.index],fr=f&&f.a!==null?R.roster(p)[f.a]:null;
  const form=$('.climb-answer-bar');
  $('.climb-card')?.remove();
  const result=document.createElement('section');result.className='climb-result';result.setAttribute('aria-label','Result');
  result.innerHTML=`<h2 class="climb-result-band" style="color:${band.color}">${r.band===4?icon('crown'):''}${esc(band.name)}</h2><ol class="climb-bandbar" aria-hidden="true">${R.bands.map(b=>`<li class="${r.band===b.id?'is-on':''}" style="background:${b.color}"></li>`).join('')}</ol><p class="climb-result-points">+${fmt(r.points)}</p><p class="climb-result-answer">${esc(r.canonical||r.typed||'—')}</p><p class="climb-result-altitude">Now at ${height(R.totalPoints(state))}</p>${r.corrected?`<p class="climb-corrected">We read “${esc(r.typed)}” as ${esc(r.canonical)}.</p>`:''}<ol class="climb-result-top">${ranked.map(x=>`<li class="${x.aid===r.aid?'is-you':''}">${x.aid===r.aid?icon('crown'):''}${esc(x.canonical)}</li>`).join('')}</ol>${challenge?`<ul class="climb-result-friends"><li><span class="climb-friend-dot" style="background:var(--team-f1)"></span><span class="climb-friend-name">${esc(challenge.name)}</span><span class="climb-friend-answer">${esc(fr?.[0]||'Passed')}</span></li></ul>`:''}<div class="climb-result-actions">${r.band===null&&refused?'<button class="climb-report" data-action="report">Should this count? Tell us</button>':''}<button class="climb-next" data-action="next">${state.index===9?'See results':'Next'}</button></div>`;
  $('#lower').insertBefore(result,form);if($('input',game))$('input',game).value='';
  announce(`${r.canonical||band.name} — ${band.name}, plus ${r.points} points. Now at ${height(R.totalPoints(state))}.`);
  stage.captureReady('moment').catch(()=>{});
  if(r.band!==null&&r.band>=3){const burst=document.createElement('span');burst.className='climb-burst';burst.dataset.band=r.band;burst.style.color=band.color;$('.climb-result-band').append(burst);}
}
function next(){
  if(!cardShown||state.phase!=='reveal')return;
  stage.next();state=R.nextRound(state,now());
  if(state.phase==='done'){finish();}else renderQuestion();
}
function finish(){
  setScreen('end');audio.setActive(false);audio.play('end');game.removeAttribute('data-card');$('#lower').innerHTML='';$('#hud').innerHTML='';$('#banner').innerHTML='';$('#ruler').innerHTML='';persist();
  const points=R.totalPoints(state),zone=R.zones[R.zoneIndex(points)],title=R.titleFor(state.results),tops=state.results.filter(r=>r.band===4).length,isBest=points>best;
  if(isBest){best=points;save('best',best);}
  stage.captureReady('home').catch(()=>{});
  $('#screen').innerHTML=`<section class="climb-end" aria-label="Your climb"><div class="climb-end-col"><div class="climb-end-head"><p class="climb-end-kicker">Classic · Run complete</p><h2 class="climb-end-altitude" tabindex="-1">${height(points)}</h2><p class="climb-end-zone">${zone.name}</p><p class="climb-end-points">${fmt(points)} points · ${tops} #1 ${tops===1?'answer':'answers'}</p><p class="climb-end-best" ${isBest?'data-new':''}>${isBest?'New best! ': 'Best '}${height(best)}</p><p class="climb-end-title">✦ ${title.title}</p></div>${challenge?`<div class="climb-compare"><p class="climb-compare-title">${points>challenge.points?'You climbed higher!':points===challenge.points?'Level with '+esc(challenge.name):esc(challenge.name)+' climbed higher'}</p><div class="climb-compare-list"><div>You · ${height(points)}</div><div>${esc(challenge.name)} · ${height(challenge.points)}</div></div></div>`:''}<div class="climb-end-actions"><button class="og-play climb-end-share" data-action="share">Share &amp; challenge</button>${stageSwitch()}<p class="climb-end-about"><a href="/sky-climb">How Sky Climb works, and all 18 zones</a></p></div><div class="og-stub"><div class="og-stub-info"><p class="og-stub-kicker">Another climb?</p><p class="og-stub-big">Think like the crowd.</p><p class="og-stub-note">Ten questions. One sky.</p></div><button class="og-stub-go" data-action="restart"><span class="t">Play again</span><span class="s">Free · 10 questions</span><span class="i">→</span></button></div>${recap()}</div></section>`;
  $('.climb-end-altitude').focus({preventScroll:true});announce(`Run complete. ${height(points)}, ${zone.name}. ${fmt(points)} points.`);event('run_complete',{mode:'classic',points,people:R.totalPeople(state),title:title.title});
  ensureShare();setTimeout(()=>{if(screen==='end'&&!$('#share-dialog'))openShare();},1000);
}
function recap(){return `<section class="climb-recap" aria-labelledby="recap-title"><h3 class="climb-recap-title" id="recap-title">Question by question</h3>${state.results.map((r,i)=>{
  const p=setup.prompts[i],b=r.band===null?{name:r.reason==='timeout'?'Out of time':'Passed',color:'#9aa3b1'}:R.bands[r.band],board=R.board(p,true);
  return `<details class="climb-recap-q"><summary><span class="climb-recap-row"><span class="climb-recap-num">Q${i+1}${r.weight>1?' ×'+r.weight:''}</span><span class="climb-recap-square" role="img" aria-label="${b.name}" style="background:${b.color}"></span><span class="climb-recap-text">${esc(p.text)}</span><span class="climb-recap-mine ${r.band===null?'is-miss':''}">${esc(r.canonical||b.name)}</span><span class="climb-recap-points">+${fmt(r.points)}</span></span></summary><div class="climb-recap-body"><p class="climb-recap-board">Our board (est.)</p>${[4,3,2,1].map(b=>`<div class="climb-recap-group"><p class="climb-recap-band" style="color:${R.bands[b].color}">${R.bands[b].name}</p><ul>${board.filter(x=>x.band===b).map(x=>`<li ${x.aid===r.aid?'class="is-you" aria-current="true"':''}>${esc(x.canonical)}${x.aid===r.aid?'<span class="climb-recap-you">You</span>':''}</li>`).join('')}</ul></div>`).join('')}${r.band===0?`<p class="climb-recap-off">Your answer: ${esc(r.canonical)} · Off the Board</p>`:''}</div></details>`;
}).join('')}</section>`;}
function ruler(v){
  if(screen!=='run')return;const h=game.clientHeight,stepPoints=R.screenPoints(v.y+0.03)-R.screenPoints(v.y-0.03),stepAlt=Math.abs(R.altitude(stepPoints+v.points)-v.altitude)||1;
  const target=stepAlt,unit=10**Math.floor(Math.log10(Math.max(target,1))),step=[1,2,2.5,5,10].map(n=>n*unit).find(n=>n>=target)||unit*10;
  const marks=[];const low=Math.max(0,R.screenPoints(v.y-.54)),high=R.screenPoints(v.y+.48);
  const lo=R.altitude(low),hi=R.altitude(high);
  const pointForAltitude=a=>{let l=0,r=10000;for(let i=0;i<35;i++){const m=(l+r)/2;if(R.altitude(m)<a)l=m;else r=m;}return(l+r)/2;};
  for(let a=Math.ceil(lo/step)*step;a<=hi&&marks.length<40;a+=step){const y=.46+v.y-R.screens(pointForAltitude(a));if(Math.abs(y-.46)>.014)marks.push(`<div class="climb-tick" style="top:${y*100}%"><span class="climb-tick-label">${a<1000?fmt(a)+'m':(a/1000).toFixed(1)+' km'}</span></div>`);}
  for(const z of R.zones)for(const m of z.markers){if(m.alt<lo||m.alt>hi)continue;const y=.46+v.y-R.screens(pointForAltitude(m.alt)),[n,a]=m.text.split(' · ');marks.push(`<div class="climb-tick is-landmark" style="top:${y*100}%"><span class="climb-tick-label"><span class="climb-landmark-name">${esc(n)}</span><span class="climb-landmark-alt">${esc(a||'')}</span></span></div>`);}
  marks.push(`<div class="climb-pointer" style="top:46%"><span class="climb-pointer-label">${height(v.points)}</span></div>`);
  for(const f of v.friends){const y=.46+v.y-f.y;if(y<0||y>1)marks.push(`<div class="climb-friend-arrow ${y<0?'is-up':'is-down'}" style="top:${y<0?85:h-20}px;--friend-colour:var(--team-f1)"><span class="climb-friend-arrow-name">${esc(f.name)}</span><span class="climb-friend-arrow-alt">${height(f.points)}</span></div>`);}
  $('#ruler').innerHTML=marks.join('');
}
function onView(v){
  view=v;if(screen!=='run')return;
  if($('#height'))$('#height').textContent=height(v.points);if($('#points'))$('#points').textContent=fmt(v.points)+' pts';
  if(!onView.rulerAt||performance.now()-onView.rulerAt>90){ruler(v);onView.rulerAt=performance.now();}
  if(v.phase==='rising'&&v.zone!==zoneSeen){zoneSeen=v.zone;const z=R.zones[v.zone];$('#banner').innerHTML=`<div class="climb-banner is-animated"><p class="climb-banner-name">${z.name}</p><p class="climb-banner-blurb">${z.blurb}</p></div>`;setTimeout(()=>{if(zoneSeen===v.zone)$('#banner').innerHTML='';},4500);if(performance.now()-zoneSoundAt>1200){audio.play('zone');zoneSoundAt=performance.now();}}
  if(best>0&&!recorded&&v.points>best){recorded=true;audio.play('record');}
  audio.mix(v.altitude);
}
let riseAudio;
function onCue(c){if(c.cue==='rise'){audio.play('submit');riseAudio=audio.play('rise',{gain:[.5,.65,.78,.9,1][c.band],endIn:c.ms/1000});}else if(c.cue==='miss')audio.play(c.reason==='timeout'?'timeout':'skip');else if(c.cue==='land'){riseAudio?.fade(.25);if(c.band!==null)audio.play('result-'+c.band);}}
function tick(){
  if(screen==='run'&&state?.phase==='playing'){
    const remaining=R.timeRemaining(state,now()),s=Math.ceil(remaining/1000);
    if(s!==lastSecond){lastSecond=s;const el=$('.climb-clock-seconds');if(el)el.textContent=s;if(s>0&&s<=5){audio.play('tick');announce(s+' seconds left');}}
    const clock=$('.climb-clock');clock?.classList.toggle('is-warn',s<=10);$('.climb-clock-arc')?.setAttribute('stroke-dashoffset',String(125.664*(1-remaining/30000)));
    if(remaining<=0)pass('timeout');
  }
  requestAnimationFrame(tick);
}
function updateCountdown(){const n=R.midnightRemaining(),seconds=Math.floor(n/1000),t=[Math.floor(seconds/3600),Math.floor(seconds/60)%60,seconds%60].map(n=>String(n).padStart(2,'0')).join(':');for(const el of document.querySelectorAll('[data-countdown]'))el.textContent=t;}
async function ensureShare(){
  if(sharePromise)return sharePromise;
  sharePromise=(async()=>{
    const rounds=state.results.map(r=>({p:r.promptId,a:r.aid,b:r.band}));
    const fallback=R.encodeChallenge({mode:'daily',date:setup.date,players:[{name,aids:state.results.map(r=>r.aid)}]});
    let link=location.origin+'/c/'+fallback;
    try{
      const response=await fetch('/api/runs',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({id:uid(),device,name,mode:'classic',date:setup.date,length:10,rounds,via:challenge?.root||null})});
      if(response.ok){runRecord=await response.json();link=location.origin+'/c/'+runRecord.id;}
    }catch{}
    const share={link,points:R.totalPoints(state),name,title:R.titleFor(state.results).title,zone:R.zones[R.zoneIndex(R.totalPoints(state))].name};
    share.text=`OpenNoillirk · ${height(share.points)}\n${share.zone}\n${state.results.map(r=>r.band===null?'⚫':R.bands[r.band].circle).join('')}\n${share.title}\n${link}`;
    return share;
  })();return sharePromise;
}
async function drawCards(share){
  await document.fonts.ready;await stage.captureReady('home');await stage.captureReady('moment');
  const moment=stage.moment();
  const variants=[{kind:'home',label:'Your climb'},...(moment?[{kind:'moment',label:'Best moment'}]:[])];
  const qr=await QRCode.toDataURL(share.link,{width:205,margin:1,errorCorrectionLevel:'M',color:{dark:'#0e1330',light:'#f5f7ff'}});
  const qrImage=new Image();qrImage.src=qr;await qrImage.decode();
  const result=[];
  for(const v of variants){
    const canvas=document.createElement('canvas');canvas.width=1080;canvas.height=1350;const c=canvas.getContext('2d');c.imageSmoothingEnabled=false;c.fillStyle='#0e1330';c.fillRect(0,0,1080,1350);
    const scene=stage.captureCanvas(v.kind);if(scene)c.drawImage(scene,0,0,1080,1350);
    c.fillStyle='rgba(14,19,48,.94)';c.fillRect(40,40,1000,285);c.fillRect(40,895,1000,415);
    const text=(s,size,x,y,color='#f5f7ff',weight=600)=>{c.fillStyle=color;c.font=`${weight} ${size}px "Pixelify Sans"`;c.fillText(s,x,y);};
    text('OPENNOILLIRK · CLASSIC CLIMB',30,64,90,'#ffc83d');
    text(height(share.points),104,64,210,'#ffc83d',700);text(share.zone,38,64,275);
    if(v.kind==='moment'&&moment){const r=state.results[moment.round];c.fillStyle='#0e1330ee';c.fillRect(64,725,952,110);text(`${R.bands[r.band].name} · +${r.points}`,38,88,770,R.bands[r.band].color);let size=32;c.font=`600 ${size}px "Pixelify Sans"`;while(c.measureText(r.canonical).width>880&&size>20){size-=2;c.font=`600 ${size}px "Pixelify Sans"`;}text(r.canonical,size,88,810);}
    text('✦ '+share.title,44,64,960,'#ffc83d');text(`${fmt(share.points)} points · ${state.results.filter(r=>r.band===4).length} #1 answers`,30,64,1010,'#cdd2ee');
    state.results.forEach((r,i)=>{c.fillStyle=r.band===null?'#9aa3b1':R.bands[r.band].color;c.fillRect(64+i*44,1040,30,30);});
    text('Can you climb higher?',38,64,1148);text('opennoillirk.com',32,64,1210,'#ffc83d');text('Scan to play the same ten.',25,64,1265,'#cdd2ee');c.drawImage(qrImage,811,1080,205,205);
    const blob=await new Promise(r=>canvas.toBlob(r,'image/png'));result.push({...v,canvas,blob,url:URL.createObjectURL(blob)});
  }
  return{cards:result,qr};
}
async function openShare(){
  if(screen!=='end')return;modalReturn=document.activeElement;const share=await ensureShare();
  if(!shareCards.length){const drawn=await drawCards(share);shareCards=drawn.cards;openShare.qr=drawn.qr;}
  activeCard=0;renderShare(share);audio.play('click');event('share_open',{mode:'classic'});
}
function renderShare(share){
  $('#share-overlay')?.remove();const overlay=document.createElement('div');overlay.id='share-overlay';overlay.className='og-pop';overlay.dataset.layout=innerWidth>=900&&innerHeight>=620?'dialog':'sheet';
  overlay.innerHTML=`<section class="og-pop-panel" id="share-dialog" role="dialog" aria-modal="true" aria-labelledby="share-title"><button class="og-pop-x" data-action="close-share" aria-label="Close">${icon('close')}</button><div class="og-pop-cards"><span class="og-hero-card"><span class="og-cimg"><img src="${shareCards[activeCard].url}" alt="${shareCards[activeCard].label} card" width="1080" height="1350"></span></span><fieldset class="og-thumbs"><legend class="visually-hidden">Choose a card</legend>${shareCards.map((v,i)=>`<button data-card-index="${i}" aria-label="${v.label}" aria-pressed="${i===activeCard}"><img src="${v.url}" width="54" height="68" alt=""></button>`).join('')}</fieldset></div><div class="og-pop-body"><p class="og-pop-kick">Classic · Run complete</p><h2 class="og-pop-title" id="share-title" tabindex="-1">You reached <span class="you">${height(share.points)}</span></h2><div class="og-pop-meta"><span class="og-pop-badge">✦ ${share.title}</span></div><div class="og-linkfield"><span class="og-linkfield-url" title="${esc(share.link)}">${esc(share.link.replace(/^https?:\/\//,''))}</span><button class="og-copy" data-action="copy-link">Copy link</button></div><p class="og-name"><span class="og-av" aria-hidden="true">${esc(name[0])}</span><span>Sending as ${esc(name)} ·</span><button class="og-name-edit" data-action="edit-name">Edit</button></p><div class="og-targets"><button class="og-target" data-action="native-share">Share</button><a class="og-target" href="https://wa.me/?text=${encodeURIComponent(share.text)}" target="_blank" rel="noopener">WhatsApp</a><a class="og-target" href="https://twitter.com/intent/tweet?text=${encodeURIComponent(share.text)}" target="_blank" rel="noopener">Post</a><a class="og-target" href="https://www.reddit.com/submit?url=${encodeURIComponent(share.link)}&title=${encodeURIComponent('OpenNoillirk · '+height(share.points))}" target="_blank" rel="noopener">Reddit</a><button class="og-target" data-action="save-card">Save</button><button class="og-target" data-action="copy-text">Copy result</button></div><div class="og-qrblock"><span class="og-qr"><img src="${openShare.qr}" alt="QR code for this challenge" width="148" height="148"></span><div><b>Friends in the room?</b><p>Scan to open this challenge on a phone, then send it from any app.</p></div></div></div></section>`;
  $('.og-ui',game).append(overlay);document.body.classList.add('modal-open');$('#share-title').focus({preventScroll:true});overlay.addEventListener('click',e=>{if(e.target===overlay)closeShare();});
}
function closeShare(){$('#share-overlay')?.remove();document.body.classList.remove('modal-open');modalReturn?.focus({preventScroll:true});}
async function copy(text){try{await navigator.clipboard.writeText(text);toast('Copied');audio.play('copy');}catch{const input=document.createElement('textarea');input.value=text;document.body.append(input);input.select();document.execCommand('copy');input.remove();toast('Copied');}}
async function changeName(){
  const share=await ensureShare();const holder=$('.og-name');holder.innerHTML=`<form class="name-form"><label>Sending as <input name="nickname" data-clarity-mask="true" aria-label="Nickname" value="${esc(name)}" maxlength="16"></label><button type="submit">Save</button><button type="button" data-action="cancel-name">Cancel</button></form>`;
  const form=$('.name-form');$('input',form).focus();$('input',form).select();form.addEventListener('submit',async e=>{e.preventDefault();name=R.normalizeName($('input',form).value);save('nickname',name);if(runRecord)await fetch('/api/runs/'+runRecord.id,{method:'PATCH',headers:{'content-type':'application/json'},body:JSON.stringify({device,name})});sharePromise=null;if(runRecord){sharePromise=Promise.resolve({...share,name});}for(const c of shareCards)URL.revokeObjectURL(c.url);shareCards=[];closeShare();openShare();});
}
async function action(a,target){
  switch(a){
    case'start':return start();
    case'restart':closeShare();save(storageKey,null);return start(true);
    case'next':audio.play('click');return next();
    case'pass':return pass('passed');
    case'sound':target.setAttribute('aria-pressed',audio.toggleSound());return;
    case'music':target.setAttribute('aria-pressed',audio.toggleMusic());return;
    case'leave':persist();stage.next();return intro();
    case'share':return openShare();
    case'close-share':return closeShare();
    case'copy-link':return copy((await ensureShare()).link);
    case'copy-text':return copy((await ensureShare()).text);
    case'save-card':{const a=document.createElement('a');a.href=shareCards[activeCard].url;a.download=`opennoillirk-${shareCards[activeCard].kind}.png`;a.click();event('share_action',{method:'save'});return;}
    case'native-share':{const share=await ensureShare(),file=new File([shareCards[activeCard].blob],'opennoillirk.png',{type:'image/png'});if(navigator.canShare?.({files:[file]})){try{await navigator.share({text:share.text,files:[file]});}catch(e){if(e.name!=='AbortError')copy(share.text);}}else if(navigator.share){try{await navigator.share({text:share.text,url:share.link});}catch(e){if(e.name!=='AbortError')copy(share.text);}}else copy(share.text);return;}
    case'edit-name':return changeName();
    case'cancel-name':return renderShare(await ensureShare());
    case'report':await fetch('/api/refused',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify({p:state.prompts[state.index].id,t:refused,r:true})});toast('Thanks — answer reported');target.disabled=true;return;
    case'table':toast('Tabletop is coming next. Sky Climb is ready to play.');return;
    case'climb':return;
  }
}
document.addEventListener('click',e=>{const t=e.target.closest('[data-action]');if(t){e.preventDefault();Promise.resolve(action(t.dataset.action,t)).catch(error=>{console.error(error);toast('Something went wrong. Please try again.');});}const c=e.target.closest('[data-card-index]');if(c){activeCard=Number(c.dataset.cardIndex);ensureShare().then(renderShare);}});
document.addEventListener('keydown',e=>{
  if($('#share-dialog')){if(e.key==='Escape'){e.preventDefault();closeShare();}if(e.key==='Tab'){const items=[...$('#share-dialog').querySelectorAll('button,a,input')].filter(x=>!x.disabled),first=items[0],last=items.at(-1);if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}return;}
  if(screen==='run'&&cardShown&&e.key==='Enter'&&!e.repeat){e.preventDefault();next();}
  if(e.key==='f'&&!e.ctrlKey&&!e.metaKey&&!e.target.matches('input,textarea')){if(document.fullscreenElement)document.exitFullscreen?.();else game.requestFullscreen?.();}
});
game.addEventListener('pointerdown',e=>{if(e.target.closest('button,input,a,label,summary'))return;if(screen==='run'&&state.phase==='reveal'&&!cardShown)stage.fastForward();else if(screen==='run'&&state.phase==='playing')$('input',game)?.focus({preventScroll:true});});
document.addEventListener('visibilitychange',()=>{if(!state)return;if(document.hidden){state=R.pauseRun(state,now());stage?.pause();}else{state=R.resumeRun(state,now());stage?.resume();}});
function resize(){const v=window.visualViewport,h=v?.height||innerHeight;game.style.setProperty('--vvh',`${h}px`);game.toggleAttribute('data-compact',h<=600);const box=game.getBoundingClientRect();stage?.resize(Math.max(1,box.width),Math.max(1,box.height),devicePixelRatio||1);}
window.visualViewport?.addEventListener('resize',resize);window.addEventListener('resize',resize);
window.render_game_to_text=()=>JSON.stringify({screen,phase:state?.phase||'idle',coordinateSystem:'origin top-left; x right, y down; camera y measured in screens; krill anchor 46% of viewport',round:state?Math.min(10,state.index+1):0,prompt:state?.prompts[state.index]?.text,remainingMs:state?.phase==='playing'?R.timeRemaining(state,now()):null,points:state?R.totalPoints(state):0,altitude:view?.altitude||0,zone:R.zones[view?.zone||0].name,krill:{x:game.clientWidth/2,y:game.clientHeight*.46},cardShown,result:state?.results.at(-1)||null,results:state?.results.map(r=>({band:r.band,points:r.points})),shareOpen:!!$('#share-dialog'),challenge:challenge?.name||null,sound:audio.debug()});
window.advanceTime=async ms=>{if(screen==='run'&&state?.phase==='playing'){clockOffset+=ms;if(R.timeRemaining(state,now())<=0)pass('timeout');}if(ms>=6000&&state?.phase==='reveal'&&!cardShown)stage?.fastForward();await new Promise(r=>requestAnimationFrame(r));};

async function init(){
  setup=await fetch('/game/classic.json').then(r=>{if(!r.ok)throw Error('Question bank unavailable');return r.json();});
  if(location.pathname.startsWith('/c/')){
    const code=decodeURIComponent(location.pathname.slice(3));
    if(/^[\w]{8}$/.test(code)){const r=await fetch('/api/challenges/'+code);if(r.ok)challenge=await r.json();}
    else{const decoded=R.decodeChallenge(code,'2099-12-31');if(!decoded.error&&decoded.players?.length){const p=decoded.players.at(-1);const rounds=p.aids.map((aid,i)=>({p:setup.prompts[i].id,a:aid,b:aid===null?null:R.roster(setup.prompts[i])[aid]?.[1]??null}));challenge={name:p.name,rounds,points:rounds.reduce((s,r,i)=>s+(r.b===null?0:R.bands[r.b].points*R.weights[i]),0)};}}
    if(!challenge)toast('This challenge could not be found. You can still play a fresh climb.');
  }
  resize();const box=game.getBoundingClientRect();stage=createClimbStage({canvas:$('.climb-scene'),krill:$('.climb-krill'),width:box.width,height:box.height,pixelRatio:devicePixelRatio||1,reducedMotion:reduced,coarse:matchMedia('(pointer:coarse)').matches,onFail:()=>toast('The scene could not load. Reload to try again.')});
  stage.onView(onView);stage.on('card',showResult);stage.on('cue',onCue);await stage.ready;$('.climb-board').dataset.ready='true';intro();requestAnimationFrame(tick);setInterval(updateCountdown,1000);
  if(!challenge&&read(storageKey)?.done){state=R.startRun(R.createRun({prompts:setup.prompts,length:10}),now());state={...state,phase:'done',index:10,results:read(storageKey).results};stage.setMode('run',[]);stage.setScores({you:R.totalPoints(state)});finish();}
  // Small interactive scoring demonstration below the playable scene.
  const picks=[...document.querySelectorAll('.hr-pick')];
  function demo(index){
    const b=R.bands[index],pts=b.points*2,people=Math.floor(pts/25),result=$('.hr-result');
    picks.forEach((x,i)=>x.setAttribute('aria-pressed',String(i===index)));
    result.style.setProperty('--c',`var(--band-${index})`);
    $('.hr-band',result).textContent=b.name.toUpperCase();$('.hr-result-answer',result).textContent=$('b',picks[index]).textContent;$('.hr-result-points',result).textContent='+'+pts;
    $('.hr-result-why',result).textContent=['Right, but few people say it.','A popular answer on this board.','One of the five most common answers.','The second most common answer.','The answer most people give.'][index];
    $('.hr-result-math',result).textContent=b.points+' points × 2 for question 4';
    $('.hr-result-follow',result).innerHTML=`<span class="hr-dots">${Array.from({length:people},(_,i)=>`<i style="animation-delay:${i*40}ms"></i>`).join('')}</span><span>${people?people+' '+(people===1?'person joins':'people join')+' you':'Nobody joins you'}</span>`;
  }
  picks.forEach((b,i)=>b.addEventListener('click',()=>demo(i)));
  document.querySelectorAll('.hr-say').forEach(b=>b.addEventListener('click',()=>demo(b.textContent==='Paris'?4:0)));
  if('serviceWorker'in navigator&&location.protocol==='https:')navigator.serviceWorker.register('/service-worker.js').catch(()=>{});
}
init().catch(error=>{console.error(error);$('#screen').innerHTML=`<div class="og-hero"><h1>OpenNoillirk</h1><p>We couldn't load the game.</p><button class="og-play" onclick="location.reload()">Try again</button></div>`;});
