import basicSsl from '@vitejs/plugin-basic-ssl'
import { defineConfig } from 'vite';
const isProduction = process.env['NODE_ENV'] === 'production';
const base = isProduction ? '/climate-helix/' : '/';
export default defineConfig({
    base,
    plugins: [basicSsl()],
    define: {
        APP_VERSION: JSON.stringify(process.env.npm_package_version),
    },
});