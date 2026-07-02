# Citadel Resources

A static, dark-themed curated index for sovereign builders — tribes, talks, podcasts, articles, books.
Inspired by [bitcoin-resources.com](https://bitcoin-resources.com/) and [nostr-resources.com](https://nostr-resources.com/).

Built with **Astro**. No WordPress, no tracking, no database.

## Stack

- [Astro 4](https://astro.build) — static-site generator
- Plain CSS (no framework) — `src/styles/global.css`
- Content lives in `src/data/resources.ts` — add a link, get a card

## Local development

```bash
# 1. Install Node.js (>= 18.17) — via winget on Windows
winget install OpenJS.NodeJS.LTS

# 2. Install deps
npm install

# 3. Dev server (hot reload at http://localhost:4321)
npm run dev

# 4. Production build
npm run build

# 5. Preview the build
npm run preview
```

## Adding a resource

Open `src/data/resources.ts` and append to the relevant array:

```ts
tribes.push({
  name: 'New Tribe',
  url: 'https://example.com',
  blurb: 'One-liner about what they do.',
  image: '/images/new-tribe.png', // drop the file in public/images/
});
```

Video → push to `videos` with `youtubeId`.
Podcast → push to `podcasts` with a Spotify `{ kind, id }`.

## Project layout

```
src/
  components/   # Astro components (Hero, Section, ResourceCard, …)
  data/         # resources.ts — single source of truth for all links
  layouts/      # Base.astro — <html>/<head>
  pages/        # index.astro — homepage
  styles/       # global.css — dark theme + bitcoin-orange accent
public/         # static assets served as-is (images, favicon)
old/            # (gitignored) original WordPress backup
assets/         # recovered images + recovery notes
```

## Deploy

The build output is plain static HTML/CSS/JS in `dist/`. Deploy anywhere:

- **GitHub Pages** — push to `main`, enable Pages on `dist/` via GH Action
- **Cloudflare Pages** / **Netlify** / **Vercel** — connect the repo, framework auto-detects as Astro

## Recovery context

The old WordPress site content was recovered from `old/citadel-resources.com.zip` (filesystem only, no DB)
and Wayback Machine snapshots. Full inventory in `RECOVERED_CONTENT.md`.

## The street starts here

`join.citadel-resources.com` hosts the **Book of the Street** — the character lore viewer for
the 30 members of the 600 Billion council. Sibling projects:

- [PalaceOfCulture](https://github.com/600-000-000-000/PalaceOfCulture) — the 3D world those
  characters (and Bitcoin timelocks) live in.
- [600.wtf](https://600.wtf) — the collective's live site.

## License

MIT — see `LICENSE`.
