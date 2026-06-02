import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { COLORS } from "../theme";

// A subtle coral diagonal accent that slowly travels across the full video.
export const AccentLine: React.FC = () => {
  const f = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const t = f / durationInFrames;
  const x = interpolate(t, [0, 1], [-300, 300]);
  return (
    <AbsoluteFill style={{ pointerEvents: "none" }}>
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: `calc(50% + ${x}px)`,
          width: 8,
          height: "140%",
          background: COLORS.coral,
          opacity: 0.08,
          transform: "rotate(18deg)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: `calc(50% + ${x + 90}px)`,
          width: 2,
          height: "140%",
          background: COLORS.coral,
          opacity: 0.12,
          transform: "rotate(18deg)",
        }}
      />
    </AbsoluteFill>
  );
};
