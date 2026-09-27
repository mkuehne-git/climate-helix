import * as THREE from "three";

/** The curve a helix tube follows: a 3D curve that also knows its color along the way. */
export type HelixPath = THREE.Curve<THREE.Vector3> & { getColor(t: number): THREE.Color };

/**
 * A tube along a {@link HelixPath}, adapted from three.js's TubeGeometry: the
 * same frames, vertices, normals, UVs and faces, plus a vertex color per ring
 * (the `color` attribute) from the path's color at that point. It is built
 * ring by ring along the curve, so drawing a prefix of its indices draws the
 * helix up to a point - the creation animation (HelixAnimation.ts).
 */
class HelixGeometry extends THREE.BufferGeometry {
    override readonly type = 'HelixGeometry';
    readonly parameters: { path: HelixPath, tubularSegments: number, radius: number, radialSegments: number, closed: boolean };

    constructor(path: HelixPath, tubularSegments = 30, radius = 1, radialSegments = 8, closed = false) {
        super();
        this.parameters = { path, tubularSegments, radius, radialSegments, closed };

        const frames = path.computeFrenetFrames(tubularSegments, closed);
        const vertices: number[] = [];
        const normals: number[] = [];
        const uvs: number[] = [];
        const colors: number[] = [];
        const indices: number[] = [];
        const normal = new THREE.Vector3();
        const point = new THREE.Vector3();

        const generateSegment = (i: number) => {
            // Evenly distributed points along the curve (distance 0: map by the fraction u).
            const t = path.getUtoTmapping(i / tubularSegments, 0);
            path.getPoint(t, point);
            const color = path.getColor(t);
            const N = frames.normals[i];
            const B = frames.binormals[i];
            for (let j = 0; j <= radialSegments; j++) {
                const v = j / radialSegments * Math.PI * 2;
                const sin = Math.sin(v);
                const cos = -Math.cos(v);
                normal.set(cos * N.x + sin * B.x, cos * N.y + sin * B.y, cos * N.z + sin * B.z).normalize();
                normals.push(normal.x, normal.y, normal.z);
                vertices.push(point.x + radius * normal.x, point.y + radius * normal.y, point.z + radius * normal.z);
                colors.push(color.r, color.g, color.b);
            }
        };

        for (let i = 0; i < tubularSegments; i++) {
            generateSegment(i);
        }
        // An open tube gets its last ring at the curve's end; a closed one repeats the first (its UVs differ).
        generateSegment(closed ? 0 : tubularSegments);

        for (let i = 0; i <= tubularSegments; i++) {
            for (let j = 0; j <= radialSegments; j++) {
                uvs.push(i / tubularSegments, j / radialSegments);
            }
        }

        for (let j = 1; j <= tubularSegments; j++) {
            for (let i = 1; i <= radialSegments; i++) {
                const a = (radialSegments + 1) * (j - 1) + (i - 1);
                const b = (radialSegments + 1) * j + (i - 1);
                const c = (radialSegments + 1) * j + i;
                const d = (radialSegments + 1) * (j - 1) + i;
                indices.push(a, b, d);
                indices.push(b, c, d);
            }
        }

        this.setIndex(indices);
        this.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        this.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
        this.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
        this.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    }
}

export { HelixGeometry };
