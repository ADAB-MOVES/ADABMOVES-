import { AbsoluteFill, Img, staticFile, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { COLORS } from "../theme";

type Props = {
  src: string;
  label: string;
  eyebrow?: string;
  duration: number;
  // Ken-Burns direction
  zoom?: "in" | "out";
  pan?: "left" | "right" | "up" | "down" | "none";
  align?: "left" | "right";
};

export const PhotoScene: React.FC<Props> = ({
  src,
  label,
  eyebrow,
  duration,
  zoom = "in",
  pan = "right",
  align = "left",
}) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Ken Burns
  const t = interpolate(f, [0, duration], [0, 1], { extrapolateRight: "clamp" });
  const scale = zoom === "in" ? interpolate(t, [0, 1], [1.05, 1.18]) : interpolate(t, [0, 1], [1.18, 1.05]);
  const panX = pan === "left" ? interpolate(t, [0, 1], [-30, 30]) : pan === "right" ? interpolate(t, [0, 1], [30, -30]) : 0;
  const panY = pan === "up" ? interpolate(t, [0, 1], [-20, 20]) : pan === "down" ? interpolate(t, [0, 1], [20, -20]) : 0;

  // Captions
  const eyebrowIn = spring({ frame: f - 8, fps, config: { damping: 18 } });
  const labelIn = spring({ frame: f - 14, fps, config: { damping: 16 } });
  // Underline draw
  const underline = interpolate(f, [22, 42], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const isLeft = align === "left";

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.ink, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${scale}) translate(${panX}px, ${panY}px)`,
        }}
      >
        <Img
          src={staticFile(src)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Cinematic gradient for legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isLeft
            ? `linear-gradient(90deg, rgba(15,16,36,0.78) 0%, rgba(15,16,36,0.35) 45%, rgba(15,16,36,0) 70%)`
            : `linear-gradient(270deg, rgba(15,16,36,0.78) 0%, rgba(15,16,36,0.35) 45%, rgba(15,16,36,0) 70%)`,
        }}
      />
      {/* Bottom vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(180deg, rgba(15,16,36,0) 60%, rgba(15,16,36,0.55) 100%)`,
        }}
      />

      {/* Caption */}
      <div
        style={{
          position: "absolute",
          [isLeft ? "left" : "right"]: 110,
          bottom: 140,
          textAlign: isLeft ? "left" : "right",
          maxWidth: 1100,
        }}
      >
        {eyebrow ? (
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              color: COLORS.coral,
              fontSize: 26,
              letterSpacing: 8,
              textTransform: "uppercase",
              opacity: eyebrowIn,
              transform: `translateY(${interpolate(eyebrowIn, [0, 1], [16, 0])}px)`,
              marginBottom: 18,
            }}
          >
            {eyebrow}
          </div>
        ) : null}
        <div
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 168,
            color: "#FBF7EE",
            lineHeight: 0.95,
            textTransform: "uppercase",
            opacity: labelIn,
            transform: `translateY(${interpolate(labelIn, [0, 1], [28, 0])}px)`,
            letterSpacing: 1,
          }}
        >
          {label}
        </div>
        <div
          style={{
            marginTop: 22,
            height: 6,
            width: 320,
            background: COLORS.coral,
            borderRadius: 6,
            transformOrigin: isLeft ? "left center" : "right center",
            transform: `scaleX(${underline})`,
            marginLeft: isLeft ? 0 : "auto",
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
