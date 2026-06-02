import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../theme";

const PILLARS = [
  "Respect",
  "Focus",
  "Discipline",
  "Doorzettingsvermogen",
  "Vertrouwen",
  "Samenwerking",
  "Karakter",
];

export const Methode: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  const headerIn = spring({ frame: f, fps, config: { damping: 16 } });
  const numIn = spring({ frame: f - 8, fps, config: { damping: 12, stiffness: 160 } });

  // Word stack — each word lives ~10 frames
  const PER = 10;
  const startWords = 22;
  const idx = Math.min(PILLARS.length - 1, Math.max(0, Math.floor((f - startWords) / PER)));
  const word = PILLARS[idx];
  const localF = f - startWords - idx * PER;
  const wordIn = spring({ frame: localF, fps, config: { damping: 12, stiffness: 220 } });
  const wordOut = interpolate(localF, [PER - 3, PER], [1, 0], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const exit = interpolate(f, [duration - 14, duration], [0, -50], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(135deg, ${COLORS.navy} 0%, ${COLORS.ink} 100%)`,
      }}
    >
      {/* Big "7" on the left */}
      <div
        style={{
          position: "absolute",
          left: 80,
          top: 80,
          bottom: 80,
          width: 760,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 760,
            lineHeight: 0.85,
            color: COLORS.coral,
            opacity: numIn,
            transform: `scale(${interpolate(numIn, [0, 1], [0.6, 1])}) translateY(${exit}px)`,
          }}
        >
          7
        </div>
      </div>

      {/* Right column: header + cycling word */}
      <div
        style={{
          position: "absolute",
          right: 110,
          top: 0,
          bottom: 0,
          width: 1000,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 40,
        }}
      >
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            fontSize: 30,
            letterSpacing: 10,
            color: COLORS.coral,
            textTransform: "uppercase",
            opacity: headerIn,
            transform: `translateY(${interpolate(headerIn, [0, 1], [16, 0])}px)`,
          }}
        >
          Pijlers
        </div>
        <div
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 64,
            color: COLORS.cream,
            opacity: headerIn,
            transform: `translateY(${interpolate(headerIn, [0, 1], [16, 0])}px)`,
            lineHeight: 1,
          }}
        >
          De ADAB Methode
        </div>
        <div
          style={{
            position: "relative",
            height: 170,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              fontFamily: "Anton, sans-serif",
              fontSize: 130,
              color: COLORS.cream,
              textTransform: "uppercase",
              letterSpacing: 1,
              lineHeight: 1,
              opacity: wordIn * wordOut,
              transform: `translateY(${interpolate(wordIn, [0, 1], [60, 0])}px)`,
              whiteSpace: "nowrap",
            }}
          >
            {word}
          </div>
        </div>
        {/* Progress dots */}
        <div style={{ display: "flex", gap: 14, marginTop: 10 }}>
          {PILLARS.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === idx ? 50 : 16,
                height: 8,
                borderRadius: 4,
                background: i <= idx ? COLORS.coral : "rgba(251,247,238,0.2)",
                transition: "none",
              }}
            />
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
