import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as R from '../src/rules.mjs';
import {validateRun} from '../src/worker.mjs';
const bank=JSON.parse(fs.readFileSync(new URL('../public/game/classic.json',import.meta.url)));
const best=bank.prompts.map(p=>R.roster(p).findIndex(a=>a[1]===4));
test('perfect ten produces 2,500 points, 100 people, 14km and Mind Reader',()=>{
  let run=R.startRun(R.createRun({prompts:bank.prompts,length:10}),0);
  for(let i=0;i<10;i++){run=R.submitAnswer(run,R.roster(bank.prompts[i])[best[i]][0],1);assert.equal(run.phase,'reveal');run=R.nextRound(run,0);}
  assert.equal(run.phase,'done');assert.equal(R.totalPoints(run),2500);assert.equal(R.totalPeople(run),100);assert.equal(R.altitude(2500),14000);assert.equal(R.titleFor(run.results).title,'Mind Reader');
});
test('refusal keeps the round open, spelling correction accepts Batman',()=>{
  const p=bank.prompts[1];let run=R.startRun(R.createRun({prompts:[p],length:1}),0);
  run=R.submitAnswer(run,'notarealsuperhero',100);assert.equal(run.phase,'playing');assert.equal(run.results.length,0);
  run=R.submitAnswer(run,'Batmn',200);assert.equal(run.phase,'reveal');assert.equal(run.results[0].canonical,'Batman');assert.equal(run.results[0].corrected,true);
});
test('pause freezes remaining time, resume preserves it, timeout is zero',()=>{
  let run=R.startRun(R.createRun({prompts:bank.prompts,length:10}),1000);
  run=R.pauseRun(run,6000);assert.equal(R.timeRemaining(run,100000),25000);
  run=R.resumeRun(run,106000);assert.equal(R.timeRemaining(run,106000),25000);
  run=R.tickRun(run,131001);assert.equal(run.results[0].reason,'timeout');assert.equal(run.results[0].points,0);
});
test('each answer rounds people down separately',()=>{
  const all=bank.prompts.map(p=>R.roster(p).find(a=>a[1]===0)[0]);let run=R.startRun(R.createRun({prompts:bank.prompts,length:10}),0);
  all.forEach(a=>{run=R.submitAnswer(run,a,1);run=R.nextRound(run,0);});
  assert.equal(R.totalPoints(run),250);assert.equal(R.totalPeople(run),5);
});
test('portable challenge retains all ten answers and name',()=>{
  const challenge={mode:'daily',date:bank.date,players:[{name:'Test Otter',aids:best}]};const code=R.encodeChallenge(challenge);assert.deepEqual(R.decodeChallenge(code,'2026-10-19'),challenge);
});
test('server recomputes score and rejects forged bands/order',()=>{
  const payload={id:'Test0001',device:'TestDevice000001',name:'Test Otter',mode:'classic',rounds:bank.prompts.map((p,i)=>({p:p.id,a:best[i],b:4}))};
  assert.equal(validateRun(payload).points,2500);
  assert.throws(()=>validateRun({...payload,rounds:payload.rounds.map((r,i)=>i===0?{...r,b:0}:r)}),/band/);
  assert.throws(()=>validateRun({...payload,rounds:[...payload.rounds].reverse()}),/order/);
});
