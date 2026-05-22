import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Users, Calendar, Heart, ShieldCheck, Sparkles, Trophy, Smile, Clock } from "lucide-react";
import kinderen from "@/assets/community-kinderen.jpg";
import { WA } from "@/lib/whatsapp";
import { FloatingDecor } from "@/components/FloatingDecor";
import { KidMascot } from "@/components/KidMascot";

export const Route = createFileRoute("/aanbod/community/kinderen")({
  head: () => ({
    meta: [
      { title: "Multisport voor kinderen (8–12) — ADAB MOVES" },
      { name: "description", content: "Wekelijkse multisport voor kinderen van 8 tot 12 jaar. Vaste coach, vaste groep, vaste locatie — een veilige plek waar jouw kind groeit." },
      { property: "og:title", content: "Multisport voor kinderen — ADAB MOVES" },
      { property: "og:description", content: "Een tweede thuis in beweging. Voor ouders die meer willen dan een sportles." },
    ],
  }),
  component: Page,
});

const bullets = [
  { icon: Users, title: "Vaste, hechte groep", text: "Dezelfde gezichten elke week — vriendschappen voor het leven, gebouwd in beweging." },
  { icon: Calendar, title: "Wekelijks vast moment", text: "Een vaste avond of zaterdag. Geen losse drop-in — wel ritme en routine." },
  { icon: Heart, title: "Flexibel betalen", text: "Per maand of per kwartaal. Geen lange contracten, transparant tarief." },
  { icon: ShieldCheck, title: "Veilig & vertrouwd", text: "Vaste coaches die je kind écht kennen — pedagogisch én sportief opgeleid." },
];

const ouderWinsten = [
  { icon: Smile, title: "Een blijer, zelfverzekerder kind", text: "Kinderen die wekelijks bewegen in een veilige groep, komen thuis met meer rust, focus en zelfvertrouwen." },
  { icon: Trophy, title: "Brede motorische basis", text: "Geen eenzijdige sport, maar voetbal, basketbal, atletiek en spel — een sterk lichaam dat alles aankan." },
  { icon: ShieldCheck, title: "Karakter en respect", text: "Coaches benoemen wat je thuis ook belangrijk vindt: respect, geduld, doorzettingsvermogen, eerlijkheid." },
  { icon: Sparkles, title: "Een groep die past", text: "Een omgeving die jullie normen en waarden deelt — zodat je kind zich volledig thuis voelt." },
  { icon: Clock, title: "Rust in jouw agenda", text: "Eén vast moment per week. Wij regelen materiaal, locatie en coach — jij brengt en haalt." },
  { icon: Heart, title: "Een tweede thuis", text: "Een gemeenschap waar jouw kind gezien wordt — niet als nummer, maar als individu." },
];

const faqs = [
  { q: "Vanaf welke leeftijd kan mijn kind meedoen?", a: "Onze vaste groepen zijn voor kinderen van 8 t/m 12 jaar. Onder en boven die leeftijd kijken we per geval — neem contact op." },
  { q: "Moet mijn kind al kunnen sporten?", a: "Nee. We bouwen elke periode rustig op, met aandacht voor elk niveau. Beginners en gevorderden trainen prima samen." },
  { q: "Wat als mijn kind een keer niet kan?", a: "Geen probleem — laat het ons weten. Bij langere afwezigheid kijken we naar een passende oplossing." },
  { q: "Hoe weet ik of het klikt?", a: "Je kunt een keer vrijblijvend meedoen. Klikt het niet? Dan stopt het daar — zonder verplichtingen." },
];

function Page() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--cream)] border-b border-border">
        <FloatingDecor />
        <div className="container-x pt-14 md:pt-20 pb-12 relative">
          <Link to="/aanbod/community" className="eyebrow inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
            ← Terug naar multisport
          </Link>
          <div className="mt-6 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow">Voor ouders — kinderen 8 t/m 12 jaar</span>
              <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground">
                Meer dan sport. <span className="italic text-[var(--coral-deep)]">Een tweede thuis</span>.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Wekelijks bewegen met een vaste, vertrouwde groep. Met coaches die jouw kind
                kennen en de normen en waarden delen die je thuis ook belangrijk vindt.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={WA.community} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Meld mijn kind aan <ArrowRight size={18} />
                </a>
                <a href={WA.question} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  Eerst een vraag stellen
                </a>
              </div>
            </div>
            <div className="lg:col-span-5 hidden lg:flex justify-end">
              <KidMascot size={240} />
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-14 md:py-16">
        <div className="rounded-3xl overflow-hidden hover-lift max-w-4xl mx-auto">
          <img src={kinderen} alt="Kinderen sporten samen in een gymzaal" className="w-full h-auto object-cover" loading="lazy" />
        </div>
      </section>

      {/* WAT JE ALS OUDER TERUGKRIJGT — uitgebreid */}
      <section className="container-x pb-20">
        <div className="max-w-3xl mb-12">
          <span className="eyebrow">Voor ouders</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
            Wat jij terugkrijgt <span className="italic text-[var(--coral-deep)]">als ouder</span>.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-lg">
            Eén uur per week levert veel meer op dan een sportles. Dit is wat ouders ons
            keer op keer terug horen.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ouderWinsten.map((w, i) => (
            <div
              key={w.title}
              className="rounded-3xl border border-border bg-card p-7 hover-lift animate-rise"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <div className="h-12 w-12 rounded-2xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]">
                <w.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOE HET WERKT */}
      <section className="container-x pb-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Hoe het werkt</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              Eén vast moment, een vaste groep, een vaste coach.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Wij werken met vaste groepen op leeftijd. De coach en groep blijven — alleen de
              sport wisselt per periode (voetbal, basketbal, atletiek, multisport). Zo bouwt je
              kind aan vriendschap, ritme én een brede sportbasis.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {bullets.map((b, i) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-6 hover-lift animate-rise" style={{ animationDelay: `${i * 80}ms` }}>
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

      {/* TARIEF */}
      <section className="container-x pb-20">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-14">
          <span className="eyebrow">Tarief</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight text-foreground">
            Transparante tarieven, geen verborgen kosten.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
            Deelname is per maand of per kwartaal. Het exacte tarief verschilt per stad en
            sportdiscipline — je ontvangt het direct bij plaatsing.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl">
            {["Wekelijkse training", "Vaste coach & groep", "Materiaal & accommodatie", "Toegang tot extra activiteiten"].map((p) => (
              <li key={p} className="flex items-start gap-3 text-foreground/85">
                <Check size={18} className="mt-0.5 text-[var(--coral-deep)] shrink-0" /> {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x pb-20">
        <div className="max-w-3xl mb-10">
          <span className="eyebrow">Veelgestelde vragen</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight text-foreground">
            Praktische vragen van ouders.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">{f.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--cream)] border border-border p-10 md:p-14">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <span className="eyebrow">Klaar om kennis te maken?</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight text-foreground">
                Laat je kind een keer vrijblijvend meedoen.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Plan een proefles via WhatsApp — we denken graag met je mee en kijken in welke
                groep je kind het best past.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={WA.community} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Plan een proefles <ArrowRight size={18} />
                </a>
                <a href={WA.question} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                  Stel een vraag
                </a>
              </div>
            </div>
            <div className="md:col-span-4 hidden md:flex justify-end">
              <KidMascot size={200} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
