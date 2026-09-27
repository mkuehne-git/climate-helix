import { Showcase } from '../Enums';
import { persistentState } from '../settings/PersistentState';
import { de } from './de';
import { en } from './en';

/**
 * The user-visible text of the app. Strings come from a message catalog per
 * language; numbers and months are formatted for the language here, so no
 * module builds them itself. The language is chosen once at startup; the
 * Language setting reloads the app to change it.
 */

export type MessageKey = keyof typeof en.messages;

/** A language: every message of the English catalog, translated. */
export type Catalog = {
    locale: string,
    monthsShort: readonly string[],
    monthsLong: readonly string[],
    messages: Record<MessageKey, string>,
};

type Params = Record<string, string | number>;

export const LANGUAGES = ['en', 'de'] as const;
export type Language = typeof LANGUAGES[number];

const CATALOGS: Record<Language, Catalog> = { en, de };

/** Each language's name in that language, for the Language setting. */
export const LANGUAGE_NAMES: Record<Language, string> = { en: 'English', de: 'Deutsch' };

/**
 * The language to show: the chosen one, or else the first of the browser's
 * languages the app has (only the primary tag counts: "de-AT" is German),
 * or else English.
 */
export function resolveLanguage(chosen: Language | undefined, browserLanguages: readonly string[]): Language {
    if (chosen !== undefined) {
        return chosen;
    }
    for (const tag of browserLanguages) {
        const primary = tag.toLowerCase().split('-')[0];
        if ((LANGUAGES as readonly string[]).includes(primary)) {
            return primary as Language;
        }
    }
    return 'en';
}

function browserLanguages(): readonly string[] {
    return typeof navigator === 'undefined' ? [] : navigator.languages ?? [navigator.language];
}

let current: Language = 'en';
let catalog: Catalog = en;

/** Switches the text to `language`; the app only does this at startup (see {@link resolveLanguage}), tests pin English. */
export function setLanguage(language: Language): void {
    current = language;
    catalog = CATALOGS[language];
    if (typeof document !== 'undefined') {
        document.documentElement.lang = language;
    }
}

export function language(): Language {
    return current;
}

setLanguage(resolveLanguage(persistentState.state.language, browserLanguages()));

/** The message `key`, with its `{name}` parameters filled in. */
export function t(key: MessageKey, params: Params = {}): string {
    return catalog.messages[key].replace(/\{(\w+)\}/g, (match, name: string) => name in params ? String(params[name]) : match);
}

const REGION_KEYS: Record<Showcase, 'global' | 'northern' | 'southern'> = {
    [Showcase.GLOBAL]: 'global',
    [Showcase.NORTHERN_HEMISPHERE]: 'northern',
    [Showcase.SOUTHERN_HEMISPHERE]: 'southern',
};

/** A region's display name; `Showcase` values are identifiers (and stored), not text. */
export function regionName(showcase: Showcase): string {
    return t(`region.${REGION_KEYS[showcase]}`);
}

/** A region's short name, e.g. "North", for narrow buttons. */
export function regionShortName(showcase: Showcase): string {
    return t(`region.short.${REGION_KEYS[showcase]}`);
}

/** The helix title of a region, e.g. "Land-Ocean: Global Means". */
export function regionTitle(showcase: Showcase): string {
    return t(`title.${REGION_KEYS[showcase]}`);
}

/** `month` 0 (January) to 11. */
export function monthName(month: number, style: 'short' | 'long' = 'short'): string {
    return (style === 'short' ? catalog.monthsShort : catalog.monthsLong)[month];
}

/** A month and year, e.g. "Feb 1990" (short) or "August 2026" (long); `month` 0 to 11. */
export function formatMonthYear(year: number, month: number, style: 'short' | 'long' = 'short'): string {
    return t('format.monthYear', { month: monthName(month, style), year });
}

/**
 * A number with a fixed count of decimals, e.g. "1.50" in English.
 * `sign`: 'negative' shows only a minus, 'exceptZero' also a plus for positive
 * values, 'always' also for zero ("+0.00").
 */
export function formatNumber(value: number, decimals: number, sign: 'negative' | 'exceptZero' | 'always' = 'negative'): string {
    return new Intl.NumberFormat(catalog.locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
        useGrouping: false,
        signDisplay: sign === 'negative' ? 'auto' : sign,
    }).format(value);
}

/** A temperature, e.g. "+1.50°C"; see {@link formatNumber} for `sign`. */
export function formatTemperature(value: number, decimals: number, sign: 'negative' | 'exceptZero' | 'always' = 'exceptZero'): string {
    return t('format.temperature', { value: formatNumber(value, decimals, sign) });
}
