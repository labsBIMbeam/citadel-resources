# Citadel Resources

Static Astro site for the Citadel Resources rebuild.

The site is now structured around:

- an ebook reader for the `Building the Future` draft
- a curated research map for public source lanes
- an Open Hardware section for OSE/GVCS outbuilding tools
- a Craft Library for earth, wood, hand skills, open building, and appropriate tech sources
- Cypherspace guild-builder visual direction integrated into the static assets

Prepared but hidden from the public website until ready:

- RPG-style guild sections for focused working groups
- read-only Nostr article and note feeds

No trackers, no database, no proprietary runtime dependencies.

## Stack

- Astro 4
- TypeScript
- Plain CSS

## Local Development

```bash
npm install
npm run dev
npm run check
npm run build
```

On Windows PowerShell, use `npm.cmd` if script execution policy blocks `npm.ps1`:

```bash
npm.cmd run dev
npm.cmd run check
npm.cmd run build
```

## Runnable Requirements

To run locally:

- Node.js 20+
- npm dependencies installed with `npm install`
- local dev server from `npm.cmd run dev`

The site is static. It does not need a database or server backend for the current reader, hardware
index, or craft library.

## Hidden Nostr Configuration

Nostr support is kept in the repo, but the public website currently hides it. When ready, copy
`.env.example` to `.env` and set your own stack:

```bash
PUBLIC_NOSTR_RELAYS=wss://your-relay.example,wss://relay.damus.io
PUBLIC_NOSTR_AUTHOR=your_32_byte_hex_pubkey
```

- `PUBLIC_NOSTR_RELAYS` is a comma-separated relay list.
- `PUBLIC_NOSTR_AUTHOR` is optional.
- Long-form Nostr articles should use kind `30023`.
- Guild notes should use kind `1` and kind `1111`.

## Content Model

Edit [src/data/resources.ts](src/data/resources.ts) for:

- book reader chapters
- research tracks and source links
- hidden guild definitions
- open hardware tools
- craft library sources
- hidden Nostr tags, relays, and client links
- contact links

## Project Layout

```text
src/
  components/   Header, Footer, shared sections
  data/         resources.ts
  layouts/      Base.astro
  pages/        index.astro
  styles/       global.css
public/
  images/       recovered visual assets
```

## Deploy

The build output is static HTML/CSS/JS in `dist/`.

```bash
npm run build
```

Deploy `dist/` to any static host.

## Recovery context

The old WordPress site content was recovered from `old/citadel-resources.com.zip` (filesystem only, no DB)
and Wayback Machine snapshots. Full inventory in `RECOVERED_CONTENT.md`.

## License

MIT.
