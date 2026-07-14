import prefaceRaw from '../content/btf-book/00_preface.md?raw';
import warningRaw from '../content/btf-book/00a_warning.md?raw';
import introductionRaw from '../content/btf-book/01_introduction.md?raw';
import ch0Raw from '../content/btf-book/02_ch0_overview.md?raw';
import ch1Raw from '../content/btf-book/03_ch1_industry.md?raw';
import ch2Raw from '../content/btf-book/04_ch2_bitcoin.md?raw';
import ch3Raw from '../content/btf-book/05_ch3_privacy.md?raw';
import ch4Raw from '../content/btf-book/06_ch4_nostr.md?raw';
import ch5Raw from '../content/btf-book/07_ch5_engines.md?raw';
import ch6Raw from '../content/btf-book/08_ch6_guilds.md?raw';
import ch7Raw from '../content/btf-book/09_ch7_geopolitics.md?raw';
import ch8Raw from '../content/btf-book/10_ch8_integration.md?raw';
import ch9Raw from '../content/btf-book/11_ch9_barriers.md?raw';
import ch10Raw from '../content/btf-book/12_ch10_future.md?raw';
import backmatterRaw from '../content/btf-book/13_backmatter.md?raw';
import type { BookBlock, BookChapter, BookPanelVariant } from './resources';

type ChapterSource = {
  id: string;
  label: string;
  fallbackTitle: string;
  fallbackDeck: string;
  raw: string;
};

type ParseResult = {
  blocks: BookBlock[];
  firstHeading?: string;
};

const IMAGE_BASE = '/images/btf-book/';
const WORDS_PER_MINUTE = 220;
const PANEL_VARIANTS = new Set(['vignette', 'saga', 'sidebar']);

const chapterSources: ChapterSource[] = [
  {
    id: 'warning',
    label: '!',
    fallbackTitle: 'Warning',
    fallbackDeck: 'Proceed as you would onto any site: at your own risk, with your eyes open.',
    raw: warningRaw,
  },
  {
    id: 'preface',
    label: 'P',
    fallbackTitle: 'Preface',
    fallbackDeck: 'Communities build what their money lets them remember.',
    raw: prefaceRaw,
  },
  {
    id: 'introduction',
    label: '00',
    fallbackTitle: "The Numbers Don't Match",
    fallbackDeck: 'Trust the instrument, not the dashboard.',
    raw: introductionRaw,
  },
  {
    id: 'chapter-0',
    label: 'C0',
    fallbackTitle: 'Three Technologies',
    fallbackDeck: 'Bitcoin, Nostr, and gaming engines, stated plainly.',
    raw: ch0Raw,
  },
  {
    id: 'chapter-1',
    label: 'C1',
    fallbackTitle: 'The Construction Industry Today',
    fallbackDeck: 'The physical industry has learned to distrust perfect dashboards.',
    raw: ch1Raw,
  },
  {
    id: 'chapter-2',
    label: 'C2',
    fallbackTitle: 'Bitcoin: Money for Builders',
    fallbackDeck: 'A fixed instrument for people who build across long time horizons.',
    raw: ch2Raw,
  },
  {
    id: 'chapter-3',
    label: 'C3',
    fallbackTitle: 'The Praxeology of Privacy',
    fallbackDeck: 'Privacy as engineering discipline, not decoration.',
    raw: ch3Raw,
  },
  {
    id: 'chapter-4',
    label: 'C4',
    fallbackTitle: 'Nostr: Coordination Without Platforms',
    fallbackDeck: 'Keys, signatures, relays, and records without platform ownership.',
    raw: ch4Raw,
  },
  {
    id: 'chapter-5',
    label: 'C5',
    fallbackTitle: 'Gaming Engines: Beyond Play',
    fallbackDeck: 'Shared, persistent models turn drawings into places people can enter.',
    raw: ch5Raw,
  },
  {
    id: 'chapter-6',
    label: 'C6',
    fallbackTitle: 'Guilds, Clans, and Value-for-Value',
    fallbackDeck: 'Old institutions, new tools, and the missing social spine.',
    raw: ch6Raw,
  },
  {
    id: 'chapter-7',
    label: 'C7',
    fallbackTitle: 'The Geopolitical Context',
    fallbackDeck: 'Money, law, and energy have become construction terrain.',
    raw: ch7Raw,
  },
  {
    id: 'chapter-8',
    label: 'C8',
    fallbackTitle: 'Integration',
    fallbackDeck: 'A reference architecture for an open construction record layer.',
    raw: ch8Raw,
  },
  {
    id: 'chapter-9',
    label: 'C9',
    fallbackTitle: 'Overcoming Barriers',
    fallbackDeck: 'The honest bill for keys, law, volatility, and adoption order.',
    raw: ch9Raw,
  },
  {
    id: 'chapter-10',
    label: 'C10',
    fallbackTitle: 'The Future of Construction',
    fallbackDeck: 'What changes when builders own the instruments they depend on.',
    raw: ch10Raw,
  },
  {
    id: 'backmatter',
    label: 'S',
    fallbackTitle: 'Afterword and Sources',
    fallbackDeck: 'The workshop, the number, and the load-bearing sources.',
    raw: backmatterRaw,
  },
];

const cleanText = (value: string): string =>
  value
    .replace(/\[(.+?)\]\((.+?)\)/g, '$1 ($2)')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/\*(.+?)\*/g, '$1')
    .replace(/__(.+?)__/g, '$1')
    .replace(/_(.+?)_/g, '$1')
    .replace(/`(.+?)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();

const normalizeInput = (raw: string): string => raw.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');

const normalizeTitle = (heading: string | undefined, fallback: string): string => {
  const title = cleanText(heading ?? fallback)
    .replace(/^Introduction:\s*/i, '')
    .replace(/^Chapter\s+\d+\s+(?:\u2014|-)\s*/i, '')
    .replace(/\s+/g, ' ')
    .trim();

  return title || fallback;
};

const parseImage = (line: string): BookBlock | undefined => {
  const match = line.match(/^!IMG:([^|]+)(?:\|(.*))?$/);

  if (!match) {
    return undefined;
  }

  const fileName = match[1]?.trim();

  if (!fileName) {
    return undefined;
  }

  const caption = cleanText(match[2] ?? '');

  if (caption) {
    return { type: 'image', src: `${IMAGE_BASE}${fileName}`, caption };
  }

  return { type: 'image', src: `${IMAGE_BASE}${fileName}` };
};

const parseListItem = (line: string): string | undefined => {
  const bulletMatch = line.match(/^[-*]\s+(.+)$/);

  if (bulletMatch) {
    return cleanText(bulletMatch[1] ?? '');
  }

  const sourceMatch = line.match(/^(\[[0-9]+[a-z]?\])\s+(.+)$/i);

  if (sourceMatch) {
    return cleanText(`${sourceMatch[1]} ${sourceMatch[2]}`);
  }

  return undefined;
};

const isDirectiveStart = (line: string): boolean => {
  const variant = line.match(/^:::(\w+)\s*$/)?.[1];
  return Boolean(variant && PANEL_VARIANTS.has(variant));
};

const isSpecialStart = (line: string): boolean =>
  line === ':::' ||
  isDirectiveStart(line) ||
  line.startsWith('#') ||
  line.startsWith('>') ||
  Boolean(parseImage(line)) ||
  Boolean(parseListItem(line));

const parseBlocks = (raw: string, skipFirstHeading: boolean): ParseResult => {
  const lines = normalizeInput(raw).split('\n');
  const blocks: BookBlock[] = [];
  let firstHeading: string | undefined;
  let index = 0;

  while (index < lines.length) {
    const line = (lines[index] ?? '').trim();

    if (!line) {
      index += 1;
      continue;
    }

    const directiveMatch = line.match(/^:::(\w+)\s*$/);

    if (directiveMatch) {
      const variantName = directiveMatch[1] ?? '';

      if (PANEL_VARIANTS.has(variantName)) {
        const panelLines: string[] = [];
        index += 1;

        while (index < lines.length && (lines[index] ?? '').trim() !== ':::') {
          panelLines.push(lines[index] ?? '');
          index += 1;
        }

        if (index < lines.length && (lines[index] ?? '').trim() === ':::') {
          index += 1;
        }

        blocks.push({
          type: 'panel',
          variant: variantName as BookPanelVariant,
          blocks: parseBlocks(panelLines.join('\n'), false).blocks,
        });
        continue;
      }

      index += 1;
      continue;
    }

    const image = parseImage(line);

    if (image) {
      blocks.push(image);
      index += 1;
      continue;
    }

    const h1Match = line.match(/^#\s+(.+)$/);

    if (h1Match) {
      const text = cleanText(h1Match[1] ?? '');

      if (!firstHeading) {
        firstHeading = text;

        if (skipFirstHeading) {
          index += 1;
          continue;
        }
      }

      blocks.push({ type: 'heading', level: 2, text });
      index += 1;
      continue;
    }

    const h2Match = line.match(/^##\s+(.+)$/);

    if (h2Match) {
      blocks.push({ type: 'heading', level: 2, text: cleanText(h2Match[1] ?? '') });
      index += 1;
      continue;
    }

    const h3Match = line.match(/^###\s+(.+)$/);

    if (h3Match) {
      blocks.push({ type: 'heading', level: 3, text: cleanText(h3Match[1] ?? '') });
      index += 1;
      continue;
    }

    if (line.startsWith('>')) {
      const quoteLines: string[] = [];

      while (index < lines.length && (lines[index] ?? '').trim().startsWith('>')) {
        quoteLines.push(cleanText((lines[index] ?? '').trim().replace(/^>\s?/, '')));
        index += 1;
      }

      blocks.push({ type: 'quote', text: quoteLines.join('\n') });
      continue;
    }

    const listItem = parseListItem(line);

    if (listItem) {
      const items: string[] = [];

      while (index < lines.length) {
        const item = parseListItem((lines[index] ?? '').trim());

        if (!item) {
          break;
        }

        items.push(item);
        index += 1;
      }

      blocks.push({ type: 'list', items });
      continue;
    }

    const paragraphLines: string[] = [];

    while (index < lines.length) {
      const paragraphLine = (lines[index] ?? '').trim();

      if (!paragraphLine) {
        break;
      }

      if (paragraphLines.length > 0 && isSpecialStart(paragraphLine)) {
        break;
      }

      paragraphLines.push(paragraphLine);
      index += 1;
    }

    if (paragraphLines.length > 0) {
      blocks.push({ type: 'paragraph', text: cleanText(paragraphLines.join(' ')) });
      continue;
    }

    index += 1;
  }

  return { blocks, firstHeading };
};

const estimateMinutes = (raw: string): number => {
  const wordCount = cleanText(raw)
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(2, Math.round(wordCount / WORDS_PER_MINUTE));
};

const parseChapter = (source: ChapterSource): BookChapter => {
  const parsed = parseBlocks(source.raw, true);

  return {
    id: source.id,
    label: source.label,
    title: normalizeTitle(parsed.firstHeading, source.fallbackTitle),
    // Curated tagline instead of a truncated copy of the first paragraph
    // (the full paragraph is rendered in the chapter body anyway).
    deck: source.fallbackDeck,
    minutes: estimateMinutes(source.raw),
    blocks: parsed.blocks,
  };
};

export const bookChapters: BookChapter[] = chapterSources.map(parseChapter);
