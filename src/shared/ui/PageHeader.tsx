import type { ReactNode } from 'react';

interface PageHeaderProps {
  kicker: string;
  title: string;
  children?: ReactNode;
}

/** Opening of every section: small label, big display title, one line of context beside it on wide screens. */
export function PageHeader({ kicker, title, children }: PageHeaderProps) {
  return (
    <header className="pt-6 lg:flex lg:items-end lg:justify-between lg:gap-12">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-strong">{kicker}</p>
        <h1 className="mt-1 font-display text-6xl leading-[0.9]">{title}</h1>
      </div>
      {children && <p className="mt-3 max-w-2xl text-ink-muted lg:mt-0 lg:max-w-lg lg:pb-1 lg:text-right lg:text-sm lg:leading-6">{children}</p>}
    </header>
  );
}
