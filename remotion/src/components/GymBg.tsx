import React from "react";
import { COLORS } from "../theme";

/** Cream gym interior with navy + coral wall padding, hoop & window. */
export const GymBg: React.FC<{ variant?: "default" | "hoop" | "windows" | "ring" }> = ({
  variant = "default",
}) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      style={{ position: "absolute", inset: 0 }}
    >
      {/* wall */}
      <rect width="1920" height="1080" fill={COLORS.cream} />
      {/* upper wall band */}
      <rect x="0" y="0" width="1920" height="180" fill="#F5EAD3" />
      {/* windows */}
      <g opacity="0.9">
        <rect x="180" y="40" width="260" height="120" rx="6" fill="#CFE3F0" stroke={COLORS.navy} strokeWidth="4" />
        <rect x="490" y="40" width="260" height="120" rx="6" fill="#CFE3F0" stroke={COLORS.navy} strokeWidth="4" />
        <rect x="1170" y="40" width="260" height="120" rx="6" fill="#CFE3F0" stroke={COLORS.navy} strokeWidth="4" />
        <rect x="1480" y="40" width="260" height="120" rx="6" fill="#CFE3F0" stroke={COLORS.navy} strokeWidth="4" />
      </g>
      {/* coral + navy padding strip */}
      <rect x="0" y="560" width="1920" height="40" fill={COLORS.coral} />
      <rect x="0" y="600" width="1920" height="20" fill={COLORS.navy} />
      {/* wooden floor */}
      <rect x="0" y="620" width="1920" height="460" fill="#E9D5AE" />
      {/* floor lines */}
      <line x1="0" y1="780" x2="1920" y2="780" stroke={COLORS.navy} strokeWidth="3" />
      <line x1="0" y1="900" x2="1920" y2="900" stroke={COLORS.coral} strokeWidth="3" />

      {/* variant accents */}
      {variant === "hoop" && (
        <g transform="translate(1500,200)">
          <rect x="0" y="0" width="180" height="120" fill="#FFFFFF" stroke={COLORS.navy} strokeWidth="6" />
          <rect x="55" y="50" width="70" height="50" stroke={COLORS.coral} strokeWidth="4" fill="none" />
          <circle cx="90" cy="160" r="40" stroke={COLORS.coral} strokeWidth="6" fill="none" />
          <path d="M 50 165 Q 90 220 130 165" stroke={COLORS.cream} strokeWidth="3" fill="none" />
        </g>
      )}
      {variant === "ring" && (
        <g transform="translate(1450,360)">
          <circle r="60" stroke={COLORS.coral} strokeWidth="8" fill="#F5EAD3" />
          <circle r="40" stroke={COLORS.coral} strokeWidth="6" fill="#FBF7EE" />
          <circle r="18" fill={COLORS.coral} />
        </g>
      )}
    </svg>
  );
};
