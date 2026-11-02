import { Atom, BookOpen, Cpu, Gem, Swords, type LucideIcon } from 'lucide-react';
import type { ObjectKindId } from '@/domain/schema';

const ICONS: Record<ObjectKindId, LucideIcon> = {
  weapon: Swords,
  relic: Gem,
  technology: Cpu,
  material: Atom,
  record: BookOpen,
};

/** The line drawing of an object's kind. */
export function ObjectIcon({ kind, className }: { kind: ObjectKindId; className?: string }) {
  const Icon = ICONS[kind];
  return <Icon aria-hidden className={className} />;
}
