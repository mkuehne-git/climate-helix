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
class GISSParser {
    private _title: string;
    private _header: string[] | undefined;
    private _rows: string[];
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
        return this._title;
    }
    get header(): string[] | undefined {
        return this._header;
    }
    get rows(): string[] {
        return this._rows;
    }

}

export { GISSParser };