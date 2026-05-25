import React from "react";
import { COLORS } from "../theme";

export type KidVariant = {
  skin: string;       // skin tone
  hair: string;       // hair color
  hairStyle: "short" | "curly" | "buzz" | "wavy";
  hat?: boolean;      // taqiyah
  shirt: "navy" | "cream" | "coral";
};

export const SKIN_TONES = ["#F2C9A1", "#D8A074", "#B47A50", "#8B5A3C", "#6B4226"];
export const HAIR_TONES = ["#1A1A1A", "#2B1B0E", "#3A2218", "#4A2C1C"];

export function pickVariant(i: number): KidVariant {
  const skin = SKIN_TONES[i % SKIN_TONES.length];
  const hair = HAIR_TONES[i % HAIR_TONES.length];
  const styles: KidVariant["hairStyle"][] = ["short", "curly", "buzz", "wavy"];
  const hairStyle = styles[i % styles.length];
  // ~1 in 3 wears a hat
  const hat = i % 3 === 0;
  const shirts: KidVariant["shirt"][] = ["navy", "cream", "coral"];
  const shirt = shirts[i % shirts.length];
  return { skin, hair, hairStyle, hat, shirt };
}

function shirtColor(s: KidVariant["shirt"]) {
  if (s === "navy") return COLORS.navy;
  if (s === "coral") return COLORS.coral;
  return "#F5EFE0";
}
function shirtText(s: KidVariant["shirt"]) {
  return s === "cream" ? COLORS.navy : "#FFFFFF";
}

/**
 * Renders a single cartoon kid as SVG centered around (0,0).
 * Body parts are exposed as groups via render-prop so scenes can animate them.
 * Style follows brand: NO eyes, smiling mouth only, ADAB MOVES branded shirt.
 *
 * Coordinate system:
 *  - head center ≈ (0, -180)
 *  - torso center ≈ (0, -40)
 *  - hips ≈ (0, 60)
 *  - feet ≈ (±25, 220)
 *
 * Props let you rotate each limb in place.
 */
type LimbRotations = {
  leftArm?: number;   // shoulder rotation deg
  rightArm?: number;
  leftLeg?: number;   // hip rotation deg
  rightLeg?: number;
  torso?: number;     // torso lean
  head?: number;
  bodyY?: number;     // vertical offset (jump)
  bodyX?: number;
};

export const Kid: React.FC<{
  variant: KidVariant;
  rotations?: LimbRotations;
  facing?: "front" | "side-right" | "side-left";
}> = ({ variant, rotations = {}, facing = "front" }) => {
  const {
    leftArm = 0,
    rightArm = 0,
    leftLeg = 0,
    rightLeg = 0,
    torso = 0,
    head = 0,
    bodyY = 0,
    bodyX = 0,
  } = rotations;
  const sFill = shirtColor(variant.shirt);
  const sText = shirtText(variant.shirt);

  return (
    <g transform={`translate(${bodyX}, ${bodyY})`}>
      {/* shadow */}
      <ellipse cx="0" cy="240" rx="80" ry="10" fill="rgba(0,0,0,0.15)" />

      <g transform={`rotate(${torso} 0 -20)`}>
        {/* legs */}
        <g transform={`rotate(${leftLeg} -18 60)`}>
          <rect x="-30" y="60" width="22" height="140" rx="10" fill={COLORS.navy} />
          <rect x="-32" y="195" width="30" height="22" rx="5" fill="#FFFFFF" />
        </g>
        <g transform={`rotate(${rightLeg} 18 60)`}>
          <rect x="8" y="60" width="22" height="140" rx="10" fill={COLORS.navy} />
          <rect x="2" y="195" width="30" height="22" rx="5" fill="#FFFFFF" />
        </g>

        {/* torso / shirt */}
        <path
          d="M -55 -80 Q -55 -100 -35 -105 L 35 -105 Q 55 -100 55 -80 L 50 65 Q 0 75 -50 65 Z"
          fill={sFill}
        />
        {/* coral A logo on chest */}
        <g transform="translate(0,-50)">
          <circle r="22" fill={variant.shirt === "coral" ? "#FFFFFF" : COLORS.coral} />
          <text
            x="0"
            y="8"
            textAnchor="middle"
            fontFamily="Anton, sans-serif"
            fontSize="28"
            fill={variant.shirt === "coral" ? COLORS.coral : "#FFFFFF"}
            fontWeight="700"
          >
            A
          </text>
        </g>
        {/* tiny wordmark */}
        <text
          x="0"
          y="-15"
          textAnchor="middle"
          fontFamily="Inter, sans-serif"
          fontSize="9"
          fill={sText}
          fontWeight="700"
          letterSpacing="1"
        >
          ADAB MOVES
        </text>

        {/* arms */}
        <g transform={`rotate(${leftArm} -50 -90)`}>
          <rect x="-65" y="-90" width="20" height="110" rx="10" fill={sFill} />
          <circle cx="-55" cy="30" r="14" fill={variant.skin} />
        </g>
        <g transform={`rotate(${rightArm} 50 -90)`}>
          <rect x="45" y="-90" width="20" height="110" rx="10" fill={sFill} />
          <circle cx="55" cy="30" r="14" fill={variant.skin} />
        </g>

        {/* neck */}
        <rect x="-10" y="-115" width="20" height="18" fill={variant.skin} />

        {/* head */}
        <g transform={`rotate(${head} 0 -150)`}>
          <circle cx="0" cy="-150" r="48" fill={variant.skin} />
          {/* hair / hat */}
          {variant.hat ? (
            <>
              <path d="M -48 -160 Q 0 -210 48 -160 Z" fill="#F5F1E6" />
              <ellipse cx="0" cy="-160" rx="48" ry="6" fill="#E8E2D2" />
            </>
          ) : variant.hairStyle === "buzz" ? (
            <path d="M -46 -160 Q 0 -200 46 -160 Z" fill={variant.hair} />
          ) : variant.hairStyle === "curly" ? (
            <g fill={variant.hair}>
              <circle cx="-30" cy="-185" r="16" />
              <circle cx="-5" cy="-195" r="18" />
              <circle cx="22" cy="-188" r="16" />
              <circle cx="-40" cy="-170" r="12" />
              <circle cx="38" cy="-172" r="12" />
            </g>
          ) : variant.hairStyle === "wavy" ? (
            <path
              d="M -48 -160 Q -50 -200 -10 -198 Q 20 -205 48 -180 Q 50 -160 48 -150 Q 0 -175 -48 -150 Z"
              fill={variant.hair}
            />
          ) : (
            <path
              d="M -48 -155 Q -45 -200 0 -200 Q 45 -200 48 -155 Q 30 -170 0 -168 Q -30 -170 -48 -155 Z"
              fill={variant.hair}
            />
          )}

          {/* NO eyes — only smiling mouth */}
          <path
            d="M -14 -135 Q 0 -120 14 -135"
            stroke={COLORS.ink}
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
          />
        </g>
      </g>
    </g>
  );
};

/** Coach from behind with logo on jacket. */
export const CoachBack: React.FC = () => {
  return (
    <g>
      <ellipse cx="0" cy="280" rx="140" ry="14" fill="rgba(0,0,0,0.18)" />
      {/* legs */}
      <rect x="-50" y="60" width="40" height="200" rx="14" fill={COLORS.ink} />
      <rect x="10" y="60" width="40" height="200" rx="14" fill={COLORS.ink} />
      {/* jacket */}
      <path
        d="M -110 -90 Q -110 -130 -70 -140 L 70 -140 Q 110 -130 110 -90 L 100 90 Q 0 110 -100 90 Z"
        fill={COLORS.navy}
      />
      {/* arms */}
      <rect x="-130" y="-100" width="36" height="190" rx="16" fill={COLORS.navy} />
      <rect x="94" y="-100" width="36" height="190" rx="16" fill={COLORS.navy} />
      {/* big logo on back */}
      <g transform="translate(0,-30)">
        <circle r="42" fill={COLORS.coral} />
        <text
          x="0"
          y="14"
          textAnchor="middle"
          fontFamily="Anton, sans-serif"
          fontSize="56"
          fill="#FFFFFF"
        >
          A
        </text>
      </g>
      <text
        x="0"
        y="40"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontWeight="800"
        fontSize="18"
        fill="#FFFFFF"
        letterSpacing="3"
      >
        ADAB MOVES
      </text>
      <text
        x="0"
        y="62"
        textAnchor="middle"
        fontFamily="Inter, sans-serif"
        fontWeight="600"
        fontSize="11"
        fill="#FFFFFF"
        letterSpacing="2"
        opacity="0.8"
      >
        BEWEGEN MET BETEKENIS
      </text>
      {/* head from behind */}
      <circle cx="0" cy="-185" r="50" fill="#3A2218" />
      <rect x="-12" y="-150" width="24" height="22" fill="#B47A50" />
    </g>
  );
};
