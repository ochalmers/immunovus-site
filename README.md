# Immunovus

V1 company website for Immunovus — a computational biology company making immune complexity predictable.

This is a company site, not a product site for ImmuneID. ImmuneID appears later in the narrative as the computational engine behind the Immunovus approach.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Inter (Helix Design System)
- Immunovus brand palette: aqua `#75FAF5`, teal shades `#5EC8C4`–`#183231`, greys `#EEEEEE`–`#303030`

## Run locally

```bash
cd /Users/oli/Builds/immunovus
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project shape

```
src/
  app/            layout + homepage
  content/        site copy (edit here first)
  components/
    brand/        logo
    site/         header + footer
    sections/     homepage sections
    visuals/      network / scientific motifs
    ui/           layout primitives
```

## Pages

| Route | Content |
|---|---|
| `/` | Hero, the challenge, three customer audiences |
| `/approach` | Approach principles and how it works |
| `/technology` | ImmuneID |
| `/applications` | Drug discovery, personalized medicine, immune health |
| `/validation` | Model → simulate → identify → validate |
| `/company` | Team, scientific foundation, why the work matters |
| `/contact` | Conversation form |

Copy lives in `src/content/site.ts`.

## Brand

- Typeface: **Inter** from the Helix Design System (`src/fonts/`)
- Logo: `public/brand/immunovus-logo.png` (official lockup)

## Design notes

- Dark visual system, large negative space, restrained cyan accent
- Motion is used to show complexity becoming structured (`prefers-reduced-motion` respected)
- Tokens follow Helix primitives so later Helix artifacts stay aligned with the brand
