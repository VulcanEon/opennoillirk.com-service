import bank from '../public/game/bank.json' with {type:'json'};
import index from '../public/game/packs/index.v2.json' with {type:'json'};
import schedule from '../public/game/schedule.json' with {type:'json'};
import classic from '../public/game/classic.json' with {type:'json'};
import * as R from './rules.mjs';
export {bank,index,schedule,classic};
export const prompts=new Map(bank.prompts.map(p=>[p.id,p]));
export const firstDate='2026-10-15';
export function validDate(date){return typeof date==='string'&&/^\d{4}-\d{2}-\d{2}$/.test(date)&&Number.isFinite(Date.parse(date+'T00:00:00Z'))&&new Date(date+'T00:00:00Z').toISOString().slice(0,10)===date&&date>=firstDate;}
export function daily(date){
 if(!validDate(date))throw Error('Invalid daily date');
 const ids=schedule.days[date];
 let selected;
 if(ids)selected=ids.map(id=>prompts.get(id));
 else{let seed=2166136261;for(const c of date)seed=Math.imul(seed^c.charCodeAt(0),16777619)>>>0;selected=Array.from({length:10},(_,i)=>prompts.get(R.seededPrompt(index.prompts,seed,i).id));}
 if(selected.some(p=>!p))throw Error('Daily question unavailable');
 return{version:2,date,prompts:selected};
}
export function runQuestions(run){
 if(run?.mode==='classic')return classic.prompts;
 if(run?.mode==='daily')return daily(run.date).prompts;
 if(run?.mode!=='unlimited'||![10,20].includes(run.length)||!Number.isSafeInteger(run.seed)||run.seed<0||run.seed>0xffffffff||run.bank!==bank.bank)throw Error('Invalid Unlimited run');
 return Array.from({length:run.length},(_,i)=>prompts.get(R.seededPrompt(index.prompts,run.seed,i).id));
}
