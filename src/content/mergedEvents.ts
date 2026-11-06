// Content of the MCU Archive. See docs/CONTENT_GUIDE.md before editing.

/**
 * Events joined into another one: the old full id leads to the id of the event that absorbed it.
 * Saved events, read marks and shared links follow it. An entry is never removed.
 */
export const mergedEvents: Record<string, string> = {
  'incredible-hulk-tas-s1.hulk-iron-man-thing': 'incredible-hulk-tas-s1.zzzax-hoover-dam',
  'incredible-hulk-tas-s1.ghost-rider-chicago': 'incredible-hulk-tas-s1.zzzax-hoover-dam',
  'incredible-hulk-tas-s1.sasquatch-canada': 'incredible-hulk-tas-s1.zzzax-hoover-dam',
  'incredible-hulk-tas-s1.thor-detroit-gamma-plague': 'incredible-hulk-tas-s1.zzzax-hoover-dam',
  'incredible-hulk-tas-s1.wendigo-redwoods': 'incredible-hulk-tas-s1.zzzax-hoover-dam',
  'incredible-hulk-tas-s2.strange-dark-hulk': 'incredible-hulk-tas-s2.she-hulk-reunion',
  'incredible-hulk-tas-s2.mr-fixit-chicago': 'incredible-hulk-tas-s2.she-hulk-reunion',
  'incredible-hulk-tas-s2.fashion-warriors-miami': 'incredible-hulk-tas-s2.she-hulk-reunion',
  'incredible-hulk-tas-s2.doom-asteroids-hollywood': 'incredible-hulk-tas-s2.she-hulk-reunion',
  'incredible-hulk-tas-s2.lost-village-anavrin': 'incredible-hulk-tas-s2.she-hulk-reunion',
};
