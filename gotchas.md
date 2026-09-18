# Gotchas

## GitHub Pages Dynamic Imports

A local dynamic import with `@vite-ignore` can work in Vite development but fail after deployment. Vite cannot discover and emit the module chunk, and GitHub Pages cannot resolve the runtime-relative path under `/climate-helix/`.

Keep local dynamic imports analyzable by Vite and inspect `dist/assets/` after a production build to confirm the expected chunk was emitted.
