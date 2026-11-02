/** TMDB client for the sync scripts. The token stays in .env.local (TMDB_READ_TOKEN); the deployed app never needs it. */
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

export const ROOT = join(import.meta.dirname, '..');

/** Catalogued as a special, but TMDB lists it as a TV show. */
export const TV_SPECIALS = new Set<string>(['agents-of-shield-slingshot']);

function readToken(): string {
  if (process.env.TMDB_READ_TOKEN) return process.env.TMDB_READ_TOKEN;
  const file = join(ROOT, '.env.local');
  if (existsSync(file)) {
    const line = readFileSync(file, 'utf8').split(/\r?\n/).find((l) => l.startsWith('TMDB_READ_TOKEN='));
    if (line) return line.slice('TMDB_READ_TOKEN='.length).trim().replace(/^["']|["']$/g, '');
  }
  console.error('Missing TMDB_READ_TOKEN. Create .env.local with: TMDB_READ_TOKEN=<your API Read Access Token>');
  process.exit(1);
}

const token = readToken();

export async function tmdb<T>(path: string, params: Record<string, string | number | undefined> = {}): Promise<T> {
  const url = new URL(`https://api.themoviedb.org/3${path}`);
  Object.entries(params).forEach(([k, v]) => v !== undefined && url.searchParams.set(k, String(v)));
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch(url, { headers: { Authorization: `Bearer ${token}`, accept: 'application/json' } });
    if (res.status === 429) {
      await new Promise((r) => setTimeout(r, 1000 * (attempt + 1)));
      continue;
    }
    if (res.status === 401) throw new Error('TMDB rejected the token (401). Check TMDB_READ_TOKEN in .env.local.');
    if (!res.ok) throw new Error(`TMDB ${res.status} for ${path}`);
    return (await res.json()) as T;
  }
  throw new Error(`TMDB kept rate-limiting ${path}`);
}
