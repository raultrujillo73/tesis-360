import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const errors = [];

async function walk(directory) {
  const output = [];
  for (const name of await readdir(directory)) {
    const file = path.join(directory, name);
    if ((await stat(file)).isDirectory()) output.push(...await walk(file));
    else output.push(file);
  }
  return output;
}

async function exists(file) {
  try { await stat(file); return true; } catch { return false; }
}

const files = await walk(dist);
const htmlFiles = files.filter((file) => file.endsWith('.html'));

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((match) => match[1]);
  for (const href of hrefs) {
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const clean = decodeURIComponent(href.split('#')[0].split('?')[0]);
    if (!clean) continue;
    const relative = clean.replace(/^\//, '');
    const candidates = path.extname(relative)
      ? [path.join(dist, relative)]
      : [path.join(dist, relative, 'index.html'), path.join(dist, `${relative}.html`)];
    if (!(await Promise.all(candidates.map(exists))).some(Boolean)) {
      errors.push(`${path.relative(dist, file)}: enlace local roto ${href}`);
    }
  }
}

const forbidden = files.filter((file) => /\.(pdf|docx?)$/i.test(file));
if (forbidden.length) errors.push(`El build contiene archivos restringibles: ${forbidden.map((file) => path.relative(dist, file)).join(', ')}`);

if (errors.length) {
  console.error(`Verificación del build fallida (${errors.length}):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Build verificado: ${htmlFiles.length} páginas HTML, enlaces internos válidos y ningún PDF/DOC publicado.`);

