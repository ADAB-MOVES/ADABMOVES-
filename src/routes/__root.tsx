import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { IntroPopup } from "@/components/IntroPopup";
import { useReveal } from "@/hooks/use-reveal";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Pagina niet gevonden</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          De pagina die je zoekt bestaat niet of is verplaatst.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary text-sm">Naar home</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ADAB MOVES — Multisport voor kinderen & jongeren" },
      { name: "description", content: "ADAB MOVES is een multisportaanbieder voor kinderen en jongeren in Amsterdam en omstreken. We geven wekelijkse sportlessen, workshops en sportdagen voor scholen." },
      { name: "keywords", content: "islamitische sportorganisatie, multisport kinderen, sport voor jongeren, karaktervorming jongeren, sport en discipline, islamitische jongerenorganisatie, sportactiviteiten kinderen, workshops voor scholen, jongerenontwikkeling sport, islamitische multisport community, kickboksen jongeren, sport en zelfvertrouwen jongeren, weerbaarheidstraining jongeren, sport coaching kinderen, sportprogramma jongeren, sportcommunity jongeren, islamitische jongerenactiviteiten, sport met islamitische waarden, jongerenwerk sport, school sportdagen, maatschappelijke jongerenprojecten, multisport Nederland, sportactiviteiten Amsterdam, jongeren sport Amsterdam, multisport kinderen Amsterdam, kickboksen jongeren Amsterdam, sportactiviteiten Haarlem, jongeren sport Almere, sportactiviteiten Zaandam, multisport Hoofddorp, sport Amstelveen, ADAB MOVES" },
      { name: "author", content: "ADAB MOVES" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "googlebot", content: "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "ADAB MOVES" },
      { property: "og:locale", content: "nl_NL" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#1F2240" },
      { name: "format-detection", content: "telephone=no" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/8d126a28-ecd0-4b2c-a6ca-7378e9b15720" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/8d126a28-ecd0-4b2c-a6ca-7378e9b15720" },
      { property: "og:title", content: "ADAB MOVES — Multisport voor kinderen & jongeren" },
      { name: "twitter:title", content: "ADAB MOVES — Multisport voor kinderen & jongeren" },
      { property: "og:description", content: "ADAB MOVES is een multisportaanbieder voor kinderen en jongeren in Amsterdam en omstreken. We geven wekelijkse sportlessen, workshops en sportdagen voor scholen." },
      { name: "twitter:description", content: "ADAB MOVES is een multisportaanbieder voor kinderen en jongeren in Amsterdam en omstreken. We geven wekelijkse sportlessen, workshops en sportdagen voor scholen." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "dns-prefetch", href: "https://fonts.gstatic.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": ["SportsOrganization", "LocalBusiness"],
              "@id": "https://www.adabmoves.nl/#organization",
              name: "ADAB MOVES",
              alternateName: "Adab Moves",
              url: "https://www.adabmoves.nl",
              email: "adabmoves@gmail.com",
              telephone: "+31611879789",
              description:
                "Islamitische multisport- en jongerenorganisatie. Sport voor kinderen en jongeren, kickboksen, weerbaarheidstraining, workshops voor scholen en karaktervorming — in Amsterdam, Haarlem, Zaandam, Almere, Amstelveen en Hoofddorp.",
              areaServed: [
                { "@type": "City", name: "Amsterdam" },
                { "@type": "City", name: "Haarlem" },
                { "@type": "City", name: "Zaandam" },
                { "@type": "City", name: "Zaanstad" },
                { "@type": "City", name: "Almere" },
                { "@type": "City", name: "Hoofddorp" },
                { "@type": "City", name: "Amstelveen" },
                { "@type": "Country", name: "Nederland" },
              ],
              address: {
                "@type": "PostalAddress",
                addressRegion: "Noord-Holland",
                addressLocality: "Amsterdam",
                addressCountry: "NL",
              },
              knowsAbout: [
                "multisport voor kinderen",
                "kickboksen voor jongeren",
                "weerbaarheidstraining jongeren",
                "sport en karaktervorming",
                "school sportdagen",
                "islamitische jongerenactiviteiten",
              ],
              sameAs: [],
            },
            {
              "@type": "WebSite",
              "@id": "https://www.adabmoves.nl/#website",
              url: "https://www.adabmoves.nl",
              name: "ADAB MOVES",
              inLanguage: "nl-NL",
              publisher: { "@id": "https://www.adabmoves.nl/#organization" },
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  // Re-run reveal observer whenever the route changes so new content fades in.
  const location = useRouterState({ select: (s) => s.location.pathname });
  useReveal(location);
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <WhatsAppButton />
      <IntroPopup />
    </div>
  );
}
