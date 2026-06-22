import { AbsoluteFill, Sequence, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";
import { Character } from "../../illustrations/Character";
import { SportIcon } from "../../illustrations/SportIcon";
import { illu } from "../../illustrations/tokens";

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
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(180deg, #EFEBDD 0%, ${COLORS.cream} 55%)`,
        }}
      />
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", inset: 0 }}>
        <line x1="0" y1="1640" x2={W} y2="1640" stroke={illu.ink} strokeWidth="3" opacity="0.25" />
        <line x1="0" y1="1660" x2={W} y2="1660" stroke={illu.ink} strokeWidth="1" opacity="0.18" />
      </svg>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${scale})`, transformOrigin: "center" }}>
        {children}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 140,
          right: 60,
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 56,
          color: COLORS.cream,
          background: COLORS.coral,
          padding: "14px 30px",
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

const KidStage: React.FC<{ variant: any; outfit?: string; size?: number; left: number; top?: number; rotate?: number }> = ({
  variant,
  outfit,
  size = 620,
  left,
  top = 900,
  rotate = 0,
}) => (
  <div style={{ position: "absolute", left, top, transform: `rotate(${rotate}deg)` }}>
    <Character variant={variant} outfit={outfit} size={size} />
  </div>
);

// 1) VOETBAL
const Voetbal: React.FC<{ dur: number }> = ({ dur }) => {
  const f = useCurrentFrame();
  const t = Math.min(1, f / dur);
  const ballX = interpolate(t, [0, 1], [560, 1000]);
  const ballY = 1500 - Math.abs(Math.sin(t * Math.PI * 1.2)) * 280;
  const spin = (f * 14) % 360;
  return (
    <Frame kicker="VOETBAL">
      <KidStage variant="kid-ball" left={120} top={920} size={640} />
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", inset: 0 }}>
        <g transform={`translate(${ballX}, ${ballY}) rotate(${spin})`}>
          <circle r="56" fill={illu.cream} stroke={illu.ink} strokeWidth="3" />
          <polygon points="0,-26 22,-8 14,20 -14,20 -22,-8" fill={illu.ink} />
        </g>
      </svg>
    </Frame>
  );
};

// 2) KICKBOKS
const Kickboks: React.FC<{ dur: number }> = ({ dur }) => {
  const f = useCurrentFrame();
  const punch = Math.sin((f / dur) * Math.PI);
  const padX = 720 - punch * 60;
  const padScale = 1 + punch * 0.08;
  return (
    <Frame kicker="KICKBOKS">
      <KidStage variant="kid-kick" outfit={illu.coralDeep} left={100} top={920} size={640} />
      {/* trainer pad icon as target */}
      <div
        style={{
          position: "absolute",
          left: padX,
          top: 1180,
          transform: `scale(${padScale})`,
          transformOrigin: "center",
        }}
      >
        <SportIcon sport="kickboks" size={260} tone="coral" />
      </div>
      {punch > 0.85 && (
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", inset: 0 }}>
          <g transform={`translate(${padX + 130}, 1310)`}>
            <polygon
              points="0,-60 18,-18 60,-14 22,12 36,56 0,28 -36,56 -22,12 -60,-14 -18,-18"
              fill={COLORS.coral}
            />
          </g>
        </svg>
      )}
    </Frame>
  );
};

// 3) BOOGSCHIETEN
const Boog: React.FC<{ dur: number }> = ({ dur }) => {
  const f = useCurrentFrame();
  const released = f > dur * 0.55;
  const arrowX = released ? interpolate(f, [dur * 0.55, dur], [500, 980]) : 500;
  const arrowOpacity = released ? 1 : 0;
  return (
    <Frame kicker="BOOGSCHIETEN">
      <KidStage variant="kid-archery" left={80} top={920} size={620} />
      {/* target */}
      <div style={{ position: "absolute", right: 80, top: 720 }}>
        <SportIcon sport="archery" size={320} tone="coral" />
      </div>
      <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", inset: 0 }}>
        <g transform={`translate(${arrowX}, 1100)`} opacity={arrowOpacity}>
          <line x1="0" y1="0" x2="120" y2="0" stroke={illu.ink} strokeWidth="5" />
          <polygon points="120,-12 144,0 120,12" fill={COLORS.coral} />
          <polygon points="0,-10 -16,0 0,10" fill={illu.ink} />
        </g>
      </svg>
    </Frame>
  );
};

// 4) HIGH-FIVE
const HighFive: React.FC<{ dur: number }> = ({ dur }) => {
  const f = useCurrentFrame();
  const t = Math.min(1, f / (dur * 0.55));
  const kidLift = interpolate(t, [0, 1], [0, -120]);
  const impact = f > dur * 0.55 && f < dur * 0.8;
  return (
    <Frame kicker="HIGH-FIVE">
      {/* coach left, pointing arm acts as raised hand */}
      <KidStage variant="coach-point" outfit={illu.ink} left={20} top={780} size={760} />
      {/* kid right jumping up */}
      <div style={{ position: "absolute", right: 60, top: 900, transform: `translateY(${kidLift}px)` }}>
        <Character variant="kid-jump" outfit={illu.coralDeep} size={560} />
      </div>
      {impact && (
        <svg width={W} height={H} viewBox={`0 0 ${W} ${H}`} style={{ position: "absolute", inset: 0 }}>
          <g transform="translate(620, 1020)">
            <polygon
              points="0,-100 24,-24 100,-20 36,20 54,90 0,46 -54,90 -36,20 -100,-20 -24,-24"
              fill={COLORS.coral}
              opacity="0.95"
            />
            <text
              x="0"
              y="18"
              textAnchor="middle"
              fontFamily="Sora, sans-serif"
              fontWeight="800"
              fontSize="56"
              fill={COLORS.cream}
            >
              !
            </text>
          </g>
        </svg>
      )}
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
