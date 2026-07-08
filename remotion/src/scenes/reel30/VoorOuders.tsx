import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

const PILLARS = ["Fysiek", "Sociaal", "Mentaal", "Moreel"];
// Copy: organisatie-omschrijving voor Reel v3

export const VoorOuders: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  const kb = interpolate(f, [0, duration], [1.04, 1.14]);
  const line1 = spring({ frame: f - 6, fps, config: { damping: 18, stiffness: 160 } });
  const line2 = spring({ frame: f - 34, fps, config: { damping: 18, stiffness: 160 } });
  const accent = spring({ frame: f - 54, fps, config: { damping: 14 } });
  const fadeOut = interpolate(f, [duration - 10, duration], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ background: COLORS.navy, opacity: fadeOut, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${kb})`, transformOrigin: "50% 45%" }}>
        <Img src={staticFile("reel30/hero-parents.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(31,34,64,0.35) 0%, rgba(31,34,64,0.15) 30%, rgba(31,34,64,0.92) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 640,
          left: 0,
          right: 0,
          padding: "0 60px",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 58,
          lineHeight: 1.1,
          letterSpacing: -1.2,
          color: COLORS.cream,
          textShadow: "0 4px 30px rgba(0,0,0,0.7)",
          opacity: line1,
          transform: `translateY(${interpolate(line1, [0, 1], [30, 0])}px)`,
        }}
      >
        Een <span style={{ color: COLORS.coral }}>multisport- en beweegorganisatie</span> voor kinderen en jongeren —
      </div>
      <div
        style={{
          position: "absolute",
          top: 900,
          left: 0,
          right: 0,
          padding: "0 60px",
          fontFamily: "Sora, sans-serif",
          fontWeight: 700,
          fontSize: 46,
          lineHeight: 1.15,
          letterSpacing: -0.5,
          color: COLORS.cream,
          textShadow: "0 4px 30px rgba(0,0,0,0.7)",
          opacity: line2,
          transform: `translateY(${interpolate(line2, [0, 1], [30, 0])}px)`,
        }}
      >
        islamitisch gefundeerd, toegankelijk voor iedereen.
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: 60,
          right: 60,
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontWeight: 700,
          fontSize: 30,
          letterSpacing: 3,
          color: COLORS.coral,
          textTransform: "uppercase",
          opacity: accent,
          marginBottom: 12,
        }}
      >
        Groei op elk vlak
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 50,
          left: 60,
          right: 60,
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
          opacity: accent,
        }}
      >
        {PILLARS.map((p, i) => {
          const pop = spring({ frame: f - (54 + i * 8), fps, config: { damping: 14, stiffness: 200 } });
          return (
            <div
              key={p}
              style={{
                padding: "12px 22px",
                border: `2px solid ${COLORS.coral}`,
                borderRadius: 999,
                background: "rgba(31,34,64,0.65)",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontWeight: 800,
                fontSize: 30,
                color: COLORS.cream,
                letterSpacing: 1,
                opacity: pop,
                transform: `translateY(${interpolate(pop, [0, 1], [16, 0])}px)`,
              }}
            >
              {p}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
