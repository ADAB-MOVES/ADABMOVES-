import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";
import { Character } from "../../illustrations/Character";
import { illu } from "../../illustrations/tokens";

const W = 1080;
const H = 1920;

const Frame: React.FC<{ label: string; sub: string; children: React.ReactNode }> = ({ label, sub, children }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const zoom = spring({ frame: f, fps, config: { damping: 14, stiffness: 160 } });
  const scale = interpolate(zoom, [0, 1], [1.06, 1]);
  const pillIn = spring({ frame: f - 4, fps, config: { damping: 18 } });
  const subIn = spring({ frame: f - 12, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill style={{ background: COLORS.cream, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: `linear-gradient(180deg, #F5EAD3 0%, ${COLORS.cream} 60%)` }} />
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", inset: 0 }}>
        <line x1="0" y1="1640" x2={W} y2="1640" stroke={illu.ink} strokeWidth="3" opacity="0.25" />
      </svg>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${scale})`, transformOrigin: "center" }}>
        {children}
      </div>
      {/* pill label top */}
      <div
        style={{
          position: "absolute",
          top: 180,
          left: 0,
          right: 0,
          display: "flex",
          justifyContent: "center",
          opacity: pillIn,
          transform: `translateY(${interpolate(pillIn, [0, 1], [-20, 0])}px)`,
        }}
      >
        <div
          style={{
            background: COLORS.coral,
            color: COLORS.cream,
            fontFamily: "Sora, sans-serif",
            fontWeight: 800,
            fontSize: 44,
            letterSpacing: 6,
            padding: "16px 40px",
            borderRadius: 40,
          }}
        >
          {label}
        </div>
      </div>
      {/* sub headline */}
      <div
        style={{
          position: "absolute",
          top: 300,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 84,
          color: COLORS.navy,
          letterSpacing: -1.5,
          padding: "0 70px",
          lineHeight: 1.05,
          opacity: subIn,
          transform: `translateY(${interpolate(subIn, [0, 1], [20, 0])}px)`,
        }}
      >
        {sub}
      </div>
    </AbsoluteFill>
  );
};

const Basket: React.FC<{ dur: number }> = ({ dur }) => {
  const f = useCurrentFrame();
  const ballY = 500 + Math.sin((f / dur) * Math.PI) * -120;
  return (
    <Frame label="BASKETBAL" sub="Discipline in beweging.">
      <div style={{ position: "absolute", left: 220, top: 900 }}>
        <Character variant="kid-basket" size={620} outfit={illu.ink} />
      </div>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", inset: 0 }}>
        <g transform="translate(820, 700)" opacity="0.9">
          <rect x="0" y="0" width="160" height="100" fill="#FFFFFF" stroke={COLORS.navy} strokeWidth="6" />
          <rect x="45" y="40" width="70" height="45" stroke={COLORS.coral} strokeWidth="4" fill="none" />
          <circle cx="80" cy="140" r="34" stroke={COLORS.coral} strokeWidth="6" fill="none" />
        </g>
        <circle cx="800" cy={ballY + 400} r="34" fill={illu.coralDeep} stroke={illu.ink} strokeWidth="3" />
      </svg>
    </Frame>
  );
};

const Voetbal: React.FC<{ dur: number }> = ({ dur }) => {
  const f = useCurrentFrame();
  const t = Math.min(1, f / dur);
  const ballX = interpolate(t, [0, 1], [500, 900]);
  const ballY = 1450 - Math.abs(Math.sin(t * Math.PI * 1.4)) * 260;
  const spin = (f * 18) % 360;
  return (
    <Frame label="VOETBAL" sub="Samenspel & respect.">
      <div style={{ position: "absolute", left: 120, top: 940 }}>
        <Character variant="kid-kick" size={620} outfit={illu.coralDeep} />
      </div>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", inset: 0 }}>
        <g transform={`translate(${ballX}, ${ballY}) rotate(${spin})`}>
          <circle r="54" fill={illu.cream} stroke={illu.ink} strokeWidth="3" />
          <polygon points="0,-24 22,-8 14,20 -14,20 -22,-8" fill={illu.ink} />
        </g>
      </svg>
    </Frame>
  );
};

const Boog: React.FC<{ dur: number }> = ({ dur }) => {
  const f = useCurrentFrame();
  const released = f > dur * 0.5;
  const arrowX = released ? interpolate(f, [dur * 0.5, dur], [500, 940]) : 500;
  const arrowOpacity = released ? 1 : 0;
  return (
    <Frame label="BOOGSCHIETEN" sub="Focus & geduld.">
      <div style={{ position: "absolute", left: 80, top: 920 }}>
        <Character variant="kid-archery" size={620} outfit={illu.ink} />
      </div>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", inset: 0 }}>
        {/* target */}
        <g transform="translate(860, 1180)">
          <circle r="90" fill={COLORS.cream} stroke={illu.ink} strokeWidth="5" />
          <circle r="65" fill="none" stroke={COLORS.coral} strokeWidth="5" />
          <circle r="40" fill="none" stroke={illu.ink} strokeWidth="5" />
          <circle r="18" fill={COLORS.coral} />
        </g>
        <g transform={`translate(${arrowX}, 1180)`} opacity={arrowOpacity}>
          <line x1="0" y1="0" x2="120" y2="0" stroke={illu.ink} strokeWidth="5" />
          <polygon points="120,-12 144,0 120,12" fill={COLORS.coral} />
        </g>
      </svg>
    </Frame>
  );
};

export const MultiSport: React.FC<{ duration: number }> = ({ duration }) => {
  const cut = Math.floor(duration / 3);
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={cut}>
        <Basket dur={cut} />
      </Sequence>
      <Sequence from={cut} durationInFrames={cut}>
        <Voetbal dur={cut} />
      </Sequence>
      <Sequence from={cut * 2} durationInFrames={duration - cut * 2}>
        <Boog dur={cut} />
      </Sequence>
    </AbsoluteFill>
  );
};
