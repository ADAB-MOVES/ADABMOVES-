import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://www.adabmoves.nl";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "yearly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/aanbod", changefreq: "monthly", priority: "0.9" },
          { path: "/aanbod/scholen", changefreq: "monthly", priority: "0.9" },
          { path: "/aanbod/community", changefreq: "monthly", priority: "0.9" },
          { path: "/aanbod/community/kinderen", changefreq: "monthly", priority: "0.8" },
          { path: "/aanbod/events", changefreq: "monthly", priority: "0.8" },
          { path: "/aanbod/verhuur", changefreq: "monthly", priority: "0.7" },
          { path: "/over-ons", changefreq: "monthly", priority: "0.8" },
          { path: "/over-ons/methode", changefreq: "monthly", priority: "0.8" },
          { path: "/over-ons/verhaal", changefreq: "monthly", priority: "0.7" },
          { path: "/over-ons/missie-visie", changefreq: "monthly", priority: "0.7" },
          { path: "/contact", changefreq: "monthly", priority: "0.9" },
          { path: "/privacy", changefreq: "yearly", priority: "0.3" },
          { path: "/voorwaarden", changefreq: "yearly", priority: "0.3" },
          { path: "/cookies", changefreq: "yearly", priority: "0.3" },
          { path: "/disclaimer", changefreq: "yearly", priority: "0.3" },
          { path: "/toegankelijkheid", changefreq: "yearly", priority: "0.3" },
        ];

        const urls = entries
          .map((e) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}${e.path}</loc>`,
              e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
              e.priority ? `    <priority>${e.priority}</priority>` : null,
              `  </url>`,
            ]
              .filter(Boolean)
              .join("\n"),
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
