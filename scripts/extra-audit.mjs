import {chromium} from 'playwright';
import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const browser=await chromium.launch({channel:'chrome',headless:true});
const page=await browser.newPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});
try{
await page.goto('http://localhost:3052');await page.waitForSelector('#start-btn');
await page.locator('.hr-pick').first().click();assert.match(await page.locator('.hr-result').innerText(),/Skopje/);assert.match(await page.locator('.hr-result-points').innerText(),/20/);await page.locator('.hr-say').first().click();assert.match(await page.locator('.hr-result-answer').innerText(),/Paris/);
await page.route('**/api/runs',route=>route.abort());
await page.locator('#start-btn').click();for(const a of ['Monarch','Batman','Strike','Umbrella','Abbey Road','Louis Armstrong','Lion','Bellagio','French fries','Cactus']){await page.locator('input[name=answer]').fill(a);await page.locator('form').press('Enter');await page.waitForSelector('.climb-next',{timeout:12000});await page.locator('.climb-next').click();}
await page.waitForSelector('#share-dialog');await page.waitForFunction(()=>document.querySelector('.og-cimg img')?.naturalWidth===1080);const link='http://'+await page.locator('.og-linkfield-url').innerText();assert(link.split('/c/')[1].length>8);
await page.screenshot({path:'output/acceptance/11-mobile-share.png'});const box=await page.locator('.og-pop-panel').boundingBox();assert(box.width<=390);assert(box.height<=844);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
const friend=await browser.newPage();await friend.goto(link);await friend.waitForSelector('#start-btn');assert.match(await friend.locator('.og-hero').innerText(),/challenge from/i);console.log('Homepage demo, mobile share layout and portable offline challenge passed.');
}finally{await browser.close();}
