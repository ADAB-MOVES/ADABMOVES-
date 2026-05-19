import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
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
      { title: "Adab Moves — Bewegen met betekenis" },
      { name: "description", content: "De islamitische multisport- en beweegorganisatie van Nederland. Sport, karaktervorming en gemeenschap voor kinderen op scholen, evenementen en in onze eigen multisportcommunity." },
      { name: "author", content: "Adab Moves" },
      { property: "og:title", content: "Adab Moves — Bewegen met betekenis" },
      { property: "og:description", content: "Sport, karaktervorming en gemeenschap voor kinderen — vanuit een islamitische fundering." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
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
    </div>
  );
}
