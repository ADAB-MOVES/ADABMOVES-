import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users, Sparkles, ShieldCheck, MessageCircle } from "lucide-react";
import kinderenImg from "@/assets/community-kinderen.jpg";
import tienersImg from "@/assets/community-tieners.jpg";
import { WA } from "@/lib/whatsapp";
import { FloatingDecor } from "@/components/FloatingDecor";

export const Route = createFileRoute("/aanbod/community/")({
  head: () => ({
    meta: [
      { title: "ADAB MOVES Multisport — kies jouw groep" },
      { name: "description", content: "Wekelijkse multisport in Nederland — voor kinderen en tieners. Vaste coach, vaste groep, één duidelijke methode." },
      { property: "og:title", content: "ADAB MOVES Multisport" },
      { property: "og:description", content: "Multisport voor kinderen en tieners — veilig, vertrouwd en duurzaam." },
    ],
  }),
  component: CommunityHub,
});

const groups = [
  {
    to: "/aanbod/community/kinderen" as const,
    eyebrow: "8 — 12 jaar",
    title: "Multisport Kinderen",
    text: "Speels, opbouwend, met vaste coaches die de hele groep persoonlijk kennen.",
    img: kinderenImg,
    alt: "Kinderen sporten in een gymzaal",
  },
  {
    to: "/aanbod/community/tieners" as const,
    eyebrow: "12 — 17 jaar",
    title: "Multisport Tieners",
    text: "Voetbal, basketbal, kickboks, archery en fitness — met leeftijdgenoten uit jouw stad.",
    img: tienersImg,
    alt: "Tieners trainen samen",
  },
];

function CommunityHub() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--cream)] border-b border-border">
        <FloatingDecor />
        <div className="container-x pt-14 md:pt-20 pb-14 relative">
          <Link to="/aanbod" className="eyebrow inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
            ← Terug naar aanbod
          </Link>
          <div className="mt-6 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow">Multisport-community</span>
              <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground">
                Wekelijks bewegen — <span className="italic text-[var(--coral-deep)]">in jouw groep</span>.
              </h1>
            </div>
            <p className="lg:col-span-5 text-lg text-muted-foreground leading-relaxed">
              Twee groepen, één methode — vanuit een{" "}
              <strong className="text-foreground">islamitische fundering</strong>, open voor
              iedereen. Kies de groep die bij jouw leeftijd past, of meld je kind direct aan
              via WhatsApp.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {groups.map((g, i) => (
            <Link
              key={g.to}
              to={g.to}
              className="group flex flex-col rounded-3xl border border-border bg-card overflow-hidden hover-lift animate-rise"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[5/3] overflow-hidden bg-[var(--cream)]">
                <img src={g.img} alt={g.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <span className="eyebrow">{g.eyebrow}</span>
                <h2 className="mt-3 text-2xl font-semibold text-foreground">{g.title}</h2>
                <p className="mt-2 text-muted-foreground leading-relaxed">{g.text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--coral-deep)] group-hover:gap-3 transition-all">
                  Lees meer <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Extra activiteiten via gesloten groep */}
      <section className="container-x pb-20">
        <div className="rounded-3xl border border-border bg-[var(--cream)] p-10 md:p-14 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-2 flex lg:justify-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--coral)] text-white animate-floaty">
              <MessageCircle size={28} />
            </span>
          </div>
          <div className="lg:col-span-10">
            <span className="eyebrow">Meer dan wekelijks bewegen</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground leading-tight">
              Na inschrijving toegang tot extra activiteiten.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
              Leden van onze multisport-community kunnen deelnemen aan diverse extra programma's
              en activiteiten — uitstapjes, themadagen, toernooien en clinics. Deze worden
              aangekondigd via onze gesloten groepen, zodat alleen leden de aankondigingen zien.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-14 grid lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          <div aria-hidden className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[var(--coral)]/30 blur-3xl animate-blob" />
          <div className="lg:col-span-8 relative">
            <span className="eyebrow !text-[var(--coral)]">Direct inschrijven</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">Liever even appen?</h2>
            <p className="mt-4 text-white/70 max-w-xl">Stuur ons een bericht via WhatsApp — we reageren snel en plaatsen je in de juiste groep.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CommunityWA />
            </div>
          </div>
          <div className="lg:col-span-4 grid grid-cols-3 gap-3 text-center text-sm text-white/65 relative">
            {[
              { k: "Veilig", l: "vertrouwd" },
              { k: "Vast", l: "gezicht" },
              { k: "Duurzaam", l: "programma" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-white/10 p-4">
                <Sparkles size={16} className="mx-auto text-[var(--coral)]" />
                <div className="mt-2 font-semibold text-white">{s.k}</div>
                <div>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function CommunityWA() {
  return (
    <>
      <a href={WA.community} target="_blank" rel="noopener noreferrer" className="btn-primary">
        <Users size={18} /> Meld mijn kind aan via WhatsApp
      </a>
      <a href={WA.question} target="_blank" rel="noopener noreferrer" className="btn-ghost text-white border-white/20 hover:bg-white/5">
        <ShieldCheck size={18} /> Stel een vraag
      </a>
    </>
  );
}
