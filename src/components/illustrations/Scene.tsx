import { illu } from "./tokens";
import { Character, type CharacterVariant } from "./Character";

export type SceneVariant =
  | "playground"
  | "gym"
  | "event"
  | "scholen"
  | "community-kids"
  | "community-teens"
  | "community-brothers"
  | "adab-day"
  | "methode"
  | "verhaal"
  | "missie";

interface Props {
  className?: string;
  variant?: SceneVariant;
}

/**
 * Composed cartoon scene. Drop-in vervanging voor rasterfoto's.
 * Geen menselijke foto's — alleen brand-cartoons.
 */
export function Scene({ className, variant = "playground" }: Props) {
  const config = SCENES[variant];

  return (
    <svg
      viewBox="0 0 600 360"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={config.label}
    >
      <defs>
        <linearGradient id={`sky-${variant}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={config.sky[0]} />
          <stop offset="1" stopColor={config.sky[1]} />
        </linearGradient>
      </defs>
      <rect width="600" height="360" fill={`url(#sky-${variant})`} rx="20" />
      <rect y="280" width="600" height="80" fill={config.ground} />

      {/* Decoraties */}
      {config.deco === "vlaggetjes" && (
        <g>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <g key={i} transform={`translate(${40 + i * 100} 30)`}>
              <line x1="0" y1="0" x2="60" y2="20" stroke={illu.ink} strokeWidth="2" />
              <polygon points="10,4 22,8 16,22" fill={illu.coral} />
              <polygon points="34,12 46,16 40,30" fill={illu.ink} />
            </g>
          ))}
        </g>
      )}
      {config.deco === "doel" && (
        <g stroke={illu.ink} strokeWidth="2" fill="none">
          <rect x="430" y="160" width="130" height="100" />
          <line x1="430" y1="160" x2="560" y2="260" />
          <line x1="560" y1="160" x2="430" y2="260" />
        </g>
      )}
      {config.deco === "ster" && (
        <g fill={illu.coral} stroke="none">
          {[80, 220, 400, 520].map((x, i) => (
            <polygon
              key={i}
              points={`${x},20 ${x + 4},32 ${x + 16},32 ${x + 6},40 ${x + 10},52 ${x},44 ${x - 10},52 ${x - 6},40 ${x - 16},32 ${x - 4},32`}
              opacity={0.7}
            />
          ))}
        </g>
      )}
      {config.deco === "pad" && (
        <g>
          <path d="M0 320 Q 300 290 600 320" stroke={illu.creamDeep} strokeWidth="20" fill="none" />
        </g>
      )}

      {config.characters.map((c, i) => (
        <g key={i} transform={`translate(${c.x} ${c.y ?? 60}) scale(${c.s ?? 0.6})`}>
          <Character variant={c.v} outfit={c.outfit} size={200} />
        </g>
      ))}
    </svg>
  );
}

type C = { v: CharacterVariant; x: number; y?: number; s?: number; outfit?: string };
type SceneConfig = {
  label: string;
  sky: [string, string];
  ground: string;
  deco?: "vlaggetjes" | "doel" | "ster" | "pad";
  characters: C[];
};

const SCENES: Record<SceneVariant, SceneConfig> = {
  playground: {
    label: "Spelende kinderen",
    sky: ["#FBE4D8", "#FBF7EE"],
    ground: illu.cream,
    characters: [
      { v: "kid-ball", x: 40 },
      { v: "kid-run", x: 240, outfit: illu.ink },
      { v: "kid-jump", x: 420, outfit: illu.coralDeep },
    ],
  },
  gym: {
    label: "Gymles met trainer",
    sky: ["#EFEBDD", "#FBF7EE"],
    ground: illu.cream,
    characters: [
      { v: "coach-back", x: 30, outfit: illu.ink },
      { v: "kid-jump", x: 250 },
      { v: "kid-run", x: 410, outfit: illu.coralDeep },
    ],
  },
  event: {
    label: "ADAB Day",
    sky: ["#FBE4D8", "#FBF7EE"],
    ground: illu.creamDeep,
    deco: "vlaggetjes",
    characters: [
      { v: "kid-jump", x: 60 },
      { v: "kid-jump", x: 220, outfit: illu.coralDeep },
      { v: "kid-jump", x: 380 },
    ],
  },
  scholen: {
    label: "Trainer geeft les op school",
    sky: ["#EFEBDD", "#FBF7EE"],
    ground: illu.cream,
    deco: "doel",
    characters: [
      { v: "coach-point", x: 20, outfit: illu.ink },
      { v: "kid-run", x: 200 },
      { v: "kid-ball", x: 340, outfit: illu.coralDeep },
    ],
  },
  "community-kids": {
    label: "Community voor kinderen",
    sky: ["#FBE4D8", "#FBF7EE"],
    ground: illu.cream,
    deco: "ster",
    characters: [
      { v: "kid-ball", x: 30 },
      { v: "kid-jump", x: 200, outfit: illu.coralDeep },
      { v: "coach-whistle", x: 360, outfit: illu.ink },
    ],
  },
  "community-teens": {
    label: "Community voor tieners",
    sky: ["#E8E4D5", "#FBF7EE"],
    ground: illu.cream,
    characters: [
      { v: "kid-kick", x: 30, outfit: illu.coralDeep },
      { v: "kid-basket", x: 220, outfit: illu.ink },
      { v: "kid-archery", x: 410 },
    ],
  },
  "community-brothers": {
    label: "Community voor broeders",
    sky: ["#F1E8D4", "#FBF7EE"],
    ground: illu.cream,
    characters: [
      { v: "coach-back", x: 30, outfit: illu.ink },
      { v: "coach-back", x: 220, outfit: illu.coralDeep },
      { v: "coach-back", x: 410, outfit: illu.ink },
    ],
  },
  "adab-day": {
    label: "ADAB Day evenement",
    sky: ["#FBE4D8", "#FBF7EE"],
    ground: illu.creamDeep,
    deco: "vlaggetjes",
    characters: [
      { v: "coach-whistle", x: 20, outfit: illu.ink },
      { v: "kid-jump", x: 200, outfit: illu.coralDeep },
      { v: "kid-jump", x: 380 },
    ],
  },
  methode: {
    label: "De ADAB Methode",
    sky: ["#EFEBDD", "#FBF7EE"],
    ground: illu.cream,
    deco: "pad",
    characters: [
      { v: "coach-point", x: 30, outfit: illu.ink },
      { v: "kid-run", x: 240, outfit: illu.coralDeep },
      { v: "kid-jump", x: 420 },
    ],
  },
  verhaal: {
    label: "Ons verhaal",
    sky: ["#F1E8D4", "#FBF7EE"],
    ground: illu.cream,
    characters: [
      { v: "coach-back", x: 60, outfit: illu.ink },
      { v: "coach-back", x: 250, outfit: illu.coralDeep },
      { v: "coach-back", x: 420, outfit: illu.ink },
    ],
  },
  missie: {
    label: "Missie en visie",
    sky: ["#FBE4D8", "#FBF7EE"],
    ground: illu.cream,
    deco: "ster",
    characters: [
      { v: "coach-mascot", x: 200, outfit: illu.coral },
    ],
  },
};
