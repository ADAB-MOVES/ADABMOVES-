// ADAB MOVES Pauzesport Spelboek — beheerbare startdata.
// Pas hier teksten, spellen of maanden aan; app én PDF gebruiken dezelfde bron.

export type SpelSoort = "Tikspel" | "Challenge" | "Balspel";

export interface LeeftijdVariant {
  groep: string; // "Groep 1/2 (4-6 jaar)"
  tekst: string;
}

export interface Spel {
  id: string;
  naam: string;
  soort: SpelSoort;
  duur: string;
  leeftijd: string; // korte samenvatting
  benodigdheden: string[];
  uitvoering: string[];
  varianten: LeeftijdVariant[];
  coachTip: string;
}

export interface Maand {
  nummer: number;
  maand: string;
  thema: string;
  waarde: string;
  uitleg: string;
  balspelId: string;
  spelId: string;
}

export const BRAND = {
  naam: "ADAB MOVES",
  tagline: "Bewegen met betekenis. Karakter begint hier.",
  site: "adabmoves.nl",
  navy: "#1F2240",
  goud: "#B8923A",
  papier: "#F7F5F0",
};

export const PIJLERS: { naam: string; tekst: string }[] = [
  { naam: "Adab", tekst: "Goed gedrag, respect en omgangsvormen als basis." },
  { naam: "Niyyah", tekst: "Bewust bewegen met een duidelijke intentie." },
  { naam: "Ummah", tekst: "Samen sterk; niemand blijft aan de zijlijn staan." },
  { naam: "Amana", tekst: "Verantwoordelijkheid voor elk kind dat aan ons wordt toevertrouwd." },
  { naam: "Ihsan", tekst: "Wat je doet, doe het goed; streven naar uitmuntendheid." },
  { naam: "Sabr & Shukr", tekst: "Geduld in moeilijkheden, dankbaarheid in voorspoed." },
  { naam: "Qudwah", tekst: "Trainers als rolmodellen." },
];

export const KERNWAARDEN = [
  "Respect",
  "Eerlijkheid",
  "Geduld",
  "Dankbaarheid",
  "Nederigheid",
  "Zelfbeheersing",
  "Verantwoordelijkheid",
  "Samenwerking",
];

export const MATERIAAL = [
  "Lintjes",
  "Voetballen",
  "1x basketbal",
  "3 foam ballen",
  "1 kingbal",
  "Springtouw",
  "Softarchery set — boog en 2 pijlen",
];

export const BALSPELLEN: Spel[] = [
  {
    id: "voetbal",
    naam: "Voetbal",
    soort: "Balspel",
    duur: "10-15 min",
    leeftijd: "Groep 1/2 t/m 8",
    benodigdheden: ["Voetballen", "Lintjes (als doelpaaltjes of hesjes)"],
    uitvoering: [
      "Markeer met lintjes twee doelen en de veldrand.",
      "Verdeel de groep in twee teams (lintjes als hesjes).",
      "Speel een partijtje; wissel regelmatig van rol.",
    ],
    varianten: [
      { groep: "Groep 1/2 (4-6 jaar)", tekst: "Brede goal zonder keeper, klein veld." },
      { groep: "Groep 3 t/m 5 (6-9 jaar)", tekst: "Normale goal, geen buitenspel, gewoon lekker spelen." },
      { groep: "Groep 6 t/m 8 (9-12 jaar)", tekst: "Met keeper en een simpele buitenspelregel." },
    ],
    coachTip:
      "Wissel doelpuntenmakers en verdedigers na elk doelpunt — dit houdt iedereen betrokken en traint Ummah.",
  },
  {
    id: "trefbal",
    naam: "Trefbal",
    soort: "Balspel",
    duur: "10-15 min",
    leeftijd: "Groep 1/2 t/m 8",
    benodigdheden: ["3 foam ballen", "Lintjes (als veldlijn)"],
    uitvoering: [
      "Verdeel het veld met lintjes in twee helften.",
      "Elk team raakt spelers van het andere team onder het middel met een foam bal.",
      "Geraakte kinderen gaan naar de gevangenis.",
      "Bevrijding: een teamgenoot gooit een bal die zij vangen.",
    ],
    varianten: [
      { groep: "Groep 1/2 (4-6 jaar)", tekst: "Kleinere afstand, zachter gooien, iedereen mag snel weer meedoen." },
      { groep: "Groep 3 t/m 5 (6-9 jaar)", tekst: "Standaardregels met bevrijding." },
      { groep: "Groep 6 t/m 8 (9-12 jaar)", tekst: "Standaardregels met bevrijding." },
    ],
    coachTip:
      "De bevrijdingsregel is bewust ingebouwd — niemand blijft lang aan de kant, een directe oefening in Ummah.",
  },
  {
    id: "kingbal",
    naam: "Kingbal",
    soort: "Balspel",
    duur: "10-15 min",
    leeftijd: "Groep 1/2 t/m 8",
    benodigdheden: ["1 kingbal", "Lintjes (als honken)"],
    uitvoering: [
      "Leg met lintjes drie honken en een thuisplaat neer.",
      "De slagploeg schopt of slaat de kingbal weg en rent de honken langs.",
      "De veldploeg speelt de bal terug of tikt de loper af.",
    ],
    varianten: [
      { groep: "Groep 1/2 (4-6 jaar)", tekst: "Korte afstand tussen honken, altijd mogen rennen (geen 'uit' door tikken)." },
      { groep: "Groep 3 t/m 5 (6-9 jaar)", tekst: "Klassieke regels, afgooien mag zachtjes op het lichaam." },
      { groep: "Groep 6 t/m 8 (9-12 jaar)", tekst: "Klassieke regels, afgooien mag zachtjes op het lichaam." },
    ],
    coachTip:
      "Laat de slagploeg elkaar aanmoedigen vanaf de kant — succes vieren als team, ook als je zelf niet aan slag bent.",
  },
];

export const SPELLEN: Spel[] = [
  {
    id: "lintjesroof",
    naam: "Lintjesroof",
    soort: "Tikspel",
    duur: "8 min",
    leeftijd: "Groep 3 t/m 8",
    benodigdheden: ["Lintjes"],
    uitvoering: [
      "Ieder kind hangt een lint in de broeksband.",
      "Pak zoveel mogelijk linten van anderen.",
      "Verlies zelf niet al je linten.",
    ],
    varianten: [
      { groep: "Groep 3 t/m 5 (6-9 jaar)", tekst: "Klein veld, korte rondes van 2 minuten." },
      { groep: "Groep 6 t/m 8 (9-12 jaar)", tekst: "Groter veld, meerdere linten per kind." },
    ],
    coachTip: "Wie alle linten kwijt is, blijft meedoen als 'helper' voor een teamgenoot.",
  },
  {
    id: "lintjestikkertje",
    naam: "Lintjestikkertje: bevrijd je teamgenoot",
    soort: "Tikspel",
    duur: "8 min",
    leeftijd: "Groep 1/2 en 3 t/m 5",
    benodigdheden: ["Lintjes"],
    uitvoering: [
      "Twee tikkers proberen kinderen te tikken door hun lint te pakken.",
      "Getikte kinderen bevriezen.",
      "Een teamgenoot geeft hen een nieuw lint: weer los.",
    ],
    varianten: [
      { groep: "Groep 1/2 (4-6 jaar)", tekst: "Kleiner veld, één tikker, extra linten klaar." },
      { groep: "Groep 3 t/m 5 (6-9 jaar)", tekst: "Twee tikkers, groter speelveld." },
    ],
    coachTip: "Bevordert samenwerking in plaats van individueel ontsnappen.",
  },
  {
    id: "dribbelestafette",
    naam: "Basketbal-dribbelestafette",
    soort: "Challenge",
    duur: "8 min",
    leeftijd: "Groep 3 t/m 8",
    benodigdheden: ["1x basketbal", "Lintjes (als parcourspunten)"],
    uitvoering: [
      "Leg met lintjes een parcours op de grond.",
      "Kinderen dribbelen om de beurt het parcours.",
      "Geef de bal door aan de volgende.",
    ],
    varianten: [
      { groep: "Groep 3 t/m 5 (6-9 jaar)", tekst: "Kort parcours, dribbelen mag met twee handen." },
      { groep: "Groep 6 t/m 8 (9-12 jaar)", tekst: "Langer parcours, wisselen van hand bij elk lint." },
    ],
    coachTip: "Beloon controle boven snelheid — dat is Ihsan in de praktijk.",
  },
  {
    id: "foam-mik",
    naam: "Foam bal mikwedstrijd",
    soort: "Challenge",
    duur: "8 min",
    leeftijd: "Groep 1/2",
    benodigdheden: ["3 foam ballen", "Lintjes (als doelmarkering op de grond)"],
    uitvoering: [
      "Leg vakken met puntenwaarden neer met lintjes.",
      "Kinderen gooien om de beurt.",
      "Tel samen hardop de punten op.",
    ],
    varianten: [
      { groep: "Groep 1/2 (4-6 jaar)", tekst: "Korte werpafstand, twee pogingen per beurt." },
    ],
    coachTip: "Bij de jongste kinderen ligt de nadruk op plezier en pogingen, niet op de einduitslag.",
  },
  {
    id: "springtouw-duur",
    naam: "Springtouw-duurtest",
    soort: "Challenge",
    duur: "6 min",
    leeftijd: "Groep 3 t/m 8",
    benodigdheden: ["Springtouw"],
    uitvoering: [
      "Om de beurt springt een kind zo lang mogelijk zonder te verspringen.",
      "De groep telt hardop mee.",
      "Noteer het persoonlijke record.",
    ],
    varianten: [
      { groep: "Groep 3 t/m 5 (6-9 jaar)", tekst: "Springen op tempo van de groep, herkansing toegestaan." },
      { groep: "Groep 6 t/m 8 (9-12 jaar)", tekst: "Eén poging, daarna proberen het eigen record te verbeteren." },
    ],
    coachTip: "Vier het persoonlijke record van elk kind — vergelijk met jezelf, niet alleen met anderen (Sabr).",
  },
  {
    id: "basketbal-precisie",
    naam: "Basketbal-precisie",
    soort: "Challenge",
    duur: "10 min",
    leeftijd: "Groep 3 t/m 8",
    benodigdheden: ["1x basketbal"],
    uitvoering: [
      "Kinderen schieten om de beurt op de ring of een emmer.",
      "Elke ronde één stap verder naar achteren.",
      "Elk raak schot levert een punt op.",
    ],
    varianten: [
      { groep: "Groep 3 t/m 5 (6-9 jaar)", tekst: "Korte afstanden, onderhands schieten mag." },
      { groep: "Groep 6 t/m 8 (9-12 jaar)", tekst: "Grotere afstanden, bovenhands met sprong." },
    ],
    coachTip: "Juichen voor jezelf mag, uitlachen van een misser niet (Nederigheid).",
  },
  {
    id: "boog-doelraken",
    naam: "Boogschieten doelraken",
    soort: "Challenge",
    duur: "12 min",
    leeftijd: "Groep 6 t/m 8",
    benodigdheden: ["Softarchery set (boog + 2 pijlen)", "Lintjes (als doelmarkering)"],
    uitvoering: [
      "Markeer met lintjes een doel en een schietlijn.",
      "Adem eerst rustig drie keer in en uit.",
      "Schiet om de beurt met twee pijlen.",
    ],
    varianten: [
      { groep: "Groep 6 t/m 8 (9-12 jaar)", tekst: "Korte afstand, altijd onder direct toezicht van de trainer." },
    ],
    coachTip: "Traint focus en Niyyah — bewust en met intentie handelen voor je schiet.",
  },
  {
    id: "boog-scoreladder",
    naam: "Boogschieten scoreladder",
    soort: "Challenge",
    duur: "12 min",
    leeftijd: "Groep 6 t/m 8",
    benodigdheden: ["Softarchery set", "Lintjes"],
    uitvoering: [
      "Markeer met lintjes drie scorezones.",
      "Elk kind schiet twee pijlen.",
      "Kinderen tellen hun eigen score hardop bij.",
    ],
    varianten: [
      { groep: "Groep 6 t/m 8 (9-12 jaar)", tekst: "Drie rondes, score wordt per ronde opgeteld." },
    ],
    coachTip: "Laat kinderen hun score eerlijk hardop noemen — oefent Eerlijkheid.",
  },
  {
    id: "springtouw-estafette",
    naam: "Springtouw-estafette",
    soort: "Challenge",
    duur: "8 min",
    leeftijd: "Groep 3 t/m 8",
    benodigdheden: ["Springtouw"],
    uitvoering: [
      "Maak teams van gelijke grootte.",
      "Elk kind springt een vast aantal keren.",
      "Daarna wordt het touw doorgegeven.",
    ],
    varianten: [
      { groep: "Groep 3 t/m 5 (6-9 jaar)", tekst: "Vijf sprongen per kind." },
      { groep: "Groep 6 t/m 8 (9-12 jaar)", tekst: "Tien sprongen per kind, tempo hoog houden." },
    ],
    coachTip: "Moedig elkaar hardop aan tijdens het tellen — een individuele oefening wordt zo een teammoment.",
  },
  {
    id: "drieballen-tikkertje",
    naam: "Drieballen-tikkertje",
    soort: "Tikspel",
    duur: "8 min",
    leeftijd: "Groep 3 t/m 8",
    benodigdheden: ["3 foam ballen", "Lintjes (als veldrand)"],
    uitvoering: [
      "Markeer de veldrand met lintjes.",
      "Drie kinderen zijn tegelijk tikker met een foam bal.",
      "Geraakte kinderen doen tien tikken met een springtouw en doen weer mee.",
    ],
    varianten: [
      { groep: "Groep 3 t/m 5 (6-9 jaar)", tekst: "Kleiner veld, vijf touwtjes in plaats van tien." },
      { groep: "Groep 6 t/m 8 (9-12 jaar)", tekst: "Groter veld, tikkers wisselen elke twee minuten." },
    ],
    coachTip: "Iedereen blijft continu betrokken — niemand is lang 'af'.",
  },
];

export const MAANDEN: Maand[] = [
  {
    nummer: 1,
    maand: "September",
    thema: "Kennismaking & Adab",
    waarde: "Adab (goed gedrag)",
    uitleg:
      "Deze maand draait om Adab — goed gedrag. We leren elkaars naam, spreken de afspraken af en oefenen hoe we met elkaar omgaan op het plein.",
    balspelId: "voetbal",
    spelId: "lintjesroof",
  },
  {
    nummer: 2,
    maand: "Oktober",
    thema: "Ummah",
    waarde: "Ummah (samen sterk)",
    uitleg:
      "Deze maand draait om Ummah — samen sterk. Elk spel is zo gekozen dat niemand lang aan de kant staat.",
    balspelId: "trefbal",
    spelId: "lintjestikkertje",
  },
  {
    nummer: 3,
    maand: "November",
    thema: "Amana",
    waarde: "Amana (verantwoordelijkheid)",
    uitleg:
      "Deze maand draait om Amana — verantwoordelijkheid. Kinderen krijgen taken: materiaal klaarzetten, tellen en op elkaar letten.",
    balspelId: "kingbal",
    spelId: "dribbelestafette",
  },
  {
    nummer: 4,
    maand: "December",
    thema: "Shukr",
    waarde: "Shukr (dankbaarheid)",
    uitleg:
      "Deze maand draait om Shukr — dankbaarheid. We sluiten elke pauze af met één ding waar we dankbaar voor zijn.",
    balspelId: "voetbal",
    spelId: "foam-mik",
  },
  {
    nummer: 5,
    maand: "Januari",
    thema: "Sabr",
    waarde: "Sabr (doorzettingsvermogen)",
    uitleg:
      "Deze maand draait om Sabr — geduld en doorzetten. Kou, vermoeidheid of een misser: we blijven rustig en proberen opnieuw.",
    balspelId: "trefbal",
    spelId: "springtouw-duur",
  },
  {
    nummer: 6,
    maand: "Februari",
    thema: "Ihsan",
    waarde: "Ihsan (je beste beentje voor)",
    uitleg:
      "Deze maand draait om Ihsan — het goed doen. Niet het hardst, maar het netst en het meest verzorgd uitvoeren telt.",
    balspelId: "kingbal",
    spelId: "basketbal-precisie",
  },
  {
    nummer: 7,
    maand: "Maart",
    thema: "Niyyah",
    waarde: "Niyyah (focus & intentie)",
    uitleg:
      "Deze maand draait om Niyyah — bewuste intentie. Voor elk spel benoemen we kort waaróm we bewegen.",
    balspelId: "voetbal",
    spelId: "boog-doelraken",
  },
  {
    nummer: 8,
    maand: "April",
    thema: "Eerlijkheid",
    waarde: "Eerlijkheid",
    uitleg:
      "Deze maand draait om eerlijkheid. Kinderen houden hun eigen score bij en geven zelf aan wanneer ze geraakt of af zijn.",
    balspelId: "trefbal",
    spelId: "boog-scoreladder",
  },
  {
    nummer: 9,
    maand: "Mei",
    thema: "Qudwah",
    waarde: "Qudwah (rolmodellen)",
    uitleg:
      "Deze maand draait om Qudwah — het goede voorbeeld. Oudere kinderen helpen jongere kinderen bij de uitleg en het tellen.",
    balspelId: "kingbal",
    spelId: "springtouw-estafette",
  },
  {
    nummer: 10,
    maand: "Juni",
    thema: "Karakter gevierd",
    waarde: "Terugblik & afsluiting",
    uitleg:
      "Deze maand kijken we terug op het jaar. We spelen de favorieten opnieuw en benoemen hardop wat elk kind heeft geleerd.",
    balspelId: "voetbal",
    spelId: "drieballen-tikkertje",
  },
];

export function getSpel(id: string): Spel {
  const found = [...BALSPELLEN, ...SPELLEN].find((s) => s.id === id);
  if (!found) throw new Error(`Onbekend spel: ${id}`);
  return found;
}

export function getMaand(nummer: number): Maand | undefined {
  return MAANDEN.find((m) => m.nummer === nummer);
}
