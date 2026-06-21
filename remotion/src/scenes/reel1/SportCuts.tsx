import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

const W = 1080;
const H = 1920;

const Frame: React.FC<{ kicker: string; children: React.ReactNode }> = ({ kicker, children }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const zoom = spring({ frame: f, fps, config: { damping: 14, stiffness: 160 } });
  const scale = interpolate(zoom, [0, 1], [1.08, 1]);
  const kickerIn = spring({ frame: f - 4, fps, config: { damping: 18 } });
  return (
    <AbsoluteFill style={{ background: COLORS.cream, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${scale})`, transformOrigin: "center" }}>
        {children}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 120,
          right: 60,
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 56,
          color: COLORS.cream,
          background: COLORS.coral,
          padding: "12px 28px",
          letterSpacing: 4,
          opacity: kickerIn,
          transform: `translateX(${interpolate(kickerIn, [0, 1], [40, 0])}px)`,
        }}
      >
        {kicker}
      </div>
    </AbsoluteFill>
  );
};

// Generic kid body
const KidBody: React.FC<{ x: number; y: number; armL?: number; armR?: number; legL?: number; legR?: number; kufi?: boolean }> = ({
  x,
  y,
  armL = 20,
  armR = -20,
  legL = -10,
  legR = 10,
  kufi = false,
}) => (
  <g transform={`translate(${x}, ${y})`}>
    {/* legs (joggers) */}
    <g transform={`rotate(${legL})`}>
      <rect x="-40" y="0" width="38" height="200" fill={COLORS.navy} rx="6" />
    </g>
    <g transform={`rotate(${legR})`}>
      <rect x="2" y="0" width="38" height="200" fill={COLORS.navy} rx="6" />
    </g>
    {/* torso */}
    <rect x="-60" y="-140" width="120" height="160" fill={COLORS.coral} rx="14" />
    <rect x="-60" y="-90" width="120" height="14" fill={COLORS.navy} />
    {/* logo on chest */}
    <rect x="-30" y="-120" width="60" height="22" rx="3" fill={COLORS.cream} />
    {/* arms */}
    <g transform={`translate(-60, -120) rotate(${armL})`}>
      <rect x="-22" y="0" width="32" height="140" fill={COLORS.coral} rx="6" />
    </g>
    <g transform={`translate(60, -120) rotate(${armR})`}>
      <rect x="-10" y="0" width="32" height="140" fill={COLORS.coral} rx="6" />
    </g>
    {/* head */}
    <circle cx="0" cy="-200" r="60" fill="#E5B58A" />
    {/* hair / kufi */}
    {kufi ? (
      <path d="M -55 -220 C -55 -270, 55 -270, 55 -220 L 55 -200 L -55 -200 Z" fill={COLORS.navy} />
    ) : (
      <path d="M -55 -230 C -55 -275, 55 -275, 55 -230 L 55 -205 L -55 -205 Z" fill={COLORS.ink} opacity="0.85" />
    )}
    {/* mouth only */}
    <path d="M -14 -180 Q 0 -168, 14 -180" stroke={COLORS.ink} strokeWidth="3" fill="none" strokeLinecap="round" />
  </g>
);

// 1) VOETBAL
const Voetbal: React.FC<{ dur: number }> = ({ dur }) => {
  const f = useCurrentFrame();
  const kick = Math.min(1, f / (dur * 0.5));
  const ballX = interpolate(kick, [0, 1], [560, 950]);
  const ballY = interpolate(kick, [0, 0.5, 1], [1500, 1100, 1300]);
  return (
    <Frame kicker="VOETBAL">
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        <line x1="0" y1="1700" x2={W} y2="1700" stroke={COLORS.navy} strokeWidth="3" opacity="0.3" />
        <KidBody x={420} y={1500} legL={-10} legR={40 + kick * 50} armL={-30} armR={30} />
        <g transform={`translate(${ballX}, ${ballY})`}>
          <circle r="40" fill="#FFF" stroke={COLORS.ink} strokeWidth="4" />
          <polygon points="0,-22 19,-7 12,16 -12,16 -19,-7" fill={COLORS.ink} />
        </g>
      </svg>
    </Frame>
  );
};

// 2) KICKBOKS
const Kickboks: React.FC<{ dur: number }> = ({ dur }) => {
  const f = useCurrentFrame();
  const punch = Math.sin((f / dur) * Math.PI);
  const padX = 760 + punch * -40;
  return (
    <Frame kicker="KICKBOKS">
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        <line x1="0" y1="1700" x2={W} y2="1700" stroke={COLORS.navy} strokeWidth="3" opacity="0.3" />
        <KidBody x={380} y={1500} armR={70 + punch * 20} armL={40} kufi />
        {/* glove */}
        <circle cx={520 + punch * 100} cy={1320} r="40" fill={COLORS.coral} stroke={COLORS.ink} strokeWidth="3" />
        {/* pad */}
        <g transform={`translate(${padX}, 1300)`}>
          <rect x="-50" y="-90" width="100" height="180" rx="14" fill={COLORS.navy} stroke={COLORS.ink} strokeWidth="3" />
          <circle r="34" fill={COLORS.coral} />
        </g>
        {punch > 0.85 && (
          <g transform={`translate(${padX - 50}, 1300)`}>
            <polygon
              points="0,-50 14,-14 50,-10 18,10 28,46 0,22 -28,46 -18,10 -50,-10 -14,-14"
              fill={COLORS.coral}
            />
          </g>
        )}
      </svg>
    </Frame>
  );
};

// 3) BOOGSCHIETEN
const Boog: React.FC<{ dur: number }> = ({ dur }) => {
  const f = useCurrentFrame();
  const draw = Math.min(1, f / (dur * 0.6));
  const released = f > dur * 0.6;
  const arrowX = released ? interpolate(f, [dur * 0.6, dur], [460, 950]) : 460 - draw * 30;
  return (
    <Frame kicker="BOOGSCHIETEN">
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        <line x1="0" y1="1700" x2={W} y2="1700" stroke={COLORS.navy} strokeWidth="3" opacity="0.3" />
        {/* target */}
        <g transform="translate(900, 900)">
          <circle r="120" fill={COLORS.cream} stroke={COLORS.navy} strokeWidth="6" />
          <circle r="80" fill={COLORS.cream} stroke={COLORS.navy} strokeWidth="4" />
          <circle r="40" fill={COLORS.coral} />
        </g>
        <KidBody x={300} y={1500} armL={-90} armR={-90} />
        {/* bow */}
        <g transform="translate(380, 1300)">
          <path d="M 0 -100 Q 90 0, 0 100" stroke={COLORS.navy} strokeWidth="6" fill="none" />
          <line x1="0" y1="-100" x2={50 + draw * 30} y2="0" stroke={COLORS.ink} strokeWidth="2" />
          <line x1="0" y1="100" x2={50 + draw * 30} y2="0" stroke={COLORS.ink} strokeWidth="2" />
        </g>
        {/* arrow */}
        <g transform={`translate(${arrowX}, 1300)`}>
          <line x1="0" y1="0" x2="80" y2="0" stroke={COLORS.ink} strokeWidth="4" />
          <polygon points="80,-8 100,0 80,8" fill={COLORS.coral} />
        </g>
      </svg>
    </Frame>
  );
};

// 4) HIGH-FIVE
const HighFive: React.FC<{ dur: number }> = ({ dur }) => {
  const f = useCurrentFrame();
  const meet = Math.min(1, f / (dur * 0.5));
  const gap = interpolate(meet, [0, 1], [120, 0]);
  const impact = f > dur * 0.5;
  return (
    <Frame kicker="HIGH-FIVE">
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`}>
        <line x1="0" y1="1700" x2={W} y2="1700" stroke={COLORS.navy} strokeWidth="3" opacity="0.3" />
        {/* coach (left, bigger) */}
        <g transform="translate(280, 1500)">
          <rect x="-80" y="-180" width="160" height="220" rx="14" fill={COLORS.navy} />
          <rect x="-80" y="-140" width="160" height="14" fill={COLORS.coral} />
          <circle cx="0" cy="-220" r="70" fill="#E5B58A" />
          <path d="M -60 -210 C -70 -150, -50 -110, 0 -110 C 50 -110, 70 -150, 60 -210 Z" fill={COLORS.ink} />
          {/* raised arm */}
          <g transform={`translate(60, -160) rotate(-70)`}>
            <rect x="-15" y="0" width="32" height="160" fill={COLORS.navy} rx="6" />
            <circle cx="0" cy={170 + gap / 2} r="32" fill="#E5B58A" />
          </g>
        </g>
        {/* kid (right) */}
        <g transform="translate(780, 1520)">
          <KidBody x={0} y={0} armL={-120} armR={-20} kufi />
        </g>
        {/* impact star */}
        {impact && (
          <g transform="translate(540, 1100)">
            <polygon
              points="0,-90 22,-22 90,-18 32,18 50,82 0,40 -50,82 -32,18 -90,-18 -22,-22"
              fill={COLORS.coral}
              opacity="0.9"
            />
            <text
              x="0"
              y="14"
              textAnchor="middle"
              fontFamily="Sora, sans-serif"
              fontWeight="800"
              fontSize="42"
              fill={COLORS.cream}
            >
              !
            </text>
          </g>
        )}
      </svg>
    </Frame>
  );
};

export const SportCuts: React.FC<{ duration: number }> = ({ duration }) => {
  const cut = Math.floor(duration / 4);
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={cut}>
        <Voetbal dur={cut} />
      </Sequence>
      <Sequence from={cut} durationInFrames={cut}>
        <Kickboks dur={cut} />
      </Sequence>
      <Sequence from={cut * 2} durationInFrames={cut}>
        <Boog dur={cut} />
      </Sequence>
      <Sequence from={cut * 3} durationInFrames={duration - cut * 3}>
        <HighFive dur={cut} />
      </Sequence>
    </AbsoluteFill>
  );
};
