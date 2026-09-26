import { Scene, Showcase } from './Enums';

const STORAGE_KEY = 'climate-helix.state';
const STATE_VERSION = 1;
/** Where v0.10.0 kept the Animation settings; read once and then removed. */
const LEGACY_ANIMATION_KEY = 'climate-helix.animation';
/** Groups the writes while a slider is dragged. */
const SAVE_DELAY_MS = 300;

type Vector3 = [number, number, number];

type ChartState = {
    /** Labels of the series unchecked in the legend. */
    hidden?: string[],
    autoScale?: boolean,
    movingAverage?: boolean,
};

type StoredState = {
    /** The app's default snapshot when the state was saved; a newer default drops `date`, see {@link storedDate}. */
    defaultDate?: string,
    date?: string,
    region?: Showcase,
    /** The requested year range; an omitted end means "from the first" / "to the last" year of all datasets. */
    yearRange?: { first?: number, last?: number },
    view?: {
        yearRangeVisible?: boolean,
        navigation?: { inertia?: boolean, rotateSpeed?: number },
        axes?: {
            yearVisible?: boolean,
            temperatureVisible?: boolean,
            monthVisible?: boolean,
            yearTickCount?: number,
            temperatureRingCount?: number,
            temperatureRingsColored?: boolean,
        },
        geometry?: {
            meshVisible?: boolean,
            facesVisible?: boolean,
            radialSegments?: number,
            radiusFactor?: number,
            tubularSegments?: number,
        },
    },
    /** Only the colors the user changed, as `#rrggbb`; the others follow the theme. */
    colors?: { cold?: string, zero?: string, warm?: string },
    animation?: { duration?: number, loop?: boolean, playOnStart?: boolean },
    /** Only set once the user switched the theme; until then it follows the system. */
    theme?: 'light' | 'dark',
    scene?: Scene,
    /** `up` is missing in states stored before v0.11.1, with orbit controls; the default (0, 1, 0) applies then. */
    camera?: { position: Vector3, target: Vector3, up?: Vector3 },
    diffBaseline?: string,
    /** Keyed by chart, e.g. `charts:2026-09-16` or `diff:Global`. */
    charts?: Record<string, ChartState>,
    /** The app version whose news were shown last (What's new); kept by Restore defaults. */
    lastSeenVersion?: string,
};

type Validator<T> = (value: unknown) => T | undefined;

const isRecord = (value: unknown): value is Record<string, unknown> =>
    typeof value === 'object' && value !== null && !Array.isArray(value);
const bool: Validator<boolean> = (value) => typeof value === 'boolean' ? value : undefined;
const finite: Validator<number> = (value) => typeof value === 'number' && Number.isFinite(value) ? value : undefined;
const string: Validator<string> = (value) => typeof value === 'string' ? value : undefined;
const hexColor: Validator<string> = (value) => typeof value === 'string' && /^#[0-9a-f]{6}$/i.test(value) ? value : undefined;
const oneOf = <T>(values: readonly T[]): Validator<T> => (value) => values.includes(value as T) ? value as T : undefined;
const stringArray: Validator<string[]> = (value) => Array.isArray(value) ? value.filter((item) => typeof item === 'string') : undefined;
const vector3: Validator<Vector3> = (value) =>
    Array.isArray(value) && value.length === 3 && value.every((item) => finite(item) !== undefined) ? value as Vector3 : undefined;

/** Keeps the valid fields of an object and drops the others. */
function object<T extends object>(fields: { [K in keyof T]-?: Validator<T[K]> }): Validator<T> {
    return (value) => {
        if (!isRecord(value)) {
            return undefined;
        }
        const result = {} as T;
        for (const key of Object.keys(fields) as (keyof T & string)[]) {
            const field = fields[key](value[key]);
            if (field !== undefined) {
                result[key] = field;
            }
        }
        return result;
    };
}

function record<T>(validator: Validator<T>): Validator<Record<string, T>> {
    return (value) => {
        if (!isRecord(value)) {
            return undefined;
        }
        return Object.fromEntries(Object.entries(value)
            .map(([key, item]) => [key, validator(item)] as const)
            .filter(([, item]) => item !== undefined)) as Record<string, T>;
    };
}

const validateAnimation = object<NonNullable<StoredState['animation']>>({ duration: finite, loop: bool, playOnStart: bool });

const validateCamera: Validator<NonNullable<StoredState['camera']>> = (value) => {
    const camera = object<{ position?: Vector3, target?: Vector3, up?: Vector3 }>({ position: vector3, target: vector3, up: vector3 })(value);
    if (!camera?.position || !camera.target || camera.position.every((item, index) => item === camera.target![index])) {
        return undefined;
    }
    const up = camera.up?.some((item) => item !== 0) ? camera.up : undefined;
    return up ? { position: camera.position, target: camera.target, up } : { position: camera.position, target: camera.target };
};

const validateState = object<StoredState>({
    defaultDate: string,
    date: string,
    region: oneOf(Object.values(Showcase)),
    yearRange: object({ first: finite, last: finite }),
    view: object<NonNullable<StoredState['view']>>({
        yearRangeVisible: bool,
        navigation: object({ inertia: bool, rotateSpeed: finite }),
        axes: object({
            yearVisible: bool,
            temperatureVisible: bool,
            monthVisible: bool,
            yearTickCount: finite,
            temperatureRingCount: finite,
            temperatureRingsColored: bool,
        }),
        geometry: object({
            meshVisible: bool,
            facesVisible: bool,
            radialSegments: finite,
            radiusFactor: finite,
            tubularSegments: finite,
        }),
    }),
    colors: object({ cold: hexColor, zero: hexColor, warm: hexColor }),
    animation: validateAnimation,
    theme: oneOf(['light', 'dark'] as const),
    scene: oneOf(Object.values(Scene)),
    camera: validateCamera,
    diffBaseline: string,
    charts: record(object<ChartState>({ hidden: stringArray, autoScale: bool, movingAverage: bool })),
    lastSeenVersion: string,
});

function parseJson(text: string | null): unknown {
    try {
        return text === null ? undefined : JSON.parse(text);
    } catch {
        return undefined;
    }
}

/**
 * Reads a stored state. Anything unreadable - broken JSON, another format
 * version, a field of the wrong type - is dropped, so its default applies.
 */
function parseState(text: string | null): StoredState {
    const json = parseJson(text);
    if (!isRecord(json) || json.version !== STATE_VERSION) {
        return {};
    }
    return validateState(json) ?? {};
}

/**
 * The snapshot to show: the stored one, unless it no longer exists or a newer
 * snapshot became the default since it was stored - an update of the data
 * should reach everyone who has used the app before.
 */
function storedDate(state: StoredState, defaultDate: string, dates: readonly string[]): string {
    return state.date !== undefined && state.defaultDate === defaultDate && dates.includes(state.date) ? state.date : defaultDate;
}

/** Local Storage can be unavailable (private mode, blocked site data) - even accessing it can throw. */
function localStorageOrUndefined(): Storage | undefined {
    try {
        return typeof localStorage === 'undefined' ? undefined : localStorage;
    } catch {
        return undefined;
    }
}

/**
 * The settings and application state kept across reloads, in one Local
 * Storage entry. Each module reads its part on startup and reports changes
 * with {@link update}; the writes are delayed a little and flushed when the
 * page is hidden. Without storage, everything still works for the visit.
 */
class PersistentState {
    #storage: Storage | undefined;
    #state: StoredState;
    #timer: ReturnType<typeof setTimeout> | undefined;
    #enabled = true;
    #hadStoredState = false;

    constructor(storage: Storage | undefined = localStorageOrUndefined()) {
        this.#storage = storage;
        this.#state = this.load();
        if (typeof window !== 'undefined') {
            window.addEventListener('pagehide', () => this.flush());
            document.addEventListener('visibilitychange', () => {
                if (document.visibilityState === 'hidden') {
                    this.flush();
                }
            });
        }
    }

    get state(): Readonly<StoredState> {
        return this.#state;
    }

    /** Whether anything was stored before this visit, even if none of it was readable: the app was used before. */
    get hadStoredState(): boolean {
        return this.#hadStoredState;
    }

    update(changes: Partial<StoredState>): void {
        Object.assign(this.#state, changes);
        this.scheduleSave();
    }

    updateChart(id: string, chart: ChartState): void {
        this.update({ charts: { ...this.#state.charts, [id]: chart } });
    }

    /** Writes a pending change right away. */
    flush(): void {
        if (this.#timer === undefined) {
            return;
        }
        clearTimeout(this.#timer);
        this.#timer = undefined;
        this.save();
    }

    /**
     * Forgets the stored state and stops saving, so a reload starts with the
     * defaults. Only the last seen version stays, so What's new is not shown again.
     */
    clear(): void {
        this.#enabled = false;
        clearTimeout(this.#timer);
        this.#timer = undefined;
        const { lastSeenVersion } = this.#state;
        this.#state = {};
        this.withStorage((storage) => {
            storage.removeItem(STORAGE_KEY);
            storage.removeItem(LEGACY_ANIMATION_KEY);
            if (lastSeenVersion !== undefined) {
                storage.setItem(STORAGE_KEY, JSON.stringify({ version: STATE_VERSION, lastSeenVersion }));
            }
        });
    }

    private load(): StoredState {
        let state: StoredState = {};
        this.withStorage((storage) => {
            const text = storage.getItem(STORAGE_KEY);
            if (text !== null) {
                this.#hadStoredState = true;
                state = parseState(text);
                return;
            }
            const legacy = storage.getItem(LEGACY_ANIMATION_KEY);
            this.#hadStoredState = legacy !== null;
            const animation = validateAnimation(parseJson(legacy));
            if (animation) {
                state = { animation };
            }
        });
        return state;
    }

    private scheduleSave(): void {
        if (!this.#enabled) {
            return;
        }
        clearTimeout(this.#timer);
        this.#timer = setTimeout(() => {
            this.#timer = undefined;
            this.save();
        }, SAVE_DELAY_MS);
    }

    private save(): void {
        if (!this.#enabled) {
            return;
        }
        this.withStorage((storage) => {
            storage.setItem(STORAGE_KEY, JSON.stringify({ version: STATE_VERSION, ...this.#state }));
            storage.removeItem(LEGACY_ANIMATION_KEY);
        });
    }

    private withStorage(access: (storage: Storage) => void): void {
        if (!this.#storage) {
            return;
        }
        try {
            access(this.#storage);
        } catch {
            // Not remembered, but still in effect for this visit.
        }
    }
}

const persistentState = new PersistentState();

export { PersistentState, persistentState, parseState, storedDate, STORAGE_KEY, LEGACY_ANIMATION_KEY };
export type { StoredState, ChartState, Vector3 };
