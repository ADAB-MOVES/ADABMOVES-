import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  School,
  Users,
  CalendarDays,
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import community from "@/assets/community.jpg";
import coach from "@/assets/coach.jpg";
import event from "@/assets/event.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ADAB MOVES — Sport, beweging en karakter voor kinderen" },
      {
        name: "description",
        content:
          "ADAB MOVES is een multisport- en beweegorganisatie voor kinderen. Sport op school, in de community en op evenementen — vanuit één duidelijke methode.",
      },
      { property: "og:title", content: "ADAB MOVES — Bewegen met betekenis" },
      {
        property: "og:description",
        content: "Sport als middel voor ontwikkeling, gedrag en karakter.",
      },
      { property: "og:image", content: hero },
    ],
  }),
  component: HomePage,
});

const tracks = [
  {
    icon: School,
    tag: "1 — Scholen",
    title: "Scholen aanbod",
    text:
      "Sportlessen, naschoolse programma's, sportdagen en workshops. Volledig verzorgd, professioneel uitgevoerd en aansluitend op de behoefte van de school.",
    image: coach,
  },
  {
    icon: Users,
    tag: "2 — Community",
    title: "ADAB Moves Community",
    text:
      "Multisport voor kinderen — buiten schooltijd. Voor ouders en partners die hun kind een vaste, vertrouwde plek gunnen om te bewegen en te groeien.",
    image: community,
  },
  {
    icon: CalendarDays,
    tag: "3 — Events",
    title: "ADAB Day",
    text:
      "Evenementen en sportactiviteiten op aanvraag. Van sportdagen en kindermiddagen tot buurt- en community events — beleving en verbinding centraal.",
    image: event,
  },
];

const reasons = [
  {
    icon: Sparkles,
    title: "Eén duidelijke methode",
    text: "De ADAB Methode loopt als rode draad door al ons aanbod.",
  },
  {
    icon: ShieldCheck,
    title: "Veilige omgeving",
    text: "Trainers met VOG, heldere huisregels en een vertrouwde sfeer.",
  },
  {
    icon: HeartHandshake,
    title: "Meer dan sport",
    text: "Wij werken aan gedrag, karakter en zelfvertrouwen.",
  },
  {
    icon: Users,
    title: "10+ jaar ervaring",
    text: "Bewezen aanpak voor scholen, ouders en partners.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container-x pt-12 md:pt-20 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <span className="eyebrow">Bewegen met betekenis</span>
            <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.04] text-foreground">
              Sport, beweging en{" "}
              <span className="italic text-[var(--coral-deep)]">karakter</span> voor kinderen.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              ADAB MOVES is een multisport- en beweegorganisatie. Op scholen, in de community en op
              evenementen — vanuit één duidelijke methode.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">
                Plan een kennismaking <ArrowRight size={18} />
              </Link>
              <Link to="/over-ons" className="btn-ghost">
                Over ons
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-[var(--coral)]/10 blur-2xl" />
            <div className="relative rounded-[1.75rem] overflow-hidden shadow-[var(--shadow-soft)]">
              <img
                src={hero}
                alt="Kinderen die multisport beoefenen"
                width={1600}
                height={1100}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* OVER ONS — KORT */}
      <section className="border-t border-border bg-[var(--cream)]">
        <div className="container-x py-20 md:py-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <span className="eyebrow">Over ons</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              Wie wij zijn.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-lg text-muted-foreground leading-relaxed">
            <p>
              ADAB MOVES brengt sport, ontwikkeling en waarden samen. Met meer dan 10 jaar
              ervaring in jeugdsport bouwen wij aan een sterke, actieve en bewuste generatie.
            </p>
            <p>
              Islamitische normen en waarden vormen een belangrijk fundament van onze organisatie
              — zichtbaar in hoe wij werken, hoe wij omgaan met kinderen en in de veilige
              sportomgeving die wij creëren.
            </p>
            <div>
              <Link to="/over-ons" className="btn-ghost mt-2">
                Lees meer over ons <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* DRIE SPOREN */}
      <section className="container-x py-20 md:py-28">
        <div className="max-w-2xl mb-12">
          <span className="eyebrow">Ons aanbod</span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold text-foreground leading-tight">
            Drie sporen, één methode.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {tracks.map((t) => (
            <article
              key={t.title}
              className="group flex flex-col rounded-3xl border border-border bg-card overflow-hidden transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={t.image}
                  alt={t.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral-deep)]">
                    <t.icon size={20} />
                  </div>
                  <span className="eyebrow">{t.tag}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-foreground leading-snug">
                  {t.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{t.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/aanbod" className="btn-ghost">
            Bekijk volledig aanbod <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* WAAROM KIEZEN VOOR ADAB MOVES */}
      <section className="bg-[var(--ink)] text-[var(--cream)]">
        <div className="container-x py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-end mb-12">
            <div>
              <span className="eyebrow text-[var(--coral)]">Waarom ADAB MOVES</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">
                Waarom kiezen voor ADAB MOVES?
              </h2>
            </div>
            <p className="text-white/70 md:text-lg leading-relaxed">
              Geen losse activiteiten, maar een doordachte aanpak die het verschil maakt voor
              scholen, ouders en partners.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl border border-white/10 p-6 bg-white/[0.03]"
              >
                <div className="h-11 w-11 rounded-xl bg-[var(--coral)]/15 flex items-center justify-center text-[var(--coral)]">
                  <r.icon size={20} />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--cream)] border border-border p-10 md:p-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold leading-tight text-foreground">
                Klaar om samen te werken?
              </h2>
              <p className="mt-5 text-muted-foreground max-w-lg">
                Neem contact op voor een vrijblijvende kennismaking. Wij denken graag mee.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary">
                  Neem contact op <ArrowRight size={18} />
                </Link>
                <Link to="/aanbod" className="btn-ghost">
                  Bekijk aanbod
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden hidden md:block">
              <img
                src={community}
                alt="Kinderen geven elkaar een high-five"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ul className="hidden">
        <li>
          <CheckCircle2 size={1} />
        </li>
      </ul>
    </>
  );
}
