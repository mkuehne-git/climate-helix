import { defineConfig, devices } from '@playwright/test';

const PORT = 4179;

/**
 * End-to-end tests against a fresh production build (see TESTING.md, phase 3).
 * Served over HTTP: browsers allow service workers on http://localhost, but
 * reject them behind the self-signed development certificate.
 */
export default defineConfig({
    testDir: 'e2e',
    fullyParallel: true,
    // Each page renders the WebGL helix in software; more workers mostly cause timeouts.
    workers: 4,
    reporter: 'list',
    use: {
        baseURL: `http://localhost:${PORT}/climate-helix/`,
        trace: 'retain-on-failure',
    },
    projects: [
        { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
        { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    ],
    webServer: {
        // VITE_E2E: a lighter helix mesh (1 monthly segment, 3 radius segments), see Settings.ts.
        command: `VITE_E2E=true npm run build && VITE_HTTPS=false npx vite preview --port ${PORT} --strictPort`,
        url: `http://localhost:${PORT}/climate-helix/`,
        // Always test the current sources, never a stale build that is still being served.
        reuseExistingServer: false,
        timeout: 120_000,
    },
});
