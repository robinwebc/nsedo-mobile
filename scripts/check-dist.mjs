import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const dist = path.resolve('dist');
const origin = 'https://robinwebc.github.io';
const base = '/nsedo-mobile';
const errors = [];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else files.push(full);
  }
  return files;
}

function toFile(pathname) {
  let rel = decodeURIComponent(pathname);
  if (rel.startsWith(base)) rel = rel.slice(base.length);
  if (!rel || rel === '/') return path.join(dist, 'index.html');
  if (!rel.startsWith('/')) rel = `/${rel}`;
  if (rel === '/404' || rel === '/404/' || rel === '/404.html') return path.join(dist, '404.html');
  if (rel.endsWith('/')) return path.join(dist, rel, 'index.html');
  return path.join(dist, rel);
}

const files = await walk(dist);
const htmlFiles = files.filter((file) => file.endsWith('.html'));

if (!htmlFiles.length) errors.push('no HTML in dist');

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const rel = path.relative(dist, file);
  if (!/<html[^>]*\slang="en"/.test(html)) errors.push(`${rel}: missing html lang=en`);
  if (/lorem ipsum/i.test(html)) errors.push(`${rel}: placeholder latin`);
  if (/\b(Unleash|Revolutionary|Elevate your)\b/.test(html)) errors.push(`${rel}: hype copy`);
  if (!rel.endsWith('404.html')) {
    if (!/<title>[^<]+<\/title>/.test(html)) errors.push(`${rel}: missing title`);
    if (!html.includes('name="description"')) errors.push(`${rel}: missing description`);
    if (!html.includes('rel="canonical"')) errors.push(`${rel}: missing canonical`);
    if (!html.includes('property="og:title"')) errors.push(`${rel}: missing og:title`);
    if (!html.includes('property="og:image"')) errors.push(`${rel}: missing og:image`);
  }
  const attrs = html.matchAll(/\b(?:href|src)=["']([^"']+)["']/g);
  for (const match of attrs) {
    const href = match[1];
    if (
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('data:') ||
      href.startsWith('#') ||
      href.startsWith('javascript:')
    ) {
      continue;
    }
    let url;
    try {
      url = new URL(href, `${origin}${base}/`);
    } catch {
      errors.push(`${rel}: bad URL ${href}`);
      continue;
    }
    if (url.origin !== origin) continue;
    if (!url.pathname.startsWith(`${base}/`) && url.pathname !== base) {
      errors.push(`${rel}: outside base path ${href}`);
      continue;
    }
    const target = toFile(url.pathname);
    try {
      await access(target);
    } catch {
      errors.push(`${rel}: missing target ${href}`);
      continue;
    }
    if (url.hash && target.endsWith('.html')) {
      const id = decodeURIComponent(url.hash.slice(1)).replace(/\/$/, '');
      const targetHtml = await readFile(target, 'utf8');
      if (id && !targetHtml.includes(`id="${id}"`)) errors.push(`${rel}: missing #${id} for ${href}`);
    }
  }
}

const support = htmlFiles.find((file) => file.endsWith(`${path.sep}support${path.sep}index.html`));
if (!support) errors.push('missing support page');
else {
  const html = await readFile(support, 'utf8');
  if (!html.includes('Placeholder')) errors.push('support page missing placeholder warning');
  if (!html.includes('robinwebc@gmail.com')) errors.push('support page missing email');
  if (!html.includes('mailto:robinwebc@gmail.com')) errors.push('support page missing mailto');
}

for (const name of ['404.html', 'favicon.svg', 'og.png', 'robots.txt', 'sitemap-index.xml']) {
  if (!files.some((file) => file.endsWith(name))) errors.push(`missing ${name}`);
}

const robots = await readFile(path.join(dist, 'robots.txt'), 'utf8').catch(() => '');
if (!robots.includes(`${origin}${base}/sitemap-index.xml`)) errors.push('robots.txt sitemap URL is wrong');

if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

console.log(`Checked ${htmlFiles.length} HTML files and ${files.length} output files.`);
