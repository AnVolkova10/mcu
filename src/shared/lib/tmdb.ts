/** Image on TMDB's CDN. The catalogs only store its path. */
export const tmdbImage = (size: 'w185' | 'w342' | 'w500', path: string) => `https://image.tmdb.org/t/p/${size}${path}`;
