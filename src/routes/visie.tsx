import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Heart,
  Scale,
  Hourglass,
  Sparkles,
  Leaf,
  ShieldCheck,
  Target,
  Users,
  Compass,
  Flame,
  BookOpen,
  Quote,
  HelpCircle,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import community from "@/assets/community.jpg";
import coach from "@/assets/coach.jpg";
import event from "@/assets/event.jpg";

export const Route = createFileRoute("/visie")({
  head: () => ({
    meta: [
      { title: "Visie — Adab Moves" },
      { name: "description", content: "Onze visie, missie en kernwaarden: sport als middel voor brede ontwikkeling, vanuit een islamitische fundering." },
      { property: "og:title", content: "Visie — Adab Moves" },
      { property: "og:description", content: "Respect, eerlijkheid, geduld, dankbaarheid en verantwoordelijkheid — verweven in elke training." },
    ],
  }),
  component: VisiePage,
});

const values = [
  { icon: ShieldCheck, name: "Respect", desc: "Voor jezelf, voor de ander en voor de ruimte." },
  { icon: Scale, name: "Eerlijkheid", desc: "Open communicatie en eerlijk spel, ook als het tegenzit." },
  { icon: Hourglass, name: "Geduld", desc: "Groei kost tijd — herhalen, bijsturen, doorzetten." },
  { icon: Heart, name: "Dankbaarheid", desc: "Waardering voor lichaam, talent en de mensen om je heen." },
  { icon: Leaf, name: "Nederigheid", desc: "Winnen zonder hoogmoed, verliezen zonder schaamte." },
  { icon: Flame, name: "Zelfbeheersing", desc: "Emoties herkennen en bewust handelen onder druk." },
  { icon: Target, name: "Verantwoordelijkheid", desc: "Je rol pakken — voor jezelf en het team." },
  { icon: Users, name: "Samenwerking", desc: "Samen sterker dan alleen, in en buiten het veld." },
];

const pillars = [
  {
    icon: Sparkles,
    title: "Fysiek",
    desc: "Motoriek, conditie, coördinatie en gezonde gewoontes opbouwen door gevarieerde sport.",
  },
  {
    icon: Users,
    title: "Sociaal",
    desc: "Samenspelen, communiceren en omgaan met verschillen — in elke werkvorm verweven.",
  },
  {
    icon: Compass,
    title: "Mentaal",
    desc: "Doorzetten, omgaan met verlies en succes, focus en zelfvertrouwen ontwikkelen.",
  },
  {
    icon: BookOpen,
    title: "Moreel",
    desc: "Karaktervorming vanuit duidelijke waarden — in elke training herkenbaar.",
  },
];

function VisiePage() {
  return (
    <>
      {/* HERO */}
      <section className="container-x pt-16 md:pt-24 pb-12">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <span className="eyebrow">Onze visie</span>
            <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.03] text-foreground">
              Sport als middel<br />
              <span className="italic text-[var(--coral-deep)]">voor ontwikkeling.</span>
            </h1>
          </div>
          <p className="lg:col-span-5 text-lg text-muted-foreground leading-relaxed">
            Beweging is voor Adab Moves geen doel op zich, maar een kans om waarden te oefenen
            in de praktijk. Kinderen groeien daarmee niet alleen fysiek, maar ook sociaal,
            mentaal en moreel.
          </p>
        </div>

        {/* Stat strip */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {[
            { k: "4", l: "Ontwikkelpijlers" },
            { k: "8", l: "Kernwaarden" },
            { k: "5+", l: "Sportdisciplines" },
            { k: "100%", l: "Pedagogische focus" },
          ].map((s) => (
            <div key={s.l} className="bg-card p-6 md:p-8">
              <div className="text-4xl md:text-5xl font-display font-semibold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                {s.k}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSIE / VISIE */}
      <section className="container-x pb-20">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="relative rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-14 overflow-hidden">
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-[var(--coral)]/20 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--coral)]/15 text-[var(--coral)]">
                  <Target size={18} />
                </span>
                <span className="eyebrow text-[var(--coral)]">Missie</span>
              </div>
              <p className="mt-6 text-2xl md:text-3xl font-display leading-snug" style={{ fontFamily: "var(--font-display)" }}>
                Kinderen op een professionele, plezierige en veilige manier laten bewegen,
                terwijl zij groeien in gedrag, karakter en sociale vaardigheden.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-[var(--cream)]/80">
                {[
                  "Veilige, gestructureerde trainingen",
                  "Plezier als motor voor leren",
                  "Karaktervorming in elke werkvorm",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--coral)]" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative rounded-3xl border border-border bg-card p-10 md:p-14 overflow-hidden">
            <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[var(--coral)]/10 blur-3xl" />
            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--coral)]/15 text-[var(--coral-deep)]">
                  <Compass size={18} />
                </span>
                <span className="eyebrow">Visie</span>
              </div>
              <p className="mt-6 text-2xl md:text-3xl font-display leading-snug text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                Sport speelt een krachtige rol in de ontwikkeling van evenwichtige,
                respectvolle en zelfbewuste jongeren.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
                {[
                  "Brede ontwikkeling boven prestatie alleen",
                  "Pedagogiek vanuit duidelijke waarden",
                  "Een veilige plek voor élk kind",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-[var(--coral-deep)]" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PIJLERS */}
      <section className="container-x pb-20">
        <div className="max-w-2xl">
          <span className="eyebrow">Vier pijlers</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Eén kind, vier dimensies van groei.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Onze methode kijkt verder dan alleen het fysieke. Elke training raakt bewust
            meerdere ontwikkelingsgebieden tegelijk.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-6 hover:shadow-[var(--shadow-soft)] transition-shadow">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--coral)]/10 text-[var(--coral-deep)]">
                <p.icon size={20} />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE BLOK */}
      <section className="container-x pb-20">
        <div className="rounded-3xl bg-[var(--coral)]/10 border border-[var(--coral)]/20 p-10 md:p-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-2 flex lg:justify-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--coral)] text-white">
              <Quote size={28} />
            </span>
          </div>
          <div className="lg:col-span-10">
            <p className="text-2xl md:text-3xl font-display leading-snug text-foreground" style={{ fontFamily: "var(--font-display)" }}>
              "Een sterke gelovige is geliefder bij Allah dan een zwakke gelovige —
              en in beiden is goedheid."
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              De kracht van het lichaam staat in dienst van karakter en gemeenschap.
            </p>
          </div>
        </div>
      </section>

      {/* KERNWAARDEN — kaarten met icoon en korte uitleg */}
      <section className="container-x pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="rounded-3xl overflow-hidden">
              <img
                src={community}
                alt="Kinderen bewegen samen tijdens een Adab Moves training"
                width={1200}
                height={1500}
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/5]"
              />
            </div>
            <div className="mt-6">
              <span className="eyebrow">Kernwaarden</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground leading-tight">
                Acht waarden,<br /> verweven in elke training.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Onze waarden worden niet apart van sport gepresenteerd, maar verweven in
                de activiteiten zelf. Elk moment — winst of tegenslag — wordt benut.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.name} className="group rounded-2xl border border-border bg-card p-5 hover:border-[var(--coral)]/40 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--coral)]/10 text-[var(--coral-deep)] group-hover:bg-[var(--coral)] group-hover:text-white transition-colors">
                    <v.icon size={18} />
                  </span>
                  <div className="text-base font-semibold text-foreground">{v.name}</div>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AANPAK / TIJDSLIJN */}
      <section className="container-x pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-10">
          <div className="lg:col-span-7">
            <span className="eyebrow">Onze aanpak</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground leading-tight">
              Van eerste gesprek tot duurzame groei.
            </h2>
          </div>
          <p className="lg:col-span-5 text-muted-foreground leading-relaxed">
            Een heldere route waarmee scholen en partners weten wat ze van ons mogen
            verwachten — en wij van hen.
          </p>
        </div>

        <div className="rounded-3xl bg-[var(--cream)] border border-border p-8 md:p-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {[
              { n: "01", t: "Initiatie", d: "Visie, aanbod en doelgroep scherpstellen — samen met de partner." },
              { n: "02", t: "Ontwerp", d: "Programma's, werkvormen, materialen en procedures uitwerken." },
              { n: "03", t: "Realisatie", d: "Uitvoering op scholen, eigen locaties of bij events." },
              { n: "04", t: "Nazorg", d: "Evaluatie, verbetering en borging van de pedagogische kern." },
              { n: "05", t: "Borging", d: "Vaste werkwijzen, training, evaluatie en feedback." },
              { n: "06", t: "Groei", d: "Gecontroleerde uitbreiding zonder verlies van kwaliteit." },
            ].map((p) => (
              <div key={p.n} className="bg-card p-6 md:p-8">
                <div className="flex items-baseline gap-3">
                  <div
                    className="text-4xl font-display font-semibold text-[var(--coral)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {p.n}
                  </div>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-foreground">{p.t}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SFEER STRIP */}
      <section className="container-x pb-20">
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <div className="rounded-3xl overflow-hidden">
            <img src={coach} alt="Trainer met groep kinderen in de gymzaal" loading="lazy" className="w-full h-full object-cover aspect-[4/3]" />
          </div>
          <div className="rounded-3xl overflow-hidden">
            <img src={event} alt="Vrolijk Adab Moves event in een versierde hal" loading="lazy" className="w-full h-full object-cover aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-24">
        <div className="rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-16 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <span className="eyebrow text-[var(--coral)]">Samen bouwen</span>
            <h2 className="mt-4 text-3xl md:text-4xl font-semibold leading-tight">
              Past onze visie bij jullie school of organisatie?
            </h2>
            <p className="mt-4 text-[var(--cream)]/80 max-w-xl">
              We denken graag mee over een traject dat past bij jullie kinderen, ruimte en doelen.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Link to="/contact" className="btn-primary">
              Werk met ons samen <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
