import { useEffect, useMemo, useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import type { TimelineFilters } from '@/domain/filters';
import { isFiltering } from '@/domain/filters';
import { periods } from '@/domain/dates';
import { characterList, factionList, getCharacter, getFaction, getProduction, getStone, productionList, stoneList, universeList } from '@/domain/catalog';
import { alpha } from '@/domain/colors';
import type { UniverseId } from '@/domain/schema';
import { Sheet } from '@/shared/ui/Sheet';
import { SearchSelect, type SelectItem } from '@/shared/ui/SearchSelect';
import { Chip } from '@/shared/ui/Chip';
import { cn } from '@/shared/lib/cn';

interface FilterBarProps {
  filters: TimelineFilters;
  onChange: (patch: Partial<TimelineFilters>) => void;
  onClear: () => void;
  resultCount: number;
}

const characterItems: SelectItem[] = characterList.map((c) => ({ id: c.id, label: c.label, hint: c.alias ? c.name : undefined, color: c.color }));
const factionItems: SelectItem[] = factionList.map((f) => ({ id: f.id, label: f.name }));
const productionItems: SelectItem[] = productionList.map((p) => ({ id: p.id, label: p.title, hint: p.released, color: p.color }));

export function FilterBar({ filters, onChange, onClear, resultCount }: FilterBarProps) {
  const [query, setQuery] = useState(filters.q);
  const [panelOpen, setPanelOpen] = useState(false);

  // Debounce typing into the URL; follow external changes (back button, clear).
  useEffect(() => setQuery(filters.q), [filters.q]);
  useEffect(() => {
    if (query === filters.q) return;
    const t = setTimeout(() => onChange({ q: query }), 220);
    return () => clearTimeout(t);
  }, [query, filters.q, onChange]);

  const toggleUniverse = (id: UniverseId) =>
    onChange({ universes: filters.universes.includes(id) ? filters.universes.filter((u) => u !== id) : [...filters.universes, id] });

  const extraCount = [filters.character, filters.faction, filters.production, filters.stone, filters.period].filter(Boolean).length + Number(filters.deathsOnly) + Number(filters.auditedOnly);

  const active = useMemo(() => {
    const list: { key: string; label: string; color?: string; clear: Partial<TimelineFilters> }[] = [];
    const character = getCharacter(filters.character);
    if (character) list.push({ key: 'character', label: character.label, color: character.color, clear: { character: undefined } });
    const faction = getFaction(filters.faction);
    if (faction) list.push({ key: 'faction', label: faction.name, clear: { faction: undefined } });
    const production = getProduction(filters.production);
    if (production) list.push({ key: 'production', label: production.shortTitle, color: production.color, clear: { production: undefined } });
    const stone = getStone(filters.stone);
    if (stone) list.push({ key: 'stone', label: stone.name, color: stone.color, clear: { stone: undefined } });
    const period = periods.find((p) => p.id === filters.period);
    if (period) list.push({ key: 'period', label: period.label, clear: { period: undefined } });
    if (filters.deathsOnly) list.push({ key: 'deaths', label: 'With deaths', clear: { deathsOnly: false } });
    if (filters.auditedOnly) list.push({ key: 'audited', label: 'Audited only', clear: { auditedOnly: false } });
    return list;
  }, [filters]);

  return (
    <div className="sticky top-[104px] z-30 -mx-4 border-b border-line/70 bg-bg/85 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:top-16">
      <div className="flex flex-wrap items-center gap-2">
        <label className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-line bg-surface-2 px-3 focus-within:border-line-strong">
          <Search className="size-4 text-ink-faint" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search events, characters, places…"
            className="min-w-0 flex-1 bg-transparent py-2.5 text-sm text-ink placeholder:text-ink-faint focus:outline-none"
            aria-label="Search the timeline"
          />
          {query && (
            <button type="button" onClick={() => setQuery('')} className="text-ink-faint hover:text-ink" aria-label="Clear search">
              <X className="size-4" />
            </button>
          )}
        </label>

        <div className="no-scrollbar order-last flex w-full items-center gap-1.5 overflow-x-auto lg:order-none lg:w-auto" role="group" aria-label="Universes">
          {universeList.map((u) => {
            const on = filters.universes.includes(u.id);
            return (
              <button
                key={u.id}
                type="button"
                onClick={() => toggleUniverse(u.id)}
                aria-pressed={on}
                title={`${u.name} · ${u.label}`}
                className={cn('inline-flex shrink-0 items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-bold transition', !on && 'border-line text-ink-muted hover:text-ink')}
                style={on ? { color: u.color, borderColor: alpha(u.color, 0.6), backgroundColor: alpha(u.color, 0.12) } : undefined}
              >
                <span className="size-2 rounded-full" style={{ backgroundColor: u.color }} />
                {u.label}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={() => setPanelOpen(true)}
          className="inline-flex items-center gap-2 rounded-xl border border-line px-3 py-2 text-xs font-bold text-ink-muted transition hover:border-line-strong hover:text-ink"
        >
          <SlidersHorizontal className="size-4" />
          Filters
          {extraCount > 0 && <span className="rounded-full bg-accent px-1.5 text-[10px] text-white">{extraCount}</span>}
        </button>
      </div>

      {(active.length > 0 || isFiltering(filters)) && (
        <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
          <span className="mr-1 text-xs text-ink-faint">{resultCount} {resultCount === 1 ? 'event' : 'events'}</span>
          {active.map((a) => (
            <Chip key={a.key} color={a.color} onClick={() => onChange(a.clear)} title="Remove filter" icon={<X className="order-last size-3" />}>
              {a.label}
            </Chip>
          ))}
          <button type="button" onClick={onClear} className="ml-1 text-xs font-semibold text-accent-strong hover:underline">
            Clear all
          </button>
        </div>
      )}

      <Sheet open={panelOpen} onClose={() => setPanelOpen(false)} title="Filters">
        <div className="space-y-6 p-6 pt-14">
          <h2 className="font-display text-4xl leading-none">Filters</h2>
          <fieldset>
            <legend className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-ink-faint">Period</legend>
            <div className="flex flex-wrap gap-1.5">
              {periods.map((p) => (
                <Chip key={p.id} active={filters.period === p.id} onClick={() => onChange({ period: filters.period === p.id ? undefined : p.id })}>
                  {p.label}
                </Chip>
              ))}
            </div>
          </fieldset>
          <SearchSelect label="Character" placeholder="Any character" items={characterItems} value={filters.character} onChange={(character) => onChange({ character: character as TimelineFilters['character'] })} />
          <SearchSelect label="Faction" placeholder="Any faction" items={factionItems} value={filters.faction} onChange={(faction) => onChange({ faction: faction as TimelineFilters['faction'] })} />
          <SearchSelect label="Movie or series" placeholder="Any production" items={productionItems} value={filters.production} onChange={(production) => onChange({ production: production as TimelineFilters['production'] })} />
          <fieldset>
            <legend className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-ink-faint">Infinity Stone</legend>
            <div className="flex flex-wrap gap-1.5">
              {stoneList.map((s) => (
                <Chip key={s.id} color={s.color} active={filters.stone === s.id} onClick={() => onChange({ stone: filters.stone === s.id ? undefined : s.id })}>
                  {s.name.replace(' Stone', '')}
                </Chip>
              ))}
            </div>
          </fieldset>
          <div className="space-y-2">
            <Toggle checked={filters.deathsOnly} onChange={(deathsOnly) => onChange({ deathsOnly })} label="Only events with deaths" />
            <Toggle checked={filters.auditedOnly} onChange={(auditedOnly) => onChange({ auditedOnly })} label="Only audited productions" hint="Hide v1 content that has not been reviewed yet" />
          </div>
          <div className="flex items-center justify-between border-t border-line pt-4">
            <span className="text-sm text-ink-muted">{resultCount} events match</span>
            <button type="button" onClick={onClear} className="text-sm font-semibold text-accent-strong hover:underline">Clear all</button>
          </div>
        </div>
      </Sheet>
    </div>
  );
}

function Toggle({ checked, onChange, label, hint }: { checked: boolean; onChange: (v: boolean) => void; label: string; hint?: string }) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-line bg-surface-2 p-3">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="mt-0.5 size-4 accent-[var(--color-accent)]" />
      <span>
        <span className="block text-sm font-semibold text-ink">{label}</span>
        {hint && <span className="block text-xs text-ink-faint">{hint}</span>}
      </span>
    </label>
  );
}
