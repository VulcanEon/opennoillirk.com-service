// The game rules are isolated from presentation and also used for server-side score validation.
import * as R from '../public/assets/rules-DxwvjuIt.js';
import { n as altitude, a as zoneIndex, o as zones, i as screens, r as screenPoints } from '../public/assets/map-BaINi0Kr.js';
export { altitude, zoneIndex, zones, screens, screenPoints };
export const bands=R.G;
export const weights=R.A;
export const roster=R.S;
export const nickname=R.R;
export const normalizeName=R.B;
export const titleFor=R.s;
export const encodeChallenge=R.D;
export const decodeChallenge=R.E;
export const seededPrompt=R.n;
export const randomSeed=R.t;
export const dateString=R.U;
export const midnightRemaining=R.W;
export const dailyNumber=R.w;
export const formatNumber=R.i;
export const pointsToPeople=R.M;
export const createRun=R.f;
export const startRun=R.d;
export const submitAnswer=R.v;
export const passAnswer=R.p;
export const tickRun=R.y;
export const nextRound=R.u;
export const pauseRun=R.m;
export const resumeRun=R.g;
export const timeRemaining=R.h;
export const totalPoints=R.x;
export const totalPeople=R.b;
export const endRun=R._;
export function board(prompt,all=false){
  const rows=roster(prompt);
  const ranked=all?rows.map((row,aid)=>({aid,canonical:row[0],band:row[1]})).filter(x=>x.band>0).sort((a,b)=>b.band-a.band):prompt.crowd.map(([aid,share])=>({aid,canonical:rows[aid][0],band:rows[aid][1],share}));
  return ranked;
}
export function grade(prompt,typed,index=0){
  const run=startRun(createRun({prompts:[prompt],length:1}),0);
  return submitAnswer({...run,index,prompts:Array.from({length:index+1},()=>prompt)},typed,1).results[0]??null;
}
