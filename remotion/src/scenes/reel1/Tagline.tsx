import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";
import { Character } from "../../illustrations/Character";
import { illu } from "../../illustrations/tokens";

export const Tagline: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  const line1 = spring({ frame: f - 4, fps, config: { damping: 18, stiffness: 160 } });
  const line2 = spring({ frame: f - 26, fps, config: { damping: 18, stiffness: 160 } });
  const underline1 = interpolate(f, [20, 50], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const underline2 = interpolate(f, [42, 72], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });

  const coachIn = spring({ frame: f - 60, fps, config: { damping: 14, stiffness: 140 } });
  const wave = Math.sin((f - 60) / 6) * 6;
  const logoIn = spring({ frame: f - 10, fps, config: { damping: 18 } });

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
        fontSize: 104,
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
          width: `${uw * 65}%`,
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

      {/* small logo top */}
      <div
        style={{
          position: "absolute",
          top: 180,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: logoIn,
        }}
      >
        <Img src={staticFile("logo.png")} style={{ width: 200, height: "auto" }} />
      </div>

      <Line text="Bewegen met" y={420} v={line1} uw={underline1} />
      <Line text="betekenis." y={580} v={line1} uw={underline1} />
      <Line text="Karakter begint" y={820} v={line2} uw={underline2} />
      <Line text="hier." y={980} v={line2} uw={underline2} />

      {/* waving coach mascot */}
      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: Math.max(0, coachIn),
          transform: `translateY(${interpolate(coachIn, [0, 1], [60, 0])}px) rotate(${wave * 0.3}deg)`,
          transformOrigin: "bottom center",
        }}
      >
        <Character variant="coach-mascot" size={520} outfit={illu.ink} />
      </div>
    </AbsoluteFill>
  );
};
