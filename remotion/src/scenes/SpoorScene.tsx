import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../theme";

type Props = {
  src: string;
  number: string;
  label: string;
  sub: string;
  duration: number;
  reveal?: "left" | "right" | "bottom";
  align?: "left" | "right";
};

const clipFor = (reveal: Props["reveal"], p: number) => {
  // p goes 0 -> 1 reveal progress
  switch (reveal) {
    case "right":
      return `inset(0 ${(1 - p) * 100}% 0 0)`;
    case "bottom":
      return `inset(${(1 - p) * 100}% 0 0 0)`;
    case "left":
    default:
      return `inset(0 0 0 ${(1 - p) * 100}%)`;
  }
};

export const SpoorScene: React.FC<Props> = ({ src, number, label, sub, duration, reveal = "left", align = "left" }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Image reveal via clip-path
  const reveal01 = interpolate(f, [0, 22], [0, 1], { extrapolateRight: "clamp" });
  const clip = clipFor(reveal, reveal01);

  // Photo parallax (slow scale + slight pan)
  const t = interpolate(f, [0, duration], [0, 1], { extrapolateRight: "clamp" });
  const photoScale = interpolate(t, [0, 1], [1.05, 1.18]);
  const photoX = interpolate(t, [0, 1], [align === "left" ? -20 : 20, align === "left" ? 20 : -20]);

  // Coral shape behind label (fast)
  const shape = spring({ frame: f - 12, fps, config: { damping: 18, stiffness: 160 } });

  // Number scramble — count up to target
  const target = parseInt(number, 10);
  const counted = Math.min(target, Math.floor(interpolate(f, [10, 30], [0, target + 0.99], { extrapolateRight: "clamp" })));

  // Label per-char
  const chars = label.split("");

  // Sub line
  const subIn = spring({ frame: f - 30, fps, config: { damping: 18 } });

  // Exit
  const exit = interpolate(f, [duration - 14, duration], [0, -60], { extrapolateLeft: "clamp" });
  const exitOp = interpolate(f, [duration - 10, duration], [1, 0.6], { extrapolateLeft: "clamp" });

  const isLeft = align === "left";

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.ink, overflow: "hidden" }}>
      {/* Photo with clip reveal */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          clipPath: clip,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            transform: `scale(${photoScale}) translateX(${photoX}px)`,
          }}
        >
          <Img src={staticFile(src)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>

      {/* Cinematic gradient */}
      <AbsoluteFill
        style={{
          background: isLeft
            ? `linear-gradient(90deg, rgba(15,16,36,0.85) 0%, rgba(15,16,36,0.35) 50%, rgba(15,16,36,0) 75%)`
            : `linear-gradient(270deg, rgba(15,16,36,0.85) 0%, rgba(15,16,36,0.35) 50%, rgba(15,16,36,0) 75%)`,
        }}
      />

      {/* Coral block behind number */}
      <div
        style={{
          position: "absolute",
          [isLeft ? "left" : "right"]: 110,
          top: 110,
          width: 220,
          height: 90,
          background: COLORS.coral,
          transformOrigin: isLeft ? "left center" : "right center",
          transform: `scaleX(${shape})`,
        }}
      />
      <div
        style={{
          position: "absolute",
          [isLeft ? "left" : "right"]: 130,
          top: 118,
          fontFamily: "Anton, sans-serif",
          fontSize: 60,
          color: COLORS.navy,
          letterSpacing: 4,
          opacity: shape,
          textTransform: "uppercase",
        }}
      >
        Spoor 0{counted}
      </div>

      {/* Main label per-char stagger */}
      <div
        style={{
          position: "absolute",
          [isLeft ? "left" : "right"]: 110,
          bottom: 220,
          maxWidth: 1500,
          textAlign: isLeft ? "left" : "right",
          opacity: exitOp,
          transform: `translateY(${exit}px)`,
        }}
      >
        <div
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 240,
            color: COLORS.cream,
            lineHeight: 0.9,
            textTransform: "uppercase",
            letterSpacing: 2,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: isLeft ? "flex-start" : "flex-end",
          }}
        >
          {chars.map((c, i) => {
            const cIn = spring({ frame: f - 16 - i * 4, fps, config: { damping: 14, stiffness: 180 } });
            return (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  opacity: cIn,
                  transform: `translateY(${interpolate(cIn, [0, 1], [60, 0])}px) scale(${interpolate(cIn, [0, 1], [0.7, 1])})`,
                  color: i === 0 ? COLORS.coral : COLORS.cream,
                }}
              >
                {c === " " ? "\u00A0" : c}
              </span>
            );
          })}
        </div>
        <div
          style={{
            marginTop: 26,
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: 30,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: COLORS.coral,
            opacity: subIn,
            transform: `translateY(${interpolate(subIn, [0, 1], [18, 0])}px)`,
          }}
        >
          {sub}
        </div>
      </div>
    </AbsoluteFill>
  );
};
