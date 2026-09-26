import { defineConfig, devices } from '@playwright/test';

const PORT = 4181;

/**
 * Takes the README screenshots in src/images/ (`npm run screenshots`), in the
 * light theme, from a production build with the full helix mesh. Not a test:
 * the images are written over the committed ones, to be reviewed before
 * committing them.
 */
export default defineConfig({
    testDir: 'screenshots',
    workers: 1,
    reporter: 'list',
    timeout: 60_000,
    use: {
        ...devices['Desktop Chrome'],
        baseURL: `http://localhost:${PORT}/climate-helix/`,
        colorScheme: 'light',
        deviceScaleFactor: 1,
    },
    webServer: {
        command: `npm run build && VITE_HTTPS=false npx vite preview --port ${PORT} --strictPort`,
        url: `http://localhost:${PORT}/climate-helix/`,
        reuseExistingServer: false,
        timeout: 120_000,
    },
});
