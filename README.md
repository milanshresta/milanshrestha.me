# milanshrestha.me

A fresh Next.js (App Router) + TypeScript build for Milan's portfolio. No Tailwind, no UI kit — hand-written CSS so the site actually looks like *this* project (black/off-white ground, one red accent, Archivo + Source Serif 4 + IBM Plex Mono), not a generic template.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. (Google Fonts load at runtime via a `<link>` tag in `src/app/layout.tsx` — needs a normal internet connection, which your machine has and this build sandbox didn't.)

## Structure

- `src/app/page.tsx` — homepage (hero, selected work, philosophy, visual experiments teaser, about snippet)
- `src/app/work/sworp/`, `/intense-team/`, `/vrit-tech/` — the three case studies
- `src/app/about/page.tsx` — full About page
- `src/components/Nav.tsx`, `Footer.tsx` — shared chrome
- `src/app/globals.css` — the whole design system (colors, type, spacing) as CSS custom properties. Both light and dark mode are handled.

## Deploying to milanshrestha.me

Easiest path is Vercel (built by the same team as Next.js, free tier is plenty for this):

1. Push this folder to a GitHub repo.
2. Import it at vercel.com → New Project.
3. In the project's Domains settings, add `milanshrestha.me` and follow the DNS instructions it gives you (usually an A record or CNAME at your domain registrar).
4. Every push to `main` auto-deploys.

## Before this goes live — open items

Things I could not fill in for you, either because I don't know the real answer or because I don't want to invent one:

1. **Contact email + LinkedIn** — `src/components/Footer.tsx` has `hello@milanshrestha.me` and a placeholder LinkedIn URL, both marked with `TODO(Milan)` comments in the code. Swap in the real ones.
2. **Every image** — there are no real screenshots, logos, or photos yet (I have no access to your Figma files or exports from here). Every `placeholder-media` dashed box is exactly that — a slot, not a stand-in image. Drop real files into `public/` and swap the boxes for `<Image>` components once you've got them.
3. **SWORP & Intense Team, "what I'd do differently"** — I left these as visible, honest open notes on the pages rather than invent a reflection you haven't actually had. Worth 10 minutes of real thought before launch — they're two of the more human moments on the site.
4. **Vrit Tech case study** — this one's thin because the handbook is thin on it. It needs the actual brief, decisions, and outcome from you to become a real case study instead of a craft showcase.
5. **"Outside of design" on the About page** — kept to a single honest line on purpose (per your own note: only use running/cooking/travel if it actually sounds like you, not as filler). Worth expanding once you've actually answered those reflection questions in the handbook.
6. **Visual identity questions still open** — layout character, imagery style, motion, texture (handbook section 08). What's built here is a reasonable interpretation of "black-and-white, poster-inspired, Vignelli/Weingart-influenced" — push back on any of it that doesn't feel like you.

## Design decisions, for reference

- **Palette**: `--bg #FAFAF8`, `--ink #15161A`, `--accent #C81E2E` (a Vignelli red — deliberate, not decorative) — see `src/app/globals.css` for the full token set, light and dark.
- **Type**: Archivo (display/headings), Source Serif 4 (body), IBM Plex Mono (labels, metadata, eyebrows).
- **No stock UI patterns** — the "what I believe" grid, the proof callouts, and the case-study block layout were built for this content specifically.
