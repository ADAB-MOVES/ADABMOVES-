import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

export const Belofte: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  const words = ["Bewegen", "met", "betekenis."];
  const start = 4;
  const gap = 8;

  const eyebrow = spring({ frame: f, fps, config: { damping: 20 } });
  const fadeOut = interpolate(f, [duration - 10, duration], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ background: COLORS.navy, opacity: fadeOut }}>
      {/* subtle grain-esque gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 30% 20%, #2A2E5C 0%, ${COLORS.navy} 60%)`,
        }}
      />

      {/* eyebrow */}
      <div
        style={{
          position: "absolute",
          top: 520,
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

      {/* Words */}
      <div
        style={{
          position: "absolute",
          top: 640,
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

      {/* small subline */}
      <div
        style={{
          position: "absolute",
          bottom: 340,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontWeight: 500,
          fontSize: 42,
          color: COLORS.cream,
          opacity: spring({ frame: f - 40, fps, config: { damping: 22 } }) * 0.85,
          padding: "0 100px",
          lineHeight: 1.3,
        }}
      >
        Sport, discipline en zelfvertrouwen —
        <br />
        in een veilige, vertrouwde omgeving.
      </div>
    </AbsoluteFill>
  );
};
