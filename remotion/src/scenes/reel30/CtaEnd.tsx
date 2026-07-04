import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";
import { Character } from "../../illustrations/Character";
import { illu } from "../../illustrations/tokens";

export const CtaEnd: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoIn = spring({ frame: f, fps, config: { damping: 20 } });
  const line1 = spring({ frame: f - 12, fps, config: { damping: 18 } });
  const line2 = spring({ frame: f - 34, fps, config: { damping: 18 } });
  const line3 = spring({ frame: f - 54, fps, config: { damping: 18 } });
  const pin = spring({ frame: f - 74, fps, config: { damping: 20 } });
  const coachIn = spring({ frame: f - 20, fps, config: { damping: 16 } });
  const wave = Math.sin((f - 20) / 6) * 4;

  return (
    <AbsoluteFill style={{ background: COLORS.cream }}>
      <div
        style={{
          position: "absolute",
          inset: 40,
          border: `2px solid ${COLORS.navy}`,
          opacity: 0.5,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 160,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: logoIn,
          transform: `translateY(${interpolate(logoIn, [0, 1], [-20, 0])}px)`,
        }}
      >
        <Img src={staticFile("logo.png")} style={{ width: 320, height: "auto" }} />
      </div>

      <div
        style={{
          position: "absolute",
          top: 420,
          left: 0,
          right: 0,
          padding: "0 70px",
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 96,
          color: COLORS.navy,
          letterSpacing: -2,
          lineHeight: 1.02,
          opacity: line1,
          transform: `translateY(${interpolate(line1, [0, 1], [30, 0])}px)`,
        }}
      >
        Volg <span style={{ color: COLORS.coral }}>@adabmoves</span>
      </div>

      <div
        style={{
          position: "absolute",
          top: 620,
          left: 0,
          right: 0,
          padding: "0 90px",
          textAlign: "center",
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontWeight: 700,
          fontSize: 44,
          color: COLORS.navy,
          lineHeight: 1.25,
          opacity: line2,
          transform: `translateY(${interpolate(line2, [0, 1], [20, 0])}px)`,
        }}
      >
        Ontdek hoe wij sport en karakter
        <br />
        samenbrengen.
      </div>

      {/* waving coach */}
      <div
        style={{
          position: "absolute",
          bottom: 340,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: coachIn,
          transform: `translateY(${interpolate(coachIn, [0, 1], [40, 0])}px) rotate(${wave * 0.3}deg)`,
          transformOrigin: "bottom center",
        }}
      >
        <Character variant="coach-mascot" size={420} outfit={illu.ink} />
      </div>

      {/* location pin */}
      <div
        style={{
          position: "absolute",
          bottom: 260,
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
          color: COLORS.navy,
        }}
      >
        <span style={{ fontSize: 40 }}>📍</span> Amsterdam & omgeving
      </div>

      {/* CTA bar */}
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
          opacity: line3,
          transform: `translateY(${interpolate(line3, [0, 1], [30, 0])}px)`,
        }}
      >
        adabmoves.nl
      </div>
    </AbsoluteFill>
  );
};
