import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";
import { Character } from "../../illustrations/Character";
import { illu } from "../../illustrations/tokens";

const W = 1080;
const H = 1920;

export const CoachWelkom: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  const enter = spring({ frame: f, fps, config: { damping: 20 } });
  const coachIn = interpolate(enter, [0, 1], [40, 0]);

  const kidStart = 30;
  const kidT = Math.min(1, Math.max(0, (f - kidStart) / 60));
  const kidX = interpolate(kidT, [0, 1], [W + 200, 620]);
  const kidBob = Math.sin((f - kidStart) / 5) * 8;

  const cap1 = spring({ frame: f - 20, fps, config: { damping: 20 } });
  const cap2 = spring({ frame: f - 90, fps, config: { damping: 20 } });
  const fadeOut = interpolate(f, [duration - 10, duration], [1, 0], { extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ background: COLORS.cream, opacity: fadeOut }}>
      {/* wall */}
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, #F5EAD3 0%, ${COLORS.cream} 55%)` }} />

      {/* portrait gym backdrop */}
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", inset: 0 }}>
        {/* windows */}
        <g opacity="0.9">
          <rect x="80" y="200" width="220" height="140" rx="6" fill="#CFE3F0" stroke={COLORS.navy} strokeWidth="4" />
          <rect x="330" y="200" width="220" height="140" rx="6" fill="#CFE3F0" stroke={COLORS.navy} strokeWidth="4" />
          <rect x="780" y="200" width="220" height="140" rx="6" fill="#CFE3F0" stroke={COLORS.navy} strokeWidth="4" />
        </g>
        {/* padding strip */}
        <rect x="0" y="1180" width={W} height="30" fill={COLORS.coral} />
        <rect x="0" y="1210" width={W} height="16" fill={COLORS.navy} />
        {/* wooden floor */}
        <rect x="0" y="1226" width={W} height="694" fill="#E9D5AE" />
        <line x1="0" y1="1420" x2={W} y2="1420" stroke={COLORS.navy} strokeWidth="3" opacity="0.35" />
        <line x1="0" y1="1580" x2={W} y2="1580" stroke={COLORS.coral} strokeWidth="3" opacity="0.5" />

        {/* hoop */}
        <g transform="translate(820, 500)" opacity="0.9">
          <rect x="0" y="0" width="160" height="100" fill="#FFFFFF" stroke={COLORS.navy} strokeWidth="6" />
          <rect x="45" y="40" width="70" height="45" stroke={COLORS.coral} strokeWidth="4" fill="none" />
          <circle cx="80" cy="140" r="34" stroke={COLORS.coral} strokeWidth="6" fill="none" />
        </g>
      </svg>

      {/* coach (from back) */}
      <div
        style={{
          position: "absolute",
          left: 140,
          top: 1120,
          transform: `translateY(${coachIn}px)`,
          opacity: enter,
        }}
      >
        <Character variant="coach-back" size={620} outfit={illu.ink} />
      </div>

      {/* kid running in */}
      <div
        style={{
          position: "absolute",
          left: kidX,
          top: 1200 + kidBob,
        }}
      >
        <Character variant="kid-run" size={480} outfit={illu.coralDeep} />
      </div>

      {/* Caption 1 */}
      <div
        style={{
          position: "absolute",
          top: 100,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 78,
          color: COLORS.navy,
          letterSpacing: -1.5,
          lineHeight: 1.05,
          opacity: cap1,
          transform: `translateY(${interpolate(cap1, [0, 1], [30, 0])}px)`,
          padding: "0 60px",
        }}
      >
        Een plek waar
        <br />
        je kind <span style={{ color: COLORS.coral }}>zichzelf</span> mag zijn.
      </div>

      {/* Caption 2 (later) */}
      <div
        style={{
          position: "absolute",
          bottom: 130,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontWeight: 700,
          fontSize: 44,
          color: COLORS.cream,
          background: COLORS.navy,
          margin: "0 80px",
          padding: "22px 30px",
          borderRadius: 16,
          opacity: cap2,
          transform: `translateY(${interpolate(cap2, [0, 1], [30, 0])}px)`,
        }}
      >
        Vaste coaches. Islamitisch gefundeerd.
      </div>
    </AbsoluteFill>
  );
};
