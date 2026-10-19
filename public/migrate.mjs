// Preserve phase-one progress and preferences across the full-game upgrade.
try{
 const key='opennoillirk:daily:2026-10-19',old=JSON.parse(localStorage.getItem('opennoillirk:classic:v1')||'null');
 if(old?.results?.length&&!localStorage.getItem(key)){localStorage.setItem(key,JSON.stringify({v:2,date:'2026-10-19',results:old.results,index:old.results.length,done:!!old.done,total:old.results.reduce((n,r)=>n+r.points,0),people:old.results.reduce((n,r)=>n+r.people,0)}));if(old.done&&!localStorage.getItem('opennoillirk:streak'))localStorage.setItem('opennoillirk:streak',JSON.stringify({n:1,last:'2026-10-19'}));}
 const best=JSON.parse(localStorage.getItem('opennoillirk:best')||'null');if(typeof best==='number')localStorage.setItem('opennoillirk:best',JSON.stringify({daily:best}));
}catch{}
