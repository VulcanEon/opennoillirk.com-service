// Web Audio timing/gain/ambience match the authorized Sky Climb distribution.
const files={};
const gains={start:.4,question:.35,submit:.42,rise:.45,'result-0':.3,'result-1':.35,'result-2':.45,'result-3':.55,'result-4':.7,timeout:.3,skip:.42,refused:.4,tick:.26,zone:.3,gear:.4,record:.45,end:.45,click:.25,copy:.3,'amb-forest':.2,'amb-wind':.17,'amb-stratosphere':.13,'amb-space':.1};
const paths={
  'amb-forest':'climb-amb-forest-BwewCqmh.mp3','amb-space':'climb-amb-space-BvoiZiES.mp3','amb-stratosphere':'climb-amb-stratosphere-CEU78Hp4.mp3','amb-wind':'climb-amb-wind-DECZXMUA.mp3',
  click:'climb-click-C6LNcS4t.mp3',copy:'climb-copy-DX1B1hkv.mp3',end:'climb-end-Dnf4wnZE.mp3',gear:'climb-gear-B40q8FVZ.mp3',question:'climb-question-W84qw9VD.mp3',record:'climb-record-Ii3-KPtN.mp3',refused:'climb-refused-Day8Co36.mp3',
  'result-0':'climb-result-0-BcLKXiE5.mp3','result-1':'climb-result-1-W_jtQEfD.mp3','result-2':'climb-result-2-DWjwG3bs.mp3','result-3':'climb-result-3-Cy39elRp.mp3','result-4':'climb-result-4-Cju20NV3.mp3',
  rise:'climb-rise-Dg43uyZT.mp3',skip:'climb-skip-BnMdgd4j.mp3',start:'climb-start-maqXQucP.mp3',submit:'climb-submit-DXT0iN1F.mp3',tick:'climb-tick-H0_xCBrW.mp3',timeout:'climb-timeout-BVAH5H8R.mp3',zone:'climb-zone-JVMFYdkp.mp3',
};
export class ClimbAudio {
  constructor(){
    this.muted=localStorage.getItem('opennoillirk:muted')==='true';
    this.music=localStorage.getItem('opennoillirk:music')!=='false';
    this.ctx=null;this.buffers=new Map();this.loads=new Map();this.beds=new Map();this.active=false;this.played=[];
    document.addEventListener('visibilitychange',()=>{if(document.hidden)this.ctx?.suspend().catch(()=>{});else if(this.active)this.ctx?.resume().catch(()=>{});});
  }
  async unlock(){
    if(!this.ctx){
      const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)return;
      this.ctx=new Audio();this.master=this.ctx.createGain();this.master.gain.value=this.muted?0:1;this.master.connect(this.ctx.destination);
      this.bedBus=this.ctx.createGain();this.bedBus.gain.value=0;this.bedBus.connect(this.master);
      for(const name of ['start','question','submit','rise','amb-forest'])this.load(name);
      setTimeout(()=>{for(const name of Object.keys(paths))this.load(name);},500);
    }
    await this.ctx.resume().catch(()=>{});
  }
  load(name){
    if(!this.ctx||!paths[name])return Promise.resolve(null);
    if(this.loads.has(name))return this.loads.get(name);
    const p=fetch('/assets/'+paths[name]).then(r=>{if(!r.ok)throw Error(name);return r.arrayBuffer();}).then(b=>this.ctx.decodeAudioData(b)).then(buffer=>{
      this.buffers.set(name,buffer);if(name.startsWith('amb-'))this.startBed(name,buffer);return buffer;
    }).catch(()=>null);
    this.loads.set(name,p);return p;
  }
  startBed(name,buffer){
    if(this.beds.has(name))return;
    const source=this.ctx.createBufferSource(),gain=this.ctx.createGain();
    source.buffer=buffer;source.loop=true;source.loopStart=.05;source.loopEnd=Math.min(10.05,buffer.duration);
    gain.gain.value=0;source.connect(gain);gain.connect(this.bedBus);source.start(0,.05);this.beds.set(name,{source,gain});this.mix(this.altitude||0);
  }
  play(name,{gain=1,endIn,rate=1}={}){
    if(!this.ctx||this.muted||document.hidden)return null;
    const asked=performance.now();let node=null,cancelled=false;
    const fade=seconds=>{if(node){const t=this.ctx.currentTime;node.gain.gain.setTargetAtTime(0,t,seconds/5);try{node.source.stop(t+seconds);}catch{}}else cancelled=true;};
    const play=buffer=>{
      if(!buffer||cancelled||this.muted||document.hidden||performance.now()-asked>500)return;
      const source=this.ctx.createBufferSource(),bus=this.ctx.createGain();source.buffer=buffer;
      source.playbackRate.value=rate*(['rise','tick'].includes(name)||name.startsWith('amb-')?1:1+(Math.random()-.5)*.06);
      bus.gain.value=(gains[name]||.4)*gain;source.connect(bus);bus.connect(this.master);
      const offset=endIn===undefined?0:Math.max(0,buffer.duration-endIn),delay=endIn===undefined?0:Math.max(0,endIn-buffer.duration);
      source.start(this.ctx.currentTime+delay,offset);node={source,gain:bus};
      source.onended=()=>{source.disconnect();bus.disconnect();};
      this.played.push({name,at:performance.now()});this.played=this.played.slice(-40);
    };
    if(this.buffers.has(name))play(this.buffers.get(name));else this.load(name).then(play);
    return {fade};
  }
  setActive(active){this.active=active;if(this.ctx){this.bedBus.gain.setTargetAtTime(active&&this.music?1:0,this.ctx.currentTime,.3);}}
  mix(altitude){
    this.altitude=altitude;if(!this.ctx)return;
    const t=Math.log10(Math.max(altitude,1));const cross=[1000,16000,100000].map(h=>{const n=Math.min(1,Math.max(0,(t-(Math.log10(h)-.2))/.4));return{fall:Math.cos(n*Math.PI/2),rise:Math.sin(n*Math.PI/2)};});
    const mix={'amb-forest':cross[0].fall,'amb-wind':cross[0].rise*cross[1].fall,'amb-stratosphere':cross[1].rise*cross[2].fall,'amb-space':cross[2].rise};
    for(const [name,bed]of this.beds)bed.gain.gain.setTargetAtTime(gains[name]*mix[name],this.ctx.currentTime,.6);
  }
  toggleSound(){this.muted=!this.muted;localStorage.setItem('opennoillirk:muted',String(this.muted));if(this.ctx)this.master.gain.value=this.muted?0:1;if(!this.muted)this.unlock();return!this.muted;}
  toggleMusic(){this.music=!this.music;localStorage.setItem('opennoillirk:music',String(this.music));this.setActive(this.active);return this.music;}
  debug(){return{state:this.ctx?.state||'locked',muted:this.muted,music:this.music,buffers:this.buffers.size,beds:this.beds.size,played:this.played};}
}
