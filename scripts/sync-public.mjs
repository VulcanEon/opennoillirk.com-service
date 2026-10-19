// Copy only tracked deployable source; never export production configuration or local data.
import {execFileSync} from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve(new URL('../',import.meta.url).pathname);
const dest=path.resolve(process.argv[2]||path.join(root,'../opennoillirk.com-service'));
if(dest===root)throw Error('Destination must differ from source');
await fs.access(path.join(dest,'.git'));
const files=execFileSync('git',['ls-files','-z'],{cwd:root}).toString().split('\0').filter(Boolean);
if(!files.length)throw Error('Stage/commit source before exporting');
const forbidden=/^(?:private|output|node_modules|\.wrangler)\/|^\.env(?:\.|$)|^\.dev.vars$|^wrangler\.production\.jsonc$/;
for(const f of files){if(forbidden.test(f))throw Error('Refusing to export private path: '+f);await fs.mkdir(path.dirname(path.join(dest,f)),{recursive:true});await fs.copyFile(path.join(root,f),path.join(dest,f));}
console.log('Exported '+files.length+' tracked source files to '+dest);
