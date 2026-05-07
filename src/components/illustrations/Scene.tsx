import { illu } from "./tokens";
import { Character, type CharacterVariant } from "./Character";

interface Props {
  className?: string;
  variant?: "playground" | "gym" | "event";
}

/**
 * Composed scene that reuses Character + tokens. Drop-in replacement
 * for raster images. Scales fluidly with its container.
 */
export function Scene({ className, variant = "playground" }: Props) {
  const sky = variant === "gym" ? "#EFEBDD" : "#FBE4D8";
  const ground = variant === "event" ? illu.creamDeep : illu.cream;

  const characters: { v: CharacterVariant; x: number; outfit?: string }[] =
    variant === "gym"
      ? [
          { v: "coach-back", x: 30, outfit: illu.ink },
          { v: "kid-jump", x: 250 },
          { v: "kid-run", x: 410, outfit: illu.coralDeep },
        ]
      : variant === "event"
        ? [
            { v: "kid-jump", x: 60 },
            { v: "kid-jump", x: 220, outfit: illu.coralDeep },
            { v: "kid-jump", x: 380 },
          ]
        : [
            { v: "kid-ball", x: 40 },
            { v: "kid-run", x: 240, outfit: illu.ink },
            { v: "kid-jump", x: 420, outfit: illu.coralDeep },
          ];

  return (
    <svg
      viewBox="0 0 600 360"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Adab Moves scene illustratie"
    >
      <rect width="600" height="360" fill={sky} rx="20" />
      <rect y="280" width="600" height="80" fill={ground} />

      {variant === "event" && (
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

      {characters.map((c, i) => (
        <g key={i} transform={`translate(${c.x} 60) scale(0.6)`}>
          <Character variant={c.v} outfit={c.outfit} size={200} />
        </g>
      ))}
    </svg>
  );
}
