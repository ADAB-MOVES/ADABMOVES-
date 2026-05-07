import { illu } from "./tokens";

export type CharacterVariant =
  | "kid-jump"
  | "kid-run"
  | "kid-ball"
  | "coach-back";

interface Props {
  variant: CharacterVariant;
  size?: number;
  className?: string;
  /** Outfit color — defaults to brand coral */
  outfit?: string;
}

/**
 * Reusable cartoon character set. Faces are intentionally not detailed
 * (back-view or stylized) to match the project's privacy choice.
 * All characters share: same line weight, same head proportions, same palette.
 */
export function Character({ variant, size = 180, className, outfit = illu.coral }: Props) {
  const stroke = illu.ink;
  const sw = illu.strokeWidth;
  const skin = illu.skin;
  const dark = illu.ink;

  return (
    <svg
      viewBox="0 0 200 280"
      width={size}
      height={(size * 280) / 200}
      className={className}
      role="img"
      aria-label="Adab Moves illustratie"
    >
      <g fill="none" stroke={stroke} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round">
        {variant === "kid-jump" && (
          <>
            {/* arms up */}
            <path d="M70 110 L55 60" stroke={skin} strokeWidth={10} />
            <path d="M130 110 L145 60" stroke={skin} strokeWidth={10} />
            <circle cx="55" cy="55" r="8" fill={skin} />
            <circle cx="145" cy="55" r="8" fill={skin} />
            {/* body / shirt */}
            <path d="M70 110 Q100 100 130 110 L135 180 Q100 190 65 180 Z" fill={outfit} />
            {/* small front logo */}
            <circle cx="115" cy="135" r="5" fill={illu.cream} />
            {/* legs */}
            <path d="M85 180 L78 240" stroke={dark} strokeWidth={12} />
            <path d="M115 180 L122 240" stroke={dark} strokeWidth={12} />
            {/* shoes */}
            <ellipse cx="76" cy="248" rx="14" ry="6" fill={illu.cream} stroke={stroke} />
            <ellipse cx="124" cy="248" rx="14" ry="6" fill={illu.cream} stroke={stroke} />
            {/* head (back view) */}
            <circle cx="100" cy="60" r="32" fill={skin} />
            <path d="M70 55 Q100 28 130 55 Q128 40 100 32 Q72 40 70 55 Z" fill={dark} />
          </>
        )}
        {variant === "kid-run" && (
          <>
            <path d="M70 120 L40 105" stroke={skin} strokeWidth={10} />
            <path d="M130 120 L160 95" stroke={skin} strokeWidth={10} />
            <circle cx="40" cy="105" r="8" fill={skin} />
            <circle cx="160" cy="95" r="8" fill={skin} />
            <path d="M70 120 Q100 110 130 120 L135 185 Q100 195 65 185 Z" fill={outfit} />
            <circle cx="115" cy="142" r="5" fill={illu.cream} />
            <path d="M85 185 L65 240" stroke={dark} strokeWidth={12} />
            <path d="M115 185 L140 235" stroke={dark} strokeWidth={12} />
            <ellipse cx="64" cy="248" rx="14" ry="6" fill={illu.cream} stroke={stroke} />
            <ellipse cx="142" cy="243" rx="14" ry="6" fill={illu.cream} stroke={stroke} />
            <circle cx="100" cy="70" r="30" fill={skin} />
            <path d="M72 65 Q100 40 128 65 Q126 48 100 42 Q74 48 72 65 Z" fill={dark} />
          </>
        )}
        {variant === "kid-ball" && (
          <>
            <path d="M70 115 L50 145" stroke={skin} strokeWidth={10} />
            <path d="M130 115 L150 145" stroke={skin} strokeWidth={10} />
            <circle cx="155" cy="160" r="22" fill={illu.cream} />
            <path d="M155 160 m-22 0 a22 22 0 1 0 44 0 a22 22 0 1 0 -44 0" />
            <path d="M155 160 m-15 -8 l30 16 M155 160 m15 -8 l-30 16" />
            <path d="M70 115 Q100 105 130 115 L135 185 Q100 195 65 185 Z" fill={outfit} />
            <circle cx="115" cy="140" r="5" fill={illu.cream} />
            <path d="M85 185 L80 245" stroke={dark} strokeWidth={12} />
            <path d="M115 185 L120 245" stroke={dark} strokeWidth={12} />
            <ellipse cx="78" cy="252" rx="14" ry="6" fill={illu.cream} stroke={stroke} />
            <ellipse cx="122" cy="252" rx="14" ry="6" fill={illu.cream} stroke={stroke} />
            <circle cx="100" cy="68" r="30" fill={skin} />
            <path d="M72 63 Q100 38 128 63 Q126 46 100 40 Q74 46 72 63 Z" fill={dark} />
          </>
        )}
        {variant === "coach-back" && (
          <>
            {/* coach (back view), wider shoulders, large logo on back */}
            <path d="M55 130 Q100 115 145 130 L150 215 Q100 225 50 215 Z" fill={outfit} />
            {/* large back logo */}
            <rect x="80" y="150" width="40" height="40" rx="6" fill={illu.cream} />
            <text
              x="100"
              y="176"
              textAnchor="middle"
              fontSize="11"
              fontWeight={700}
              fill={dark}
              stroke="none"
              fontFamily="sans-serif"
            >
              ADAB
            </text>
            {/* arms */}
            <path d="M55 130 L40 185" stroke={skin} strokeWidth={12} />
            <path d="M145 130 L160 185" stroke={skin} strokeWidth={12} />
            {/* legs */}
            <path d="M80 220 L75 270" stroke={dark} strokeWidth={14} />
            <path d="M120 220 L125 270" stroke={dark} strokeWidth={14} />
            {/* head + short uniform hair + beard silhouette */}
            <circle cx="100" cy="80" r="34" fill={skin} />
            {/* short uniform haircut */}
            <path d="M66 78 Q100 40 134 78 Q134 56 100 50 Q66 56 66 78 Z" fill={dark} />
            {/* beard line (back view hint along jaw) */}
            <path d="M70 92 Q100 118 130 92" stroke={dark} strokeWidth={3} />
          </>
        )}
      </g>
    </svg>
  );
}
