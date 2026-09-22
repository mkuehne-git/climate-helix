import * as THREE from "three";

/**
 * This class parses CSV-Files provided by GISS Surface Temperature Analysis (GISTEMP v4).
 * (see: https://data.giss.nasa.gov/gistemp/). 
 * An example file is shown below..
 * <pre>
 * Land-Ocean: Northern Hemispheric Means
 * Year,Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec,J-D,D-N,DJF,MAM,JJA,SON
 * 1880,-.36,-.51,-.23,-.30,-.06,-.16,-.19,-.27,-.24,-.32,-.43,-.40,-.29,***,***,-.20,-.21,-.33
 * 
 * </pre>
 * Note the title line at the beginning, which technically looks like a two column header line.
 * Also the last line is typically empty.
 * 
 * @see https://data.giss.nasa.gov/gistemp/
 */
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class GISSParser {
    private _title: string | undefined;
    private _header: string[] | undefined;
    private _rows: string[] | undefined;
    constructor(data: string | undefined, linesToIgnore = 0, withHeader = true) {
        if (data) {
            const { title, header, rows } = this.extract(data);
            this._title = title;
            this._header = header;
            this._rows = rows;
        }
    }

    private extract(data: string | ArrayBuffer) {
        const rows = data.toString().split(/\r?\n/)
        const title = rows[0];
        const header = rows[1].split(',');
        const lastIndex = rows[rows.length - 1] === '' ? rows.length - 1 : rows.length;
        return { title, header, rows: rows.slice(1, lastIndex) };
    }

    get columnCount(): number {
        return this.header ? this.header.length : this.rows[0].length;
    }

    get rowCount(): number {
        return this.rows.length;
    }

    getNumber(r, c): number {
        const row = this.rows[r];
        return parseFloat(row.split(',')[c]);
    }
    get title(): string {
        return this._title || "";
    }
    get header(): string[] {
        return this._header || [];
    }
    get rows(): string[] {
        return this._rows || [];
    }

    /**
     * The annual mean anomaly (the "J-D" column) per year, skipping years without
     * a valid annual mean yet (GISS writes "***" until all 12 months are in).
     */
    get annualSeries(): { year: number, value: number }[] {
        const jdIndex = this.header.findIndex((column) => column.trim() === 'J-D');
        if (jdIndex < 0) {
            return [];
        }
        const series: { year: number, value: number }[] = [];
        for (let r = 1; r < this.rows.length; r++) {
            const year = parseInt(this.rows[r].split(',')[0], 10);
            const value = this.getNumber(r, jdIndex);
            if (!Number.isNaN(year) && !Number.isNaN(value)) {
                series.push({ year, value });
            }
        }
        return series;
    }

    /**
     * Every monthly anomaly value, one point per calendar month, skipping
     * "***" placeholders. `x` is the year plus a fraction for the month
     * (Jan = .0, Dec = 11/12) so points plot on the same year-numbered axis
     * the annual series uses.
     */
    get monthlySeries(): { x: number, value: number }[] {
        const series: { x: number, value: number }[] = [];
        for (let r = 1; r < this.rows.length; r++) {
            const columns = this.rows[r].split(',');
            const year = parseInt(columns[0], 10);
            if (Number.isNaN(year)) {
                continue;
            }
            for (let month = 1; month <= 12; month++) {
                const value = parseFloat(columns[month]);
                if (!Number.isNaN(value)) {
                    series.push({ x: year + (month - 1) / 12, value });
                }
            }
        }
        return series;
    }

    /**
     * The most recent "Month YYYY" for which this dataset has an actual (non-"***") value.
     * GISS snapshots are retrieved mid-month, so the row for the current year is often
     * still missing its most recent months.
     */
    get lastValidDate(): string | undefined {
        for (let r = this.rows.length - 1; r >= 1; r--) {
            const columns = this.rows[r].split(',');
            const year = columns[0];
            for (let month = 12; month >= 1; month--) {
                if (!Number.isNaN(parseFloat(columns[month]))) {
                    return `${MONTH_NAMES[month - 1]} ${year}`;
                }
            }
        }
        return undefined;
    }

}

export { GISSParser };