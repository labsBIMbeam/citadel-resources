# Citadel Resources Content And Nostr Research

Date: 2026-07-08

Purpose: working brief for the fresh `citadel-resources.com` rebuild, the `Building the
Future` reader, Nostr articles, and guild coordination.

## Current Site State

The target repo is an Astro static site.

- Homepage: `src/pages/index.astro`
- Content model: `src/data/resources.ts`
- Global styling: `src/styles/global.css`
- Nostr config: `PUBLIC_NOSTR_RELAYS` and `PUBLIC_NOSTR_AUTHOR`
- Example config: `.env.example`

Implemented in the current rebuild:

- Ebook reader for `Building the Future`
- Full 13-chapter `Building the Future` reader from the Cypherspace guild-builder export
- Cypherspace guild-builder design applied to the Astro site
- Public curated research map
- Open Hardware section with OSE/GVCS starting tools
- Craft Library for hand-skill and machine-assist building sources
- Static build with no server database

Prepared in the repo but hidden from the public website until ready:

- Menu-based RPG Guild Hall
- Forge Guild for open-source hardware and outbuilding tools
- Craft Guild for earth, timber, joinery, plaster, masonry, and repair
- Energy Guild for solar, passive design, storage, heating, and cooling
- Nostr article stream for kind `30023`
- Guild note stream for kind `1` and kind `1111`
- Environment-driven relay and author config

Verification:

```bash
npm.cmd run check
npm.cmd run build
```

Both pass.

## Content Direction

The old site was a useful curated index, but it read as a flat bookmark list. The new site should
behave like a public research room:

- The reader explains the thesis.
- Research tracks collect source material.
- Guilds turn source material into outputs.
- Craft is primary: build by hand where possible, use machines where they preserve skill,
  accuracy, safety, or repeatability.
- Nostr articles carry long-form updates outside the website.
- The static site remains the clean, auditable index.

### Core Book Spine

Use `Building the Future` as the public title and organize it around:

1. The Anchor
2. From Index To Villages
3. The Nostr Edition
4. The Sleeping Giant

The deeper book source material comes from:

- `BOOK_ROADMAP.md` for Anchored Flag Theory
- `Der_schlafende_Riese.md` for the culture/story layer
- `VIBELINE_GUIDE.md` for voice-first production workflow

### Sections To Add Next

Add these as first-class sections or data groups after the current reader/guild foundation.

#### Start Here

Short practical entry path:

- Get a Bitcoin wallet and basic self-custody setup.
- Create a Nostr key and NIP-05 identity.
- Find nearby Bitcoin merchants on BTC Map.
- Join one guild and contribute one source.
- Read one book chapter and one field note.

#### Bitcoin Circular Economies

Purpose: show live places using Bitcoin, not just Bitcoin theory.

Priority candidates:

- Bitcoin Beach, El Zonte
- Bitcoin Ekasi, South Africa
- Plan B Lugano
- FREE Madeira / Bitcoin Atlantis ecosystem
- Bitcoin Jungle, Costa Rica
- Bitcoin Lake, Guatemala
- Praia Bitcoin, Brazil
- Afribit / Kibera
- Bitcoin Kampala / Juicy B
- Built With Bitcoin Foundation projects

Every entry should have:

- `status`: `live`, `building`, or `archived`
- `place`
- `why`
- `sourceUrl`
- `lastVerified`

#### Free Cities And Network States

Purpose: separate serious jurisdictional experiments from marketing claims.

Priority candidates:

- Prospera
- Free Cities Foundation
- The Network State
- Infinita City
- Edge City / Edge Esmeralda
- Zuzalu as archived origin
- Zuitzerland as a successor experiment

Rule: mark dead, paused, or conference-only projects honestly.

#### Physical Stack

Purpose: balance Bitcoin and Nostr with land, shelter, food, water, energy, and repair.

Priority sources:

- Open Source Ecology / Global Village Construction Set
- Earthship Biotecture
- Open Building Institute
- Untapped Growth
- Permaculture Research Institute
- self-sufficiency and homestead canon

Current Open Source Ecology integration:

- Global Village Construction Set: reference map for the workshop/machine stack
- Seed Eco-Home: owner-builder housing model to adapt for workshops and outbuildings
- CEB Press: local compressed-earth blocks for walls, thermal mass, and site experiments
- Sawmill: local lumber for framing, cladding, racks, fences, and repairs
- CNC Torch and Router Table: repeatable fabrication for brackets, plates, jigs, and parts
- Open Source Welder: repair bottleneck for gates, frames, racks, trailers, and machine mounts
- Well-Drilling Rig: water independence research for land and settlement planning
- LifeTrac / Open Source Tractor: site work, hauling, earthworks, and farm infrastructure

#### Craft Library

Purpose: make Citadel Resources a home for craft by hand, helped by machines when useful.

Source classes:

- Open wiki: editable public knowledge bases such as Appropedia and OSArch
- Open design system: downloadable/remixable building systems such as WikiHouse or OBI
- Open standard: shared modular rules such as OpenStructures
- Free field guide: practical references that may not be fully open-source but are useful
- Machine-assist library: CNC/fabrication designs that support local craft

Priority sources now indexed:

- Appropedia Construction and Appropedia Earthen Construction
- WikiHouse
- Open Building Institute
- OSArch Wiki
- Build It Solar
- Practical Action Knowledge Centre
- OpenStructures
- Grid Beam
- Opendesk
- Wikiblock
- One Community Earthbag Plans

Editorial rule: mark licensing and source quality honestly. Some excellent resources are free
guides rather than true open-source projects. They can still be useful, but they should not be
mislabelled.

#### Comms / Meshtadel

Purpose: off-grid communication belongs directly in the citadel thesis.

Priority sources:

- Meshtastic
- Reticulum / NomadNet
- BTC Mesh
- LoRa relay guides
- emergency radio basics

#### Bookshelf

Keep the current Bitcoin and free-city books, then extend with physical resilience:

- John Seymour, `The Complete Book of Self-Sufficiency`
- Carla Emery, `The Encyclopedia of Country Living`
- Ben Falk, `The Resilient Farm and Homestead`
- Lyn Alden, `Broken Money`
- Saifedean Ammous, `Principles of Economics`
- Titus Gebel, `Free Private Cities`
- Jeff Booth, `The Price of Tomorrow`

## Nostr Architecture

The site should use your own Nostr stack as the canonical source, while still fanning out to public
relays for discoverability.

Recommended relay order:

1. Your own relay
2. `wss://relay.damus.io`
3. `wss://nos.lol`
4. `wss://relay.primal.net`
5. `wss://relay.nostr.band`

Configure without hardcoding:

```bash
PUBLIC_NOSTR_RELAYS=wss://your-relay.example,wss://relay.damus.io,wss://nos.lol
PUBLIC_NOSTR_AUTHOR=your_32_byte_hex_pubkey
```

### Nostr Articles

Use NIP-23 long-form content:

- kind `30023`
- Markdown content
- `d` tag as stable article identifier
- `title` tag
- `summary` tag
- `published_at` tag
- `t` tags for discovery

Recommended tags:

- `citadelresources`
- `anchoredflagtheory`
- `citadelguilds`
- guild-specific tags such as `citadel-land`, `citadel-craft`, `citadel-forge`,
  `citadel-energy`, `citadel-food`, and `citadel-nostr`

Publishing tools to test:

- Habla
- Yakihonne
- your own bot or script using `nak`

### Comments And Guild Notes

Use NIP-22 comments for article discussion:

- kind `1111`
- scoped to the root article using uppercase tags
- parent replies use lowercase tags

For general guild notes, continue reading kind `1` and kind `1111` by hashtag until a write-path is
implemented.

### Guilds

Yes, guilds fit the project. A guild is not a chat room. It is a working group with:

- a mandate
- a Nostr tag
- a source list
- a visible output
- a lightweight moderation path

Current guilds:

- Land Guild: anchor candidates, terrain, water, local law
- Shelter Guild: housing, workshops, repair, off-grid build patterns
- Forge Guild: open-source hardware, fabrication tools, workshop machines, outbuilding systems
- Craft Guild: earth, timber, joinery, plaster, masonry, hand tools, repair
- Food Guild: regenerative farming, grazing, storage, local food loops
- Energy Guild: off-grid power, solar thermal, passive design, heat, storage
- Bitcoin Guild: circular economies, custody, merchant tools
- Nostr Guild: articles, relays, lists, signing, guild event templates
- Culture Guild: `Der schlafende Riese`, essays, myth, art direction

UI direction:

- Keep the guild interface as a command/menu pattern, not a generic card grid.
- Use RPG structure: rank, role, status, active quests, stats, reward, and difficulty.
- Use the Forge Guild as the bridge between OSE machine docs and practical outbuilding work.
- Use the Craft Guild as the bridge between hand skill, natural materials, woodworking, and repair.

Preferred protocol path:

- Start with static guild cards and hashtags.
- Add NIP-51 curation lists for source packs.
- Use NIP-29 relay-based groups for member chat or closed working groups.
- Use NIP-72 only if you need a public moderated board. NIP-72 is marked unrecommended in favor of
  NIP-29 in current Nostr docs, so do not start there unless the use case really needs it.

### Curation Lists

Use NIP-51 to make the index portable:

- `kind 30003`: bookmark/source sets
- `kind 30004`: article curation sets
- `kind 10004`: communities the project belongs to
- `kind 10009`: simple groups the project belongs to

This lets the website become a renderer of signed public curation, not only static HTML.

### Identity

Use NIP-05 for the project identity:

- `citadel@your-domain`
- `guilds@your-domain`
- optional per-guild identifiers later

NIP-05 maps an internet identifier to a lowercase hex pubkey through:

```text
https://domain/.well-known/nostr.json?name=<local-part>
```

Clients still follow public keys, not names, so treat NIP-05 as identity anchoring rather than an
account system.

### Zaps

Use NIP-57 after the identity and LNURL path are ready.

Required:

- recipient profile with `lud16` or `lud06`
- LNURL endpoint that supports zaps
- `allowsNostr: true`
- `nostrPubkey` in the LNURL response
- zap request kind `9734`
- zap receipt kind `9735`

Good first UX:

- zap the project
- zap a guild
- zap a specific long-form article
- later: zap splits across author, guild, and project treasury

## Bot Plan

Use the bot for low-noise publishing, not spam.

Recommended first bot actions:

- publish new Nostr article announcements
- publish weekly resource additions
- publish guild source requests
- publish "index verified" notes

Simple implementation:

```bash
nak event -k 1 \
  -c "New Citadel Resources article: <title> <url>" \
  --sec "$NOSTR_BOT_NSEC" \
  wss://your-relay.example wss://relay.damus.io wss://nos.lol
```

Rules:

- keep `NOSTR_BOT_NSEC` out of the repo
- publish to your own relay first
- fan out to public relays
- keep an archive of posted messages
- do not autopost every small edit

## Data Model To Add Next

Extend `src/data/resources.ts` with a general resource type:

```ts
export type ResourceStatus = 'live' | 'building' | 'archived';

export type SourceResource = {
  title: string;
  url: string;
  category: 'bitcoin' | 'free-cities' | 'shelter' | 'food' | 'comms' | 'nostr' | 'culture';
  status: ResourceStatus;
  place?: string;
  why: string;
  guildId: string;
  tags: string[];
  lastVerified: string;
};
```

Then add site sections for:

- Source index
- Start Here
- Comms / Meshtadel
- Bookshelf
- Nostr article archive

## Rollout Checklist

```text
[x] Fresh Astro homepage
[x] Ebook reader
[x] Menu-based RPG Guild Hall
[x] Forge Guild
[x] Craft Guild
[x] Energy Guild
[x] Open Hardware section
[x] Craft Library section
[x] Research map
[x] Nostr article stream
[x] Nostr note stream
[x] PUBLIC_NOSTR_RELAYS config
[x] PUBLIC_NOSTR_AUTHOR config
[ ] Add your production relay to .env
[ ] Add your project hex pubkey to .env
[ ] Publish first kind 30023 article with #citadelresources
[ ] Add NIP-05 identity for the project
[ ] Add LNURL/zap support
[ ] Add NIP-51 curation list export/import
[ ] Add NIP-22 comments under articles
[ ] Decide NIP-29 vs NIP-72 for guild write-path
[ ] Add resource status and lastVerified fields
[ ] Add Start Here section
[ ] Add Comms / Meshtadel section
[ ] Add first 20 circular economy entries
```

## Primary Sources

Nostr:

- NIP-01 basic relay protocol: https://github.com/nostr-protocol/nips/blob/master/01.md
- NIP-05 identity: https://nips.nostr.com/5
- NIP-22 comments: https://nips.nostr.com/22
- NIP-23 long-form content: https://nips.nostr.com/23
- NIP-29 relay-based groups: https://nips.nostr.com/29
- NIP-51 lists: https://nips.nostr.com/51
- NIP-57 zaps: https://nips.nostr.com/57
- NIP-72 communities: https://github.com/nostr-protocol/nips/blob/master/72.md

Content:

- Bitcoin Beach: https://www.bitcoinbeach.com/
- Bitcoin Ekasi: https://bitcoinekasi.com/
- Plan B Lugano: https://planb.lugano.ch/
- Open Source Ecology GVCS: https://www.opensourceecology.org/gvcs/
- Appropedia Construction: https://www.appropedia.org/Category:Construction
- Appropedia Earthen Construction: https://www.appropedia.org/Earthen_construction
- WikiHouse: https://www.wikihouse.cc/
- Open Building Institute: https://www.openbuildinginstitute.org/
- OSArch Wiki: https://wiki.osarch.org/
- Build It Solar: https://www.builditsolar.com/Projects/Projects.htm
- Practical Action Knowledge Centre: https://practicalaction.org/knowledge-centre/
- OpenStructures: https://openstructures.net/
- Grid Beam: https://gridbeam.xyz/
- Opendesk: https://opendesk.cc/
- Wikiblock: https://www.betterblock.org/wikiblock
- One Community Earthbag Plans: https://onecommunityglobal.org/earthbag-village-building-plans/
- Earthship Biotecture: https://earthship.com/
- Free Cities Foundation article: https://free-cities.org/rahim-taghizadegan-bitcoin-citadels-geopolitics-cbdcs/
- The Network State: https://thenetworkstate.com/
- Nostr Resources: https://nostr-resources.com/

## Editorial Rule

Every new entry should answer:

1. What is it?
2. Why does it matter for sovereign builders?
3. Is it live, building, or archived?
4. Which guild owns it?
5. When was it last verified?
