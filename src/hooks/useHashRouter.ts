import { useEffect, useRef } from 'react';
import { useStore } from '@/store/useStore';
import {
  VALID_SCREENS,
  ParsedRoute,
  MapLocationPinPayload,
  parseHash,
  buildScreenHash,
  buildLocationHash,
} from '@/utils/routeUtils';

export {
  VALID_SCREENS,
  type ParsedRoute,
  type MapLocationPinPayload,
  parseHash,
  buildScreenHash,
  buildLocationHash,
};

// Global memory cache to seamlessly restore scroll position when returning to timeline
let savedTimelineScrollY = 0;

export function useHashRouter() {
  const activeScreen = useStore((s) => s.activeScreen);
  const setActiveScreen = useStore((s) => s.setActiveScreen);
  const setSelectedMapLocationPin = useStore((s) => s.setSelectedMapLocationPin);

  // Guards against echo loops: when hashchange triggers store update, do not reflect back to hash
  const isSyncingFromHashRef = useRef(false);
  const isInitialMountRef = useRef(true);

  // 1. Listen to native browser navigation (back/forward buttons, manual hash edits, new-tab mount)
  useEffect(() => {
    const handleHashSync = () => {
      const currentHash = window.location.hash;
      const { screen, params } = parseHash(currentHash);
      const currentStoreScreen = useStore.getState().activeScreen;

      // Remember vertical scroll position when navigating away from the timeline
      if (currentStoreScreen === 'timeline' && screen !== 'timeline') {
        savedTimelineScrollY = window.scrollY;
      }

      // If location params are present on map screen, populate selectedMapLocationPin
      if (screen === 'map' && (params.loc || params.lat || params.event)) {
        const { loc, city, country, planet, lat, lng, orbit, alt, system, event } = params;
        const coords: [number, number] | undefined =
          lat && lng && !isNaN(parseFloat(lat)) && !isNaN(parseFloat(lng))
            ? [parseFloat(lat), parseFloat(lng)]
            : undefined;

        setSelectedMapLocationPin({
          name: loc || 'Target Location',
          cityOrRegion: city,
          countryOrRealm: country,
          planet: planet,
          coordinates: coords,
          orbitType: orbit as any,
          altitudeKm: alt && !isNaN(parseFloat(alt)) ? parseFloat(alt) : undefined,
          celestialSystem: system as any,
          eventId: event,
        });
      }

      if (currentStoreScreen !== screen) {
        isSyncingFromHashRef.current = true;
        setActiveScreen(screen);
      }

      // Restore scroll position when user returns to timeline (e.g. mouse Back button)
      if (screen === 'timeline' && savedTimelineScrollY > 0) {
        requestAnimationFrame(() => {
          window.scrollTo({ top: savedTimelineScrollY, behavior: 'instant' as ScrollBehavior });
        });
      }
    };

    // If app loads without hash, establish initial canonical hash
    if (!window.location.hash || window.location.hash === '#') {
      window.history.replaceState(null, '', '#/timeline');
    } else {
      handleHashSync();
    }

    // Listen to native browser navigation (mouse back/forward buttons, hash changes)
    window.addEventListener('hashchange', handleHashSync);
    window.addEventListener('popstate', handleHashSync);

    return () => {
      window.removeEventListener('hashchange', handleHashSync);
      window.removeEventListener('popstate', handleHashSync);
    };
  }, [setActiveScreen, setSelectedMapLocationPin]);

  // 2. Synchronize store-driven screen changes back to URL hash
  useEffect(() => {
    // Never overwrite URL hash on initial mount (hash in URL is ground truth for new tabs)
    if (isInitialMountRef.current) {
      isInitialMountRef.current = false;
      return;
    }

    // If this store update was triggered by handleHashSync, skip updating hash
    if (isSyncingFromHashRef.current) {
      isSyncingFromHashRef.current = false;
      return;
    }

    const { screen } = parseHash(window.location.hash);
    if (screen !== activeScreen) {
      if (screen === 'timeline') {
        savedTimelineScrollY = window.scrollY;
      }
      window.location.hash = buildScreenHash(activeScreen);
    }
  }, [activeScreen]);
}
