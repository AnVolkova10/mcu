import { useState } from 'react';
import { alpha } from '@/domain/colors';
import { cn } from '@/shared/lib/cn';

interface AvatarProps {
  color: string;
  /** Images to try, best first. They live on other sites, so if none loads a silhouette takes their place. */
  sources?: readonly string[];
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizes = { sm: 'size-7', md: 'size-10', lg: 'size-14', xl: 'size-24' };

/** Head and shoulders in shadow, drawn on a 40×40 grid and cut by the round frame. */
function Silhouette() {
  const fill = alpha('#05060a', 0.55);
  return (
    <svg viewBox="0 0 40 40" className="size-full" aria-hidden>
      <circle cx="20" cy="15.5" r="7.2" fill={fill} />
      <path d="M5.5 41 C6 31.5 12 26.2 20 26.2 C28 26.2 34 31.5 34.5 41 Z" fill={fill} />
    </svg>
  );
}

/** Round image with a ring in the character's color, or a silhouette when there is none. */
export function Avatar({ color, sources = [], size = 'md', className }: AvatarProps) {
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
      className={cn('inline-flex shrink-0 select-none overflow-hidden rounded-full', sizes[size], className)}
      style={{
        background: `radial-gradient(circle at 30% 25%, ${alpha(color, 0.55)}, ${alpha(color, 0.18)} 70%)`,
        boxShadow: `inset 0 0 0 1px ${alpha(color, 0.6)}`,
      }}
      aria-hidden
    >
      <Silhouette />
    </span>
  );
}
