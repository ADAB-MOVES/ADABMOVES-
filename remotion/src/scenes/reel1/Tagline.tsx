import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

export const Tagline: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  const line1 = spring({ frame: f - 4, fps, config: { damping: 18, stiffness: 160 } });
  const line2 = spring({ frame: f - 26, fps, config: { damping: 18, stiffness: 160 } });
  const underline1 = interpolate(f, [20, 50], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const underline2 = interpolate(f, [42, 72], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const logoIn = spring({ frame: f - 70, fps, config: { damping: 14, stiffness: 140 } });
  const pulse = 1 + Math.sin((f - 70) / 8) * 0.04 * Math.min(1, Math.max(0, (f - 70) / 20));

  const fadeOut = interpolate(f, [duration - 8, duration], [1, 0], { extrapolateLeft: "clamp" });

  const Line: React.FC<{ text: string; y: number; v: number; uw: number }> = ({ text, y, v, uw }) => (
    <div
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        top: y,
        textAlign: "center",
        fontFamily: "Sora, sans-serif",
        fontWeight: 800,
        fontSize: 110,
        color: COLORS.navy,
        letterSpacing: -2,
        lineHeight: 1.05,
        clipPath: `inset(${interpolate(v, [0, 1], [100, 0])}% 0 0 0)`,
        opacity: v,
      }}
    >
      {text}
      <div
        style={{
          margin: "16px auto 0",
          height: 6,
          width: `${uw * 70}%`,
          background: COLORS.coral,
          borderRadius: 4,
        }}
      />
    </div>
  );

  return (
    <AbsoluteFill style={{ background: COLORS.cream, opacity: fadeOut }}>
      {/* navy hairline frame */}
      <div
        style={{
          position: "absolute",
          inset: 36,
          border: `2px solid ${COLORS.navy}`,
          opacity: 0.6,
        }}
      />

      <Line text="Bewegen met" y={520} v={line1} uw={underline1} />
      <Line text="betekenis." y={700} v={line1} uw={underline1} />
      <Line text="Karakter begint" y={980} v={line2} uw={underline2} />
      <Line text="hier." y={1160} v={line2} uw={underline2} />

      {/* Logo */}
      <div
        style={{
          position: "absolute",
          bottom: 200,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: Math.max(0, logoIn),
          transform: `scale(${pulse})`,
        }}
      >
        <Img src={staticFile("logo.png")} style={{ width: 420, height: "auto" }} />
      </div>
    </AbsoluteFill>
  );
};
