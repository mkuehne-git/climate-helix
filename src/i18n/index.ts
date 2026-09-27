import { Showcase } from '../Enums';
import { en } from './en';

/**
 * The user-visible text of the app. Strings come from a message catalog per
 * language; numbers and months are formatted for the language here, so no
 * module builds them itself. English is the only language so far.
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

const catalog: Catalog = en;

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
