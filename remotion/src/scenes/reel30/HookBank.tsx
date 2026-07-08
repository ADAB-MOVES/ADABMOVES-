import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

export const HookBank: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  const kb = interpolate(f, [0, duration], [1.05, 1.15]);
  const line = spring({ frame: f - 10, fps, config: { damping: 22, stiffness: 150 } });
  const line2 = spring({ frame: f - 40, fps, config: { damping: 22, stiffness: 150 } });
  const fadeOut = interpolate(f, [duration - 10, duration], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ background: "#0A0C1F", opacity: fadeOut, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${kb})`, transformOrigin: "40% 55%" }}>
        <Img src={staticFile("reel30/hook-sideline.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(10,12,31,0.15) 0%, rgba(10,12,31,0.05) 40%, rgba(10,12,31,0.55) 70%, rgba(10,12,31,0.9) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: 260,
          left: 0,
          right: 0,
          padding: "0 60px",
          textAlign: "left",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 74,
          lineHeight: 1.08,
          letterSpacing: -1.5,
          color: COLORS.cream,
          textShadow: "0 4px 30px rgba(0,0,0,0.7)",
          opacity: line,
          transform: `translateY(${interpolate(line, [0, 1], [30, 0])}px)`,
        }}
      >
        Op de meeste plekken moet je kind
        <span style={{ color: COLORS.coral }}> kiezen</span>:
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: 0,
          right: 0,
          padding: "0 60px",
          textAlign: "left",
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontWeight: 700,
          fontSize: 46,
          lineHeight: 1.2,
          color: COLORS.cream,
          textShadow: "0 2px 20px rgba(0,0,0,0.7)",
          opacity: line2,
          transform: `translateY(${interpolate(line2, [0, 1], [20, 0])}px)`,
        }}
      >
        erbij horen, of zichzelf blijven.
      </div>
    </AbsoluteFill>
  );
};
