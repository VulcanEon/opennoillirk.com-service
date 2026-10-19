import {chromium} from 'playwright';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
const base=process.env.TEST_URL||'https://opennoillirk.com';
const browser=await chromium.launch({channel:process.env.BROWSER_CHANNEL==='chromium'?undefined:'chrome',headless:true});
const context=await browser.newContext({timezoneId:'Asia/Shanghai'});await context.addInitScript(()=>window.OPENNOILLIRK_AUDIT=true);const page=await context.newPage(),navigations=[],documents=[],errors=[];
page.on('request',request=>{if(request.isNavigationRequest()&&request.frame()===page.mainFrame())documents.push(request.url())});page.on('framenavigated',frame=>{if(frame===page.mainFrame())navigations.push(frame.url());});page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
try{
 await page.goto(base+'/?stage=climb');await page.waitForFunction(()=>typeof window.render_game_to_text==='function'&&window.__openGame?.snapshot().ready);await page.locator('.og-play').click();await page.waitForFunction(()=>window.__openGame?.snapshot().run?.phase==='playing');await page.waitForTimeout(6500);assert.equal(documents.length,1);assert.equal(await page.evaluate(()=>window.__openGame.snapshot().screen),'run');
 const version=await (await context.request.get(base+'/api/pwa-version')).json();assert.equal(typeof version.buildId,'string');assert.equal(version.buildId,version.version);const registrations=await page.evaluate(async()=>{const rs=await navigator.serviceWorker.getRegistrations();return rs.map(r=>({scope:r.scope,active:r.active?.scriptURL,waiting:r.waiting?.scriptURL,installing:r.installing?.scriptURL}));});assert.equal(registrations.length,1);assert.ok(registrations[0].active?.endsWith('?build='+version.buildId));assert.deepEqual(errors,[]);await fs.mkdir('output/pwa',{recursive:true});await page.screenshot({path:'output/pwa/production.png'});const report={base,passed:true,navigations,documents,version,registrations,errors};await fs.writeFile('output/pwa/report.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
}finally{await browser.close();}
