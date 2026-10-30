import { alpha } from '@/domain/colors';
import { cn } from '@/shared/lib/cn';

interface AvatarProps {
  label: string;
  color: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = { sm: 'size-7 text-[10px]', md: 'size-10 text-sm', lg: 'size-16 text-xl' };

const initials = (label: string) =>
  label
    .replace(/[^A-Za-z0-9\s-]/g, '')
    .split(/[\s-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join('');

/** Monogram in the character's color. */
export function Avatar({ label, color, size = 'md', className }: AvatarProps) {
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
