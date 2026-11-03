import { useCallback, useMemo } from 'react';
import { Users } from 'lucide-react';
import { archive } from '@/content';
import { normalize } from '@/domain/archive';
import { characterList, factionList, getFaction, getUniverse, type Character } from '@/domain/catalog';
import { universesFromQuery } from '@/domain/filters';
import type { CharacterRole, UniverseId } from '@/domain/schema';
import { navigate, useRoute, withQuery } from '@/app/router';
import { PanelLink } from '@/features/archive/PanelLink';
import { useFitRows } from '@/shared/lib/useFitRows';
import { Avatar } from '@/shared/ui/Avatar';
import { FilterButton } from '@/shared/ui/FilterButton';
import { PageHeader } from '@/shared/ui/PageHeader';
import { SearchBox } from '@/shared/ui/SearchBox';
import { SearchSelect, type SelectItem } from '@/shared/ui/SearchSelect';
import { UniverseToggles } from '@/shared/ui/UniverseToggles';
import { portraitSources } from './portraits';
import { pickVersion, useVersions } from './versions';

const ROLES: { id: string; label: string; roles: CharacterRole[] }[] = [
  { id: 'heroes', label: 'Heroes', roles: ['hero'] },
  { id: 'villains', label: 'Villains', roles: ['villain'] },
  { id: 'anti-heroes', label: 'Anti-heroes', roles: ['anti-hero'] },
  { id: 'others', label: 'Others', roles: ['secondary', 'civilian', 'cosmic'] },
];

interface Row {
  character: Character;
  appearances: number;
  universes: string[];
  search: string;
}

const rows: Row[] = characterList.map((character) => {
  const events = archive.byCharacter.get(character.id) ?? [];
  const inUniverse = (id: string) => events.filter((e) => e.universe.id === id).length;
  return {
    character,
    appearances: events.length,
    universes: [...new Set<string>(events.map((e) => e.universe.id))].sort((a, b) => inUniverse(b) - inUniverse(a)),
    search: normalize(`${character.name} ${character.alias ?? ''} ${character.factions.map((f) => getFaction(f)?.name).join(' ')}`),
  };
});

const factionItems: SelectItem[] = factionList.map((f) => ({ id: f.id, label: f.name }));

const CARD_HEIGHT = 87;
const CARD_GAP = 12;

export function CharactersPage() {
  const route = useRoute();
  const roster = useFitRows<HTMLDivElement>(CARD_HEIGHT, CARD_GAP);
  const q = route.query.get('q') ?? '';
  const universes = useMemo<string[]>(() => universesFromQuery(route.query), [route.query]);
  const role = route.query.get('role');
  const faction = route.query.get('faction') ?? undefined;
  const sort = route.query.get('sort') ?? 'appearances';
  const chosen = useVersions((s) => s.chosen);

  const update = useCallback(
    (changes: Record<string, string | undefined>) => navigate(withQuery(route, changes), { replace: true }),
    [route],
  );
  const onSearch = useCallback((value: string) => update({ q: value || undefined }), [update]);
  const toggleUniverse = (id: UniverseId) => {
    const next = universes.includes(id) ? universes.filter((u) => u !== id) : [...universes, id];
    update({ u: next.length ? next.join(',') : undefined });
  };

  const visible = useMemo(() => {
    const term = normalize(q.trim());
    const allowedRoles = ROLES.find((r) => r.id === role)?.roles;
    const list = rows.filter((r) => {
      if (term && !r.search.includes(term)) return false;
      if (allowedRoles && !allowedRoles.includes(r.character.role)) return false;
      if (faction && !(r.character.factions as readonly string[]).includes(faction)) return false;
      return !universes.length || r.universes.some((u) => universes.includes(u));
    });
    return sort === 'name' ? list : [...list].sort((a, b) => b.appearances - a.appearances);
  }, [q, role, faction, universes, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <PageHeader kicker="The dossiers" title="Characters">
        One dossier per character, followed across every reality they appear in.
      </PageHeader>

      <div className="sticky top-[104px] z-30 -mx-4 mt-4 space-y-2 border-b border-line/70 bg-bg/85 px-4 py-3 backdrop-blur-xl sm:-mx-6 sm:px-6 lg:top-16">
        <div className="flex flex-wrap items-center gap-2">
          <SearchBox value={q} onChange={onSearch} placeholder="Search by name, alias or team…" label="Search characters" />
          <UniverseToggles selected={universes} onToggle={toggleUniverse} className="order-last w-full lg:order-none lg:w-auto" />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="no-scrollbar flex items-center gap-1.5 overflow-x-auto">
            {ROLES.map((r) => (
              <FilterButton key={r.id} active={role === r.id} onClick={() => update({ role: role === r.id ? undefined : r.id })}>{r.label}</FilterButton>
            ))}
            <span aria-hidden className="mx-1 h-4 w-px shrink-0 bg-line" />
            <FilterButton active={sort === 'appearances'} onClick={() => update({ sort: undefined })}>Most appearances</FilterButton>
            <FilterButton active={sort === 'name'} onClick={() => update({ sort: 'name' })}>A–Z</FilterButton>
          </div>
          <div className="ml-auto w-full sm:w-64">
            <SearchSelect label="Faction" hideLabel placeholder="Any faction" items={factionItems} value={faction} onChange={(id) => update({ faction: id })} />
          </div>
        </div>
      </div>

      <p className="mt-3 text-xs text-ink-faint">{visible.length} {visible.length === 1 ? 'character' : 'characters'}</p>

      <div ref={roster} className="mt-2">
        {visible.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-line p-12 text-center">
            <Users className="mx-auto size-10 text-ink-faint" />
            <p className="mt-4 text-ink-muted">No characters match these filters.</p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:auto-rows-[var(--row)] lg:grid-cols-3 xl:grid-cols-4">
            {visible.map((row) => <CharacterCard key={row.character.id} row={row} universe={pickVersion(row.universes, universes, chosen[row.character.id])} />)}
          </ul>
        )}
      </div>
    </div>
  );
}

/** `universe` picks which version of the character the card shows. */
function CharacterCard({ row: { character: c, appearances, universes }, universe }: { row: Row; universe?: string }) {
  const teams = c.factions.slice(0, 2).map((f) => getFaction(f)?.name).filter(Boolean).join(' · ');
  return (
    <li>
      <PanelLink
        panel={{ kind: 'character', id: c.id }}
        className="group flex h-full items-center gap-3 rounded-2xl border border-line bg-surface/70 p-3.5 transition hover:border-line-strong hover:bg-surface-2"
        title={c.name}
      >
        <Avatar key={universe} color={c.color} sources={portraitSources(c, universe)} size="lg" />
        <span className="min-w-0 flex-1">
          <span className="block truncate text-sm font-bold text-ink">{c.label}</span>
          <span className="block truncate text-xs text-ink-muted">{c.alias ? c.name : teams || c.role}</span>
          <span className="mt-1 flex items-center gap-1.5 text-[11px] text-ink-faint">
            {universes.map((u) => (
              <span key={u} className="size-1.5 rounded-full" style={{ backgroundColor: getUniverse(u)?.color }} title={getUniverse(u)?.name} />
            ))}
            <span>{appearances} {appearances === 1 ? 'event' : 'events'}</span>
          </span>
        </span>
      </PanelLink>
    </li>
  );
}
