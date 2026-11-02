/**
 * Hash router: the URL is the single source of truth for the page, its filters and the open panel.
 * Plain <a href="#/..."> links work natively (middle-click, new tab, back button).
 *
 *   #/timeline?u=earth-616&character=thor        page + filters
 *   #/timeline?open=character:thor               page + side panel
 */
import { useSyncExternalStore } from 'react';

export type PageId = 'timeline' | 'productions' | 'characters' | 'stones' | 'objects' | 'map' | 'saved' | 'archive';

export const pages: readonly PageId[] = ['timeline', 'productions', 'characters', 'stones', 'objects', 'map', 'saved', 'archive'];

export interface Route {
  page: PageId;
  /** Extra path segments, e.g. ["earth"] in #/map/earth. */
  rest: string[];
  query: URLSearchParams;
}

export type Panel = { kind: 'character' | 'production' | 'stone' | 'object' | 'location'; id: string };

const NAVIGATE_EVENT = 'archive:navigate';

let forwardPageChange = false;

function parse(hash: string): Route {
  const [path, search = ''] = hash.replace(/^#\/?/, '').split('?');
  const [first, ...rest] = path.split('/').filter(Boolean);
  const page = (pages as readonly string[]).includes(first) ? (first as PageId) : 'timeline';
  return { page, rest, query: new URLSearchParams(search) };
}

let cachedHash: string | null = null;
let cachedRoute: Route = parse('');
const snapshot = () => {
  if (window.location.hash !== cachedHash) {
    cachedHash = window.location.hash;
    cachedRoute = parse(cachedHash);
  }
  return cachedRoute;
};

const subscribe = (onChange: () => void) => {
  window.addEventListener('hashchange', onChange);
  window.addEventListener('popstate', onChange);
  window.addEventListener(NAVIGATE_EVENT, onChange);
  return () => {
    window.removeEventListener('hashchange', onChange);
    window.removeEventListener('popstate', onChange);
    window.removeEventListener(NAVIGATE_EVENT, onChange);
  };
};

export const useRoute = (): Route => useSyncExternalStore(subscribe, snapshot, snapshot);

/** Route at this instant, for event handlers that should not subscribe to changes. */
export const currentRoute = (): Route => snapshot();

export function href(page: PageId, query: Record<string, string | undefined> = {}, rest: string[] = []): string {
  const params = new URLSearchParams();
  Object.entries(query).forEach(([k, v]) => v !== undefined && v !== '' && params.set(k, v));
  const qs = params.toString().replace(/%2C/g, ',').replace(/%3A/g, ':');
  return `#/${[page, ...rest].join('/')}${qs ? `?${qs}` : ''}`;
}

interface NavigateOptions {
  replace?: boolean;
  /** Marks the new history entry as an overlay so closing it can simply go back. */
  overlay?: boolean;
}

export function navigate(to: string, { replace = false, overlay = false }: NavigateOptions = {}) {
  if (to === window.location.hash) return;
  markForward(to);
  const state = overlay ? { overlay: true } : null;
  if (replace) window.history.replaceState(state, '', to);
  else window.history.pushState(state, '', to);
  window.dispatchEvent(new Event(NAVIGATE_EVENT));
}

function markForward(to: string) {
  if (parse(to).page !== snapshot().page) forwardPageChange = true;
}

/** True once after a page change started by a link or `navigate`; false for back/forward, where the browser restores the scroll. */
export function consumeForwardPageChange(): boolean {
  const value = forwardPageChange;
  forwardPageChange = false;
  return value;
}

window.addEventListener('click', (e) => {
  if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
  const link = (e.target as Element | null)?.closest?.('a[href^="#/"]');
  if (link) markForward(link.getAttribute('href')!);
});

/** Same page and path, query params merged (undefined removes a param). */
export function withQuery(route: Route, changes: Record<string, string | undefined>): string {
  const current = Object.fromEntries(route.query.entries());
  return href(route.page, { ...current, ...changes }, route.rest);
}

// ── Side panels ───────────────────────────────────────────────────────────────

export function readPanel(route: Route): Panel | null {
  const raw = route.query.get('open');
  if (!raw) return null;
  const [kind, id] = raw.split(':');
  return ['character', 'production', 'stone', 'object', 'location'].includes(kind) && id ? { kind: kind as Panel['kind'], id } : null;
}

export const panelHref = (route: Route, panel: Panel) => withQuery(route, { open: `${panel.kind}:${panel.id}` });

export function openPanel(route: Route, panel: Panel) {
  const alreadyInPanel = Boolean(readPanel(route));
  navigate(panelHref(route, panel), { overlay: true, replace: alreadyInPanel && window.history.state?.overlay });
}

export function closePanel(route: Route) {
  if (window.history.state?.overlay) window.history.back();
  else navigate(withQuery(route, { open: undefined }), { replace: true });
}

/** Link to an event: the timeline scrolls to it and clears filters that would hide it. */
export const eventHref = (eventId: string) => href('timeline', { event: eventId });
