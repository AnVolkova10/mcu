/** Client for the public API of the Fandom wikis: identified and slow on purpose, one reader and not a crawler. */

export const USER_AGENT = 'mcu-archive/3.0 (personal fan project; github.com/AnVolkova10/mcu)';

const PAUSE_MS = 1500;

export const MARVEL_DATABASE = 'https://marvel.fandom.com';

/** The wiki that documents each universe. */
export const WIKIS: Record<string, string> = {
  'earth-616': 'https://marvelcinematicuniverse.fandom.com',
  'earth-10005': 'https://xmenmovies.fandom.com',
  'earth-92131': 'https://marvelanimated.fandom.com',
  'earth-62533': 'https://spidernoir.fandom.com',
};

export const pause = () => new Promise((resolve) => setTimeout(resolve, PAUSE_MS));

/** One request to the API, then a pause. If the wiki refuses, it backs off and finally stops instead of insisting. */
export async function askWiki<T>(wiki: string, params: Record<string, string>): Promise<T> {
  const url = `${wiki}/api.php?${new URLSearchParams({ format: 'json', redirects: '1', ...params })}`;
  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
    if (res.ok) {
      const body = (await res.json()) as T;
      await pause();
      return body;
    }
    for (let i = 0; i < attempt * 4; i++) await pause();
  }
  throw new Error(`${wiki} keeps refusing the request. Stopping here: do not retry in a loop.`);
}
