/// <reference types="vitest/config" />
import basicSsl from '@vitejs/plugin-basic-ssl'
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
const isProduction = process.env['NODE_ENV'] === 'production';
const base = isProduction ? '/climate-helix/' : '/';
const useHttps = process.env['VITE_HTTPS'] !== 'false';
export default defineConfig({
    base,
    plugins: [
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