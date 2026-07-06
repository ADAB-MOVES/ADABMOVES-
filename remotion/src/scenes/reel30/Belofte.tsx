import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

export const Belofte: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = ["Bewegen", "met", "betekenis."];
  const start = 4;
  const gap = 8;

  const kb = interpolate(f, [0, duration], [1.05, 1.14]);
  const eyebrow = spring({ frame: f, fps, config: { damping: 20 } });
  const fadeOut = interpolate(f, [duration - 10, duration], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ background: COLORS.navy, opacity: fadeOut, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${kb})`, transformOrigin: "50% 50%" }}>
        <Img src={staticFile("reel30/belofte-gym.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(180deg, rgba(31,34,64,0.72) 0%, rgba(31,34,64,0.55) 55%, rgba(31,34,64,0.85) 100%)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 480,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 700,
          fontSize: 40,
          color: COLORS.coral,
          letterSpacing: 8,
          opacity: eyebrow,
        }}
      >
        ADAB MOVES
      </div>

      <div
        style={{
          position: "absolute",
          top: 600,
          left: 0,
          right: 0,
          padding: "0 70px",
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 150,
          lineHeight: 1.02,
          letterSpacing: -4,
          color: COLORS.cream,
          textShadow: "0 6px 30px rgba(0,0,0,0.4)",
        }}
      >
        {words.map((w, i) => {
          const s = spring({ frame: f - (start + i * gap), fps, config: { damping: 16, stiffness: 200 } });
          const isAccent = i === 2;
          return (
            <div
              key={i}
              style={{
                display: "block",
                opacity: s,
                transform: `translateY(${interpolate(s, [0, 1], [40, 0])}px)`,
                color: isAccent ? COLORS.coral : COLORS.cream,
              }}
            >
              {w}
            </div>
          );
        })}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 300,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontWeight: 500,
          fontSize: 42,
          color: COLORS.cream,
          opacity: spring({ frame: f - 40, fps, config: { damping: 22 } }) * 0.9,
          padding: "0 100px",
          lineHeight: 1.3,
          textShadow: "0 2px 20px rgba(0,0,0,0.5)",
        }}
      >
        Sport, discipline en zelfvertrouwen —
        <br />
        in een veilige, vertrouwde omgeving.
      </div>
    </AbsoluteFill>
  );
};
