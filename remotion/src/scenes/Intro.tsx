import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS } from "../theme";

export const Intro: React.FC<{ duration: number }> = ({ duration }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Coral sweep across screen
  const sweep = interpolate(frame, [0, 28], [-100, 0], { extrapolateRight: "clamp" });
  const sweepOut = interpolate(frame, [duration - 18, duration], [0, 120], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Big "A" badge spring
  const aSpring = spring({ frame: frame - 10, fps, config: { damping: 14, stiffness: 140 } });
  const aScale = interpolate(aSpring, [0, 1], [0.3, 1]);

  // Title characters stagger
  const title = "ADAB MOVES";
  const subtitle = "Bewegen met betekenis";

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.cream, overflow: "hidden" }}>
      {/* Coral diagonal sweep */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `translateX(${sweep}%) skewX(-12deg)`,
          background: COLORS.coral,
          opacity: 0.95,
        }}
      />
      {/* Navy panel slides in slightly delayed */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `translateX(${interpolate(frame, [4, 32], [-100, -8])}%) skewX(-12deg)`,
          background: COLORS.navy,
        }}
      />

      {/* Outro sweep */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `translateX(${sweepOut}%) skewX(-12deg)`,
          background: COLORS.cream,
        }}
      />

      {/* Centered logo + title */}
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center", color: COLORS.cream }}>
          {/* Stylized A mark */}
          <div
            style={{
              transform: `scale(${aScale})`,
              fontFamily: "Anton, Impact, sans-serif",
              fontSize: 280,
              lineHeight: 1,
              color: COLORS.cream,
              position: "relative",
              display: "inline-block",
            }}
          >
            A
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: -10,
                transform: "translateX(-50%)",
                width: interpolate(aSpring, [0, 1], [0, 240]),
                height: 16,
                borderRadius: 8,
                background: COLORS.coral,
              }}
            />
          </div>

          <div
            style={{
              marginTop: 60,
              fontFamily: "Anton, Impact, sans-serif",
              fontSize: 110,
              letterSpacing: 6,
              display: "flex",
              justifyContent: "center",
              gap: 4,
            }}
          >
            {title.split("").map((ch, i) => {
              const charSpring = spring({
                frame: frame - 18 - i * 2,
                fps,
                config: { damping: 16, stiffness: 180 },
              });
              const y = interpolate(charSpring, [0, 1], [40, 0]);
              return (
                <span
                  key={i}
                  style={{
                    display: "inline-block",
                    opacity: charSpring,
                    transform: `translateY(${y}px)`,
                  }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </span>
              );
            })}
          </div>

          <div
            style={{
              marginTop: 22,
              fontFamily: "Inter, sans-serif",
              fontSize: 34,
              letterSpacing: 3,
              textTransform: "uppercase",
              opacity: interpolate(frame, [40, 60], [0, 0.9], {
                extrapolateLeft: "clamp",
                extrapolateRight: "clamp",
              }),
              color: COLORS.cream,
            }}
          >
            {subtitle}
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
