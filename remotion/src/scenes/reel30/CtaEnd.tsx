import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

export const CtaEnd: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  const kb = interpolate(f, [0, duration], [1.06, 1.14]);
  const logoIn = spring({ frame: f, fps, config: { damping: 20 } });
  const line1 = spring({ frame: f - 12, fps, config: { damping: 18 } });
  const line2 = spring({ frame: f - 34, fps, config: { damping: 18 } });
  const line3 = spring({ frame: f - 54, fps, config: { damping: 18 } });
  const pin = spring({ frame: f - 74, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill style={{ background: COLORS.navy, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${kb})`, transformOrigin: "50% 55%" }}>
        <Img src={staticFile("reel30/cta-groep.jpg")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(31,34,64,0.7) 0%, rgba(31,34,64,0.15) 40%, rgba(31,34,64,0.85) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 120,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: logoIn,
          transform: `translateY(${interpolate(logoIn, [0, 1], [-20, 0])}px)`,
        }}
      >
        <Img src={staticFile("logo.png")} style={{ width: 280, height: "auto" }} />
      </div>

      <div
        style={{
          position: "absolute",
          top: 360,
          left: 0,
          right: 0,
          padding: "0 70px",
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 96,
          color: COLORS.cream,
          letterSpacing: -2,
          lineHeight: 1.02,
          textShadow: "0 4px 24px rgba(0,0,0,0.55)",
          opacity: line1,
          transform: `translateY(${interpolate(line1, [0, 1], [30, 0])}px)`,
        }}
      >
        Volg <span style={{ color: COLORS.coral }}>@adabmoves</span>
      </div>

      <div
        style={{
          position: "absolute",
          top: 560,
          left: 0,
          right: 0,
          padding: "0 90px",
          textAlign: "center",
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontWeight: 700,
          fontSize: 44,
          color: COLORS.cream,
          lineHeight: 1.25,
          textShadow: "0 2px 20px rgba(0,0,0,0.6)",
          opacity: line2,
          transform: `translateY(${interpolate(line2, [0, 1], [20, 0])}px)`,
        }}
      >
        Ontdek hoe wij sport en karakter
        <br />
        samenbrengen.
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 240,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
          opacity: pin,
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontWeight: 700,
          fontSize: 34,
          color: COLORS.cream,
          textShadow: "0 2px 16px rgba(0,0,0,0.6)",
        }}
      >
        <span style={{ fontSize: 40 }}>📍</span> Amsterdam & omgeving
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 60,
          right: 60,
          background: COLORS.coral,
          color: COLORS.cream,
          borderRadius: 30,
          padding: "36px 30px",
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 54,
          letterSpacing: -0.5,
          boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
          opacity: line3,
          transform: `translateY(${interpolate(line3, [0, 1], [30, 0])}px)`,
        }}
      >
        adabmoves.nl
      </div>
    </AbsoluteFill>
  );
};
