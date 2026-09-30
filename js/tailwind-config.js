/* ============================================================
   I-TOUCH MASSAGE SPA CLINIC — Tailwind Configuration
   Loaded AFTER the Tailwind CDN script in index.html.

   ---- Brand palette extracted from img/itouch-logo.jpg ----
   Logo bg   : near-black            -> body canvas
   Bronze    : #A87818 (extracted)   -> primary accent
   Gold      : #C9A45C (brightened)  -> highlights / icons / hovers
   Deep gold : #6E5320 (darkened)    -> borders, subtle glows
   Cream     : #EFE8DA (warm white)  -> headings / primary text
   Sand      : #A89F8D (warm grey)   -> body copy on dark
   ============================================================ */

tailwind.config = {
  theme: {
    extend: {
      colors: {
        night:        '#050505',  /* page background           */
        charcoal:     '#121110',  /* card background           */
        'charcoal-2': '#1A1712',  /* warm charcoal (secondary) */
        bronze:       '#A87818',  /* primary accent            */
        gold:         '#C9A45C',  /* secondary accent          */
        'deep-gold':  '#6E5320',  /* muted borders             */
        cream:        '#EFE8DA',  /* heading text              */
        sand:         '#A89F8D',  /* paragraph text            */
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['Jost', 'system-ui', 'sans-serif'],
      },
    },
  },
};
