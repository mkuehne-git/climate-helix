import basicSsl from '@vitejs/plugin-basic-ssl'
import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
const isProduction = process.env['NODE_ENV'] === 'production';
const base = isProduction ? '/climate-helix/' : '/';
export default defineConfig({
    base,
    plugins: [
        basicSsl(),
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
            registerType: 'autoUpdate',
            devOptions: {
                enabled: true
            }
        }),
    ],
    build: { assetsInlineLimit: 0 },
    define: {
        APP_VERSION: JSON.stringify(process.env.npm_package_version),
    },
});