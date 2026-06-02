import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../theme";

export const Hook: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 0-8: white flash, 8-22: coral shape blast, 18-end: word smash
  const flash = interpolate(f, [0, 4, 10], [1, 1, 0], { extrapolateRight: "clamp" });
  const blast = spring({ frame: f - 6, fps, config: { damping: 14, stiffness: 140 } });
  const blastScale = interpolate(blast, [0, 1], [0, 1]);

  const wordIn = spring({ frame: f - 18, fps, config: { damping: 12, stiffness: 200 } });
  const wordScale = interpolate(wordIn, [0, 1], [2.4, 1]);
  const wordOp = interpolate(f, [18, 26], [0, 1], { extrapolateRight: "clamp" });

  // Exit drift
  const exit = interpolate(f, [duration - 14, duration], [0, -40], { extrapolateLeft: "clamp" });

  // Sub line
  const subIn = spring({ frame: f - 30, fps, config: { damping: 18 } });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.ink, overflow: "hidden" }}>
      {/* Coral blast shape */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 2600,
          height: 2600,
          marginLeft: -1300,
          marginTop: -1300,
          background: COLORS.coral,
          borderRadius: 9999,
          transform: `scale(${blastScale})`,
          opacity: 0.95,
        }}
      />
      {/* Inner navy disc */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 2200,
          height: 2200,
          marginLeft: -1100,
          marginTop: -1100,
          background: COLORS.navy,
          borderRadius: 9999,
          transform: `scale(${interpolate(spring({ frame: f - 12, fps, config: { damping: 16 } }), [0, 1], [0, 1])})`,
        }}
      />
      {/* Word */}
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 380,
            color: COLORS.cream,
            letterSpacing: 6,
            lineHeight: 0.9,
            opacity: wordOp,
            transform: `scale(${wordScale}) translateY(${exit}px)`,
          }}
        >
          ADAB
        </div>
        <div
          style={{
            marginTop: 10,
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            fontSize: 32,
            letterSpacing: 14,
            color: COLORS.coral,
            textTransform: "uppercase",
            opacity: subIn,
            transform: `translateY(${interpolate(subIn, [0, 1], [16, 0])}px)`,
          }}
        >
          MOVES
        </div>
      </AbsoluteFill>
      {/* White flash on top */}
      <AbsoluteFill style={{ background: COLORS.cream, opacity: flash }} />
    </AbsoluteFill>
  );
};
