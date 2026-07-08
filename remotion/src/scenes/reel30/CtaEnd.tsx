import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

export const CtaEnd: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  const kb = interpolate(f, [0, duration], [1.05, 1.13]);
  const logoIn = spring({ frame: f, fps, config: { damping: 20 } });
  const handle = spring({ frame: f - 14, fps, config: { damping: 16, stiffness: 180 } });
  const btn = spring({ frame: f - 40, fps, config: { damping: 15, stiffness: 200 } });

  return (
    <AbsoluteFill style={{ background: COLORS.navy, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${kb})`, transformOrigin: "50% 55%" }}>
        <Img src={staticFile("reel30/intro-gym.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(31,34,64,0.85) 0%, rgba(31,34,64,0.4) 45%, rgba(31,34,64,0.95) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 200,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: logoIn,
          transform: `translateY(${interpolate(logoIn, [0, 1], [-20, 0])}px)`,
        }}
      >
        <Img src={staticFile("logo.png")} style={{ width: 300, height: "auto" }} />
      </div>

      <div
        style={{
          position: "absolute",
          top: 720,
          left: 0,
          right: 0,
          padding: "0 60px",
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 110,
          color: COLORS.cream,
          letterSpacing: -2.5,
          lineHeight: 1,
          textShadow: "0 4px 30px rgba(0,0,0,0.6)",
          opacity: handle,
          transform: `translateY(${interpolate(handle, [0, 1], [30, 0])}px)`,
        }}
      >
        Volg <span style={{ color: COLORS.coral }}>@adabmoves</span>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 130,
          left: 60,
          right: 60,
          background: COLORS.coral,
          color: COLORS.cream,
          borderRadius: 30,
          padding: "40px 30px",
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 62,
          letterSpacing: -0.5,
          boxShadow: "0 16px 40px rgba(0,0,0,0.45)",
          opacity: btn,
          transform: `translateY(${interpolate(btn, [0, 1], [40, 0])}px)`,
        }}
      >
        adabmoves.nl
      </div>
    </AbsoluteFill>
  );
};
