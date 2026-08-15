import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo.png";
import logoDark from "@/assets/logo-dark.png";
import { Printer } from "lucide-react";

export const Route = createFileRoute("/pauzesport-werkwijze")({
  head: () => ({
    meta: [
      { title: "Pauzesport — Werkwijze | ADAB MOVES" },
      {
        name: "description",
        content:
          "Praktische werkwijze en afspraken voor medewerkers tijdens pauzesport-activiteiten van ADAB MOVES.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
    links: [
      { rel: "canonical", href: "https://www.adabmoves.nl/pauzesport-werkwijze" },
    ],
  }),
  component: PauzesportWerkwijze,
});

const pillars = [
  "Adab",
  "Niyyah",
  "Ummah",
  "Amana",
  "Ihsan",
  "Sabr & Shukr",
  "Qudwah",
];

function PauzesportWerkwijze() {
  return (
    <div className="pauzesport-print">
      <style>{`
        .pauzesport-print {
          --pauze-navy: #1F2240;
          --pauze-gold: #D4AF7A;
          --pauze-white: #FFFFFF;
          --pauze-ink-soft: #3A3F66;
          --pauze-paper: #FAFAFA;
        }

        @page {
          size: A4;
          margin: 0;
        }

        @media print {
          .pauzesport-print {
            background: var(--pauze-white) !important;
            padding: 0 !important;
            min-height: auto !important;
          }


          .pauzesport-print__screen-only {
            display: none !important;
          }

          .pauzesport-page {
            box-shadow: none !important;
            margin: 0 !important;
            border-radius: 0 !important;
            page-break-after: always;
          }

          .pauzesport-page:last-child {
            page-break-after: auto;
          }
        }

        .pauzesport-print {
          background: #EAEAEA;
          padding: 2rem 1rem;
          min-height: 100vh;
        }

        .pauzesport-page {
          width: 210mm;
          min-height: 297mm;
          max-height: 297mm;
          margin: 0 auto 2rem;
          background: var(--pauze-white);
          box-shadow: 0 8px 30px rgba(31, 34, 64, 0.12);
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        .pauzesport-cover {
          background: var(--pauze-navy);
          color: var(--pauze-white);
          padding: 18mm;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .pauzesport-content {
          padding: 15mm 18mm;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .pauzesport-page__body {
          flex: 1 1 auto;
        }

        .pauzesport-page__footer {
          border-top: 0.5pt solid var(--pauze-gold);
          padding-top: 4mm;
          margin-top: 6mm;
          font-size: 8pt;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--pauze-ink-soft);
          font-weight: 600;
        }

        .pauzesport-title {
          font-family: "Sora", ui-sans-serif, system-ui, sans-serif;
          font-size: 32pt;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--pauze-white);
        }

        .pauzesport-title__line {
          display: block;
        }

        .pauzesport-title__line--accent {
          color: var(--pauze-gold);
        }

        .pauzesport-subtitle {
          font-size: 11pt;
          line-height: 1.55;
          color: rgba(250, 250, 250, 0.85);
          max-width: 140mm;
          margin-top: 8mm;
        }

        .pauzesport-section {
          margin-bottom: 6mm;
        }

        .pauzesport-section:last-child {
          margin-bottom: 0;
        }

        .pauzesport-section__title {
          font-family: "Sora", ui-sans-serif, system-ui, sans-serif;
          font-size: 13pt;
          font-weight: 700;
          color: var(--pauze-navy);
          margin-bottom: 3.5mm;
          letter-spacing: -0.01em;
          display: flex;
          align-items: center;
          gap: 2.5mm;
        }

        .pauzesport-section__title::after {
          content: "";
          flex: 1;
          height: 0.5pt;
          background: var(--pauze-gold);
          opacity: 0.5;
        }

        .pauzesport-lead {
          font-size: 10pt;
          line-height: 1.5;
          color: var(--pauze-ink-soft);
          margin-bottom: 3.5mm;
        }

        .pauzesport-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 2mm;
        }

        .pauzesport-tag {
          font-size: 8pt;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: var(--pauze-navy);
          background: rgba(212, 175, 122, 0.16);
          border: 0.5pt solid rgba(212, 175, 122, 0.35);
          padding: 1.5mm 3mm;
          border-radius: 999px;
        }

        .pauzesport-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .pauzesport-list__item {
          position: relative;
          padding-left: 5.5mm;
          font-size: 9.5pt;
          line-height: 1.45;
          color: var(--pauze-ink-soft);
          margin-bottom: 2.5mm;
        }

        .pauzesport-list__item::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.55em;
          width: 1.8mm;
          height: 1.8mm;
          background: var(--pauze-gold);
          border-radius: 50%;
        }

        .pauzesport-list__item:last-child {
          margin-bottom: 0;
        }

        .pauzesport-phase {
          margin-bottom: 4mm;
        }

        .pauzesport-phase:last-child {
          margin-bottom: 0;
        }

        .pauzesport-phase__label {
          font-size: 9.5pt;
          font-weight: 700;
          color: var(--pauze-navy);
          margin-bottom: 1.5mm;
        }

        .pauzesport-closing {
          font-size: 9.5pt;
          font-weight: 600;
          color: var(--pauze-navy);
          margin-top: 4mm;
        }

        .pauzesport-cover__top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .pauzesport-cover__logo {
          height: 14mm;
          width: auto;
        }

        .pauzesport-cover__label {
          font-size: 8pt;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--pauze-gold);
          border: 0.5pt solid var(--pauze-gold);
          padding: 1.5mm 3mm;
          border-radius: 999px;
        }

        .pauzesport-cover__middle {
          margin-top: auto;
          margin-bottom: auto;
          padding: 20mm 0;
        }

        .pauzesport-cover__bottom {
          font-size: 8pt;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(250, 250, 250, 0.65);
          font-weight: 600;
        }
      `}</style>

      <button
        onClick={() => window.print()}
        className="pauzesport-print__screen-only fixed top-5 right-5 z-50 inline-flex items-center gap-2 rounded-full px-4 py-2.5 font-semibold text-sm shadow-lg transition-transform hover:scale-105 active:scale-95"
        style={{ background: "#1F2240", color: "#D4AF7A" }}
        aria-label="Printen of opslaan als PDF"
      >
        <Printer size={18} />
        Print / PDF
      </button>

      {/* Cover */}
      <div className="pauzesport-page pauzesport-cover">
        <div className="pauzesport-cover__top">
          <img
            src={logo}
            alt="ADAB MOVES"
            className="pauzesport-cover__logo"
          />
          <span className="pauzesport-cover__label">Intern</span>
        </div>

        <div className="pauzesport-cover__middle">
          <h1 className="pauzesport-title">
            <span className="pauzesport-title__line">Pauzesport</span>
            <span className="pauzesport-title__line pauzesport-title__line--accent">
              — Werkwijze
            </span>
          </h1>
          <p className="pauzesport-subtitle">
            Onze werkwijze en afspraken tijdens de pauzesport, zodat iedereen
            weet wat er van hem of haar wordt verwacht.
          </p>
        </div>

        <div className="pauzesport-cover__bottom">
          ADAB MOVES · Pauzesport Werkwijze
        </div>
      </div>

      {/* Content */}
      <div className="pauzesport-page pauzesport-content">
        <div className="pauzesport-page__body">
          {/* Intro */}
          <section className="pauzesport-section">
            <h2 className="pauzesport-section__title">Waarom we dit doen</h2>
            <p className="pauzesport-lead">
              De tijd die wij met een kind hebben is kort — daarom geven wij
              volledige aandacht aan gedrag, groei en ontwikkeling.
            </p>
            <p className="pauzesport-lead">
              Onze aanpak is gebaseerd op de ADAB Methode: zeven pijlers die
              zichtbaar zijn in ons gedrag.
            </p>
            <div className="pauzesport-tags">
              {pillars.map((p) => (
                <span key={p} className="pauzesport-tag">
                  {p}
                </span>
              ))}
            </div>
          </section>

          {/* Werkwijze */}
          <section className="pauzesport-section">
            <h2 className="pauzesport-section__title">Onze werkwijze</h2>

            <div className="pauzesport-phase">
              <div className="pauzesport-phase__label">Voor de activiteit</div>
              <ul className="pauzesport-list">
                <li className="pauzesport-list__item">
                  Op tijd aanwezig op de afgesproken locatie.
                </li>
                <li className="pauzesport-list__item">
                  Materiaal klaarleggen en controleren.
                </li>
                <li className="pauzesport-list__item">
                  Bijzonderheden checken bij het schooltoezicht.
                </li>
              </ul>
            </div>

            <div className="pauzesport-phase">
              <div className="pauzesport-phase__label">Tijdens de activiteit</div>
              <ul className="pauzesport-list">
                <li className="pauzesport-list__item">
                  Regels kort en duidelijk uitleggen.
                </li>
                <li className="pauzesport-list__item">
                  Iedereen actief betrekken en laten meedoen.
                </li>
                <li className="pauzesport-list__item">
                  Gedrag direct en rustig bijsturen.
                </li>
                <li className="pauzesport-list__item">
                  Overzicht houden over de hele groep.
                </li>
              </ul>
            </div>

            <div className="pauzesport-phase">
              <div className="pauzesport-phase__label">Na de activiteit</div>
              <ul className="pauzesport-list">
                <li className="pauzesport-list__item">
                  Een vast afsluitsignaal gebruiken.
                </li>
                <li className="pauzesport-list__item">
                  Kinderen rustig terug laten lopen.
                </li>
                <li className="pauzesport-list__item">
                  Bijzonderheden melden aan school en ADAB MOVES.
                </li>
              </ul>
            </div>
          </section>

          {/* Afspraken */}
          <section className="pauzesport-section">
            <h2 className="pauzesport-section__title">Afspraken</h2>
            <ul className="pauzesport-list">
              <li className="pauzesport-list__item">
                Wij zorgen voor duidelijke instructies, materiaal en een vast
                aanspreekpunt.
              </li>
              <li className="pauzesport-list__item">
                Medewerkers zijn op tijd, melden verhindering tijdig en volgens
                afspraak.
              </li>
              <li className="pauzesport-list__item">
                De ADAB Methode en huisregels worden altijd toegepast, ook als
                het druk is.
              </li>
              <li className="pauzesport-list__item">
                Incidenten worden gemeld — aan school én aan ADAB MOVES.
              </li>
              <li className="pauzesport-list__item">
                Geen telefoongebruik tijdens de activiteit.
              </li>
              <li className="pauzesport-list__item">
                Herkenbare kleding/outfit zoals afgesproken.
              </li>
              <li className="pauzesport-list__item">
                Kledingvoorschriften conform islamitische richtlijnen: geen
                shorts boven de knie en geen kleding van voetbalclubs — wij zijn
                een voorbeeld voor de kinderen.
              </li>
              <li className="pauzesport-list__item">
                Wijzigingen in de werkwijze alleen in overleg.
              </li>
            </ul>
          </section>

          <p className="pauzesport-closing">
            Deze afspraken gelden voor iedereen, bij elke activiteit.
          </p>
        </div>

        <div className="pauzesport-page__footer">
          <img
            src={logoDark}
            alt=""
            className="inline-block h-5 w-auto mr-3 align-middle"
          />
          ADAB MOVES · Pauzesport Werkwijze
        </div>
      </div>
    </div>
  );
}
