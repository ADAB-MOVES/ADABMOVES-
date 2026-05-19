import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Users, Calendar, Heart, ShieldCheck } from "lucide-react";
import community from "@/assets/community.jpg";
import community2 from "@/assets/community-2.jpg";
import event from "@/assets/event.jpg";

export const Route = createFileRoute("/aanbod/community")({
  head: () => ({
    meta: [
      { title: "Multisportcommunity — ADAB MOVES" },
      { name: "description", content: "Wekelijkse multisportactiviteiten voor kinderen en tieners — inschrijving per maand of per kwartaal." },
      { property: "og:title", content: "ADAB MOVES Community" },
      { property: "og:image", content: community },
    ],
  }),
  component: CommunityPage,
});

const bullets = [
  { icon: Users, title: "Aanmelden & toelating", text: "Je meldt je aan met leeftijd, stad en interesses. Wij koppelen je aan een passende groep." },
  { icon: Calendar, title: "Wekelijkse activiteiten", text: "Vast moment, vaste locatie in jouw stad. Multisport, voetbal, basketbal, archery, kickboks of fitness." },
  { icon: Heart, title: "Maand of kwartaal", text: "Je betaalt per maand of per 3 maanden. Flexibel, transparant en zonder lange contracten." },
  { icon: ShieldCheck, title: "Halal & veilig", text: "VOG-gescreende coaches, duidelijke huisregels en gebed- & wuduvriendelijke programmering." },
];

const steps = [
  { n: "01", t: "Aanmelden", d: "Vul leeftijd, stad en sportinteresses in via het contactformulier." },
  { n: "02", t: "Plaatsing", d: "Wij plaatsen je in een groep met dezelfde leeftijd en interesses." },
  { n: "03", t: "Bevestigen", d: "Je ontvangt locatie, tijden en het tarief — kies maand of kwartaal." },
  { n: "04", t: "Beginnen", d: "Je vaste coach, je vaste groep, elke week opnieuw." },
];

function CommunityPage() {
  return (
    <>
      <section className="bg-[var(--cream)] border-b border-border">
        <div className="container-x pt-14 md:pt-20 pb-12">
          <Link to="/aanbod" className="eyebrow inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
            ← Terug naar aanbod
          </Link>
          <div className="mt-6 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow">Spoor 02 — Community</span>
              <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground">
                Wekelijks bewegen <span className="italic text-[var(--coral-deep)]">in jouw stad</span>.
              </h1>
            </div>
            <p className="lg:col-span-5 text-lg text-muted-foreground leading-relaxed">
              De ADAB MOVES community is een vaste, halal sportplek voor kinderen en tieners.
              Aanmelden kan zodra wij plek hebben in jouw stad en leeftijdsgroep.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="grid grid-cols-12 gap-4 md:gap-5">
          <div className="col-span-12 md:col-span-5 aspect-[4/5] rounded-3xl overflow-hidden">
            <img src={community} alt="Kinderen sporten in ADAB MOVES community" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="col-span-12 md:col-span-7 grid gap-4 md:gap-5">
            <div className="aspect-[16/9] rounded-3xl overflow-hidden">
              <img src={community2} alt="Tieners in multisporttraining" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[16/9] rounded-3xl overflow-hidden">
              <img src={event} alt="Community event" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Hoe het werkt</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              Een hechte groep. Eén coach. Wisselende sporten.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              We werken met vaste groepen op leeftijd. De coach en groep blijven — alleen de
              sport wisselt per periode. Zo bouwen kinderen vertrouwen en blijven ze breed
              ontwikkelen.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Meld je interesse aan <ArrowRight size={18} />
            </Link>
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

      <section className="bg-[var(--ink)] text-[var(--cream)]">
        <div className="container-x py-20">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow text-[var(--coral)]">In 4 stappen</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">Van aanmelding naar wekelijks sporten.</h2>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((s) => (
              <li key={s.n} className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="text-3xl font-semibold text-[var(--coral)]" style={{ fontFamily: "var(--font-display)" }}>{s.n}</div>
                <div className="mt-3 font-semibold">{s.t}</div>
                <div className="mt-1.5 text-sm text-white/70 leading-relaxed">{s.d}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="rounded-3xl border border-border bg-card p-10 md:p-14">
          <span className="eyebrow">Tarief</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight text-foreground">
            Transparante tarieven, geen verborgen kosten.
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
            De deelname aan de community is per maand of per kwartaal. Het exacte tarief
            verschilt per stad en sportdiscipline — je ontvangt het bij je plaatsing.
          </p>
          <ul className="mt-8 grid sm:grid-cols-2 gap-4 max-w-2xl">
            {["Wekelijkse training", "Vaste coach & groep", "Materiaal & accommodatie", "Maand- of kwartaalfactuur"].map((p) => (
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
