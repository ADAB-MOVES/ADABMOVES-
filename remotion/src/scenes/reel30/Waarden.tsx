import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

const items = [
  { title: "Discipline", sub: "Elke week trainen, elke week groeien." },
  { title: "Respect", sub: "Voor coaches, teamgenoten en jezelf." },
  { title: "Zelfvertrouwen", sub: "Weten wie je bent, weten wat je kunt." },
];

export const Waarden: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const kb = interpolate(f, [0, duration], [1.05, 1.14]);
  const title = spring({ frame: f, fps, config: { damping: 20 } });
  const fadeOut = interpolate(f, [duration - 10, duration], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ background: COLORS.navy, opacity: fadeOut, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${kb})`, transformOrigin: "50% 40%" }}>
        <Img src={staticFile("reel30/waarden-kring.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(31,34,64,0.35) 0%, rgba(31,34,64,0.55) 45%, rgba(31,34,64,0.9) 100%)",
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
          fontWeight: 800,
          fontSize: 88,
          color: COLORS.cream,
          letterSpacing: -1.5,
          textShadow: "0 4px 24px rgba(0,0,0,0.55)",
          opacity: title,
          transform: `translateY(${interpolate(title, [0, 1], [30, 0])}px)`,
        }}
      >
        Sport met <span style={{ color: COLORS.coral }}>karakter.</span>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: 60,
          right: 60,
          display: "flex",
          flexDirection: "column",
          gap: 22,
        }}
      >
        {items.map((it, i) => {
          const s = spring({ frame: f - (18 + i * 14), fps, config: { damping: 16, stiffness: 180 } });
          const accent = i === 1;
          return (
            <div
              key={it.title}
              style={{
                background: accent ? COLORS.coral : COLORS.cream,
                color: accent ? COLORS.cream : COLORS.navy,
                borderRadius: 24,
                padding: "28px 40px",
                opacity: s,
                transform: `translateX(${interpolate(s, [0, 1], [-40, 0])}px)`,
                boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
              }}
            >
              <div
                style={{
                  fontFamily: "Sora, sans-serif",
                  fontWeight: 800,
                  fontSize: 58,
                  lineHeight: 1,
                  letterSpacing: -1,
                }}
              >
                <span style={{ color: accent ? COLORS.navy : COLORS.coral, marginRight: 16 }}>0{i + 1}</span>
                {it.title}
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontFamily: "Plus Jakarta Sans, sans-serif",
                  fontWeight: 500,
                  fontSize: 28,
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
