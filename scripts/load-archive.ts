/** The archive as the app builds it, without Vite: scripts read the event files directly. */
import { readdirSync } from 'node:fs';
import { basename, join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { buildArchive, type Archive } from '../src/domain/archive';
import type { EventFile } from '../src/domain/define';

const EVENTS_DIR = join(import.meta.dirname, '..', 'src', 'content', 'events');

export async function loadArchive(): Promise<{ archive: Archive; files: { name: string; file: EventFile }[] }> {
  const files = [];
  for (const name of readdirSync(EVENTS_DIR).filter((f) => f.endsWith('.ts'))) {
    const mod = await import(pathToFileURL(join(EVENTS_DIR, name)).href);
    files.push({ name: basename(name, '.ts'), file: mod.default as EventFile });
  }
  return { archive: buildArchive(files.map((f) => f.file)), files };
}
