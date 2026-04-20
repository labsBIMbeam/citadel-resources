export type Tribe = {
  name: string;
  url: string;
  blurb: string;
  image?: string;
};

export type Video = {
  title: string;
  author?: string;
  youtubeId: string;
};

export type Podcast = {
  category: 'general' | 'great-re-sat' | 'farming' | 'society';
  title: string;
  host?: string;
  spotify: { kind: 'show' | 'episode'; id: string };
  url?: string;
};

export type Article = {
  title: string;
  source: string;
  url: string;
};

export type Book = {
  title: string;
  author: string;
  url: string;
  cover?: string;
};

export const HERO_QUOTE = {
  body: [
    'Of course, in some sense hyper-bitcoinization is not yet complete, but we are living in a far more just and peaceful world because of what you created in the early 2000s.',
    'This is also the reason I contacted you.',
    'Keep going. What you see now as a vision becomes a reality. I don\u2019t know how to explain to you that it was all worth it; you won and the human race itself has become something better for your work. I can\u2019t imagine the difficulties that you have gone through and the ones you are about to go through.',
    'However, I have seen where it leads.',
  ],
  attribution: 'RW — Time Traveler',
  sourceUrl: 'https://bitcoinmagazine.com/culture/bitcoin-time-traveler-future-reddit',
};

export const tribes: Tribe[] = [
  {
    name: 'Untapped Growth',
    url: 'https://untappedgrowth.com/decentralizedgrazing-media/',
    blurb: 'The Cattle Co-op — regenerative farming, decentralized grazing.',
    image: '/images/untapped-growth.jpg',
  },
  {
    name: 'Tipolis',
    url: 'https://www.tipolis.com/',
    blurb: 'Special Economic Zones for free private cities.',
    image: '/images/tripolislogo.png',
  },
  {
    name: 'The Venus Project',
    url: 'https://www.thevenusproject.com/',
    blurb: 'Resource-based economy by Jacque Fresco.',
    image: '/images/venuslogo.png',
  },
  {
    name: 'Open Source Ecology',
    url: 'https://www.opensourceecology.org/',
    blurb: 'Open-source blueprints for the 50 machines of modern civilization.',
    image: '/images/openecology.jpg',
  },
  {
    name: 'Earthship Global',
    url: 'https://www.earthshipglobal.com/',
    blurb: 'Off-grid, self-sufficient homes built from earth and reclaimed materials.',
    image: '/images/earthship.jpg',
  },
  {
    name: 'Bitcoin Beach',
    url: 'https://www.bitcoinbeach.com/',
    blurb: 'El Zonte — the original Bitcoin circular-economy village. Template copied worldwide.',
  },
  {
    name: 'Bitcoin Ekasi',
    url: 'https://bitcoinekasi.com/',
    blurb: 'Mossel Bay township (South Africa) running a grassroots Bitcoin circular economy.',
  },
  {
    name: 'Plan ₿ Lugano',
    url: 'https://planb.lugano.ch/',
    blurb: 'Swiss city integrating Bitcoin as legal-adjacent tender across hundreds of merchants.',
  },
  {
    name: 'Bitcoin Atlantis — FREE Madeira',
    url: 'https://bitcoinatlantis.com/',
    blurb: 'Non-profit driving island-scale Bitcoin adoption on Madeira. Home of the Atlantis conference.',
  },
  {
    name: 'Próspera',
    url: 'https://www.prospera.co/en',
    blurb: 'Charter city and ZEDE on Roatán, Honduras — the live case study for free private cities.',
  },
  {
    name: 'PubKey / Sovereign House',
    url: 'https://www.pubkey.bar/home',
    blurb: 'NYC bitcoin-culture HQ — meetups, lectures, a physical citadel for the diaspora.',
  },
];

export const videos: Video[] = [
  {
    title: 'Bitcoin is Generational Wealth',
    author: 'Matt Hornick & Tomer Strolight',
    youtubeId: '3Rnqst5qCgA',
  },
  {
    title: 'Bitcoin Citadel Reddit Thread Explained',
    youtubeId: 'z02X_RvwUWs',
  },
  {
    title: 'Are Bitcoin Citadels Real?',
    author: 'Rahim Taghizadegan',
    youtubeId: 'Pt__62ktHKc',
  },
  {
    title: 'The Politics and Economics of Decentralized Living (BTC Prague 2025)',
    author: 'Rahim Taghizadegan',
    youtubeId: '53PPxd0GscY',
  },
  {
    title: 'The Bushido of Bitcoin',
    author: 'Aleks Svetski',
    youtubeId: 'J8xsAzK2gFg',
  },
  {
    title: 'The OTHER Side of Bitcoin — Deflation, abundance, the reset',
    author: 'Jeff Booth',
    youtubeId: 'KUBdfN61YR4',
  },
  {
    title: 'Dare to Dream — A Story from El Salvador',
    author: 'Bitcoin Beach',
    youtubeId: '912eCr8Yjmo',
  },
];

export const podcasts: Podcast[] = [
  {
    category: 'general',
    title: 'Citadelium',
    host: 'Yuri de Gaia',
    spotify: { kind: 'show', id: '2ZYfMdn0KeRCI9L2lb7cNS' },
    url: 'https://citadelium.com/tag/podcast/',
  },
  {
    category: 'great-re-sat',
    title: 'Freedom Maximalists & Bitcoin Conservatism (The Sovereign Club)',
    host: 'LaserHodl',
    spotify: { kind: 'episode', id: '0vY3sRYUHtHSwxtspt2ee6' },
  },
  {
    category: 'great-re-sat',
    title: '#270 — Better Understanding Monetary Reset',
    host: 'LaserHodl',
    spotify: { kind: 'episode', id: '4WCMp6fqjOC1aO4mrPBmGz' },
  },
  {
    category: 'great-re-sat',
    title: '#265 — Monetary reset, Malthusian wizardry, and Bitcoin as way out',
    host: 'LaserHodl',
    spotify: { kind: 'episode', id: '0nnramvZwOuBP1yKKsrywg' },
  },
  {
    category: 'farming',
    title: '#243 — Regenerative farming, Fiat food, cattle breeds',
    host: 'Untapped Growth',
    spotify: { kind: 'episode', id: '4EOOT81Uxj6yLeEbj3bATo' },
  },
  {
    category: 'society',
    title: 'Checking In From A Forest Citadel #108',
    host: '@cryptgm',
    spotify: { kind: 'episode', id: '0z6VoNhCkH7NGmZZYoXf44' },
  },
  {
    category: 'society',
    title: 'Episode 31 — Soul Exporter on Meshtadels',
    spotify: { kind: 'episode', id: '2mm5gaiVAGF1r2HEhEJIXy' },
  },
  {
    category: 'society',
    title: 'Separation of State and Education',
    spotify: { kind: 'episode', id: '0CEuypFMLoWdBVJHVUg6uo' },
  },
  {
    category: 'general',
    title: 'Citadel Dispatch',
    host: 'Marty Bent / Matt Odell',
    spotify: { kind: 'show', id: '2KmZgeZUC1trxOvDvfQefy' },
    url: 'https://citadeldispatch.com',
  },
  {
    category: 'general',
    title: 'TFTC — A Bitcoin Podcast',
    host: 'Marty Bent',
    spotify: { kind: 'show', id: '0Vd8E5vWnCfB4xucu87WNZ' },
  },
  {
    category: 'general',
    title: 'Bitcoin Audible',
    host: 'Guy Swann',
    spotify: { kind: 'show', id: '16c6WR2znCZM1wveeeJoSz' },
  },
  {
    category: 'society',
    title: 'The Bitcoin Infinity Show',
    host: 'Knut Svanholm & Luke de Wolf',
    spotify: { kind: 'show', id: '3hghAdbjR0kTEeWuC0StA0' },
  },
  {
    category: 'society',
    title: 'The "What is Money?" Show',
    host: 'Robert Breedlove',
    spotify: { kind: 'show', id: '25LPvm8EewBGyfQQ1abIsE' },
  },
];

export const articles: Article[] = [
  {
    title: 'The Bitcoin Time Traveler',
    source: 'Bitcoin Magazine',
    url: 'https://bitcoinmagazine.com/culture/bitcoin-time-traveler-future-reddit',
  },
  {
    title: 'Citadel21',
    source: 'Magazine',
    url: 'https://www.citadel21.com/',
  },
  {
    title: 'The Network State — full online text',
    source: 'Balaji Srinivasan',
    url: 'https://thenetworkstate.com/',
  },
  {
    title: 'Bitcoin Citadels, Geopolitics & CBDCs',
    source: 'Rahim Taghizadegan · Free Cities Foundation',
    url: 'https://free-cities.org/rahim-taghizadegan-bitcoin-citadels-geopolitics-cbdcs/',
  },
  {
    title: 'The Bushido of Bitcoin — essay',
    source: 'Aleks Svetski',
    url: 'https://svetski.medium.com/the-bushido-of-bitcoin-b7caecbb5d8c',
  },
];

export const books: Book[] = [
  {
    title: 'Free Private Cities',
    author: 'Titus Gebel',
    url: 'https://www.amazon.de/gp/product/B07G7H3S2N',
    cover: '/images/GebelFPC.jpg',
  },
  {
    title: 'The Bushido of Bitcoin',
    author: 'Aleks Svetski',
    url: 'https://www.amazon.com/Bushido-Bitcoin-Virtue-Economic-Standard/dp/B0DM55SPXC',
  },
  {
    title: 'The Network State — How To Start a New Country',
    author: 'Balaji Srinivasan',
    url: 'https://thenetworkstate.com/',
  },
  {
    title: 'The Price of Tomorrow',
    author: 'Jeff Booth',
    url: 'https://www.jeffbooth.ca/',
  },
  {
    title: 'Principles of Economics',
    author: 'Saifedean Ammous',
    url: 'https://saifedean.com/poe',
  },
  {
    title: 'Gradually, Then Suddenly',
    author: 'Parker Lewis',
    url: 'https://www.unchained.com/gts/chapter-one',
  },
  {
    title: 'Bitcoin: The Inverse of Clown World',
    author: 'Knut Svanholm & Luke de Wolf',
    url: 'https://www.amazon.com/Bitcoin-Inverse-Clown-Knut-Svanholm/dp/9916425205',
  },
];

export const PODCAST_CATEGORIES: Record<Podcast['category'], string> = {
  general: 'General',
  'great-re-sat': 'The Great Re-SAT',
  farming: 'Farming',
  society: 'Society',
};

export const CONTACT = {
  email: 'mail@citadelresources.com',
  telegram: 'https://t.me/citadelresources',
  sister: { name: 'Bitcoin Resources', url: 'https://bitcoin-resources.com/' },
  sister2: { name: 'Nostr Resources', url: 'https://nostr-resources.com/' },
};
