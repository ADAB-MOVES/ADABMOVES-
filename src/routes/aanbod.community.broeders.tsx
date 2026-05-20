import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Users, Dumbbell, Heart, HandHeart } from "lucide-react";
import broeders from "@/assets/community-broeders.jpg";
import { WA } from "@/lib/whatsapp";
import { FloatingDecor } from "@/components/FloatingDecor";

export const Route = createFileRoute("/aanbod/community/broeders")({
  head: () => ({
    meta: [
      { title: "Community Broeders (18+) — ADAB MOVES" },
      { name: "description", content: "Halal multisport voor volwassen broeders. Voetbal, kracht en conditie — wekelijks in de Metropoolregio Amsterdam." },
      { property: "og:title", content: "Broeders-community — ADAB MOVES" },
      { property: "og:description", content: "Sport in goede sfeer voor moslim-broeders." },
    ],
  }),
  component: Page,
});

const bullets = [
  { icon: Dumbbell, title: "Kracht & conditie", text: "Wekelijkse multisport, krachttraining en conditie in een vaste setting." },
  { icon: Users, title: "Vaste broedergroep", text: "Sport in een groep waar je naast trainen ook broederschap opbouwt." },
  { icon: Heart, title: "Niet alleen lichaam", text: "Korte sessies van reflectie en herinnering passen we in waar nuttig." },
  { icon: HandHeart, title: "Halal & rustig", text: "Privé locatie, geen onnodige drukte. Gebed- en wuduvriendelijk." },
];

function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--cream)] border-b border-border">
        <FloatingDecor />
        <div className="container-x pt-14 md:pt-20 pb-12">
          <Link to="/aanbod/community" className="eyebrow inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
            ← Terug naar community
          </Link>
          <div className="mt-6 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow">Community — 18+</span>
              <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground">
                Sport <span className="italic text-[var(--coral-deep)]">voor broeders</span>.
              </h1>
            </div>
            <p className="lg:col-span-5 text-lg text-muted-foreground leading-relaxed">
              Een vaste sportplek voor volwassen broeders — kracht, conditie en multisport, in
              goede sfeer en met de juiste adab.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="rounded-3xl overflow-hidden">
          <img src={broeders} alt="Broeders trainen samen — boksen, krachttraining, push-ups" className="w-full h-auto" loading="lazy" />
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Een plek om aan jezelf te werken</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              Een uur in de week — voor lijf én ziel.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Een sterke broeder is geliefder bij Allah dan een zwakke broeder. We trainen
              consequent, met de juiste intentie en zonder geforceerd te zijn.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA.community} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Meld je aan via WhatsApp <ArrowRight size={18} />
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {bullets.map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-6 hover-lift">
                <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]">
                  <b.icon size={20} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-foreground">Wat is inbegrepen?</h2>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl">
            {["Wekelijkse training", "Vaste locatie & tijd", "Materiaal & accommodatie", "Maand- of kwartaaltarief"].map((p) => (
              <li key={p} className="flex items-start gap-3 text-foreground/85">
                <Check size={18} className="mt-0.5 text-[var(--coral-deep)] shrink-0" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
