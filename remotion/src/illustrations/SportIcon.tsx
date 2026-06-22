import { illu } from "./tokens";

export type SportName =
  | "voetbal"
  | "basketbal"
  | "kickboks"
  | "archery"
  | "fitness";

interface Props {
  sport: SportName;
  size?: number;
  className?: string;
  tone?: "coral" | "ink" | "cream";
}

/**
 * Consistent sport icon set. Flat 2-tone, rounded geometry, brand palette.
 * Use anywhere in the design — cards, lists, hero accents.
 */
export function SportIcon({ sport, size = 56, className, tone = "coral" }: Props) {
  const fill = tone === "coral" ? illu.coral : tone === "ink" ? illu.ink : illu.cream;
  const bg =
    tone === "coral"
      ? "#FBE4D8"
      : tone === "ink"
        ? "#DEE0EE"
        : illu.creamDeep;

  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role="img"
      aria-label={`${sport} icoon`}
    >
      <circle cx="32" cy="32" r="30" fill={bg} />
      <g
        fill="none"
        stroke={illu.ink}
        strokeWidth={illu.iconStrokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {sport === "voetbal" && (
          <>
            <circle cx="32" cy="32" r="14" fill={illu.cream} />
            <polygon points="32,24 38,29 36,36 28,36 26,29" fill={fill} />
            <line x1="32" y1="18" x2="32" y2="24" />
            <line x1="40" y1="22" x2="38" y2="29" />
            <line x1="24" y1="22" x2="26" y2="29" />
            <line x1="22" y1="40" x2="28" y2="36" />
            <line x1="42" y1="40" x2="36" y2="36" />
          </>
        )}
        {sport === "basketbal" && (
          <>
            <circle cx="32" cy="32" r="14" fill={fill} />
            <path d="M18 32 H46" />
            <path d="M32 18 V46" />
            <path d="M22 22 C28 28 28 36 22 42" />
            <path d="M42 22 C36 28 36 36 42 42" />
          </>
        )}
        {sport === "kickboks" && (
          <>
            <path
              d="M22 28 C22 22 30 20 34 22 L42 22 C46 22 48 25 46 30 L42 38 C40 42 36 44 32 42 L26 40 C22 38 22 34 22 28 Z"
              fill={fill}
            />
            <path d="M30 30 C32 32 36 32 38 30" />
            <path d="M22 28 H18" />
          </>
        )}
        {sport === "archery" && (
          <>
            <circle cx="32" cy="32" r="14" fill={illu.cream} />
            <circle cx="32" cy="32" r="9" fill={fill} />
            <circle cx="32" cy="32" r="4" fill={illu.cream} />
            <circle cx="32" cy="32" r="1.5" fill={illu.ink} stroke="none" />
          </>
        )}
        {sport === "fitness" && (
          <>
            <rect x="14" y="28" width="6" height="8" rx="2" fill={fill} />
            <rect x="44" y="28" width="6" height="8" rx="2" fill={fill} />
            <rect x="20" y="30" width="24" height="4" rx="1.5" fill={illu.ink} stroke="none" />
            <line x1="11" y1="30" x2="11" y2="34" />
            <line x1="53" y1="30" x2="53" y2="34" />
          </>
        )}
      </g>
    </svg>
  );
}
