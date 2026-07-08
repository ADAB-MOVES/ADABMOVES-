import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

export const Belofte: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  const kb = interpolate(f, [0, duration], [1.04, 1.12]);
  const line = spring({ frame: f - 6, fps, config: { damping: 16, stiffness: 180 } });
  const accent = spring({ frame: f - 26, fps, config: { damping: 14, stiffness: 200 } });
  const fadeOut = interpolate(f, [duration - 10, duration], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ background: COLORS.navy, opacity: fadeOut, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${kb})`, transformOrigin: "50% 55%" }}>
        <Img src={staticFile("reel30/intro-gym.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(31,34,64,0.55) 0%, rgba(31,34,64,0.15) 40%, rgba(31,34,64,0.85) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 780,
          left: 0,
          right: 0,
          padding: "0 60px",
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 108,
          lineHeight: 1.02,
          letterSpacing: -2.5,
          color: COLORS.cream,
          textShadow: "0 4px 30px rgba(0,0,0,0.55)",
          opacity: line,
          transform: `translateY(${interpolate(line, [0, 1], [40, 0])}px)`,
        }}
      >
        Welkom bij
        <br />
        <span style={{ color: COLORS.coral, opacity: accent }}>Adab Moves.</span>
      </div>
    </AbsoluteFill>
  );
};
