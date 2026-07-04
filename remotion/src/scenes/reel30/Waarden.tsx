import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

const items = [
  { title: "Discipline", sub: "Elke week trainen, elke week groeien." },
  { title: "Respect", sub: "Voor coaches, teamgenoten en jezelf." },
  { title: "Zelfvertrouwen", sub: "Weten wie je bent, weten wat je kunt." },
];

export const Waarden: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const title = spring({ frame: f, fps, config: { damping: 20 } });
  const fadeOut = interpolate(f, [duration - 10, duration], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ background: COLORS.cream, opacity: fadeOut }}>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, #F5EAD3 0%, ${COLORS.cream} 60%)` }} />

      <div
        style={{
          position: "absolute",
          top: 220,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 88,
          color: COLORS.navy,
          letterSpacing: -1.5,
          opacity: title,
          transform: `translateY(${interpolate(title, [0, 1], [30, 0])}px)`,
        }}
      >
        Sport met <span style={{ color: COLORS.coral }}>karakter.</span>
      </div>

      <div
        style={{
          position: "absolute",
          top: 500,
          left: 80,
          right: 80,
          display: "flex",
          flexDirection: "column",
          gap: 40,
        }}
      >
        {items.map((it, i) => {
          const s = spring({ frame: f - (20 + i * 16), fps, config: { damping: 16, stiffness: 180 } });
          return (
            <div
              key={it.title}
              style={{
                background: i === 1 ? COLORS.navy : COLORS.cream,
                color: i === 1 ? COLORS.cream : COLORS.navy,
                border: `4px solid ${COLORS.navy}`,
                borderRadius: 28,
                padding: "40px 48px",
                opacity: s,
                transform: `translateX(${interpolate(s, [0, 1], [-40, 0])}px)`,
                boxShadow: "0 12px 0 rgba(31,34,64,0.08)",
              }}
            >
              <div
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 800,
                  fontSize: 72,
                  lineHeight: 1,
                  letterSpacing: -1.2,
                }}
              >
                <span style={{ color: COLORS.coral, marginRight: 20 }}>0{i + 1}</span>
                {it.title}
              </div>
              <div
                style={{
                  marginTop: 14,
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 500,
                  fontSize: 34,
                  opacity: 0.9,
                }}
              >
                {it.sub}
              </div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
