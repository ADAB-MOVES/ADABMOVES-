import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../theme";

const WORDS = ["Bewegen", "met", "betekenis"];

export const Ident: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoIn = spring({ frame: f, fps, config: { damping: 14 } });
  const logoScale = interpolate(logoIn, [0, 1], [0.6, 1]);

  const float = Math.sin((f / fps) * 1.2) * 4;

  // Exit slide
  const exit = interpolate(f, [duration - 12, duration], [0, -80], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at center, ${COLORS.navy} 0%, ${COLORS.ink} 100%)`,
      }}
    >
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <Img
          src={staticFile("logo.png")}
          style={{
            height: 360,
            width: "auto",
            opacity: logoIn,
            transform: `scale(${logoScale}) translateY(${float + exit}px)`,
            filter: "drop-shadow(0 12px 40px rgba(232,120,78,0.25))",
          }}
        />
        <div
          style={{
            marginTop: 50,
            display: "flex",
            gap: 24,
            fontFamily: "Anton, sans-serif",
            fontSize: 86,
            textTransform: "uppercase",
            letterSpacing: 4,
          }}
        >
          {WORDS.map((w, i) => {
            const wIn = spring({ frame: f - 18 - i * 8, fps, config: { damping: 16, stiffness: 180 } });
            const color = i === 1 ? COLORS.coral : COLORS.cream;
            return (
              <span
                key={w}
                style={{
                  color,
                  opacity: wIn,
                  display: "inline-block",
                  transform: `translateY(${interpolate(wIn, [0, 1], [40, exit])}px)`,
                }}
              >
                {w}
              </span>
            );
          })}
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
