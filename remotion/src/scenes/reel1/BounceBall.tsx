import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate } from "remotion";
import { COLORS } from "../../theme";
import { Character } from "../../illustrations/Character";
import { illu } from "../../illustrations/tokens";

const W = 1080;
const H = 1920;

export const BounceBall: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  // ball traveling left -> right with two bounces
  const t = f / duration;
  const x = interpolate(t, [0, 1], [-80, W + 80]);
  // bouncing y: sin abs to mimic gravity
  const bounces = 2.4;
  const y = 1500 - Math.abs(Math.sin(t * Math.PI * bounces)) * 320;
  const spin = (f * 12) % 360;

  const dots = Math.floor(((f / fps) * 2) % 4);

  return (
    <AbsoluteFill style={{ background: COLORS.cream }}>
      {/* gradient sky */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(180deg, #EFEBDD 0%, ${COLORS.cream} 60%)`,
        }}
      />

      {/* gym scene background: coach + kids dimmed */}
      <div style={{ position: "absolute", left: 0, right: 0, top: 1080, opacity: 0.45 }}>
        <div style={{ position: "absolute", left: 80 }}>
          <Character variant="coach-back" size={420} outfit={illu.ink} />
        </div>
        <div style={{ position: "absolute", right: 80 }}>
          <Character variant="kid-run" size={360} outfit={illu.coralDeep} />
        </div>
      </div>

      {/* floor lines */}
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", inset: 0 }}>
        <line x1="0" y1="1640" x2={W} y2="1640" stroke={illu.ink} strokeWidth="3" opacity="0.25" />
        <line x1="0" y1="1660" x2={W} y2="1660" stroke={illu.ink} strokeWidth="1" opacity="0.18" />

        {/* shadow */}
        <ellipse
          cx={x}
          cy={1640}
          rx={interpolate(y, [1180, 1500], [30, 70])}
          ry="8"
          fill={illu.ink}
          opacity={interpolate(y, [1180, 1500], [0.1, 0.3])}
        />

        {/* ball — matches kid-ball style (cream + navy pentagon) */}
        <g transform={`translate(${x}, ${y}) rotate(${spin})`}>
          <circle r="60" fill={illu.cream} stroke={illu.ink} strokeWidth="3" />
          <polygon points="0,-28 24,-9 16,22 -16,22 -24,-9" fill={illu.ink} />
        </g>
      </svg>

      {/* silence indicator */}
      <div
        style={{
          position: "absolute",
          top: 420,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 220,
          lineHeight: 1,
          color: COLORS.navy,
          letterSpacing: 8,
          opacity: 0.85,
        }}
      >
        {".".repeat(Math.max(1, dots))}
      </div>
    </AbsoluteFill>
  );
};
