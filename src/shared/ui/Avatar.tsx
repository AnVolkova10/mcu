import { useState } from 'react';
import { alpha } from '@/domain/colors';
import { cn } from '@/shared/lib/cn';
import { tmdbImage } from '@/shared/lib/tmdb';

interface AvatarProps {
  label: string;
  color: string;
  /** Path on TMDB. Without one, or if it fails to load, the monogram takes its place. */
  photo?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizes = { sm: 'size-7 text-[10px]', md: 'size-10 text-sm', lg: 'size-14 text-lg', xl: 'size-24 text-3xl' };

const initials = (label: string) =>
  label
    .replace(/[^A-Za-z0-9\s-]/g, '')
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join('');

/** Photo tinted in the character's color, so every portrait reads as part of one set; a monogram otherwise. */
export function Avatar({ label, color, photo, size = 'md', className }: AvatarProps) {
  const [failed, setFailed] = useState<string>();

  if (photo && photo !== failed) {
    return (
      <span aria-hidden className={cn('relative isolate inline-flex shrink-0 select-none overflow-hidden rounded-full', sizes[size], className)} style={{ boxShadow: `0 0 0 2px ${color}` }}>
        <img src={tmdbImage('w185', photo)} alt="" loading="lazy" decoding="async" onError={() => setFailed(photo)} className="size-full object-cover object-[50%_18%] contrast-115 grayscale" />
        <span className="absolute inset-0 opacity-90 mix-blend-color" style={{ backgroundColor: color }} />
      </span>
    );
  }

  return (
    <span
      className={cn('inline-flex shrink-0 select-none items-center justify-center rounded-full font-bold tracking-wide ring-1', sizes[size], className)}
      style={{
        background: `radial-gradient(circle at 30% 25%, ${alpha(color, 0.55)}, ${alpha(color, 0.18)} 70%)`,
        color: 'white',
        boxShadow: `inset 0 0 0 1px ${alpha(color, 0.6)}`,
      }}
      aria-hidden
    >
      {initials(label)}
    </span>
  );
}
