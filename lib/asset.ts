/**
 * Prefix a root-absolute public asset path (e.g. "/images/foo.svg") with the
 * deploy base path. Needed because Next only auto-applies basePath to
 * next/link and next/image — plain <img> tags and CSS url() references are left
 * untouched, which breaks them when the site is served from a subpath
 * (GitHub Pages: /mpo-website). Empty base path (local dev / root deploy) is a
 * no-op. Non-absolute paths (external URLs, data:) are returned unchanged.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return path.startsWith("/") ? `${BASE_PATH}${path}` : path;
}
