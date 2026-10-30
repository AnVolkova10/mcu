import type { ReactNode } from 'react';

interface PageHeaderProps {
  kicker: string;
  title: string;
  children?: ReactNode;
}

/** Opening of every section: small label, big display title, one line of context. */
export function PageHeader({ kicker, title, children }: PageHeaderProps) {
  return (
    <header className="pt-10">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-strong">{kicker}</p>
      <h1 className="mt-1 font-display text-6xl leading-[0.9] sm:text-7xl">{title}</h1>
      {children && <p className="mt-3 max-w-2xl text-ink-muted">{children}</p>}
    </header>
  );
}
