import { useCallback, useMemo, useState } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import type { TimelineFilters } from '@/domain/filters';
import { isFiltering } from '@/domain/filters';
import { periods } from '@/domain/dates';
import { characterList, factionList, getCharacter, getFaction, getObject, getProduction, getStone, objectList, productionList, stoneList } from '@/domain/catalog';
import type { UniverseId } from '@/domain/schema';
import { Sheet } from '@/shared/ui/Sheet';
import { SearchSelect, type SelectItem } from '@/shared/ui/SearchSelect';
import { Chip } from '@/shared/ui/Chip';
import { FilterButton } from '@/shared/ui/FilterButton';
import { SearchBox } from '@/shared/ui/SearchBox';
import { UniverseToggles } from '@/shared/ui/UniverseToggles';

interface FilterBarProps {
  filters: TimelineFilters;
  onChange: (patch: Partial<TimelineFilters>) => void;
  onClear: () => void;
  resultCount: number;
}

const characterItems: SelectItem[] = characterList.map((c) => ({ id: c.id, label: c.label, hint: c.alias ? c.name : undefined, color: c.color }));
const factionItems: SelectItem[] = factionList.map((f) => ({ id: f.id, label: f.name }));
const productionItems: SelectItem[] = productionList.map((p) => ({ id: p.id, label: p.title, hint: p.released, color: p.color }));
const objectItems: SelectItem[] = objectList.map((o) => ({ id: o.id, label: o.name, hint: o.kindLabel, color: o.color }));

export function FilterBar({ filters, onChange, onClear, resultCount }: FilterBarProps) {
  const [panelOpen, setPanelOpen] = useState(false);
  const onSearch = useCallback((q: string) => onChange({ q }), [onChange]);

  const toggleUniverse = (id: UniverseId) =>
    onChange({ universes: filters.universes.includes(id) ? filters.universes.filter((u) => u !== id) : [...filters.universes, id] });

  const extraCount = [filters.character, filters.faction, filters.production, filters.stone, filters.object, filters.period].filter(Boolean).length + Number(filters.deathsOnly) + Number(filters.auditedOnly);

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
    const object = getObject(filters.object);
    if (object) list.push({ key: 'object', label: object.name, color: object.color, clear: { object: undefined } });
    const period = periods.find((p) => p.id === filters.period);
    if (period) list.push({ key: 'period', label: period.label, clear: { period: undefined } });
    if (filters.deathsOnly) list.push({ key: 'deaths', label: 'With deaths', clear: { deathsOnly: false } });
    if (filters.auditedOnly) list.push({ key: 'audited', label: 'Audited only', clear: { auditedOnly: false } });
    return list;
  }, [filters]);

  return (
    <div className="sticky top-[104px] z-30 -mx-4 border-b border-line/70 bg-bg/85 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:top-16">
      <div className="flex flex-wrap items-center gap-2">
        <SearchBox value={filters.q} onChange={onSearch} placeholder="Search events, characters, places…" label="Search the timeline" />
        <UniverseToggles selected={filters.universes} onToggle={toggleUniverse} className="order-last w-full lg:order-none lg:w-auto" />
        <FilterButton onClick={() => setPanelOpen(true)}>
          <SlidersHorizontal className="size-4" />
          Filters
          {extraCount > 0 && <span className="rounded-full bg-accent px-1.5 text-[10px] text-white">{extraCount}</span>}
        </FilterButton>
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
            <legend className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-ink-faint">Era</legend>
            <div className="flex flex-wrap gap-1.5">
              {periods.map((p) => (
                <FilterButton key={p.id} active={filters.period === p.id} onClick={() => onChange({ period: filters.period === p.id ? undefined : p.id })}>
                  {p.label} <span className="font-medium opacity-60">{p.range}</span>
                </FilterButton>
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
                <FilterButton key={s.id} color={s.color} active={filters.stone === s.id} onClick={() => onChange({ stone: filters.stone === s.id ? undefined : s.id })}>
                  {s.name.replace(' Stone', '')}
                </FilterButton>
              ))}
            </div>
          </fieldset>
          <SearchSelect label="Object" placeholder="Any object" items={objectItems} value={filters.object} onChange={(object) => onChange({ object: object as TimelineFilters['object'] })} />
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
