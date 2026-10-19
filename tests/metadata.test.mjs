import test from 'node:test';
import assert from 'node:assert/strict';
import {parseHTML} from 'linkedom';
import {referencePage} from '../src/reference-page.mjs';
test('prerendered source attribution and AI queries point at our site; challenge links stay noindex',()=>{
 for(const route of ['/','/unlimited','/privacy','/archive/1','/c/TestRun1']){
  const {document}=parseHTML(referencePage(route));
  assert.ok(document.querySelector('footer .home-footer-source a')?.href.endsWith('/opennoillirk.com-service'));
  for(const a of document.querySelectorAll('.home-footer-ask a')){const decoded=decodeURIComponent(a.href);assert(!/(?<!open)noillirk\.com/.test(decoded));assert(decoded.includes('opennoillirk.com'));}
  if(route.startsWith('/c/'))assert.equal(document.querySelector('meta[name="robots"]').content,'noindex,follow');
 }
});
