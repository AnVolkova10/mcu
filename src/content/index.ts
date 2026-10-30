import { buildArchive } from '@/domain/archive';
import type { EventFile } from '@/domain/define';

/** Every file in ./events is picked up automatically: adding a production never needs a registry edit. */
const modules = import.meta.glob<{ default: EventFile }>('./events/*.ts', { eager: true });

export const archive = buildArchive(Object.values(modules).map((m) => m.default));
