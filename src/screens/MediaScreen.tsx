import React, { useState, useMemo } from 'react';
import { useStore } from '@/store/useStore';
import { allMedia } from '@/data/mediaData';
import { timelineEras } from '@/data/timelineData';
import { 
  Film, 
  Calendar, 
  Layers, 
  Clock, 
  Filter, 
  Tv, 
  Clapperboard, 
  Sparkles,
  ArrowUpDown,
  Search,
  Palette,
  Hourglass,
  Tag,
  X,
  Video,
  ChevronDown,
  Globe2
} from 'lucide-react';

export const MediaScreen: React.FC = () => {
  const { setSelectedMediaId } = useStore();
  const [search, setSearch] = useState('');
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [selectedFormat, setSelectedFormat] = useState<string>('all');
  const [selectedVisualType, setSelectedVisualType] = useState<string>('all');
  const [selectedUniverse, setSelectedUniverse] = useState<string>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('chronological');

  // Compute event counts and earliest chronological era index for each media item
  const mediaTimelineStats = useMemo(() => {
    const counts: Record<string, number> = {};
    const firstEraIndex: Record<string, number> = {};
    const firstEraTitle: Record<string, string> = {};

    timelineEras.forEach((era, eraIdx) => {
      era.events.forEach((evt) => {
        // Main media key
        counts[evt.mediaKey] = (counts[evt.mediaKey] || 0) + 1;
        if (firstEraIndex[evt.mediaKey] === undefined) {
          firstEraIndex[evt.mediaKey] = eraIdx;
          firstEraTitle[evt.mediaKey] = era.cleanTitle;
        }

        // Additional raw classes
        evt.rawClasses.forEach((cls) => {
          if (cls !== evt.mediaKey && cls !== 'alternative') {
            counts[cls] = (counts[cls] || 0) + 1;
            if (firstEraIndex[cls] === undefined) {
              firstEraIndex[cls] = eraIdx;
              firstEraTitle[cls] = era.cleanTitle;
            }
          }
        });
      });
    });

    return { counts, firstEraIndex, firstEraTitle };
  }, []);

  // Extract all available release years
  const availableYears = useMemo(() => {
    const yearSet = new Set<string>();
    allMedia.forEach((m) => {
      const match = m.releaseYear.match(/\d{4}/);
      if (match) yearSet.add(match[0]);
    });
    return ['all', ...Array.from(yearSet).sort()];
  }, []);

  const phases = ['all', 'Phase 1', 'Phase 2', 'Phase 3', 'Phase 4', 'Phase 5', 'Marvel Television', 'One-Shot'];

  const universes = [
    { id: 'all', label: 'ALL REALITIES' },
    { id: 'sacred-616', label: '🛡️ SACRED TIMELINE (616)' },
    { id: 'earth-10005', label: '🧬 FOX X-MEN (10005)' },
    { id: 'earth-92131', label: '📺 X-MEN TAS (92131)' },
    { id: 'earth-90214', label: '🕷️ SPIDER-NOIR (90214)' },
  ];

  const formats = [
    { id: 'all', label: 'ALL FORMATS' },
    { id: 'movie', label: '🎬 MOVIES' },
    { id: 'series', label: '📺 TV SERIES' },
    { id: 'oneshot', label: '✨ SHORTS & SPECIALS' },
  ];

  const visualTypes = [
    { id: 'all', label: 'ALL TECHNIQUES' },
    { id: 'live-action', label: '🎭 LIVE-ACTION' },
    { id: 'animated', label: '🎨 ANIMATION' },
  ];

  const sortOptions = [
    { id: 'chronological', label: '⏳ MCU CHRONOLOGICAL (STORY)' },
    { id: 'release-asc', label: '📅 RELEASE: OLDEST FIRST (2008 →)' },
    { id: 'release-desc', label: '📅 RELEASE: NEWEST FIRST (2025 →)' },
    { id: 'alpha-asc', label: '🔤 ALPHABETICAL (A - Z)' },
    { id: 'alpha-desc', label: '🔤 ALPHABETICAL (Z - A)' },
    { id: 'events-desc', label: '🔥 MOST TIMELINE EVENTS' },
  ];

  // Filter and sort media
  const filteredAndSortedMedia = useMemo(() => {
    return allMedia
      .filter((m) => {
        // Search filter
        if (search.trim()) {
          const q = search.toLowerCase().trim();
          const matchTitle = m.title.toLowerCase().includes(q);
          const matchShort = m.shortTitle.toLowerCase().includes(q);
          const matchDesc = m.description.toLowerCase().includes(q);
          const matchPhase = m.phase.toLowerCase().includes(q);
          const matchUniverse = m.primaryUniverse?.toLowerCase().includes(q);
          if (!matchTitle && !matchShort && !matchDesc && !matchPhase && !matchUniverse) return false;
        }

        // Phase filter
        if (selectedPhase !== 'all' && m.phase !== selectedPhase) return false;

        // Universe filter
        if (selectedUniverse === 'sacred-616' && (m.timelineType === 'multiverse-alternate' || (m.primaryUniverse && !m.primaryUniverse.includes('616')))) return false;
        if (selectedUniverse === 'earth-10005' && !m.primaryUniverse?.includes('10005')) return false;
        if (selectedUniverse === 'earth-92131' && !m.primaryUniverse?.includes('92131')) return false;
        if (selectedUniverse === 'earth-90214' && !m.primaryUniverse?.includes('90214')) return false;

        // Year filter
        if (selectedYear !== 'all') {
          if (!m.releaseYear.includes(selectedYear)) return false;
        }

        // Format filter (Movie / Series / One-Shot)
        if (selectedFormat === 'movie' && m.type !== 'movie') return false;
        if (selectedFormat === 'series' && m.type !== 'series') return false;
        if (selectedFormat === 'oneshot' && m.type !== 'oneshot' && m.type !== 'special') return false;

        // Visual Technique filter (Live-Action vs Animated)
        if (selectedVisualType === 'animated' && !m.isAnimated) return false;
        if (selectedVisualType === 'live-action' && m.isAnimated) return false;

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'chronological') {
          const eraA = mediaTimelineStats.firstEraIndex[a.id] ?? 999;
          const eraB = mediaTimelineStats.firstEraIndex[b.id] ?? 999;
          if (eraA !== eraB) return eraA - eraB;
          return a.timelineOrder - b.timelineOrder;
        }

        if (sortBy === 'release-asc') {
          const yearA = parseInt(a.releaseYear.match(/\d{4}/)?.[0] || '9999', 10);
          const yearB = parseInt(b.releaseYear.match(/\d{4}/)?.[0] || '9999', 10);
          if (yearA !== yearB) return yearA - yearB;
          return a.title.localeCompare(b.title);
        }

        if (sortBy === 'release-desc') {
          const yearA = parseInt(a.releaseYear.match(/\d{4}/)?.[0] || '0', 10);
          const yearB = parseInt(b.releaseYear.match(/\d{4}/)?.[0] || '0', 10);
          if (yearA !== yearB) return yearB - yearA;
          return a.title.localeCompare(b.title);
        }

        if (sortBy === 'alpha-asc') {
          return a.title.localeCompare(b.title);
        }

        if (sortBy === 'alpha-desc') {
          return b.title.localeCompare(a.title);
        }

        if (sortBy === 'events-desc') {
          const countA = mediaTimelineStats.counts[a.id] || 0;
          const countB = mediaTimelineStats.counts[b.id] || 0;
          return countB - countA;
        }

        return 0;
      });
  }, [search, selectedPhase, selectedUniverse, selectedFormat, selectedVisualType, selectedYear, sortBy, mediaTimelineStats]);

  const hasActiveFilters = 
    Boolean(search.trim()) || 
    selectedPhase !== 'all' || 
    selectedUniverse !== 'all' || 
    selectedFormat !== 'all' || 
    selectedVisualType !== 'all' || 
    selectedYear !== 'all' || 
    sortBy !== 'chronological';

  const resetMediaFilters = () => {
    setSearch('');
    setSelectedPhase('all');
    setSelectedUniverse('all');
    setSelectedFormat('all');
    setSelectedVisualType('all');
    setSelectedYear('all');
    setSortBy('chronological');
  };

  const renderMediaIcon = (m: (typeof allMedia)[0]) => {
    if (m.type === 'series') {
      return <Tv className="w-4 h-4 text-sky-400" />;
    }
    if (m.type === 'oneshot' || m.type === 'special') {
      return <Sparkles className="w-4 h-4 text-amber-400" />;
    }
    return <Clapperboard className="w-4 h-4 text-[#e62429]" />;
  };

  const renderStudioBadge = (studio?: string) => {
    if (!studio) return null;
    const studioStyles: Record<string, string> = {
      'Marvel Studios': 'bg-red-950/90 border-red-600/70 text-red-300',
      'Disney+': 'bg-indigo-950/90 border-indigo-500/70 text-indigo-300',
      'ABC': 'bg-emerald-950/90 border-emerald-600/70 text-emerald-300',
      'Netflix': 'bg-orange-950/90 border-orange-600/70 text-orange-300',
      'Prime Video': 'bg-sky-950/90 border-sky-500/70 text-sky-300',
      'Freeform': 'bg-purple-950/90 border-purple-600/70 text-purple-300',
      'One Shot': 'bg-teal-950/90 border-teal-600/70 text-teal-300',
      'Fox': 'bg-amber-950/90 border-amber-600/70 text-amber-300',
      'Sony': 'bg-blue-950/90 border-blue-600/70 text-blue-300',
      'Other': 'bg-zinc-900 border-zinc-700 text-zinc-400',
    };
    const style = studioStyles[studio] || 'bg-zinc-900 border-zinc-700 text-zinc-400';
    return (
      <span className={`text-[10px] font-black font-title tracking-wider uppercase px-2 py-0.5 rounded border ${style} select-none shadow-sm`}>
        {studio}
      </span>
    );
  };

  const getFormatLabel = (m: (typeof allMedia)[0]) => {
    if (m.type === 'series') return 'TV SERIES';
    if (m.type === 'oneshot') return 'SHORT FILM';
    if (m.type === 'special') return 'SPECIAL';
    return 'MOVIE';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-wider flex items-center gap-3 font-title uppercase">
          <Clapperboard className="w-8 h-8 text-[#e62429]" />
          <span>MOVIES, SERIES & SHORTS</span>
        </h1>
        <p className="text-sm text-zinc-400 mt-1 font-din">
          Complete production archive of Marvel Studios and Marvel Television releases comprising the official timeline.
        </p>
      </div>

      {/* Filter & Sort Control Center */}
      <div className="bg-[#141414] p-5 rounded-xl border border-[#27272a] shadow-xl mb-8 space-y-4 font-din">
        
        {/* Search & Sort Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-between">
          
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, phase, or description..."
              className="w-full bg-[#0a0a0a] border border-[#2f2f2f] rounded-lg pl-10 pr-9 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#e62429] font-din"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort Selector */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#0a0a0a] border border-[#2f2f2f] text-zinc-200 text-xs font-bold font-title tracking-wider rounded-lg pl-8 pr-8 py-2 focus:outline-none focus:border-[#e62429] cursor-pointer hover:border-zinc-500 transition-colors uppercase appearance-none"
            >
              {sortOptions.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label}
                </option>
              ))}
            </select>
            <ArrowUpDown className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#e62429] pointer-events-none" />
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500 pointer-events-none" />
          </div>

          {/* Year Dropdown */}
          <div className="relative">
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="bg-[#0a0a0a] border border-[#2f2f2f] text-zinc-200 text-xs font-bold font-title tracking-wider rounded-lg pl-8 pr-8 py-2 focus:outline-none focus:border-[#e62429] cursor-pointer hover:border-zinc-500 transition-colors uppercase appearance-none"
            >
              <option value="all">ALL YEARS</option>
              {availableYears.filter((y) => y !== 'all').map((y) => (
                <option key={y} value={y}>
                  YEAR {y}
                </option>
              ))}
            </select>
            <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-amber-400 pointer-events-none" />
            <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500 pointer-events-none" />
          </div>

          {hasActiveFilters && (
            <button
              onClick={resetMediaFilters}
              className="px-3 py-2 rounded-lg text-xs font-bold font-title tracking-wider uppercase bg-[#222222] hover:bg-[#2e2e2e] text-zinc-300 hover:text-white transition-colors border border-[#333333] cursor-pointer whitespace-nowrap"
            >
              RESET
            </button>
          )}
        </div>

        {/* Formats & Visual Technique Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 pt-2 border-t border-[#222222]">
          
          {/* Format Selection */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2 font-title">
              <Film className="w-3.5 h-3.5 text-sky-400" />
              <span>FORMAT:</span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              {formats.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSelectedFormat(f.id)}
                  className={`px-3 py-1 rounded text-xs font-bold font-title tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                    selectedFormat === f.id
                      ? 'bg-sky-600 text-white shadow-md'
                      : 'bg-[#000000] text-zinc-400 border border-[#2a2a2a] hover:text-white hover:border-zinc-500 hover:bg-[#181818]'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Visual Technique Selection */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2 font-title">
              <Palette className="w-3.5 h-3.5 text-purple-400" />
              <span>VISUAL TECHNIQUE:</span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5">
              {visualTypes.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVisualType(v.id)}
                  className={`px-3 py-1 rounded text-xs font-bold font-title tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                    selectedVisualType === v.id
                      ? 'bg-purple-700 text-white shadow-md'
                      : 'bg-[#000000] text-zinc-400 border border-[#2a2a2a] hover:text-white hover:border-zinc-500 hover:bg-[#181818]'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Phase Filter Chips */}
        <div className="pt-2 border-t border-[#222222]">
          <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2 font-title">
            <Layers className="w-3.5 h-3.5 text-[#e62429]" />
            <span>FILTER BY PRODUCTION PHASE:</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {phases.map((p) => (
              <button
                key={p}
                onClick={() => setSelectedPhase(p)}
                className={`px-2.5 py-1 rounded text-xs font-bold font-title tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                  selectedPhase === p
                    ? 'bg-[#e62429] text-white shadow-md'
                    : 'bg-[#000000] text-zinc-400 border border-[#2a2a2a] hover:text-white hover:border-zinc-500 hover:bg-[#181818]'
                }`}
              >
                {p === 'all' ? 'ALL PHASES' : p}
              </button>
            ))}
          </div>
        </div>

        {/* Universe / Multiverse Filter Chips */}
        <div className="pt-2 border-t border-[#222222]">
          <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2 font-title">
            <Globe2 className="w-3.5 h-3.5 text-sky-400" />
            <span>FILTER BY UNIVERSE / REALITY:</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {universes.map((u) => (
              <button
                key={u.id}
                onClick={() => setSelectedUniverse(u.id)}
                className={`px-2.5 py-1 rounded text-xs font-bold font-title tracking-wider uppercase transition-all cursor-pointer whitespace-nowrap ${
                  selectedUniverse === u.id
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'bg-[#000000] text-zinc-400 border border-[#2a2a2a] hover:text-white hover:border-zinc-500 hover:bg-[#181818]'
                }`}
              >
                {u.label}
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* Results Header Count */}
      <div className="flex items-center justify-between text-xs text-zinc-400 mb-4 px-1 font-din">
        <span>Showing <strong className="text-white font-title">{filteredAndSortedMedia.length}</strong> titles</span>
        <span className="text-zinc-500">Sorted by: <strong className="text-zinc-300 uppercase font-title">{sortOptions.find(s => s.id === sortBy)?.label}</strong></span>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredAndSortedMedia.map((m) => {
          const totalEvents = mediaTimelineStats.counts[m.id] || 0;
          const earliestEra = mediaTimelineStats.firstEraTitle[m.id];
          return (
            <div
              key={m.id}
              onClick={() => setSelectedMediaId(m.id)}
              className="group relative rounded-xl bg-[#141414] border border-[#27272a] hover:border-[#e62429] hover:bg-[#181818] transition-all p-5 flex flex-col justify-between shadow-xl cursor-pointer"
            >
              <div>
                {/* Top Badge Row (Format + Visual Technique + Release Year) */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {renderMediaIcon(m)}
                    
                    {/* Format Badge: Movie vs TV Series vs Short */}
                    <span className="text-[10px] font-bold font-title tracking-widest uppercase px-2 py-0.5 rounded bg-[#000000] border border-[#2f2f2f] text-zinc-300">
                      {getFormatLabel(m)}
                    </span>

                    {/* Technique Badge: Animation vs Live-Action */}
                    {m.isAnimated ? (
                      <span className="text-[10px] font-bold font-title tracking-widest uppercase px-2 py-0.5 rounded bg-purple-950/90 border border-purple-600 text-purple-300 flex items-center gap-1">
                        <Palette className="w-2.5 h-2.5" />
                        ANIMATION
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold font-title tracking-widest uppercase px-2 py-0.5 rounded bg-[#0a0a0a] border border-[#262626] text-zinc-500">
                        LIVE-ACTION
                      </span>
                    )}
                    {/* Studio / Channel Badge */}
                    {renderStudioBadge(m.studio)}
                  </div>

                  <span className="text-xs font-semibold text-zinc-400 flex items-center gap-1 font-din shrink-0">
                    <Calendar className="w-3 h-3 text-zinc-500" />
                    {m.releaseYear}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#e62429] transition-colors mb-1.5 font-title uppercase tracking-wide">
                  {m.title}
                </h3>

                {/* Phase & Chronological Era */}
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-[11px] font-bold text-[#e62429] font-title tracking-wider uppercase">
                    {m.phase}
                  </span>
                  {earliestEra && (
                    <span className="text-[10px] font-bold font-title tracking-wider uppercase px-2 py-0.5 rounded bg-[#000000] border border-[#2d2d2d] text-amber-400 flex items-center gap-1">
                      <Hourglass className="w-3 h-3" />
                      MCU ERA: {earliestEra}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed mb-4 font-din">
                  {m.description}
                </p>
              </div>

              {/* Footer Events Count */}
              <div className="pt-3 border-t border-[#242424] flex items-center justify-between text-xs font-din">
                <span className="text-zinc-500 text-[11px] uppercase font-semibold">TIMELINE PRESENCE</span>
                <span className="font-bold text-[#e62429] flex items-center gap-1 text-xs">
                  <Clock className="w-3 h-3" />
                  {totalEvents} {totalEvents === 1 ? 'event' : 'events'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
