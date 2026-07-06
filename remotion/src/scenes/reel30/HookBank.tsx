import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

export const HookBank: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  const kb = interpolate(f, [0, duration], [1.08, 1.18]);
  const line = spring({ frame: f - 15, fps, config: { damping: 20, stiffness: 160 } });
  const underline = interpolate(f, [50, 80], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fadeOut = interpolate(f, [duration - 8, duration], [1, 0.6], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ background: "#0A0C1F", opacity: fadeOut, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${kb})`, transformOrigin: "50% 55%" }}>
        <Img src={staticFile("reel30/hook-couch.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      {/* darken top for readability */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(10,12,31,0.75) 0%, rgba(10,12,31,0.15) 45%, rgba(10,12,31,0.55) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 180,
          left: 0,
          right: 0,
          padding: "0 70px",
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 108,
          lineHeight: 1.02,
          letterSpacing: -2,
          color: COLORS.cream,
          textShadow: "0 4px 30px rgba(0,0,0,0.55)",
          opacity: line,
          transform: `translateY(${interpolate(line, [0, 1], [30, 0])}px)`,
        }}
      >
        Dit is niet
        <br />
        zomaar een
        <br />
        <span style={{ color: COLORS.coral }}>sportles.</span>
        <div
          style={{
            margin: "28px auto 0",
            height: 8,
            width: `${underline * 40}%`,
            background: COLORS.coral,
            borderRadius: 4,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
