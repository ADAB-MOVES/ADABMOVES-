import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

const PILLARS = ["Fysiek", "Sociaal", "Mentaal", "Moreel"];

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
          top: 700,
          left: 0,
          right: 0,
          padding: "0 60px",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 66,
          lineHeight: 1.08,
          letterSpacing: -1.5,
          color: COLORS.cream,
          textShadow: "0 4px 30px rgba(0,0,0,0.6)",
          opacity: line1,
          transform: `translateY(${interpolate(line1, [0, 1], [30, 0])}px)`,
        }}
      >
        Een plek waar je kind sport —
      </div>
      <div
        style={{
          position: "absolute",
          top: 858,
          left: 0,
          right: 0,
          padding: "0 60px",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 66,
          lineHeight: 1.08,
          letterSpacing: -1.5,
          color: COLORS.cream,
          textShadow: "0 4px 30px rgba(0,0,0,0.6)",
          opacity: line2,
          transform: `translateY(${interpolate(line2, [0, 1], [30, 0])}px)`,
        }}
      >
        zonder zijn <span style={{ color: COLORS.coral }}>waarden</span> thuis te verliezen.
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 160,
          left: 60,
          right: 60,
          display: "flex",
          gap: 20,
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
                padding: "14px 26px",
                border: `2px solid ${COLORS.coral}`,
                borderRadius: 999,
                background: "rgba(31,34,64,0.55)",
                fontFamily: "Plus Jakarta Sans, sans-serif",
                fontWeight: 800,
                fontSize: 34,
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
