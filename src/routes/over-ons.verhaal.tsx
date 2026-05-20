import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import verhaal from "@/assets/verhaal.jpg";
import community from "@/assets/community.jpg";
import { FloatingDecor } from "@/components/FloatingDecor";

export const Route = createFileRoute("/over-ons/verhaal")({
  head: () => ({
    meta: [
      { title: "Ons verhaal — ADAB MOVES" },
      { name: "description", content: "Hoe ADAB MOVES is ontstaan: drie broeders, één missie en de kracht van sport." },
      { property: "og:title", content: "Ons verhaal — ADAB MOVES" },
      { property: "og:image", content: verhaal },
    ],
  }),
  component: VerhaalPage,
});

const milestones = [
  { y: "2014", t: "Eerste trainingen", d: "Op zaterdagochtend in een gehuurde gymzaal — broeders die jongens leerden trainen mét manieren." },
  { y: "2017", t: "Eerste scholen", d: "Sportlessen op basisscholen in Amsterdam. Een vast gezicht in de gymzaal." },
  { y: "2020", t: "Community gelanceerd", d: "Wekelijkse multisport voor kinderen en tieners op vaste locaties." },
  { y: "2023", t: "Events & ADAB Day", d: "Sportdagen voor scholen, moskeeën en buurthuizen door heel de regio." },
  { y: "2025", t: "Volgende fase", d: "Verhuur, meidentak en nieuwe steden — gecontroleerd groeien zonder verlies van kwaliteit." },
];

function VerhaalPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--cream)] border-b border-border">
        <FloatingDecor />
        <div className="container-x pt-14 md:pt-20 pb-12">
          <Link to="/over-ons" className="eyebrow inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
            ← Terug naar over ons
          </Link>
          <div className="mt-6 grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow">Ons verhaal</span>
              <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-[1.05] text-foreground">
                Begonnen door <span className="italic text-[var(--coral-deep)]">broeders</span>, gedragen door een gemeenschap.
              </h1>
            </div>
            <p className="lg:col-span-5 text-lg text-muted-foreground leading-relaxed">
              ADAB MOVES is ontstaan uit een groep broeders die één ding zagen: de juiste manieren
              (adab) en het ontwikkelen van karakter moeten meegegeven worden — en sport speelt
              daarin een hele grote rol.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x py-16 md:py-20">
        <div className="rounded-3xl overflow-hidden">
          <img src={verhaal} alt="Oprichters van ADAB MOVES in de gymzaal" loading="lazy" className="w-full h-[420px] md:h-[560px] object-cover" />
        </div>
      </section>

      <section className="container-x pb-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">Waarom wij begonnen</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
              Een duidelijk alternatief voor scholen én gezinnen.
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              We zagen ouders zoeken naar een plek waar hun kinderen en tieners kunnen sporten in
              een veilige, halal omgeving. We zagen scholen worstelen met betekenisvolle
              bewegingslessen. Daarom bieden wij een{" "}
              <strong className="text-foreground">duidelijk alternatief</strong> — voor beide.
            </p>
            <p>
              Geen losse activiteiten, maar een doordachte methode: bewegen met betekenis,
              geleid door gescreende broeders die zelf leven naar de waarden die zij doorgeven.
            </p>
            <p>
              Vandaag de dag zijn we actief op tientallen locaties in de Metropoolregio
              Amsterdam — met dezelfde overtuiging als op dag één.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--ink)] text-[var(--cream)]">
        <div className="container-x py-20">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow text-[var(--coral)]">Tijdlijn</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight">Van eerste training tot landelijke ambitie.</h2>
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {milestones.map((m) => (
              <li key={m.y} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="text-3xl font-semibold text-[var(--coral)]" style={{ fontFamily: "var(--font-display)" }}>{m.y}</div>
                <div className="mt-3 font-semibold">{m.t}</div>
                <div className="mt-1.5 text-sm text-white/70 leading-relaxed">{m.d}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="rounded-3xl bg-[var(--coral)]/10 border border-[var(--coral)]/20 p-10 md:p-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-2 flex lg:justify-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--coral)] text-white">
              <Quote size={28} />
            </span>
          </div>
          <div className="lg:col-span-10">
            <p className="text-2xl md:text-3xl font-display leading-snug text-foreground" style={{ fontFamily: "var(--font-display)" }}>
              "Een gezond verstand in een gezond lichaam."
            </p>
            <p className="mt-4 text-sm text-muted-foreground">De kracht van het lichaam staat in dienst van karakter en gemeenschap.</p>
          </div>
        </div>
      </section>

      <section className="container-x pb-24">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl overflow-hidden">
            <img src={community} alt="Gemeenschap" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="rounded-3xl bg-[var(--ink)] text-[var(--cream)] p-10 md:p-14 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">Word onderdeel van ons verhaal.</h2>
            <p className="mt-5 text-white/70">Of je nu school, ouder, partner of jongere bent — er is een plek voor jou.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Neem contact op <ArrowRight size={18} /></Link>
              <Link to="/over-ons/methode" className="btn-ghost text-white border-white/20 hover:bg-white/5">Lees over de methode</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
