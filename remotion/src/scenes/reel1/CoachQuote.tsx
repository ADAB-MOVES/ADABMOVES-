import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";
import { Character } from "../../illustrations/Character";
import { illu } from "../../illustrations/tokens";

const W = 1080;
const H = 1920;

export const CoachQuote: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({ frame: f, fps, config: { damping: 18, stiffness: 180 } });
  const scale = interpolate(enter, [0, 1], [0.85, 1]);
  const bob = Math.sin(f / 10) * 6;

  const words = ["Sport", "zonder", "karakter", "is…"];
  const wordStart = 8;
  const wordGap = 7;

  return (
    <AbsoluteFill style={{ background: COLORS.cream }}>
      {/* soft gradient sky */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(180deg, #EFEBDD 0%, ${COLORS.cream} 60%)`,
        }}
      />
      {/* floor lines */}
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", inset: 0 }}>
        <line x1="0" y1="1640" x2={W} y2="1640" stroke={illu.ink} strokeWidth="3" opacity="0.25" />
        <line x1="0" y1="1660" x2={W} y2="1660" stroke={illu.ink} strokeWidth="1" opacity="0.18" />
      </svg>

      {/* coach mascot */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: 820,
          transform: `translate(-50%, ${bob}px) scale(${scale})`,
          transformOrigin: "center top",
        }}
      >
        <Character variant="coach-mascot" size={700} outfit={illu.ink} />
      </div>

      {/* Quote */}
      <div
        style={{
          position: "absolute",
          top: 240,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 104,
          lineHeight: 1.05,
          color: COLORS.navy,
          letterSpacing: -1,
          padding: "0 60px",
        }}
      >
        {words.map((w, i) => {
          const s = spring({ frame: f - (wordStart + i * wordGap), fps, config: { damping: 14, stiffness: 200 } });
          return (
            <span
              key={i}
              style={{
                display: "inline-block",
                marginRight: 18,
                opacity: s,
                transform: `translateY(${interpolate(s, [0, 1], [30, 0])}px)`,
              }}
            >
              {w}
            </span>
          );
        })}
        <div
          style={{
            margin: "28px auto 0",
            width: interpolate(f, [30, 55], [0, 280], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
            height: 6,
            background: COLORS.coral,
            borderRadius: 4,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
