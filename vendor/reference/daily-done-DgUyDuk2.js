var e = `data-daily-done`,
  t = `try{var d=new Date(),p=function(n){return String(n).padStart(2,"0")},s=JSON.parse(localStorage.getItem("opennoillirk:daily:"+d.getFullYear()+"-"+p(d.getMonth()+1)+"-"+p(d.getDate()))||"null");if(s&&s.v===2&&s.done)document.documentElement.setAttribute("${e}","")}catch(e){}`;
export { t as n, e as t };
