/// <reference types="vitest/config" />
import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import basicSsl from '@vitejs/plugin-basic-ssl'
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig, type Plugin } from 'vite';

/**
 * A commit cannot name its own hash, so the newest CHANGELOG.md entry has a
 * date but no commit until the next release adds it. When that entry is the
 * version committed at HEAD, this adds HEAD's hash to the app's copy of the
 * changelog (`CHANGELOG.md?raw`), so a deployed build always shows it.
 */
function changelogCommit(): Plugin {
    const git = (...args: string[]) => execFileSync('git', args, { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
    return {
        name: 'changelog-commit',
        enforce: 'pre',
        load(id) {
            const [file, query] = id.split('?');
            if (query !== 'raw' || !file.endsWith('/CHANGELOG.md')) {
                return;
            }
            this.addWatchFile(file);
            let text = readFileSync(file, 'utf8');
            try {
                const version = JSON.parse(git('show', 'HEAD:package.json')).version as string;
                const hash = git('rev-parse', '--short=7', 'HEAD');
                const heading = new RegExp(`^## v${version.replace(/\./g, '\\.')} · \\d{4}-\\d{2}-\\d{2}$`, 'm');
                text = text.replace(heading, (line) => `${line} · [${hash}](https://github.com/mkuehne-git/climate-helix/commit/${hash})`);
            } catch {
                // No git (or no commit): the entry just shows its date.
            }
            return `export default ${JSON.stringify(text)};`;
        },
    };
}
const isProduction = process.env['NODE_ENV'] === 'production';
const base = isProduction ? '/climate-helix/' : '/';
const useHttps = process.env['VITE_HTTPS'] !== 'false';
export default defineConfig({
    base,
    plugins: [
        changelogCommit(),
        ...(useHttps ? [basicSsl()] : []),
        VitePWA({
            manifest: {
                "lang": "en",
                "name": "Climate-Helix",
                "short_name": "Climate-Helix",
                "description": "Climate-Helix, a 3D visualization of temperature differences compared to temperature means.",
                "background_color": "white",
                "theme_color": "#212121",
                "orientation": "any",
                "display": "standalone",
                "start_url": base,
                "icons": [
                    {
                        "src": "assets/pwa-icons/manifest-icon-192.maskable.png",
                        "sizes": "192x192",
                        "type": "image/png",
                        "purpose": "any"
                    },
                    {
                        "src": "assets/pwa-icons/manifest-icon-192.maskable.png",
                        "sizes": "192x192",
                        "type": "image/png",
                        "purpose": "maskable"
                    },
                    {
                        "src": "assets/pwa-icons/manifest-icon-512.maskable.png",
                        "sizes": "512x512",
                        "type": "image/png",
                        "purpose": "any"
                    },
                    {
                        "src": "assets/pwa-icons/manifest-icon-512.maskable.png",
                        "sizes": "512x512",
                        "type": "image/png",
                        "purpose": "maskable"
                    }
                ]

            },
            registerType: 'prompt',
            devOptions: {
                enabled: true
            }
        }),
    ],
    build: {
        assetsInlineLimit: 0,
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules/three/')) return 'three';
                    if (id.includes('node_modules/@fontsource/')) return 'fonts';
                    if (id.includes('node_modules/html2canvas/') || id.includes('node_modules/crypto-js/')) return 'extras';
                },
            },
        },
    },
    define: {
        APP_VERSION: JSON.stringify(process.env.npm_package_version),
    },
    test: {
        // Playwright's end-to-end tests will live in e2e/ and must not be picked up here.
        include: ['test/**/*.test.ts'],
    },
});