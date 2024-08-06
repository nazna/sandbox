import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import type { Manifest } from 'vite';

const WORKERS = {
  todo: 'http://localhost:8081',
  header: 'http://localhost:8082',
} as const;

try {
  await mkdir(resolve(import.meta.dirname, '../downloaded'));
} catch (_e) {}

for (const [name, baseUrl] of Object.entries(WORKERS)) {
  const res = await fetch(`${baseUrl}/manifest.json`);
  const json = (await res.json()) as Manifest;
  const entry = json[`src/${name}.tsx`];

  if (!entry) {
    continue;
  }

  const jsRes = await fetch(`${baseUrl}/${entry.file}`);
  const jsBody = await jsRes.text();
  await writeFile(resolve(import.meta.dirname, '../downloaded', `${name}.js`), jsBody);

  if (Array.isArray(entry.css)) {
    for (const css of entry.css) {
      const cssRes = await fetch(`${baseUrl}/${css}`);
      const cssBody = await cssRes.text();
      await writeFile(resolve(import.meta.dirname, '../public', `${name}.css`), cssBody);
    }
  }
}
