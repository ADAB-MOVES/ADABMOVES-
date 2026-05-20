import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS } from "../theme";

export const Outro: React.FC<{ duration: number }> = ({ duration }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const fade = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });

  const aSpring = spring({ frame: frame - 6, fps, config: { damping: 14, stiffness: 140 } });

  // Subtle pulse near end
  const pulse = 1 + Math.sin(frame / 8) * 0.015;

  const lines = [
    { txt: "Voor scholen.", delay: 14 },
    { txt: "Voor ouders.", delay: 26 },
    { txt: "Voor de gemeenschap.", delay: 38 },
  ];

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.navy, overflow: "hidden" }}>
      {/* Coral arc */}
      <div
        style={{
          position: "absolute",
          left: "-10%",
          right: "-10%",
          bottom: interpolate(frame, [0, 30], [-300, -120], { extrapolateRight: "clamp" }),
          height: 400,
          background: COLORS.coral,
          borderRadius: "50%",
          opacity: 0.95,
        }}
      />

      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", color: COLORS.cream, opacity: fade }}>
          <div
            style={{
              fontFamily: "Anton, Impact, sans-serif",
              fontSize: 240,
              lineHeight: 1,
              transform: `scale(${interpolate(aSpring, [0, 1], [0.5, 1]) * pulse})`,
              display: "inline-block",
            }}
          >
            A
          </div>
          <div
            style={{
              fontFamily: "Anton, Impact, sans-serif",
              fontSize: 96,
              letterSpacing: 6,
              marginTop: 20,
            }}
          >
            ADAB MOVES
          </div>

          <div style={{ marginTop: 60, fontFamily: "Inter, sans-serif", fontSize: 44, fontWeight: 600 }}>
            {lines.map((l, i) => {
              const o = interpolate(frame, [l.delay, l.delay + 14], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              const y = interpolate(frame, [l.delay, l.delay + 18], [20, 0], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              });
              return (
                <div
                  key={i}
                  style={{
                    opacity: o,
                    transform: `translateY(${y}px)`,
                    marginTop: i === 0 ? 0 : 10,
                  }}
                >
                  {l.txt}
                </div>
              );
            })}
          </div>

          <div
            style={{
              marginTop: 56,
              fontFamily: "Inter, sans-serif",
              fontSize: 28,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: COLORS.coral,
              opacity: interpolate(frame, [50, 70], [0, 1], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
            }}
          >
            adabmoves.nl
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
