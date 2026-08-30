import {
  BRAND,
  KERNWAARDEN,
  MAANDEN,
  MATERIAAL,
  PIJLERS,
  getSpel,
  type Maand,
  type Spel,
} from "@/data/spelboek";
import type { jsPDF } from "jspdf";

const NAVY: [number, number, number] = [31, 34, 64];
const GOUD: [number, number, number] = [184, 146, 58];
const PAPIER: [number, number, number] = [247, 245, 240];
const GRIJS: [number, number, number] = [90, 92, 110];

const W = 210;
const H = 297;
const M = 18;
const CW = W - M * 2;

class Doc {
  pdf: jsPDF;
  y = M;
  page = 0;

  constructor(pdf: jsPDF) {
    this.pdf = pdf;
  }

  paper() {
    this.pdf.setFillColor(...PAPIER);
    this.pdf.rect(0, 0, W, H, "F");
  }

  newPage(withFooter = true) {
    if (this.page > 0) this.pdf.addPage();
    this.page += 1;
    this.paper();
    this.y = M;
    if (withFooter) this.footer();
  }

  footer() {
    const p = this.pdf;
    p.setDrawColor(...GOUD);
    p.setLineWidth(0.3);
    p.line(M, H - 16, W - M, H - 16);
    p.setFont("helvetica", "normal");
    p.setFontSize(8);
    p.setTextColor(...GRIJS);
    p.text("ADAB MOVES — Pauzesport Spelboek", M, H - 11);
    p.text(String(this.page), W - M, H - 11, { align: "right" });
  }

  space(n: number) {
    if (this.y + n > H - 26) this.newPage();
  }

  heading(text: string, size = 20) {
    this.space(size / 2 + 8);
    this.pdf.setFont("helvetica", "bold");
    this.pdf.setFontSize(size);
    this.pdf.setTextColor(...NAVY);
    this.pdf.text(text, M, this.y + size * 0.35);
    this.y += size * 0.5 + 4;
  }

  sub(text: string, color: [number, number, number] = GOUD, italic = true) {
    const lines = this.pdf.splitTextToSize(text, CW);
    this.space(lines.length * 5 + 4);
    this.pdf.setFont("helvetica", italic ? "italic" : "bold");
    this.pdf.setFontSize(11);
    this.pdf.setTextColor(...color);
    this.pdf.text(lines, M, this.y + 4);
    this.y += lines.length * 5 + 4;
  }

  body(text: string, indent = 0) {
    const lines = this.pdf.splitTextToSize(text, CW - indent);
    this.space(lines.length * 5 + 2);
    this.pdf.setFont("helvetica", "normal");
    this.pdf.setFontSize(10);
    this.pdf.setTextColor(...NAVY);
    this.pdf.text(lines, M + indent, this.y + 4);
    this.y += lines.length * 5 + 2;
  }

  bullets(items: string[], numbered = false) {
    items.forEach((item, i) => {
      const marker = numbered ? `${i + 1}.` : "•";
      const lines = this.pdf.splitTextToSize(item, CW - 8);
      this.space(lines.length * 5 + 1);
      this.pdf.setFont("helvetica", "normal");
      this.pdf.setFontSize(10);
      this.pdf.setTextColor(...GOUD);
      this.pdf.text(marker, M, this.y + 4);
      this.pdf.setTextColor(...NAVY);
      this.pdf.text(lines, M + 6, this.y + 4);
      this.y += lines.length * 5 + 1;
    });
    this.y += 2;
  }

  tipBox(tip: string) {
    const lines = this.pdf.splitTextToSize(tip, CW - 14);
    const h = lines.length * 5 + 13;
    this.space(h + 4);
    this.pdf.setFillColor(243, 238, 226);
    this.pdf.setDrawColor(...GOUD);
    this.pdf.setLineWidth(0.4);
    this.pdf.roundedRect(M, this.y, CW, h, 2, 2, "FD");
    this.pdf.setFont("helvetica", "bold");
    this.pdf.setFontSize(8.5);
    this.pdf.setTextColor(...GOUD);
    this.pdf.text("COACH TIP", M + 6, this.y + 6.5);
    this.pdf.setFont("helvetica", "normal");
    this.pdf.setFontSize(10);
    this.pdf.setTextColor(...NAVY);
    this.pdf.text(lines, M + 6, this.y + 12.5);
    this.y += h + 6;
  }
}

function spelBlok(d: Doc, spel: Spel, label: string) {
  // Houd een spel zoveel mogelijk op één pagina.
  const schatting =
    62 +
    spel.uitvoering.length * 7 +
    spel.varianten.length * 15 +
    Math.ceil(spel.coachTip.length / 85) * 6;
  if (d.y + Math.min(schatting, 215) > H - 32) d.newPage();

  d.pdf.setFillColor(...NAVY);
  d.pdf.rect(M, d.y, CW, 11, "F");
  d.pdf.setFont("helvetica", "bold");
  d.pdf.setFontSize(11.5);
  d.pdf.setTextColor(255, 255, 255);
  d.pdf.text(`${label}: ${spel.naam}`, M + 5, d.y + 7.4);
  d.pdf.setFont("helvetica", "normal");
  d.pdf.setFontSize(9);
  d.pdf.setTextColor(214, 190, 128);
  d.pdf.text(`${spel.soort} · ${spel.duur} · ${spel.leeftijd}`, W - M - 5, d.y + 7.4, {
    align: "right",
  });
  d.y += 15;

  d.space(24);
  d.sub("Benodigdheden", GOUD, false);
  d.body(spel.benodigdheden.join(" · "));
  d.y += 2;

  d.space(24);
  d.sub("Uitvoering", GOUD, false);
  d.bullets(spel.uitvoering, true);

  d.space(42);
  d.sub("Per leeftijdsgroep", GOUD, false);
  spel.varianten.forEach((v) => {
    d.pdf.setFont("helvetica", "bold");
    d.pdf.setFontSize(10);
    const lines = d.pdf.splitTextToSize(v.tekst, CW - 6);
    d.space(lines.length * 5 + 7);
    d.pdf.setFont("helvetica", "bold");
    d.pdf.setFontSize(10);
    d.pdf.setTextColor(...NAVY);
    d.pdf.text(v.groep, M, d.y + 4);
    d.pdf.setFont("helvetica", "normal");
    d.pdf.setFontSize(10);
    d.pdf.setTextColor(...GRIJS);
    d.pdf.text(lines, M, d.y + 9);
    d.y += lines.length * 5 + 8;
  });

  d.tipBox(spel.coachTip);
}


function cover(d: Doc, titel: string, ondertitel: string) {
  d.newPage(false);
  const p = d.pdf;
  p.setFillColor(...NAVY);
  p.rect(0, 0, W, 120, "F");
  p.setFillColor(...GOUD);
  p.rect(0, 120, W, 3, "F");

  p.setFont("helvetica", "bold");
  p.setFontSize(30);
  p.setTextColor(255, 255, 255);
  p.text("ADAB MOVES", M, 52);
  p.setFont("helvetica", "italic");
  p.setFontSize(12);
  p.setTextColor(214, 190, 128);
  p.text(BRAND.tagline, M, 63);

  p.setFont("helvetica", "bold");
  p.setFontSize(24);
  p.setTextColor(...NAVY);
  p.text(titel, M, 152);
  p.setFont("helvetica", "normal");
  p.setFontSize(12);
  p.setTextColor(...GRIJS);
  p.text(p.splitTextToSize(ondertitel, CW), M, 163);

  p.setDrawColor(...GOUD);
  p.setLineWidth(0.5);
  p.line(M, H - 34, W - M, H - 34);
  p.setFontSize(10);
  p.setTextColor(...NAVY);
  p.text(BRAND.site, M, H - 26);
  p.text("Multisport voor kinderen — Amsterdam en omgeving", W - M, H - 26, { align: "right" });
}

function methodePagina(d: Doc) {
  d.newPage();
  d.heading("De ADAB Methode");
  d.sub("Zeven pijlers die zichtbaar zijn in hoe wij begeleiden, bewegen en met elkaar omgaan.");
  d.y += 2;
  PIJLERS.forEach((pl) => {
    d.pdf.setFont("helvetica", "bold");
    d.pdf.setFontSize(11);
    d.pdf.setTextColor(...GOUD);
    d.space(12);
    d.pdf.text(pl.naam, M, d.y + 4);
    d.pdf.setFont("helvetica", "normal");
    d.pdf.setFontSize(10);
    d.pdf.setTextColor(...NAVY);
    const lines = d.pdf.splitTextToSize(pl.tekst, CW);
    d.pdf.text(lines, M, d.y + 9.5);
    d.y += lines.length * 5 + 9;
  });

  d.y += 4;
  d.heading("Acht kernwaarden", 16);
  d.body(KERNWAARDEN.join("  ·  "));
}

function materiaalPagina(d: Doc) {
  d.newPage();
  d.heading("Materiaal");
  d.sub("Alle spellen in dit spelboek zijn te spelen met uitsluitend dit materiaal.");
  d.y += 4;
  MATERIAAL.forEach((m) => {
    d.space(14);
    d.pdf.setFillColor(255, 255, 255);
    d.pdf.setDrawColor(...GOUD);
    d.pdf.setLineWidth(0.3);
    d.pdf.roundedRect(M, d.y, CW, 12, 2, 2, "FD");
    d.pdf.setFont("helvetica", "bold");
    d.pdf.setFontSize(11);
    d.pdf.setTextColor(...NAVY);
    d.pdf.text(m, M + 6, d.y + 8);
    d.y += 15;
  });
}

function inhoudsopgave(d: Doc) {
  d.newPage();
  d.heading("Inhoud");
  d.sub("Tien maanden buitenspelplezier, elk met een thema uit de ADAB Methode.");
  d.y += 4;
  MAANDEN.forEach((m) => {
    d.space(11);
    d.pdf.setFont("helvetica", "bold");
    d.pdf.setFontSize(10.5);
    d.pdf.setTextColor(...NAVY);
    d.pdf.text(`Maand ${m.nummer} — ${m.maand}`, M, d.y + 5);
    d.pdf.setFont("helvetica", "normal");
    d.pdf.setTextColor(...GOUD);
    d.pdf.text(m.waarde, W - M, d.y + 5, { align: "right" });
    d.pdf.setDrawColor(225, 220, 208);
    d.pdf.setLineWidth(0.2);
    d.pdf.line(M, d.y + 8, W - M, d.y + 8);
    d.y += 11;
  });
}

function maandSectie(d: Doc, m: Maand, nieuwePagina = true) {
  if (nieuwePagina) d.newPage();
  d.heading(`Maand ${m.nummer} — ${m.maand}`, 20);
  d.sub(`${m.thema} · ${m.waarde}`, GOUD, false);
  d.body(m.uitleg);
  d.y += 4;
  spelBlok(d, getSpel(m.balspelId), "Standaard balspel");
  spelBlok(d, getSpel(m.spelId), "Spel van de maand");
}

async function createPdf() {
  const { jsPDF: JsPDF } = await import("jspdf");
  return new JsPDF({ unit: "mm", format: "a4" });
}

export async function downloadVolledigSpelboek() {
  const d = new Doc(await createPdf());
  cover(
    d,
    "Pauzesport Spelboek",
    "Tien maanden buitenspelplezier voor het schoolplein — elke maand een thema uit de ADAB Methode, met vaste balspellen en losse spelletjes per leeftijdsgroep.",
  );
  methodePagina(d);
  materiaalPagina(d);
  inhoudsopgave(d);
  MAANDEN.forEach((m) => maandSectie(d, m));
  d.pdf.save("adabmoves-pauzesport-spelboek.pdf");
}

export async function downloadMaand(m: Maand) {
  const d = new Doc(await createPdf());
  d.newPage();
  const p = d.pdf;
  p.setFillColor(...NAVY);
  p.rect(0, 0, W, 34, "F");
  p.setFillColor(...GOUD);
  p.rect(0, 34, W, 2, "F");
  p.setFont("helvetica", "bold");
  p.setFontSize(15);
  p.setTextColor(255, 255, 255);
  p.text(`Maand ${m.nummer} — ${m.maand}: ${m.thema}`, M, 16);
  p.setFont("helvetica", "italic");
  p.setFontSize(9.5);
  p.setTextColor(214, 190, 128);
  p.text(`ADAB MOVES Pauzesport · ${m.waarde}`, M, 25);
  d.y = 44;
  d.body(m.uitleg);
  d.y += 3;
  spelBlok(d, getSpel(m.balspelId), "Standaard balspel");
  spelBlok(d, getSpel(m.spelId), "Spel van de maand");
  d.pdf.save(`adabmoves-pauzesport-maand-${m.nummer}-${m.maand.toLowerCase()}.pdf`);
}
