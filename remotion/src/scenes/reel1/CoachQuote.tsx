import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

const W = 1080;
const H = 1920;

const Coach: React.FC<{ scale: number }> = ({ scale }) => (
  <g transform={`translate(${W / 2}, 1180) scale(${scale})`}>
    {/* shoulders / jacket */}
    <path
      d="M -360 320 C -360 80, -180 -20, 0 -20 C 180 -20, 360 80, 360 320 L 360 520 L -360 520 Z"
      fill={COLORS.navy}
    />
    {/* coral chest stripe */}
    <rect x="-360" y="200" width="720" height="22" fill={COLORS.coral} />
    {/* logo box on chest */}
    <rect x="-110" y="60" width="220" height="60" rx="6" fill={COLORS.cream} opacity="0.95" />
    <text
      x="0"
      y="102"
      textAnchor="middle"
      fontFamily="Sora, sans-serif"
      fontWeight="800"
      fontSize="32"
      fill={COLORS.navy}
      letterSpacing="2"
    >
      ADAB MOVES
    </text>
    {/* neck */}
    <rect x="-50" y="-80" width="100" height="80" fill="#D9A87A" />
    {/* head */}
    <circle cx="0" cy="-220" r="180" fill="#E5B58A" />
    {/* millimeter buzz cut top */}
    <path
      d="M -180 -250 C -180 -380, 180 -380, 180 -250 L 180 -220 L -180 -220 Z"
      fill={COLORS.ink}
      opacity="0.85"
    />
    {/* dotted stubble texture on scalp */}
    {Array.from({ length: 40 }).map((_, i) => {
      const a = (i / 40) * Math.PI;
      const r = 175;
      const x = Math.cos(a + Math.PI) * r;
      const y = -220 + Math.sin(a + Math.PI) * r;
      return <circle key={i} cx={x} cy={y} r="3" fill={COLORS.ink} opacity="0.5" />;
    })}
    {/* big full beard */}
    <path
      d="M -160 -180 C -200 -60, -180 60, 0 80 C 180 60, 200 -60, 160 -180 C 120 -120, -120 -120, -160 -180 Z"
      fill={COLORS.ink}
    />
    {/* mouth (no eyes - brand rule) */}
    <path d="M -28 -130 Q 0 -110, 28 -130" stroke={COLORS.ink} strokeWidth="5" fill="none" strokeLinecap="round" />
  </g>
);

export const CoachQuote: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({ frame: f, fps, config: { damping: 18, stiffness: 180 } });
  const push = interpolate(f, [0, duration], [1, 1.05]);
  const coachScale = interpolate(enter, [0, 1], [0.9, 1]) * push;

  // Words appear one by one
  const words = ["Sport", "zonder", "karakter", "is…"];
  const wordStart = 8;
  const wordGap = 7;

  return (
    <AbsoluteFill style={{ background: COLORS.cream }}>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        {/* gym floor line */}
        <line x1="0" y1="1700" x2={W} y2="1700" stroke={COLORS.navy} strokeWidth="3" opacity="0.25" />
        <line x1="0" y1="1720" x2={W} y2="1720" stroke={COLORS.navy} strokeWidth="1" opacity="0.18" />
        <Coach scale={coachScale} />
      </svg>

      {/* Quote */}
      <div
        style={{
          position: "absolute",
          top: 260,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 96,
          lineHeight: 1.05,
          color: COLORS.navy,
          letterSpacing: -1,
          padding: "0 60px",
        }}
      >
        {words.map((w, i) => {
          const s = spring({ frame: f - (wordStart + i * wordGap), fps, config: { damping: 14, stiffness: 200 } });
          return (
            <span
              key={i}
              style={{
                display: "inline-block",
                marginRight: 18,
                opacity: s,
                transform: `translateY(${interpolate(s, [0, 1], [30, 0])}px)`,
              }}
            >
              {w}
            </span>
          );
        })}
        <div
          style={{
            margin: "28px auto 0",
            width: interpolate(f, [30, 55], [0, 280], { extrapolateLeft: "clamp", extrapolateRight: "clamp" }),
            height: 6,
            background: COLORS.coral,
            borderRadius: 4,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
