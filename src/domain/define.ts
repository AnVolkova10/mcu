import type { EventInput, ProductionId } from './schema';

export interface EventFile {
  production: ProductionId;
  events: readonly EventInput[];
}

/** Declares the events of one production. Each file in `src/content/events` exports one of these. */
export function defineEvents(production: ProductionId, events: readonly EventInput[]): EventFile {
  return { production, events };
}
