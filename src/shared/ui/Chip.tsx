import type { ReactNode } from 'react';
import { cn } from '@/shared/lib/cn';

interface ChipProps {
  children: ReactNode;
  /** Shows a colored dot before the label. */
  color?: string;
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
  title?: string;
  className?: string;
}

const base =
  'inline-flex max-w-full items-center gap-1.5 rounded-full border border-line bg-surface-2 px-2.5 py-1 text-xs font-medium leading-none text-ink-muted transition whitespace-nowrap';

/** Small label. Renders as a link when `href` is given, as a button when `onClick` is. For a filter, use `FilterButton`. */
export function Chip({ children, color, icon, href, onClick, title, className }: ChipProps) {
  const style = cn(base, (href || onClick) && 'hover:border-line-strong hover:text-ink', className);
  const content = (
    <>
      {color && <span className="size-2 shrink-0 rounded-full" style={{ backgroundColor: color }} />}
      {icon}
      <span className="truncate">{children}</span>
    </>
  );
  if (href) return <a href={href} className={style} title={title}>{content}</a>;
  if (onClick) return <button type="button" onClick={onClick} className={style} title={title}>{content}</button>;
  return <span className={style} title={title}>{content}</span>;
}
