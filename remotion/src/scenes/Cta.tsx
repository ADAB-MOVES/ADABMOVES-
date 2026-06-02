import { AbsoluteFill, Img, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../theme";

const CITIES = ["Amsterdam", "Haarlem", "Zaandam", "Almere", "Amstelveen", "Hoofddorp"];

export const Cta: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoIn = spring({ frame: f, fps, config: { damping: 16 } });
  const taglineIn = spring({ frame: f - 14, fps, config: { damping: 18 } });
  const urlIn = spring({ frame: f - 26, fps, config: { damping: 18 } });
  const citiesIn = spring({ frame: f - 38, fps, config: { damping: 20 } });

  const float = Math.sin((f / fps) * 1.4) * 4;

  // Ticker drift
  const tickX = interpolate(f, [0, duration], [0, -200], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at center, ${COLORS.cream} 0%, ${COLORS.warmBeige} 100%)`,
      }}
    >
      {/* Coral accent corner */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 600,
          height: 600,
          background: COLORS.coral,
          clipPath: "polygon(100% 0, 100% 60%, 60% 0)",
          opacity: 0.18,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 700,
          height: 500,
          background: COLORS.navy,
          clipPath: "polygon(0 40%, 0 100%, 60% 100%)",
          opacity: 0.08,
        }}
      />

      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <Img
          src={staticFile("logo.png")}
          style={{
            height: 360,
            width: "auto",
            opacity: logoIn,
            transform: `scale(${interpolate(logoIn, [0, 1], [0.85, 1])}) translateY(${float}px)`,
            filter: "drop-shadow(0 10px 30px rgba(31,34,64,0.18))",
          }}
        />
        <div
          style={{
            marginTop: 28,
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            fontSize: 30,
            letterSpacing: 12,
            color: COLORS.coral,
            textTransform: "uppercase",
            opacity: taglineIn,
            transform: `translateY(${interpolate(taglineIn, [0, 1], [14, 0])}px)`,
          }}
        >
          Bewegen met betekenis
        </div>
        <div
          style={{
            marginTop: 40,
            fontFamily: "Anton, sans-serif",
            fontSize: 110,
            color: COLORS.navy,
            letterSpacing: 2,
            opacity: urlIn,
            transform: `translateY(${interpolate(urlIn, [0, 1], [20, 0])}px) scale(${interpolate(urlIn, [0, 1], [0.92, 1])})`,
          }}
        >
          adabmoves.nl
        </div>
      </AbsoluteFill>

      {/* Cities ticker bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 0,
          right: 0,
          overflow: "hidden",
          opacity: citiesIn,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 60,
            paddingLeft: 80,
            transform: `translateX(${tickX}px)`,
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: 26,
            letterSpacing: 6,
            color: COLORS.navy,
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          {[...CITIES, ...CITIES, ...CITIES].map((c, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 60 }}>
              {c}
              <span style={{ width: 10, height: 10, borderRadius: 5, background: COLORS.coral }} />
            </span>
          ))}
        </div>
      </div>
    </AbsoluteFill>
  );
};
