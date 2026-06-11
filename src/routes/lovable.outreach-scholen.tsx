import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export const Route = createFileRoute("/lovable/outreach-scholen")({
  head: () => ({
    meta: [
      { title: "Outreach scholen — ADAB MOVES" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: OutreachPage,
});

const SUBJECT_PRIMARY = "Sport mét karakter voor [Schoolnaam] — vrijblijvend kennismaken?";

const SUBJECT_VARIANTS = [
  "Rust in de klas via sport en spel — kort gesprek?",
  "Voorstel: gratis proefactiviteit voor [Schoolnaam]",
  "15 minuten over karaktervorming via sport op [Schoolnaam]?",
];

const BODY_PRIMARY = `Beste [naam / schoolteam van Schoolnaam],

Mijn naam is Anass Bakkali, oprichter van ADAB MOVES. Wij verzorgen sport- en spelactiviteiten op basis- en middelbare scholen in Amsterdam, Haarlem, Zaandam, Almere, Amstelveen en Hoofddorp — met één duidelijke focus: karaktervorming via sport.

Wat scholen waarmee we werken terugzien:
• Merkbaar rustigere klassen na elke sessie
• Meer respect en betere omgangsvormen op het plein
• Sterker zelfvertrouwen en doorzettingsvermogen bij leerlingen
• Vaste trainer, vaste lijn — geen wisselende gezichten

Wij draaien volledig zelfstandig: tussen de middag, na schooltijd, workshops karakter & gedrag, of een volledig verzorgde sportdag. Materiaal, trainers en draaiboek regelen wij.

Heeft u 15 minuten voor een vrijblijvend gesprek? Dan laat ik zien hoe een traject er bij [Schoolnaam] uit zou kunnen zien — en bieden we een gratis proefactiviteit op locatie aan, zonder verplichtingen.

Bereikbaar via 06-XXXXXXXX of een reactie op deze mail.

Hartelijke groet,

Anass Bakkali
Oprichter ADAB MOVES
www.adabmoves.nl`;

const SUBJECT_FOLLOWUP = "Korte herinnering — voorstel ADAB MOVES voor [Schoolnaam]";

const BODY_FOLLOWUP = `Beste [naam],

Vorige week stuurde ik u een voorstel over sport- en spelactiviteiten met focus op karaktervorming voor [Schoolnaam]. Ik kan me voorstellen dat het druk is — vandaar deze korte herinnering.

Mijn aanbod staat: een vrijblijvend gesprek van 15 minuten en een gratis proefactiviteit op locatie, zonder enige verplichting. Zo kunnen u en uw team met eigen ogen zien wat het effect is op de leerlingen.

Past het beter om kort te bellen? Stuur gerust een tijdstip dat u uitkomt.

Hartelijke groet,

Anass Bakkali
Oprichter ADAB MOVES
www.adabmoves.nl`;

function OutreachPage() {
  return (
    <section className="container-x py-12 md:py-16 max-w-4xl">
      <div className="mb-10">
        <span className="eyebrow">Intern — niet zichtbaar in menu</span>
        <h1 className="mt-4 text-4xl md:text-5xl font-semibold leading-tight text-foreground">
          Cold outreach e-mail naar scholen
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Kopieer onderwerp en body en plak het in je eigen mailbox (Gmail/Outlook).
          Vervang <code className="px-1.5 py-0.5 rounded bg-muted text-foreground">[Schoolnaam]</code>,{" "}
          <code className="px-1.5 py-0.5 rounded bg-muted text-foreground">[naam]</code> en het telefoonnummer voor je verstuurt.
        </p>
      </div>

      <Block label="Onderwerp (primair)" value={SUBJECT_PRIMARY} />

      <div className="mt-6">
        <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-3">Onderwerp varianten</h2>
        <div className="space-y-3">
          {SUBJECT_VARIANTS.map((s, i) => (
            <Block key={i} value={s} compact />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <Block label="Body — eerste mail" value={BODY_PRIMARY} multiline />
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-foreground mb-2">Follow-up (na 5–7 dagen)</h2>
        <p className="text-sm text-muted-foreground mb-5">
          Stuur alleen als er geen reactie is gekomen. Houd dezelfde mail-thread aan (Reply, niet nieuwe mail).
        </p>
        <Block label="Onderwerp follow-up" value={SUBJECT_FOLLOWUP} />
        <div className="mt-4">
          <Block label="Body follow-up" value={BODY_FOLLOWUP} multiline />
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-[var(--cream)] p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">Tips voor maximale respons</h3>
        <ul className="space-y-2 text-sm text-foreground/85 leading-relaxed">
          <li>• Verstuur op <strong>dinsdag of woensdag tussen 09:00 en 11:00</strong> — hoogste open rate op scholen.</li>
          <li>• Personaliseer altijd minimaal <strong>schoolnaam + contactpersoon</strong> (directeur, gymdocent of bouwcoördinator).</li>
          <li>• Verstuur vanuit je <strong>eigen Gmail/Outlook</strong> — niet vanuit een marketing-tool. Persoonlijker = hogere deliverability.</li>
          <li>• Max 20 mails per dag, anders riskeer je spam-classificatie.</li>
          <li>• Volg na 5–7 dagen op met de follow-up als <em>Reply</em> in dezelfde thread.</li>
        </ul>
      </div>
    </section>
  );
}

function Block({ label, value, multiline, compact }: { label?: string; value: string; multiline?: boolean; compact?: boolean }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }
  return (
    <div className={`rounded-2xl border border-border bg-card ${compact ? "p-4" : "p-5"}`}>
      {label && (
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">{label}</span>
          <button
            onClick={copy}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--coral-deep)] hover:text-[var(--coral)] transition-colors"
          >
            {copied ? <><Check size={14} /> Gekopieerd</> : <><Copy size={14} /> Kopieer</>}
          </button>
        </div>
      )}
      {multiline ? (
        <pre className="whitespace-pre-wrap font-sans text-[15px] leading-[1.75] text-foreground">{value}</pre>
      ) : (
        <div className="flex items-center justify-between gap-4">
          <span className="text-foreground">{value}</span>
          {!label && (
            <button
              onClick={copy}
              className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--coral-deep)] hover:text-[var(--coral)] transition-colors"
            >
              {copied ? <><Check size={14} /> Gekopieerd</> : <><Copy size={14} /> Kopieer</>}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
