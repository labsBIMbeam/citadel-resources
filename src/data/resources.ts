export type BookPanelVariant = 'vignette' | 'saga' | 'sidebar';

export type BookBlock =
  | { type: 'heading'; level: 2 | 3; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'quote'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'image'; src: string; caption?: string }
  | { type: 'panel'; variant: BookPanelVariant; blocks: BookBlock[] };

export type BookChapter = {
  id: string;
  label: string;
  title: string;
  deck: string;
  minutes: number;
  blocks?: BookBlock[];
  paragraphs?: string[];
  sections?: { heading?: string; paragraphs: string[] }[];
  epigraph?: { text: string; by: string };
  vignette?: string;
  bullets?: string[];
};

export { bookChapters } from './btfBook';

export type ResearchTrack = {
  label: string;
  title: string;
  reason: string;
  sources: { label: string; url: string }[];
};

export type OpenHardwareTool = {
  title: string;
  category: string;
  stage: string;
  why: string;
  outbuildingUse: string;
  sourceUrl: string;
  guildId: string;
};

export type CraftLibrary = {
  title: string;
  discipline: string;
  openness: string;
  mode: string;
  why: string;
  use: string;
  sourceUrl: string;
  guildId: string;
};

export type Guild = {
  id: string;
  glyph: string;
  title: string;
  mandate: string;
  status: 'draft' | 'recruiting' | 'active';
  nostrTag: string;
  rank: string;
  role: string;
  difficulty: string;
  protocol: string;
  reward: string;
  work: string[];
  stats: { label: string; value: number; max: number }[];
};

export type NostrConfig = {
  tags: string[];
  relays: string[];
  author?: string;
  articleKinds: number[];
  noteKinds: number[];
  clients: { label: string; url: string }[];
};

const envRelays = import.meta.env.PUBLIC_NOSTR_RELAYS?.split(',')
  .map((relay) => relay.trim())
  .filter(Boolean);

const envAuthor = import.meta.env.PUBLIC_NOSTR_AUTHOR?.trim();

export const HERO_QUOTE = {
  body: [
    'Keep going. What you see now as a vision becomes a reality.',
    'The work is not to escape the world. The work is to build durable places, durable money, and durable memory.',
  ],
  attribution: 'Citadel Resources',
  sourceUrl: '#reader',
};

export const legacyBookChapterPreview: BookChapter[] = [
  {
    id: 'preface',
    label: '--',
    title: 'Preface',
    deck: 'Communities build what their money lets them remember.',
    minutes: 7,
    epigraph: {
      text:
        'It is inevitable that people will see this new paradigm as better than the walled garden we are currently having. We will have to build back better with Bitcoin.',
      by: 'DerGigi',
    },
    sections: [
      {
        paragraphs: [
          "There was a time when money was grounded in the tangible value of gold, and communities engaged in building projects monumental not just in scale but in collaborative spirit. Under sound money, castles, monasteries, and cathedrals were undertaken across generations. A master mason could begin a nave knowing the endowment funding it would still buy stone in his grandson's lifetime.",
          'In a small village between rolling hills and dense forests, a community once came together to build a monastery. Blacksmiths forged the ironwork, carpenters shaped the wood, stonemasons carved the stone. Nobody audited their collaboration through a dashboard. The building itself was the audit.',
          "Then the world changed. In August 1971 the dollar's last convertibility to gold was suspended. Money's anchor was cut. From that point on, the value of the unit in which builders price, borrow, save, and get paid has rested on policy rather than on weight or measure.",
          'This book is about three technologies that respond to that condition - Bitcoin, Nostr, and gaming engines - and about the industry where they may matter most. We are culture. Buildings are how a civilization remembers itself. What we build - and what we build with - is never neutral.',
        ],
      },
    ],
  },
  {
    id: 'intro',
    label: '00',
    title: "The Numbers Don't Match",
    deck: 'Trust the instrument, not the dashboard.',
    minutes: 6,
    vignette:
      'The valve was failing slowly - not enough to alarm the dashboard, enough to whisper through the seal. The Builder wrote the pressure reading in the notebook, then the official reading from the terminal beside it. The two numbers were not the same number, and had not been for eleven weeks. On the way out, the flashlight caught something scratched into the conduit: 600 000 000 000. Eleven zeros. No unit. Cut by someone with steady hands and a reason.',
    sections: [
      {
        paragraphs: [
          "Every builder knows the moment. The model says the duct fits; the site says it doesn't. The dashboard says the project is 71 percent complete; the concrete says otherwise. Construction people develop, early and permanently, a professional relationship with the difference between what is reported and what is real.",
          'Money. Since 1971 the unit has been a policy instrument, and the people furthest from the printer pay for it. Bitcoin is the first working alternative: a money with a fixed supply of 21 million units, secured by physical work, owned by whoever holds the keys.',
          'Communication. The industry coordinates through platforms it does not control. Nostr is the counter-model: identities are cryptographic keys held by their owners, records are signed events, relays are interchangeable commodities. Nobody can deplatform a keypair.',
          'Models. Gaming engines render persistent, physically simulated worlds for hundreds of millions of players. A model you can walk through together is a different social object than a drawing you can only review.',
          "We are culture. We don't confront the system - we outbuild it. Let's look at the numbers.",
        ],
      },
    ],
  },
  {
    id: 'ch0',
    label: '01',
    title: 'Three Technologies',
    deck: 'Bitcoin, Nostr, and gaming engines - what they are, and their honest state as of 2026.',
    minutes: 9,
    vignette:
      'Three objects sat under the cage lamp. "It keeps the ledger," said the operator of the first. "It asks nobody\'s permission and takes nobody\'s word. It checks." Of the second: "The message doesn\'t live in the machine. It lives in the signature." The third was a headset. The Builder put it on and stood inside the pump station - finished, correct, the numbers matching, because in here there was nothing to adjust. "Tools," said the operator. "The question is what you build."',
    sections: [
      {
        heading: 'Bitcoin',
        paragraphs: [
          'In the autumn of 2008, a pseudonymous author calling themself Satoshi Nakamoto posted a nine-page paper: a peer-to-peer electronic cash system that needed no issuer, no bank, and no trusted third party of any kind.',
          'The monetary design is austere. Supply is capped at 21 million bitcoin. New issuance halves roughly every four years. No board meets to reconsider this - everyone can propose, nobody can impose.',
        ],
      },
      {
        heading: 'Nostr',
        paragraphs: [
          'Notes and Other Stuff Transmitted by Relays is a protocol, not a platform. An identity is a keypair. A message is a small signed event. Relays are dumb servers that store and forward; clients read and write to many at once.',
          'Your identity is yours: no company issues your key, so none can revoke it. Your words are portable. Your record is verifiable. And the system has no headquarters.',
        ],
      },
      {
        heading: 'Gaming Engines',
        paragraphs: [
          'A game engine is a real-time simulation kernel: geometry, materials, light, physics, networking. The pipeline from building information model to engine became a product - Datasmith, Twinmotion, Speckle, Omniverse.',
          'Products die and protocols survive, and an industry with fifty-year asset lifecycles should be careful which one it marries. A walkable model changes who can participate.',
        ],
      },
    ],
  },
  {
    id: 'ch1',
    label: '02',
    title: 'The Industry',
    deck: 'The $600 billion coordination problem.',
    minutes: 6,
    sections: [
      {
        paragraphs: [
          'Construction is the largest, most fragmented, most under-digitized industry on earth - a coordination problem measured in trillions, operating on adversarial contracts, delayed payments, and data that dies at every handover.',
          'A construction project is, legally speaking, a pile of signed, timestamped statements that everyone argues about later. The industry does not need another portal. It needs better primitives: harder money, freer information, shared reality.',
        ],
      },
    ],
  },
  {
    id: 'ch2',
    label: '03',
    title: 'Bitcoin',
    deck: 'Sound money and time preference.',
    minutes: 8,
    sections: [
      {
        paragraphs: [
          'Bitcoin is not a get-rich scheme; in the year before this edition its price fell by half from its all-time high, and this book quotes those numbers plainly. It is a different kind of money - one that behaves like an instrument instead of a dashboard.',
          'Time preference is the hidden variable. Institutions that live on decade-scale trust do not survive well in an economy whose unit of account loses meaning on decade scales. We did not merely change how builders are paid. We changed what kinds of institutions can afford to exist.',
        ],
      },
    ],
  },
  {
    id: 'ch3',
    label: '04',
    title: 'Privacy',
    deck: 'The praxeology of privacy.',
    minutes: 10,
    sections: [
      {
        paragraphs: [
          "Guided by Max Hillebrand's The Praxeology of Privacy (2026), which grounds the cypherpunk toolset in Austrian economics and answers, rigorously, why selective disclosure is a precondition of functioning markets rather than a suspect's privilege.",
          "In an industry that lives on sealed bids, confidential negotiation, and trade secrets, that argument deserves a builder's full attention.",
        ],
      },
    ],
  },
  {
    id: 'ch4',
    label: '05',
    title: 'Nostr',
    deck: 'Infrastructure, not social media.',
    minutes: 7,
    sections: [
      {
        paragraphs: [
          'Over 950 relays across roughly 50 countries were online in early 2026, operated by companies, volunteers, and hobbyists, none of them essential. Nostr is not a Twitter competitor, but a coordination substrate.',
          'For an industry whose core legal artifact is the question "who sent what to whom, when?", this is not a social-media curiosity. It is infrastructure.',
        ],
      },
    ],
  },
  {
    id: 'ch5',
    label: '06',
    title: 'Gaming Engines',
    deck: 'Shared, walkable worlds.',
    minutes: 5,
    sections: [
      {
        paragraphs: [
          "Epic's Datasmith importers translate Revit, Archicad, Rhino, and IFC geometry with materials and metadata intact. Unreal Engine 5 lets a full-detail building model be explored photorealistically without manual optimization.",
          'A generation raised in Minecraft and Fortnite - a generation the construction industry desperately needs to recruit - walks into these tools already fluent.',
        ],
      },
    ],
  },
  {
    id: 'ch6',
    label: '07',
    title: 'Guilds, Clans & V4V',
    deck: "The industry's deepest deficit is not technical but social.",
    minutes: 13,
    vignette:
      'Twenty-one people. The Builder counted twice. "Rules," said the operator. "One. What the guild learns, the guild keeps. Two. What the guild keeps, the guild shares. Three. Teaching is paid work - not favors, not exposure. Paid." The apprentice spoke: "Three years of my building is a screenshot now." "Here it isn\'t gone. Your work gets signed. Twenty years from now it walks with you into any room." "That\'s all I ever wanted from a guild. A world that doesn\'t get wiped."',
    sections: [
      {
        heading: 'What the guild actually was',
        paragraphs: [
          'Before the guild became a cartoon of protectionism, it was the most successful knowledge-transmission institution the building world has known. The medieval masons\' lodge - the Bauhuette - was simultaneously a school, a standards body, a mutual-insurance fund, a certification authority, and a repository of trade secrets held as a commons by the craft.',
          "Its quality regime was the mason's mark: each cutter's personal sign chiseled into each stone - a signature scheme, five centuries before public-key cryptography, binding work to identity beyond dispute.",
        ],
      },
      {
        heading: 'Value-for-value',
        paragraphs: [
          'Publish freely, ask for value back voluntarily, and make the returning effortless. On Nostr the same economics run as zaps. It monetizes gratitude rather than access or attention: the commons can now have an income without acquiring an owner.',
        ],
      },
      {
        heading: 'The missing spine, found',
        paragraphs: [
          "Property that survives the server. Reputation that walks. Commitment that can be proven. A guild treasury locked for a decade is a constitution written in script - the institution's low time preference is no longer a virtue asserted but a fact on the timechain, verifiable by any apprentice deciding whether this community is worth their formative years.",
          'We are culture. Culture is the capital that guilds accumulate: knowledge, standards, stories, marks, monuments - the compounding residue of people building together longer than any project pays them to.',
        ],
      },
    ],
  },
  {
    id: 'ch7',
    label: '08',
    title: 'Geopolitics',
    deck: 'States downstream of the timechain.',
    minutes: 6,
    sections: [
      {
        paragraphs: [
          "The strategic reserves, regulations, prosecutions, and energy flows that now shape what builders may legally and practically do with these tools - from the EU's MiCA and AMLR to the U.S. Strategic Bitcoin Reserve to mining rigs doubling as boilers.",
        ],
      },
    ],
  },
  {
    id: 'ch8',
    label: '09',
    title: 'Integration',
    deck: 'A reference architecture.',
    minutes: 8,
    sections: [
      {
        paragraphs: [
          'The pieces assemble into a reference architecture for a decentralized construction ecosystem: harder money, freer information, shared reality, and guild-like institutions for voluntary value - built in the open.',
        ],
      },
    ],
  },
  {
    id: 'ch9',
    label: '10',
    title: 'Barriers',
    deck: 'An honest inventory.',
    minutes: 5,
    sections: [
      {
        paragraphs: [
          'Where the record includes failures - a major engine vendor abandoning its construction product, a privacy company shutting down under legal pressure, a protocol whose daily active users would fit in a mid-sized football stadium - the failures are printed. Serious optimism has nothing to fear from honest accounting.',
        ],
      },
    ],
  },
  {
    id: 'ch10',
    label: '11',
    title: 'The Future',
    deck: 'We are culture.',
    minutes: 4,
    sections: [
      {
        paragraphs: [
          'Builders were never merely labor plus logistics. The lodge, the mark, the wandering years, the palace hall raised by its own community - we are culture: the sentence is a claim of ownership, and for the first time in a century, the deed can be held in twelve words.',
        ],
      },
    ],
  },
];

export const researchTracks: ResearchTrack[] = [
  {
    label: 'Book spine',
    title: 'Anchored Flag Theory',
    reason:
      'Turn the book roadmap into a reproducible framework: anchor selection, legal structure, assets, and operational playbooks.',
    sources: [
      { label: 'Book roadmap', url: '#reader' },
      { label: 'The Network State', url: 'https://thenetworkstate.com/' },
      {
        label: 'Free Cities Foundation',
        url: 'https://free-cities.org/rahim-taghizadegan-bitcoin-citadels-geopolitics-cbdcs/',
      },
    ],
  },
  {
    label: 'Local money',
    title: 'Bitcoin Circular Economies',
    reason:
      'Collect real places where Bitcoin is used for payments, savings, education, and merchant onboarding.',
    sources: [
      { label: 'Bitcoin Beach', url: 'https://www.bitcoinbeach.com/' },
      { label: 'Bitcoin Ekasi', url: 'https://bitcoinekasi.com/' },
      { label: 'Plan B Lugano', url: 'https://planb.lugano.ch/' },
      { label: 'FREE Madeira', url: 'https://freemadeira.com/' },
    ],
  },
  {
    label: 'Physical stack',
    title: 'Shelter, Machines, Food, Energy',
    reason:
      'Balance monetary sovereignty with the material stack: homes, tools, workshops, land, water, and energy.',
    sources: [
      { label: 'Open Source Ecology GVCS', url: 'https://www.opensourceecology.org/gvcs/' },
      { label: 'Appropedia construction', url: 'https://www.appropedia.org/Category:Construction' },
      { label: 'WikiHouse', url: 'https://www.wikihouse.cc/' },
      { label: 'Open Building Institute', url: 'https://www.openbuildinginstitute.org/' },
      { label: 'OSArch Wiki', url: 'https://wiki.osarch.org/' },
      { label: 'Earthship Biotecture', url: 'https://earthship.com/' },
      { label: 'Untapped Growth', url: 'https://untappedgrowth.com/decentralizedgrazing-media/' },
    ],
  },
  {
    label: 'Publishing layer',
    title: 'Nostr Chapters And Guilds',
    reason:
      'Use Nostr for censorship-resistant discovery, long-form chapter mirrors, curation lists, and guild coordination.',
    sources: [
      { label: 'NIP-23 long-form content', url: 'https://nips.nostr.com/23' },
      { label: 'NIP-51 lists', url: 'https://nips.nostr.com/51' },
      { label: 'NIP-29 relay-based groups', url: 'https://nips.nostr.com/29' },
      { label: 'NIP-72 communities', url: 'https://github.com/nostr-protocol/nips/blob/master/72.md' },
    ],
  },
];

export const openHardwareTools: OpenHardwareTool[] = [
  {
    title: 'Global Village Construction Set',
    category: 'civilization toolkit',
    stage: 'reference system',
    why: 'OSE frames the whole physical stack: 50 open-source industrial machines for a small, modern civilization.',
    outbuildingUse: 'Use as the source map for what a citadel workshop eventually needs to build, repair, and reproduce.',
    sourceUrl: 'https://www.opensourceecology.org/gvcs/',
    guildId: 'forge',
  },
  {
    title: 'Seed Eco-Home',
    category: 'building system',
    stage: 'built / documented',
    why: 'Owner-build housing with CAD, bill of materials, build notes, utilities, PV, and replication docs.',
    outbuildingUse: 'Adapt the module logic for guest houses, workshops, bunkhouses, and expandable site buildings.',
    sourceUrl: 'https://www.opensourceecology.org/seed-eco-home-builds/',
    guildId: 'shelter',
  },
  {
    title: 'CEB Press',
    category: 'materials',
    stage: 'prototype line',
    why: 'Produces compressed earth blocks from onsite soil and is one of the most mature OSE construction machines.',
    outbuildingUse: 'Local wall material for sheds, workshops, root cellars, thermal mass walls, and site experiments.',
    sourceUrl: 'https://www.opensourceecology.org/portfolio/ceb-press/',
    guildId: 'forge',
  },
  {
    title: 'Sawmill',
    category: 'materials',
    stage: 'GVCS machine',
    why: 'Turns local logs into lumber, reducing dependence on outside supply chains.',
    outbuildingUse: 'Lumber for framing, cladding, workbenches, racks, fences, and repair stock.',
    sourceUrl: 'https://opensourceecology.dozuki.com/c/Root',
    guildId: 'forge',
  },
  {
    title: 'CNC Torch and Router Table',
    category: 'fabrication',
    stage: 'documented tool family',
    why: 'Digital fabrication tool used to cut parts for other machines and workshop infrastructure.',
    outbuildingUse: 'Make brackets, plates, jigs, hinges, machine parts, and repeatable building hardware.',
    sourceUrl: 'https://opensourceecology.dozuki.com/c/Root',
    guildId: 'forge',
  },
  {
    title: 'Open Source Welder',
    category: 'fabrication',
    stage: 'planning stage',
    why: 'Welding is the repair and machine-building bottleneck for a serious workshop.',
    outbuildingUse: 'Maintain gates, frames, trailers, stoves, machine mounts, racks, and field repairs.',
    sourceUrl: 'https://www.opensourceecology.org/gvcs/gvcs-machine-index/',
    guildId: 'forge',
  },
  {
    title: 'Well-Drilling Rig',
    category: 'water',
    stage: 'planning stage',
    why: 'Water access determines whether a site can become an anchor rather than a retreat fantasy.',
    outbuildingUse: 'Evaluate water independence for barns, gardens, workshops, and long-term settlement.',
    sourceUrl: 'https://www.opensourceecology.org/gvcs/gvcs-machine-index/',
    guildId: 'land',
  },
  {
    title: 'LifeTrac / Open Source Tractor',
    category: 'site work',
    stage: 'documented variants',
    why: 'A serviceable tractor is the basic multiplier for earthworks, hauling, farming, and workshop logistics.',
    outbuildingUse: 'Move material, prepare pads, maintain roads, haul timber, and support farm infrastructure.',
    sourceUrl: 'https://opensourceecology.dozuki.com/c/Root',
    guildId: 'food',
  },
];

export const craftLibraries: CraftLibrary[] = [
  {
    title: 'Appropedia Construction',
    discipline: 'shelter / materials',
    openness: 'open wiki',
    mode: 'hand craft',
    why: 'Large sustainability wiki with construction, earthen construction, shelter, wood, and wood-working categories.',
    use: 'Use as the first source map for earth, bamboo, brick, shelter, greenhouse, and repair topics.',
    sourceUrl: 'https://www.appropedia.org/Category:Construction',
    guildId: 'craft',
  },
  {
    title: 'Appropedia Earthen Construction',
    discipline: 'earth construction',
    openness: 'open wiki',
    mode: 'hand craft',
    why: 'Indexes adobe, mudbrick, CEB, earthbag, rammed earth, cob, and other soil-based methods.',
    use: 'Turn into a local soil-testing, wall-system, plaster, and climate suitability checklist.',
    sourceUrl: 'https://www.appropedia.org/Earthen_construction',
    guildId: 'craft',
  },
  {
    title: 'WikiHouse',
    discipline: 'timber building',
    openness: 'open design system',
    mode: 'machine assist',
    why: 'CNC-cut timber blocks for modular, high-performance buildings with repeatable assembly logic.',
    use: 'Study for workshop shells, guest cabins, bunkhouses, and timber joint patterns.',
    sourceUrl: 'https://www.wikihouse.cc/',
    guildId: 'shelter',
  },
  {
    title: 'Open Building Institute',
    discipline: 'eco-housing modules',
    openness: 'open design system',
    mode: 'hand + machine',
    why: 'Modular ecological housing library linked to OSE, with house parts and build workflow thinking.',
    use: 'Adapt wall, roof, utility, greenhouse, barn, workshop, and micro-house module logic.',
    sourceUrl: 'https://www.openbuildinginstitute.org/',
    guildId: 'shelter',
  },
  {
    title: 'OSArch Wiki',
    discipline: 'architecture workflow',
    openness: 'FOSS wiki',
    mode: 'design tools',
    why: 'Free-software architecture, engineering, construction, OpenBIM, FreeCAD, BlenderBIM, IFC, and QGIS knowledge.',
    use: 'Keep drawings and models in open formats before any CNC, permit, or documentation step.',
    sourceUrl: 'https://wiki.osarch.org/',
    guildId: 'shelter',
  },
  {
    title: 'Build It Solar',
    discipline: 'energy / passive systems',
    openness: 'free plans',
    mode: 'hand craft',
    why: 'DIY plans for solar heating, passive solar, water heating, greenhouses, conservation, and small renewables.',
    use: 'Make the energy appendix practical: collectors, drying, solar sheds, greenhouses, and heat-saving retrofits.',
    sourceUrl: 'https://www.builditsolar.com/Projects/Projects.htm',
    guildId: 'energy',
  },
  {
    title: 'Practical Action Knowledge Centre',
    discipline: 'appropriate technology',
    openness: 'technical briefs',
    mode: 'hand craft',
    why: 'Small-scale technology briefs and drawings across shelter, water, energy, food, and livelihoods.',
    use: 'Use as a low-tech field manual library for water, sanitation, flood-safe housing, kilns, and tools.',
    sourceUrl: 'https://practicalaction.org/knowledge-centre/',
    guildId: 'craft',
  },
  {
    title: 'OpenStructures',
    discipline: 'modular parts',
    openness: 'open standard',
    mode: 'hand + machine',
    why: 'Shared-grid modular construction system where parts can be designed, reused, repaired, and recombined.',
    use: 'Prototype workbenches, racks, furniture, jigs, tool carts, and repairable workshop fixtures.',
    sourceUrl: 'https://openstructures.net/',
    guildId: 'craft',
  },
  {
    title: 'Grid Beam',
    discipline: 'wood / modular building',
    openness: 'open method',
    mode: 'hand craft',
    why: 'Reusable drilled-beam system for furniture, workbenches, small structures, and fast analog prototyping.',
    use: 'Teach square, plumb, bolt patterns, jigs, and disassembly before jumping to advanced fabrication.',
    sourceUrl: 'https://gridbeam.xyz/',
    guildId: 'craft',
  },
  {
    title: 'Opendesk',
    discipline: 'CNC furniture',
    openness: 'open furniture',
    mode: 'machine assist',
    why: 'Distributed furniture model for downloadable, locally fabricated plywood desks, tables, and fixtures.',
    use: 'Reference for reproducible shop furniture, desks, shelving, benches, and plywood joinery patterns.',
    sourceUrl: 'https://opendesk.cc/',
    guildId: 'forge',
  },
  {
    title: 'Wikiblock',
    discipline: 'public-space furniture',
    openness: 'open design library',
    mode: 'machine assist',
    why: 'Free CNC-cut plywood designs for benches, chairs, planters, stages, bus stops, fences, and kiosks.',
    use: 'Adapt for village commons, event builds, market stalls, wayfinding, and pop-up outdoor infrastructure.',
    sourceUrl: 'https://www.betterblock.org/wikiblock',
    guildId: 'craft',
  },
  {
    title: 'One Community Earthbag Plans',
    discipline: 'earthbag construction',
    openness: 'open plans',
    mode: 'hand craft',
    why: 'Open-source earthbag village plans with downloadable CAD and model files for replication study.',
    use: 'Compare with Appropedia and local code before any earthbag test wall or outbuilding design.',
    sourceUrl: 'https://onecommunityglobal.org/earthbag-village-building-plans/',
    guildId: 'craft',
  },
];

export const guilds: Guild[] = [
  {
    id: 'land',
    glyph: 'A',
    title: 'Land Guild',
    mandate: 'Map anchor candidates, water, terrain, local law, and settlement constraints.',
    status: 'draft',
    nostrTag: 'citadel-land',
    rank: 'Pathfinder',
    role: 'Anchor scouting',
    difficulty: 'Hard',
    protocol: 'NIP-51 source set',
    reward: 'Anchor matrix v1',
    work: ['Anchor scoring matrix', 'Regional field notes', 'Risk register'],
    stats: [
      { label: 'terrain', value: 82, max: 100 },
      { label: 'law', value: 54, max: 100 },
      { label: 'water', value: 71, max: 100 },
    ],
  },
  {
    id: 'shelter',
    glyph: 'H',
    title: 'Shelter Guild',
    mandate: 'Collect durable housing, workshop, repair, and off-grid build patterns.',
    status: 'draft',
    nostrTag: 'citadel-shelter',
    rank: 'Builder',
    role: 'Shelter and repair',
    difficulty: 'Medium',
    protocol: 'Field notes',
    reward: 'Owner-builder checklist',
    work: ['Earthship notes', 'Owner-builder checklist', 'Material library'],
    stats: [
      { label: 'craft', value: 78, max: 100 },
      { label: 'energy', value: 62, max: 100 },
      { label: 'repair', value: 84, max: 100 },
    ],
  },
  {
    id: 'craft',
    glyph: '*',
    title: 'Craft Guild',
    mandate: 'Preserve hand skills for earth, timber, joinery, plaster, masonry, and repair.',
    status: 'recruiting',
    nostrTag: 'citadel-craft',
    rank: 'Artisan',
    role: 'Hand craft',
    difficulty: 'Medium',
    protocol: 'Field manuals',
    reward: 'Craft canon v1',
    work: ['Earth construction canon', 'Woodworking joinery pack', 'Hand-tool map'],
    stats: [
      { label: 'earth', value: 73, max: 100 },
      { label: 'wood', value: 69, max: 100 },
      { label: 'tools', value: 77, max: 100 },
    ],
  },
  {
    id: 'forge',
    glyph: 'X',
    title: 'Forge Guild',
    mandate:
      'Index open-source hardware, fabrication tools, workshop machines, and machine-assisted craft.',
    status: 'recruiting',
    nostrTag: 'citadel-forge',
    rank: 'Machinist',
    role: 'Machine assist',
    difficulty: 'Expert',
    protocol: 'GVCS / build docs',
    reward: 'Workshop toolchain v1',
    work: ['OSE machine index', 'Outbuilding tool stack', 'Fabrication docs'],
    stats: [
      { label: 'tools', value: 64, max: 100 },
      { label: 'docs', value: 57, max: 100 },
      { label: 'repairs', value: 81, max: 100 },
    ],
  },
  {
    id: 'food',
    glyph: 'O',
    title: 'Food Guild',
    mandate: 'Track regenerative farming, grazing, seed, storage, and local food loops.',
    status: 'draft',
    nostrTag: 'citadel-food',
    rank: 'Steward',
    role: 'Food loops',
    difficulty: 'Medium',
    protocol: 'Seasonal ledger',
    reward: 'Farm directory',
    work: ['Farm directory', 'Seasonal resilience checklist', 'Cattle co-op research'],
    stats: [
      { label: 'soil', value: 68, max: 100 },
      { label: 'storage', value: 45, max: 100 },
      { label: 'trade', value: 58, max: 100 },
    ],
  },
  {
    id: 'energy',
    glyph: '<>',
    title: 'Energy Guild',
    mandate: 'Track off-grid power, solar thermal, passive design, storage, heating, and cooling.',
    status: 'draft',
    nostrTag: 'citadel-energy',
    rank: 'Engineer',
    role: 'Power and heat',
    difficulty: 'Hard',
    protocol: 'Load sheets',
    reward: 'Energy stack v1',
    work: ['Load calculator', 'Solar thermal notes', 'Backup power guide'],
    stats: [
      { label: 'solar', value: 67, max: 100 },
      { label: 'thermal', value: 61, max: 100 },
      { label: 'storage', value: 49, max: 100 },
    ],
  },
  {
    id: 'bitcoin',
    glyph: 'B',
    title: 'Bitcoin Guild',
    mandate: 'Document circular economies, custody, merchant tools, and savings culture.',
    status: 'draft',
    nostrTag: 'citadel-bitcoin',
    rank: 'Treasurer',
    role: 'Sound money',
    difficulty: 'Hard',
    protocol: 'NIP-51 curation',
    reward: 'Circular economy map',
    work: ['Circular economy map', 'Self-custody appendix', 'Merchant onboarding pack'],
    stats: [
      { label: 'custody', value: 88, max: 100 },
      { label: 'merchants', value: 49, max: 100 },
      { label: 'satsflow', value: 73, max: 100 },
    ],
  },
  {
    id: 'nostr',
    glyph: '#',
    title: 'Nostr Guild',
    mandate: 'Publish chapters, curate reading lists, and coordinate relay/group standards.',
    status: 'recruiting',
    nostrTag: 'citadel-nostr',
    rank: 'Scribe',
    role: 'Publishing layer',
    difficulty: 'Expert',
    protocol: 'NIP-23 / NIP-29',
    reward: 'Chapter naddr index',
    work: ['Chapter naddr index', 'Relay set', 'Guild event templates'],
    stats: [
      { label: 'relays', value: 76, max: 100 },
      { label: 'articles', value: 36, max: 100 },
      { label: 'signers', value: 52, max: 100 },
    ],
  },
  {
    id: 'culture',
    glyph: 'M',
    title: 'Culture Guild',
    mandate: 'Protect the story layer: essays, childrens books, art direction, and local myths.',
    status: 'draft',
    nostrTag: 'citadel-culture',
    rank: 'Keeper',
    role: 'Memory and myth',
    difficulty: 'Medium',
    protocol: 'Long-form excerpts',
    reward: 'Sleeping Giant preview',
    work: ['Sleeping Giant excerpts', 'Illustration references', 'Publisher shortlist'],
    stats: [
      { label: 'memory', value: 91, max: 100 },
      { label: 'voice', value: 72, max: 100 },
      { label: 'reach', value: 41, max: 100 },
    ],
  },
];

export const nostr: NostrConfig = {
  tags: [
    'citadelresources',
    'anchoredflagtheory',
    'citadelguilds',
    'citadel-craft',
    'citadel-forge',
    'citadel-energy',
  ],
  relays: envRelays?.length
    ? envRelays
    : [
        'wss://relay.damus.io',
        'wss://nos.lol',
        'wss://relay.primal.net',
        'wss://relay.nostr.band',
      ],
  author: envAuthor,
  articleKinds: [30023],
  noteKinds: [1, 1111],
  clients: [
    { label: 'njump tag', url: 'https://njump.me/t/citadelresources' },
    { label: 'Primal search', url: 'https://primal.net/search/%23citadelresources' },
    { label: 'Nostr resources', url: 'https://nostr-resources.com/' },
  ],
};

export const CONTACT = {
  npub: 'npub1su4kplwca3euuyerm9ucq4ecf7ucxegqmxmjq9v5cudw8l8zk6qqejetyp',
  telegram: 'https://t.me/citadelresources',
  sister: { name: 'Bitcoin Resources', url: 'https://bitcoin-resources.com/' },
  sister2: { name: 'Nostr Resources', url: 'https://nostr-resources.com/' },
};
