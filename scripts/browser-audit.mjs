import {chromium} from 'playwright';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const base=process.env.TEST_URL||'http://localhost:3052';
const out=new URL('../output/acceptance/',import.meta.url).pathname;
await fs.mkdir(out,{recursive:true});
const browser=await chromium.launch({...(process.env.BROWSER_CHANNEL==='chromium'?{}:{channel:process.env.BROWSER_CHANNEL||'chrome'}),headless:true});
const context=await browser.newContext({viewport:{width:1440,height:864},deviceScaleFactor:1,acceptDownloads:true});
const page=await context.newPage();const errors=[],failed=[];
page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failed.push({url:r.url(),status:r.status()});});
const state=()=>page.evaluate(()=>JSON.parse(window.render_game_to_text()));
const shot=async name=>{await page.screenshot({path:out+name+'.png'});await fs.writeFile(out+name+'.json',JSON.stringify(await state(),null,2));};
try{
  await page.goto(base);await page.waitForSelector('#start-btn');await shot('01-home');
  assert.equal(await page.locator('h1').count(),1);assert.match(await page.locator('h1').innerText(),/OpenNoillirk/);
  await page.locator('#start-btn').click();await page.waitForSelector('input[name=answer]');await shot('02-question');
  await page.locator('input[name=answer]').fill('not-a-real-butterfly');await page.locator('form[aria-label="Your answer"]').press('Enter');await page.waitForSelector('.climb-refused:not([hidden])');assert.equal((await state()).points,0);
  const answers=['Monarch','Batmn','Strike','Umbrella','Abbey Road','Louis Armstrong','Lion','Bellagio','French fries','Cactus'];
  const heights=[];
  for(let i=0;i<10;i++){
    await page.locator('input[name=answer]').fill(answers[i]);await page.locator('form[aria-label="Your answer"]').press('Enter');
    if(i===0){await page.waitForTimeout(400);await shot('03-rising');}
    await page.waitForSelector('.climb-next',{timeout:12000});
    const s=await state();assert.equal(s.result.band,4);heights.push(s.altitude);if(i===1)assert.equal(s.result.corrected,true);
    if([0,5,9].includes(i))await shot('result-'+(i+1));
    await page.locator('.climb-next').click();
  }
  await page.waitForSelector('.climb-end');assert.equal((await state()).points,2500);assert.equal((await state()).altitude,14000);assert.equal(await page.locator('.climb-recap-q').count(),10);await shot('04-results');
  await page.waitForSelector('#share-dialog',{timeout:15000});await page.waitForFunction(()=>document.querySelector('.og-cimg img')?.naturalWidth===1080);await shot('05-share');
  const link='http://'+await page.locator('.og-linkfield-url').innerText();assert.match(link,/\/c\/[A-Za-z0-9]{8}$/);
  await page.getByRole('button',{name:'Best moment',exact:true}).click();assert.equal(await page.getByRole('button',{name:'Best moment',exact:true}).getAttribute('aria-pressed'),'true');
  const downloadEvent=page.waitForEvent('download');await page.getByRole('button',{name:'Save',exact:true}).click();const download=await downloadEvent;await download.saveAs(out+'share-best-moment.png');
  await page.getByRole('button',{name:'Edit',exact:true}).click();await page.getByRole('textbox',{name:'Nickname'}).fill('Brave Otter');await page.locator('.name-form').getByRole('button',{name:'Save',exact:true}).click();await page.waitForSelector('#share-dialog');await page.waitForFunction(()=>document.querySelector('.og-name')?.textContent.includes('Brave Otter'));
  const api=await page.request.get(link.replace('/c/','/api/challenges/'));assert.equal(api.status(),200);assert.equal((await api.json()).name,'Brave Otter');
  const challenger=await browser.newContext({viewport:{width:1440,height:864}});const friend=await challenger.newPage();await friend.goto(link);await friend.waitForSelector('#start-btn');assert.match(await friend.locator('.og-hero').innerText(),/Brave Otter/);await friend.locator('#start-btn').click();await friend.locator('input[name=answer]').fill('Swallowtail');await friend.locator('form').press('Enter');await friend.waitForSelector('.climb-next',{timeout:12000});assert.match(await friend.locator('.climb-result-friends').innerText(),/Brave Otter/);await friend.screenshot({path:out+'06-challenge.png'});await challenger.close();
  await page.getByRole('button',{name:'Close',exact:true}).click();await page.locator('.climb-recap-q').first().locator('summary').click();assert.equal(await page.locator('.climb-recap-q').first().getAttribute('open'),'');
  const sound=(await state()).sound;assert.equal(sound.buffers,23);assert(sound.played.some(x=>x.name==='rise'));assert(sound.played.some(x=>x.name==='result-4'));assert.equal(sound.beds,4);
  // Mobile layout, rejection, pass, timeout, audio persistence and saved progress.
  const mobile=await browser.newContext({viewport:{width:390,height:844},deviceScaleFactor:2,isMobile:true,hasTouch:true});const phone=await mobile.newPage();phone.on('pageerror',e=>errors.push('mobile: '+e.message));await phone.goto(base);await phone.waitForSelector('#start-btn');await phone.screenshot({path:out+'07-mobile-home.png'});await phone.locator('#start-btn').click();
  await phone.getByRole('button',{name:'Music',exact:true}).click();await phone.getByRole('button',{name:'Sound',exact:true}).click();
  await phone.locator('input[name=answer]').fill('Monarch');await phone.locator('form').press('Enter');await phone.waitForSelector('.climb-next',{timeout:12000});await phone.screenshot({path:out+'08-mobile-result.png'});
  await phone.reload();await phone.waitForSelector('#start-btn');assert.match(await phone.locator('#start-btn').innerText(),/Resume at question 2/);await phone.locator('#start-btn').click();assert.equal(await phone.getByRole('button',{name:'Sound',exact:true}).getAttribute('aria-pressed'),'false');
  await phone.setViewportSize({width:390,height:450});await phone.screenshot({path:out+'09-keyboard-height.png'});assert.equal(await phone.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);const inputBox=await phone.locator('input[name=answer]').boundingBox();assert(inputBox.y+inputBox.height<=450);
  await phone.getByRole('button',{name:'Pass',exact:true}).click();await phone.waitForSelector('.climb-next',{timeout:12000});assert.equal((await phone.evaluate(()=>JSON.parse(render_game_to_text()))).result.reason,'passed');await phone.locator('.climb-next').click();await phone.evaluate(()=>advanceTime(31000));await phone.waitForSelector('.climb-next',{timeout:12000});assert.equal((await phone.evaluate(()=>JSON.parse(render_game_to_text()))).result.reason,'timeout');
  await phone.setViewportSize({width:844,height:390});await phone.screenshot({path:out+'10-landscape.png'});assert.equal(await phone.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);await mobile.close();
  assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);
  const report={passed:true,base,heights,points:2500,altitude:14000,audio:sound,challenge:link,errors,failed};await fs.writeFile(out+'report.json',JSON.stringify(report,null,2));console.log(JSON.stringify({passed:true,points:2500,altitude:14000,heights,screenshots:out},null,2));
}finally{await browser.close();}
