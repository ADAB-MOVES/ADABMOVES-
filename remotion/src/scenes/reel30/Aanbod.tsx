import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

const items = [
  { n: "01", title: "Naschools", sub: "Op basisscholen — bewegen na de bel." },
  { n: "02", title: "Wekelijkse multisport", sub: "7 t/m 15 jaar in Amsterdam & omgeving." },
  { n: "03", title: "Sportevents", sub: "ADAB Day, clinics & themadagen." },
];

export const Aanbod: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const eyebrow = spring({ frame: f, fps, config: { damping: 20 } });
  const title = spring({ frame: f - 6, fps, config: { damping: 18 } });
  const fadeOut = interpolate(f, [duration - 10, duration], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ background: COLORS.navy, opacity: fadeOut }}>
      <div
        style={{
          position: "absolute",
          top: 200,
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
          top: 260,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 96,
          color: COLORS.cream,
          letterSpacing: -2,
          opacity: title,
          transform: `translateY(${interpolate(title, [0, 1], [20, 0])}px)`,
        }}
      >
        Drie sporen.
      </div>

      <div
        style={{
          position: "absolute",
          top: 500,
          left: 80,
          right: 80,
          display: "flex",
          flexDirection: "column",
          gap: 30,
        }}
      >
        {items.map((it, i) => {
          const s = spring({ frame: f - (20 + i * 14), fps, config: { damping: 18, stiffness: 200 } });
          return (
            <div
              key={it.n}
              style={{
                background: COLORS.cream,
                borderRadius: 24,
                padding: "36px 44px",
                display: "flex",
                alignItems: "center",
                gap: 32,
                opacity: s,
                transform: `translateY(${interpolate(s, [0, 1], [40, 0])}px)`,
              }}
            >
              <div
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 800,
                  fontSize: 92,
                  color: COLORS.coral,
                  lineHeight: 1,
                  minWidth: 140,
                }}
              >
                {it.n}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontFamily: "Sora, sans-serif",
                    fontWeight: 800,
                    fontSize: 56,
                    color: COLORS.navy,
                    letterSpacing: -1,
                    lineHeight: 1.05,
                  }}
                >
                  {it.title}
                </div>
                <div
                  style={{
                    marginTop: 8,
                    fontFamily: "Plus Jakarta Sans, sans-serif",
                    fontWeight: 500,
                    fontSize: 32,
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
