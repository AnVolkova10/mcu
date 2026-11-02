import { useState } from 'react';
import { alpha } from '@/domain/colors';
import { cn } from '@/shared/lib/cn';

interface AvatarProps {
  label: string;
  color: string;
  /** Images to try, best first. They live on other sites, so if none loads the monogram takes their place. */
  sources?: readonly string[];
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

/** Round image with a ring in the character's color, or a monogram. */
export function Avatar({ label, color, sources = [], size = 'md', className }: AvatarProps) {
  const [failed, setFailed] = useState<readonly string[]>([]);
  const source = sources.find((candidate) => !failed.includes(candidate));

  if (source) {
    return (
      <span aria-hidden className={cn('inline-flex shrink-0 select-none overflow-hidden rounded-full bg-surface-2', sizes[size], className)} style={{ boxShadow: `0 0 0 2px ${color}` }}>
        <img src={source} alt="" loading="lazy" decoding="async" onError={() => setFailed((list) => [...list, source])} className="size-full object-cover object-[50%_12%]" />
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
