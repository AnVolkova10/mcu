/**
 * Archive markup, used in event paragraphs:
 *   [Label](character-id)   link to a character dossier
 *   [Label](stone:space)    link to an Infinity Stone
 *   [Label](object:vibranium-ax)  link to an object
 *   **bold**   *italic*   ==key item==
 *   \[ \] \* \= escape a literal character
 */

export type LinkTarget = { kind: 'character' | 'stone' | 'object'; id: string };

export type Token =
  | { type: 'text'; value: string }
  | { type: 'strong' | 'em' | 'mark'; children: Token[] }
  | { type: 'link'; label: string; target: LinkTarget };

type Delimiter = '**' | '*' | '==';

const parseTarget = (raw: string): LinkTarget => {
  const [prefix, rest] = raw.includes(':') ? raw.split(':', 2) : ['', raw];
  return prefix === 'stone' || prefix === 'object' ? { kind: prefix, id: rest } : { kind: 'character', id: raw.trim() };
};

function parseSequence(src: string, start: number, close: Delimiter | null): { tokens: Token[]; end: number; closed: boolean } {
  const tokens: Token[] = [];
  let text = '';
  const flush = () => {
    if (text) tokens.push({ type: 'text', value: text });
    text = '';
  };
  let i = start;
  while (i < src.length) {
    if (close && src.startsWith(close, i) && !(close === '*' && src.startsWith('**', i))) {
      flush();
      return { tokens, end: i + close.length, closed: true };
    }
    const ch = src[i];
    if (ch === '\\' && i + 1 < src.length) {
      text += src[i + 1];
      i += 2;
      continue;
    }
    if (ch === '[') {
      const labelEnd = findUnescaped(src, ']', i + 1);
      if (labelEnd > -1 && src[labelEnd + 1] === '(') {
        const targetEnd = src.indexOf(')', labelEnd + 2);
        if (targetEnd > -1) {
          flush();
          tokens.push({ type: 'link', label: unescape(src.slice(i + 1, labelEnd)), target: parseTarget(src.slice(labelEnd + 2, targetEnd)) });
          i = targetEnd + 1;
          continue;
        }
      }
    }
    const open: Delimiter | null = src.startsWith('**', i) ? '**' : src.startsWith('==', i) ? '==' : ch === '*' ? '*' : null;
    if (open && open !== close) {
      const inner = parseSequence(src, i + open.length, open);
      if (inner.closed && inner.tokens.length) {
        flush();
        tokens.push({ type: open === '**' ? 'strong' : open === '*' ? 'em' : 'mark', children: inner.tokens });
        i = inner.end;
        continue;
      }
    }
    text += ch;
    i++;
  }
  flush();
  return { tokens, end: i, closed: false };
}

function findUnescaped(src: string, char: string, from: number): number {
  for (let i = from; i < src.length; i++) {
    if (src[i] === '\\') i++;
    else if (src[i] === char) return i;
  }
  return -1;
}

const unescape = (s: string) => s.replace(/\\(.)/g, '$1');

export function parseMarkup(src: string): Token[] {
  return parseSequence(src, 0, null).tokens;
}

const tokensToText = (tokens: Token[]): string =>
  tokens.map((t) => (t.type === 'text' ? t.value : t.type === 'link' ? t.label : tokensToText(t.children))).join('');

export const toPlainText = (src: string): string => tokensToText(parseMarkup(src));

/** Every link target found in a paragraph, in order of appearance. */
export function extractLinks(src: string): LinkTarget[] {
  const found: LinkTarget[] = [];
  const walk = (tokens: Token[]) =>
    tokens.forEach((t) => {
      if (t.type === 'link') found.push(t.target);
      else if (t.type !== 'text') walk(t.children);
    });
  walk(parseMarkup(src));
  return found;
}
