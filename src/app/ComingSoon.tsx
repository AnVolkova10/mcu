import { href } from './router';

/** Temporary page for sections that are rebuilt in the next blocks of the v3 work. */
export function ComingSoon({ title, block, description }: { title: string; block: number; description: string }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent-strong">v3 · block {block}</p>
      <h1 className="mt-2 font-display text-7xl leading-none">{title}</h1>
      <p className="mx-auto mt-4 max-w-xl text-ink-muted">{description}</p>
      <a href={href('timeline')} className="mt-8 inline-block rounded-full border border-line px-5 py-2 text-sm font-semibold text-ink-muted hover:border-line-strong hover:text-ink">
        Back to the timeline
      </a>
    </div>
  );
}
