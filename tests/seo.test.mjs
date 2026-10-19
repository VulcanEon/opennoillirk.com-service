import test from 'node:test';
import assert from 'node:assert/strict';
import {parseHTML} from 'linkedom';
import {referencePage} from '../src/reference-page.mjs';
export function seoMetrics(html){const {document}=parseHTML(html);for(const e of document.querySelectorAll('script,style'))e.remove();const text=document.body.textContent,words=text.match(/[A-Za-z]+(?:['’-][A-Za-z]+)*/g)||[],keyword=words.filter(w=>w.toLowerCase()==='noillirk').length;return{words:words.length,keyword,density:keyword/words.length*100};}
test('homepage has readable crawlable long-form Noillirk content and consistent keyword metadata',()=>{
 const html=referencePage('/'),{document:d}=parseHTML(html),stats=seoMetrics(html);
 assert.ok(stats.words>1500,JSON.stringify(stats));assert.ok(stats.density>3,JSON.stringify(stats));
 assert.match(d.querySelector('h1').textContent,/\bnoillirk\b/i);assert.match(d.querySelector('title').textContent,/^Noillirk Game/);
 for(const name of ['description','keywords'])assert.match(d.querySelector(`meta[name="${name}"]`).content,/\bnoillirk\b/i);
 const guide=d.querySelector('[data-noillirk-guide]');assert.ok(guide.querySelector('details > summary'));assert.equal(guide.querySelector('details').hasAttribute('open'),false);assert.equal(guide.hasAttribute('hidden'),false);assert.equal(guide.hasAttribute('aria-hidden'),false);assert.equal(d.querySelectorAll('[data-noillirk-guide]').length,1);
 assert.ok(!referencePage('/unlimited').includes('data-noillirk-guide'));
});
