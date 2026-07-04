import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";
import { illu } from "../../illustrations/tokens";

const W = 1080;
const H = 1920;

export const HookBank: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({ frame: f, fps, config: { damping: 18, stiffness: 160 } });
  const scale = interpolate(enter, [0, 1], [0.92, 1]);
  const flicker = 0.85 + Math.sin(f / 3) * 0.15;
  const slump = Math.sin(f / 30) * 4;

  const line = spring({ frame: f - 30, fps, config: { damping: 20, stiffness: 160 } });
  const underline = interpolate(f, [50, 80], [0, 1], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const fadeOut = interpolate(f, [duration - 8, duration], [1, 0.6], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ background: COLORS.cream, opacity: fadeOut }}>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, #EFEBDD 0%, ${COLORS.cream} 60%)` }} />

      {/* room floor */}
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", inset: 0 }}>
        <line x1="0" y1="1640" x2={W} y2="1640" stroke={illu.ink} strokeWidth="3" opacity="0.25" />

        {/* Couch */}
        <g transform={`translate(${W / 2 - 340}, 1100) scale(${scale})`}>
          {/* backrest */}
          <rect x="0" y="0" width="680" height="200" rx="30" fill={illu.ink} />
          {/* seat */}
          <rect x="-20" y="180" width="720" height="180" rx="24" fill="#2A2E52" />
          {/* seat cushion line */}
          <line x1="340" y1="200" x2="340" y2="340" stroke={illu.cream} strokeWidth="2" opacity="0.2" />
          {/* legs */}
          <rect x="20" y="360" width="20" height="40" fill={illu.ink} />
          <rect x="660" y="360" width="20" height="40" fill={illu.ink} />
        </g>

        {/* Kid silhouette slumped */}
        <g transform={`translate(${W / 2}, ${1080 + slump}) scale(${scale})`}>
          {/* body */}
          <path d="M -60 20 Q 0 -10 60 20 L 70 180 Q 0 195 -70 180 Z" fill={illu.coralDeep} />
          {/* logo dot */}
          <circle cx="20" cy="80" r="6" fill={illu.cream} />
          {/* head bent forward */}
          <ellipse cx="0" cy="-30" rx="42" ry="46" fill={illu.skin} />
          {/* short hair cap */}
          <path d="M -42 -40 Q 0 -90 42 -40 Q 42 -60 0 -68 Q -42 -60 -42 -40 Z" fill={illu.ink} />
          {/* legs down over seat */}
          <path d="M -30 180 L -40 320" stroke={illu.ink} strokeWidth="24" strokeLinecap="round" />
          <path d="M 30 180 L 42 320" stroke={illu.ink} strokeWidth="24" strokeLinecap="round" />
          {/* arms bent holding phone */}
          <path d="M -50 40 Q -70 90 -20 110" stroke={illu.skin} strokeWidth="16" fill="none" strokeLinecap="round" />
          <path d="M 50 40 Q 70 90 20 110" stroke={illu.skin} strokeWidth="16" fill="none" strokeLinecap="round" />
          {/* phone with cold light */}
          <rect x="-30" y="90" width="60" height="90" rx="8" fill="#0A0C1F" />
          <rect x="-24" y="98" width="48" height="70" rx="4" fill="#7EC6FF" opacity={flicker} />
          {/* light spill on face */}
          <ellipse cx="0" cy="-10" rx="30" ry="14" fill="#7EC6FF" opacity={0.35 * flicker} />
        </g>
      </svg>

      {/* Type overlay top */}
      <div
        style={{
          position: "absolute",
          top: 220,
          left: 0,
          right: 0,
          padding: "0 70px",
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 104,
          lineHeight: 1.02,
          letterSpacing: -2,
          color: COLORS.navy,
          opacity: line,
          transform: `translateY(${interpolate(line, [0, 1], [30, 0])}px)`,
        }}
      >
        Dit is niet
        <br />
        zomaar een
        <br />
        <span style={{ color: COLORS.coral }}>sportles.</span>
        <div
          style={{
            margin: "28px auto 0",
            height: 8,
            width: `${underline * 40}%`,
            background: COLORS.coral,
            borderRadius: 4,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};
