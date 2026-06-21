import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

const W = 1080;
const H = 1920;

export const BounceBall: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ball travels right -> left, bouncing
  const t = f / duration; // 0..1
  const x = interpolate(t, [0, 1], [W + 100, -150]);
  // 3 bounces
  const bounceFreq = 3;
  const groundY = 1500;
  const bounceHeight = Math.max(0, Math.abs(Math.sin(t * Math.PI * bounceFreq))) * 320;
  // decay
  const decay = interpolate(t, [0, 1], [1, 0.35]);
  const y = groundY - bounceHeight * decay;
  const spin = -t * 720;

  // shadow scales with height
  const shadowScale = interpolate(bounceHeight * decay, [0, 320], [1, 0.4]);
  const shadowOp = interpolate(bounceHeight * decay, [0, 320], [0.35, 0.1]);

  // Subtle "..." pulse to convey silence
  const dotIn = spring({ frame: f - 30, fps, config: { damping: 18 } });

  return (
    <AbsoluteFill style={{ background: COLORS.cream }}>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        {/* empty gym - floor lines + target on back wall */}
        <rect x="0" y="0" width={W} height="1530" fill={COLORS.warmBeige} opacity="0.4" />
        <line x1="0" y1="1530" x2={W} y2="1530" stroke={COLORS.navy} strokeWidth="3" opacity="0.4" />
        {/* perspective floor lines */}
        {[1560, 1620, 1700, 1820].map((yy, i) => (
          <line key={i} x1="0" y1={yy} x2={W} y2={yy} stroke={COLORS.navy} strokeWidth="1.5" opacity={0.2 - i * 0.03} />
        ))}
        {/* back wall target */}
        <g transform={`translate(${W / 2}, 600)`} opacity="0.5">
          <circle r="180" fill="none" stroke={COLORS.navy} strokeWidth="6" />
          <circle r="120" fill="none" stroke={COLORS.navy} strokeWidth="6" />
          <circle r="60" fill={COLORS.coral} />
        </g>

        {/* shadow */}
        <ellipse cx={x} cy={1545} rx={50 * shadowScale} ry={12 * shadowScale} fill={COLORS.ink} opacity={shadowOp} />

        {/* football */}
        <g transform={`translate(${x}, ${y}) rotate(${spin})`}>
          <circle r="55" fill="#FFFFFF" stroke={COLORS.ink} strokeWidth="4" />
          <polygon points="0,-32 28,-10 18,24 -18,24 -28,-10" fill={COLORS.ink} />
          <polygon points="0,-22 19,-7 12,16 -12,16 -19,-7" fill="#FFFFFF" />
        </g>
      </svg>

      {/* "..." silence indicator */}
      <div
        style={{
          position: "absolute",
          top: 240,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 180,
          color: COLORS.navy,
          letterSpacing: 12,
          opacity: dotIn * 0.6,
          lineHeight: 0.6,
        }}
      >
        ...
      </div>
    </AbsoluteFill>
  );
};
