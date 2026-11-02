import type { Character } from '@/domain/catalog';
import type { UniverseId } from '@/domain/schema';
import { tmdbImage } from '@/shared/lib/tmdb';

/** What to show for a character in a universe, best first: the character on screen, then the actor who plays them there. */
export function portraitSources({ portraits, credits }: Character, universe?: string): string[] {
  const image = universe ? portraits[universe as UniverseId] : Object.values(portraits)[0];
  const actor = credits.find((credit) => credit.universe === universe && !credit.voice && credit.photo);
  return [image, actor?.photo && tmdbImage('w185', actor.photo)].filter((source): source is string => Boolean(source));
}
