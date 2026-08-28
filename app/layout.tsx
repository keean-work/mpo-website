import type { Metadata } from "next";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { asset } from "@/lib/asset";
import "./globals.css";

// Self-hosted @font-face rules, injected here (not via styles/fonts.css) so the
// font URLs carry the deploy base path. Next does not rewrite CSS url() for
// basePath, so a subpath deploy (GitHub Pages: /mpo-website) needs the prefix
// applied explicitly. Keep in sync with styles/fonts.css (the copy-paste copy).
const fontFaceStyles = `
@font-face{font-family:"Inter";font-style:normal;font-weight:100 900;font-display:swap;src:url("${asset("/fonts/Inter/InterVariable.woff2")}") format("woff2");}
@font-face{font-family:"Inter";font-style:italic;font-weight:100 900;font-display:swap;src:url("${asset("/fonts/Inter/InterVariable-Italic.woff2")}") format("woff2");}
@font-face{font-family:"Open Sans";font-style:normal;font-weight:300 800;font-display:swap;src:url("${asset("/fonts/OpenSans/OpenSans-Variable.woff2")}") format("woff2");}
@font-face{font-family:"JetBrains Mono";font-style:normal;font-weight:100 800;font-display:swap;src:url("${asset("/fonts/JetBrainsMono/JetBrainsMono-VariableFont_wght.ttf")}") format("truetype");}
`;

export const metadata: Metadata = {
  title: {
    default: "MINDEF Product Office",
    template: "%s | MINDEF Product Office",
  },
  description:
    "MPO helps MINDEF teams define software problems, test possible solutions and develop products with clear outcomes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-zone="enterprise" data-mode="light">
      <head>
        <style dangerouslySetInnerHTML={{ __html: fontFaceStyles }} />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-fg focus:shadow-md focus:outline-1 focus:outline-accent"
        >
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
