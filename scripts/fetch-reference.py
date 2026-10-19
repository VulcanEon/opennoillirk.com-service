"""Import the user-authorized public reference distribution with a checksum manifest.
No credentials, cookies, user data, or third-party tracking scripts are imported.
"""
import concurrent.futures, datetime, hashlib, json, pathlib, re, subprocess, mimetypes

ORIGIN = 'https://noillirk.com'
ROOT = pathlib.Path(__file__).resolve().parents[1]
PUBLIC = ROOT / 'public'
REFERENCE = ROOT / 'private' / 'reference'
REFERENCE.mkdir(parents=True, exist_ok=True)

def get(path):
    data = subprocess.check_output(['curl', '-fsSL', '--retry', '2', '--max-time', '45', ORIGIN + path])
    content_type = 'text/html' if data.lstrip().startswith(b'<!DOCTYPE html') else (mimetypes.guess_type(path)[0] or 'application/octet-stream')
    return data, content_type

def paths(text, parent='/'):
    found = set(re.findall(r'''(?:["'`(=])(/(?:assets|images|fonts|pwa)/[a-zA-Z0-9_./-]+\.(?:js|css|webp|png|jpg|svg|woff2|mp3))''', text))
    if parent.startswith('/assets/'):
        found.update('/assets/'+x for x in re.findall(r'''["'`]\./([a-zA-Z0-9_.-]+\.(?:js|css))["'`]''', text))
        found.update('/'+x for x in re.findall(r'''["'`](assets/[a-zA-Z0-9_.-]+\.(?:js|css))["'`]''', text))
    return {p for p in found if '/audio/' not in p}

manifest = []
pending = {'/favicon.svg', '/images/climb/start-landscape.webp', '/images/climb/start-portrait.webp'}
for route in ['/', '/sky-climb', '/unlimited', '/how-to-play', '/scoring', '/privacy', '/terms']:
    data, content_type = get(route)
    (REFERENCE / ((route.strip('/') or 'index')+'.html')).write_bytes(data)
    pending.update(paths(data.decode()))

seen = set()
def download(path):
    try:
        data, content_type = get(path)
        if 'text/html' in content_type:
            return path, None, 'unexpected HTML'
        target = PUBLIC / path.lstrip('/')
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_bytes(data)
        return path, data, content_type
    except Exception as error:
        return path, None, str(error)

with concurrent.futures.ThreadPoolExecutor(max_workers=6) as pool:
    while pending:
        batch = sorted(pending - seen)
        pending = set()
        if not batch:
            break
        seen.update(batch)
        for path, data, content_type in pool.map(download, batch):
            if data is None:
                print('SKIP', path, content_type)
                continue
            manifest.append({'path':path, 'source':ORIGIN+path, 'bytes':len(data), 'sha256':hashlib.sha256(data).hexdigest()})
            if path.endswith(('.js','.css')):
                pending.update(paths(data.decode(), path)-seen)
        print('Imported', len(manifest), 'resources;', len(pending), 'new references', flush=True)

for path in ['/game/packs/index.v2.json', '/game/schedule.json', '/game/daily/v2/2026-10-19.json']:
    result = download(path)
    if result[1] is None:
        raise RuntimeError(result)
index = json.loads((PUBLIC/'game/packs/index.v2.json').read_text())
# Retain the exact first ten for phase-one Classic; the full index is staged for subsequent modes.
daily = json.loads((PUBLIC/'game/daily/v2/2026-10-19.json').read_text())
(PUBLIC/'game/classic.json').write_text(json.dumps(daily, separators=(',',':')))
(ROOT/'docs/asset-manifest.json').write_text(json.dumps({'imported':'2026-10-19','authorization':'User confirmed authorization in this task. Reuse is not an upstream open-source license grant.','assets':sorted(manifest,key=lambda x:x['path'])},indent=2))
print('Completed:', len(manifest), 'assets;', len(index['prompts']), 'indexed prompts')
