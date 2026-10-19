import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs/promises';
import {bank,runQuestions} from '../src/game-data.mjs';
import * as R from '../src/rules.mjs';
const base=process.env.TEST_URL||'http://localhost:3052',uid=n=>crypto.randomBytes(n).toString('hex').slice(0,n),rootId=uid(8),friendId=uid(8),owner=uid(16),guest=uid(16),checks=[];
const run={mode:'unlimited',seed:385811,bank:bank.bank,length:10};run.rounds=runQuestions(run).map(p=>({p:p.id,a:R.roster(p).findIndex(x=>x[1]===4),b:4}));
async function request(path,{method='GET',data,device}={}){const r=await fetch(base+path,{method,headers:{...(data?{'content-type':'application/json'}:{}),...(device?{'x-outrivia-device':device}:{})},...(data?{body:JSON.stringify(data)}:{})});const text=await r.text();return{status:r.status,data:text?JSON.parse(text):null};}
const payload={id:rootId,device:owner,name:'QA API owner',run,stage:'table'};
try{
 const saved=await request('/api/runs',{method:'POST',data:payload});assert.equal(saved.status,200);assert.equal(saved.data.board.rank,1);assert.equal(saved.data.board.top[0].you,true);assert.equal(saved.data.board.top[0].people,100);assert.equal(saved.data.points,2500);assert.ok(R.titleFor([{band:4}]).id);checks.push('Full create-reply contract includes validated scores and ranked board');
 const again=await request('/api/runs',{method:'POST',data:payload});assert.equal(again.status,200);assert.equal(again.data.board.count,1);assert.equal((await request('/api/runs',{method:'POST',data:{...payload,device:guest}})).status,409);checks.push('Same owner retry is idempotent; another device cannot overwrite the id');
 assert.equal((await request('/api/runs/'+rootId,{method:'PATCH',data:{device:guest,name:'forged'}})).status,403);assert.equal((await request('/api/runs/'+rootId,{method:'PATCH',data:{device:owner,name:'QA Renamed'}})).status,204);
 const challenge=await request('/api/challenge/'+rootId);assert.equal(challenge.data.inviter.name,'QA Renamed');assert.equal(challenge.data.inviter.aids.length,10);assert.equal(challenge.data.seed,run.seed);checks.push('Rename ownership and challenge seed/answer retrieval');
 const friend=await request('/api/runs',{method:'POST',data:{id:friendId,device:guest,name:'QA Challenger',run,via:rootId,stage:'climb'}});assert.equal(friend.status,200);assert.equal(friend.data.root,rootId);assert.equal(friend.data.board.count,2);const board=await request('/api/runs/'+friendId+'/board',{device:guest});assert.equal(board.data.top.length,2);assert.equal(board.data.top.filter(x=>x.you).length,1);assert.equal(board.data.rank,2);checks.push('Friend run joins the same board and gets the correct personal rank');
 assert.equal((await request('/api/runs',{method:'POST',data:{...payload,id:uid(8),run:{...run,seed:run.seed+1}}})).status,400);assert.equal((await request('/api/runs',{method:'POST',data:{...payload,id:uid(8),run:{...run,rounds:run.rounds.slice(0,9)}}})).status,400);checks.push('Forged seed and incomplete run rejected by the live server');
 const feedback={device:owner,kind:'prompt',rating:'up',mode:'unlimited',seed:run.seed,stage:'table',slot:0,promptId:run.rounds[0].p,answer:'test'};assert.equal((await request('/api/feedback',{method:'POST',data:feedback})).status,204);assert.equal((await request('/api/feedback',{method:'POST',data:{...feedback,rating:'down',note:'QA audit'}})).status,204);checks.push('Question feedback accepts a change of rating');
 console.log(JSON.stringify({checks,ids:[rootId,friendId]},null,2));
}finally{await fs.mkdir('output/phase2-api',{recursive:true});await fs.writeFile('output/phase2-api/report.json',JSON.stringify({base,checks,ids:[rootId,friendId]},null,2));}
