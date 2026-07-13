// Mirrors the CSS custom properties in app/globals.css (--ease-premium, --dur-reveal).
// Framer Motion needs numeric/array values, so these can't just reference the CSS vars directly.
export const EASE_PREMIUM: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const DUR_REVEAL_MS = 1000;
export const DUR_HOVER_MS = 300;
export const STAGGER_MS = 80;

export const LOOP_FLOAT_S = 10;
export const LOOP_AMBIENT_S = 15;
