import { Fragment, type ReactNode } from 'react';
import { parseMarkup, type Token } from '@/domain/markup';
import { getCharacter, getObject, getStone } from '@/domain/catalog';
import { alpha, readableOn } from '@/domain/colors';
import { cn } from '@/shared/lib/cn';
import { PanelLink } from './PanelLink';

interface MarkupProps {
  text: string;
  /** Characters who die in this event: their links are struck through. */
  deaths?: ReadonlyMap<string, { presumed: boolean }>;
}

/** Renders one paragraph of archive markup. Unknown ids degrade to plain text instead of breaking. */
export function Markup({ text, deaths }: MarkupProps) {
  const render = (tokens: Token[]): ReactNode =>
    tokens.map((t, i) => {
      switch (t.type) {
        case 'text':
          return <Fragment key={i}>{t.value}</Fragment>;
        case 'strong':
          return <strong key={i} className="font-semibold text-ink">{render(t.children)}</strong>;
        case 'em':
          return <em key={i}>{render(t.children)}</em>;
        case 'mark':
          return (
            <span key={i} className="text-ink underline decoration-accent/70 decoration-2 underline-offset-[5px]">
              {render(t.children)}
            </span>
          );
        case 'link': {
          if (t.target.kind === 'stone') {
            const stone = getStone(t.target.id);
            if (!stone) return <Fragment key={i}>{t.label}</Fragment>;
            return (
              <PanelLink
                key={i}
                panel={{ kind: 'stone', id: stone.id }}
                className="rounded-md px-1.5 py-0.5 font-semibold transition hover:brightness-125"
                style={{ color: readableOn(stone.color), backgroundColor: alpha(stone.color, 0.14), boxShadow: `inset 0 0 0 1px ${alpha(stone.color, 0.35)}` }}
                title={`${stone.name} · ${stone.vessel}`}
              >
                {t.label}
              </PanelLink>
            );
          }
          if (t.target.kind === 'object') {
            const object = getObject(t.target.id);
            if (!object) return <Fragment key={i}>{t.label}</Fragment>;
            return (
              <PanelLink
                key={i}
                panel={{ kind: 'object', id: object.id }}
                className="text-ink underline decoration-2 underline-offset-[5px] transition hover:decoration-[3px]"
                style={{ textDecorationColor: object.color }}
                title={`${object.name} · ${object.kindLabel}`}
              >
                {t.label}
              </PanelLink>
            );
          }
          const character = getCharacter(t.target.id);
          if (!character) return <Fragment key={i}>{t.label}</Fragment>;
          const death = deaths?.get(character.id);
          return (
            <PanelLink
              key={i}
              panel={{ kind: 'character', id: character.id }}
              className={cn(
                'font-semibold underline-offset-4 transition hover:underline',
                death && 'line-through decoration-2',
                death?.presumed && 'opacity-80',
              )}
              style={{ color: readableOn(character.color), textDecorationColor: death ? 'var(--color-accent)' : undefined }}
              title={death ? `${character.label} (${death.presumed ? 'presumed dead' : 'dies here'})` : character.name}
            >
              {t.label}
            </PanelLink>
          );
        }
      }
    });

  return <>{render(parseMarkup(text))}</>;
}
