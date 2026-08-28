import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const projectRoot = dirname(fileURLToPath(import.meta.url));

// When building for GitHub Pages (PAGES=true in the deploy workflow) the site is
// served from a project subpath: https://keean-work.github.io/mpo-website/.
// basePath/assetPrefix stay empty for local dev and normal builds.
const isPages = process.env.PAGES === "true";
const repoBase = "/mpo-website";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Pin the workspace root to this project so Next doesn't pick up an
  // unrelated lockfile elsewhere on the machine (home-dir package-lock).
  outputFileTracingRoot: projectRoot,
  // Static HTML export to `out/` for GitHub Pages (all routes are static).
  output: "export",
  // GitHub Pages has no image optimizer; serve images as-is (we use plain <img>).
  images: { unoptimized: true },
  // Emit `route/index.html` so Pages resolves clean URLs without a server.
  trailingSlash: true,
  ...(isPages ? { basePath: repoBase, assetPrefix: repoBase } : {}),
  // Expose the base path to app code so plain <img> tags and injected @font-face
  // rules (which Next does NOT auto-prefix) can build correct asset URLs.
  env: { NEXT_PUBLIC_BASE_PATH: isPages ? repoBase : "" },
};

export default nextConfig;
