import type { ReactNode } from 'react';
import type { Stone } from '@/domain/catalog';
import { alpha, readableOn } from '@/domain/colors';
import type { StoneId } from '@/domain/schema';
import { cn } from '@/shared/lib/cn';

/** Drawn on a 24-unit grid: the Tesseract's cube, the Scepter's waves, the Aether's swirl, the Orb's bolt, Agamotto's eye and the flame of Vormir. */
const GLYPHS: Record<StoneId, ReactNode> = {
  space: (
    <>
      <path d="M12 2.6 20.2 7.3v9.4L12 21.4l-8.2-4.7V7.3z" />
      <path d="M3.8 7.3 12 12l8.2-4.7M12 12v9.4" />
    </>
  ),
  mind: (
    <>
      <circle cx="12" cy="12" r="2.3" fill="currentColor" stroke="none" />
      <path d="M8 8a5.7 5.7 0 0 0 0 8M16 8a5.7 5.7 0 0 1 0 8M4.9 4.9a10 10 0 0 0 0 14.2M19.1 4.9a10 10 0 0 1 0 14.2" />
    </>
  ),
  reality: <path d="M12.4 12.2c-.9-.7-.1-2.1 1.2-1.9 2 .3 2.7 3 .9 4.5-2.3 2-6.2.8-6.9-2.4-.8-3.7 2.6-7.2 6.6-6.5 4.8.8 7 6.5 4.1 10.6-3 4.3-9.3 4.9-13.3 1.2" />,
  power: <path d="M13.6 2.4 5.2 13.4h5.3l-1.1 8.2 8.8-11.5h-5.5z" fill="currentColor" stroke="none" />,
  time: (
    <>
      <path d="M2.3 12S6.3 5.3 12 5.3 21.7 12 21.7 12 17.7 18.7 12 18.7 2.3 12 2.3 12z" />
      <circle cx="12" cy="12" r="3.3" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  soul: <path d="M12 2.6c.5 3.5 6.1 6.2 6.1 11.7a6.1 6.1 0 0 1-12.2 0c0-2.6 1.3-4.2 2.7-5.4.1 1.7.8 2.8 1.9 3.3.2-3.4.2-6.7 1.5-9.6z" />,
};

/** A gem turns with the card it sits on (`group`); its drawing turns the other way, so it always stays upright. */
export function StoneGem({ stone, className }: { stone: Stone; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn('grid size-16 shrink-0 rotate-45 place-items-center rounded-2xl transition duration-300 group-hover:rotate-[60deg]', className)}
      style={{ background: `linear-gradient(135deg, ${readableOn(stone.color)}, ${stone.color})`, boxShadow: `0 0 36px ${alpha(stone.color, 0.65)}` }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-2/3 -rotate-45 text-white drop-shadow-[0_0_3px_rgb(255_255_255/0.9)] transition duration-300 group-hover:-rotate-[60deg]"
      >
        {GLYPHS[stone.id]}
      </svg>
    </span>
  );
}
