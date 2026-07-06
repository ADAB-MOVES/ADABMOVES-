import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

export const CoachWelkom: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  const kb = interpolate(f, [0, duration], [1.08, 1.16]);
  const cap1 = spring({ frame: f - 10, fps, config: { damping: 20 } });
  const cap2 = spring({ frame: f - 90, fps, config: { damping: 20 } });
  const fadeOut = interpolate(f, [duration - 10, duration], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ background: COLORS.cream, opacity: fadeOut, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${kb})`, transformOrigin: "50% 60%" }}>
        <Img src={staticFile("reel30/coach-welkom.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(31,34,64,0.55) 0%, rgba(31,34,64,0.05) 32%, rgba(31,34,64,0.05) 65%, rgba(31,34,64,0.55) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 100,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 82,
          color: COLORS.cream,
          letterSpacing: -1.5,
          lineHeight: 1.05,
          textShadow: "0 4px 24px rgba(0,0,0,0.55)",
          opacity: cap1,
          transform: `translateY(${interpolate(cap1, [0, 1], [30, 0])}px)`,
          padding: "0 60px",
        }}
      >
        Een plek waar
        <br />
        je kind <span style={{ color: COLORS.coral }}>zichzelf</span> mag zijn.
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 130,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontWeight: 700,
          fontSize: 44,
          color: COLORS.cream,
          background: COLORS.navy,
          margin: "0 80px",
          padding: "22px 30px",
          borderRadius: 16,
          opacity: cap2,
          transform: `translateY(${interpolate(cap2, [0, 1], [30, 0])}px)`,
        }}
      >
        Vaste coaches. Islamitisch gefundeerd.
      </div>
    </AbsoluteFill>
  );
};
