export const SITE = 'https://robinwebc.github.io';
export const EMAIL = 'robinwebc@gmail.com';
export const APP_RELEASES = 'https://github.com/robinwebc/nSedo/releases';
export const APP_REPO = 'https://github.com/robinwebc/nSedo';
export const OWNER = 'https://github.com/robinwebc';

export function page(pathname = '/'): string {
  const base = import.meta.env.BASE_URL;
  if (!pathname || pathname === '/') return base;
  const hashAt = pathname.indexOf('#');
  const hash = hashAt >= 0 ? pathname.slice(hashAt) : '';
  const pathOnly = hashAt >= 0 ? pathname.slice(0, hashAt) : pathname;
  const clean = pathOnly.replace(/^\//, '').replace(/\/$/, '');
  if (!clean) return `${base}${hash}`;
  return `${base}${clean}/${hash}`;
}

export function asset(pathname: string): string {
  const base = import.meta.env.BASE_URL;
  return `${base}${pathname.replace(/^\//, '')}`;
}

export function absPage(pathname = '/'): string {
  return new URL(page(pathname), SITE).href;
}

export function absAsset(pathname: string): string {
  return new URL(asset(pathname), SITE).href;
}

export function formatBdt(amount: number): string {
  return new Intl.NumberFormat('en-BD', { maximumFractionDigits: 0 }).format(amount);
}

export function mailto(subject: string, body = ''): string {
  const query = [`subject=${encodeURIComponent(subject)}`];
  if (body) query.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${EMAIL}?${query.join('&')}`;
}

export function safeJson(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}
