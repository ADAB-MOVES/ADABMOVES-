import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

const items = [
  { n: "01", title: "Naschools", sub: "Op basisscholen — bewegen na de bel." },
  { n: "02", title: "Wekelijkse multisport", sub: "7 t/m 15 jaar in Amsterdam & omgeving." },
  { n: "03", title: "Sportevents", sub: "ADAB Day, clinics & themadagen." },
];

export const Aanbod: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const kb = interpolate(f, [0, duration], [1.06, 1.14]);
  const eyebrow = spring({ frame: f, fps, config: { damping: 20 } });
  const title = spring({ frame: f - 6, fps, config: { damping: 18 } });
  const fadeOut = interpolate(f, [duration - 10, duration], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ background: COLORS.navy, opacity: fadeOut, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${kb})`, transformOrigin: "50% 40%" }}>
        <Img src={staticFile("reel30/aanbod-gym.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(31,34,64,0.85) 0%, rgba(31,34,64,0.55) 35%, rgba(31,34,64,0.92) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 180,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 700,
          fontSize: 34,
          color: COLORS.coral,
          letterSpacing: 8,
          opacity: eyebrow,
        }}
      >
        WAT WE DOEN
      </div>
      <div
        style={{
          position: "absolute",
          top: 240,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 96,
          color: COLORS.cream,
          letterSpacing: -2,
          textShadow: "0 4px 24px rgba(0,0,0,0.5)",
          opacity: title,
          transform: `translateY(${interpolate(title, [0, 1], [20, 0])}px)`,
        }}
      >
        Drie sporen.
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 100,
          left: 60,
          right: 60,
          display: "flex",
          flexDirection: "column",
          gap: 22,
        }}
      >
        {items.map((it, i) => {
          const s = spring({ frame: f - (18 + i * 14), fps, config: { damping: 18, stiffness: 200 } });
          return (
            <div
              key={it.n}
              style={{
                background: COLORS.cream,
                borderRadius: 24,
                padding: "28px 36px",
                display: "flex",
                alignItems: "center",
                gap: 28,
                opacity: s,
                transform: `translateY(${interpolate(s, [0, 1], [40, 0])}px)`,
                boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
              }}
            >
              <div
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 800,
                  fontSize: 82,
                  color: COLORS.coral,
                  lineHeight: 1,
                  minWidth: 120,
                }}
              >
                {it.n}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 800,
                    fontSize: 50,
                    color: COLORS.navy,
                    letterSpacing: -1,
                    lineHeight: 1.05,
                  }}
                >
                  {it.title}
                </div>
                <div
                  style={{
                    marginTop: 6,
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 500,
                    fontSize: 28,
                    color: COLORS.navy,
                    opacity: 0.75,
                  }}
                >
                  {it.sub}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
