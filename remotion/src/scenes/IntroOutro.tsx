import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../theme";
import { GymBg } from "../components/GymBg";
import { CoachBack } from "../components/Kid";

export const Intro: React.FC<{ duration: number }> = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const coachIn = spring({ frame: f, fps, config: { damping: 18 } });
  const titleIn = spring({ frame: f - 18, fps, config: { damping: 18 } });
  return (
    <AbsoluteFill>
      <GymBg />
      <svg width="100%" height="100%" viewBox="0 0 1920 1080" style={{ position: "absolute", inset: 0 }}>
        <g transform={`translate(${interpolate(coachIn, [0, 1], [400, 460])}, 760)`}>
          <CoachBack />
        </g>
      </svg>
      <div
        style={{
          position: "absolute",
          right: 80,
          top: "30%",
          maxWidth: 900,
          textAlign: "right",
          opacity: titleIn,
          transform: `translateX(${interpolate(titleIn, [0, 1], [60, 0])}px)`,
        }}
      >
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            color: COLORS.coral,
            fontSize: 24,
            letterSpacing: 8,
            marginBottom: 16,
          }}
        >
          ADAB MOVES
        </div>
        <div
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 150,
            color: COLORS.navy,
            lineHeight: 0.95,
            textTransform: "uppercase",
          }}
        >
          Bewegen
          <br />
          met betekenis
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const Outro: React.FC<{ duration: number }> = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const logoIn = spring({ frame: f, fps, config: { damping: 14 } });
  const lineIn = spring({ frame: f - 12, fps, config: { damping: 18 } });
  const urlIn = spring({ frame: f - 24, fps, config: { damping: 20 } });
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.cream }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            transform: `scale(${logoIn})`,
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: COLORS.coral,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <span
            style={{
              fontFamily: "Anton, sans-serif",
              fontSize: 220,
              color: "#FFFFFF",
              lineHeight: 1,
              transform: "translateY(10px)",
            }}
          >
            A
          </span>
        </div>
        <div
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 120,
            color: COLORS.navy,
            textTransform: "uppercase",
            opacity: lineIn,
            transform: `translateY(${interpolate(lineIn, [0, 1], [20, 0])}px)`,
            lineHeight: 1,
          }}
        >
          ADAB MOVES
        </div>
        <div
          style={{
            marginTop: 16,
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: 28,
            letterSpacing: 6,
            color: COLORS.coral,
            opacity: lineIn,
            textTransform: "uppercase",
          }}
        >
          Bewegen met betekenis
        </div>
        <div
          style={{
            marginTop: 48,
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: 32,
            color: COLORS.navy,
            opacity: urlIn,
          }}
        >
          adabmoves.nl
        </div>
      </div>
    </AbsoluteFill>
  );
};
