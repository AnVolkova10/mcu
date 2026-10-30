import { useState } from 'react';
import type { Production } from '@/domain/catalog';
import { alpha } from '@/domain/colors';
import { cn } from '@/shared/lib/cn';

const IMAGE_BASE = 'https://image.tmdb.org/t/p';

interface PosterProps {
  production: Production;
  /** TMDB width: w342 for grids, w500 for the detail panel. */
  size?: 'w342' | 'w500';
  className?: string;
}

/** Official poster from TMDB, or a designed card for productions that have none. */
export function Poster({ production, size = 'w342', className }: PosterProps) {
  const [failed, setFailed] = useState(false);
  const frame = cn('relative aspect-[2/3] w-full overflow-hidden rounded-xl bg-surface-2', className);

  if (production.poster && !failed) {
    return (
      <div className={frame}>
        <img
          src={`${IMAGE_BASE}/${size}${production.poster}`}
          alt={`${production.title} poster`}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="size-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className={cn(frame, 'flex flex-col justify-end p-3')} style={{ background: `linear-gradient(160deg, ${alpha(production.color, 0.5)}, var(--color-surface-2) 70%)` }}>
      <div aria-hidden className="halftone absolute inset-0 [mask-image:linear-gradient(to_top,transparent,black)]" />
      <p className="relative font-display text-2xl leading-none text-ink">{production.title}</p>
      <p className="relative mt-1 text-[10px] font-bold uppercase tracking-[0.16em] text-ink-muted">{production.kind}</p>
    </div>
  );
}
