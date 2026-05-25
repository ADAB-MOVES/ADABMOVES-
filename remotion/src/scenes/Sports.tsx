import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../theme";
import { GymBg } from "../components/GymBg";
import { Kid, pickVariant } from "../components/Kid";

export const Football: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const variant = pickVariant(1);
  // kick cycle: wind-up then snap
  const cycle = (f % 60) / 60; // 2x per scene
  const kick = Math.sin(cycle * Math.PI * 2);
  const ballX = interpolate((f % 60), [25, 55], [0, 900], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const ballY = interpolate((f % 60), [25, 40, 55], [0, -180, 60], { extrapolateLeft: "clamp", extrapolateRight: "clamp" });
  const ballSpin = (f * 18) % 360;
  const enter = spring({ frame: f, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill>
      <GymBg />
      <svg width="100%" height="100%" viewBox="0 0 1920 1080" style={{ position: "absolute", inset: 0 }}>
        <g transform={`translate(${interpolate(enter, [0, 1], [-200, 700])}, 760)`}>
          <Kid
            variant={variant}
            rotations={{
              leftLeg: -20,
              rightLeg: kick * 70,
              torso: kick * -8,
              leftArm: -kick * 30,
              rightArm: kick * 35,
            }}
          />
        </g>
        {/* ball */}
        <g transform={`translate(${870 + ballX}, ${940 + ballY}) rotate(${ballSpin})`}>
          <circle r="34" fill="#FFFFFF" stroke={COLORS.ink} strokeWidth="3" />
          <polygon points="0,-22 19,-7 12,16 -12,16 -19,-7" fill={COLORS.ink} />
        </g>
      </svg>
      <Label kicker="01 / VOETBAL" title="Techniek & samenspel" />
    </AbsoluteFill>
  );
};

export const Kickboxing: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const variant = pickVariant(2);
  const cycle = (f % 50) / 50;
  const punch = Math.sin(cycle * Math.PI * 2);
  const padShake = punch > 0.6 ? Math.sin(f * 0.8) * 6 : 0;
  return (
    <AbsoluteFill>
      <GymBg variant="ring" />
      <svg width="100%" height="100%" viewBox="0 0 1920 1080" style={{ position: "absolute", inset: 0 }}>
        <g transform="translate(700, 760)">
          <Kid
            variant={variant}
            rotations={{
              rightArm: 90 + punch * 25,
              leftArm: 80 - punch * 10,
              rightLeg: punch * 15,
              torso: punch * 6,
            }}
          />
          {/* boxing gloves */}
          <circle cx={70 + punch * 80} cy={-30} r="26" fill={COLORS.coral} stroke={COLORS.ink} strokeWidth="3" />
          <circle cx={-30} cy={-10} r="26" fill={COLORS.coral} stroke={COLORS.ink} strokeWidth="3" />
        </g>
        {/* focus pad */}
        <g transform={`translate(${1100 + padShake}, 700)`}>
          <rect x="-55" y="-80" width="110" height="160" rx="14" fill={COLORS.navy} stroke={COLORS.ink} strokeWidth="3" />
          <circle r="36" fill={COLORS.coral} />
        </g>
        {/* impact */}
        {punch > 0.85 && (
          <g transform={`translate(1050, 690)`}>
            <polygon
              points="0,-50 14,-14 50,-10 18,10 28,46 0,22 -28,46 -18,10 -50,-10 -14,-14"
              fill={COLORS.coral}
              opacity="0.9"
            />
          </g>
        )}
      </svg>
      <Label kicker="02 / KICKBOKSEN" title="Focus & weerbaarheid" />
    </AbsoluteFill>
  );
};

export const Basketball: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const variant = pickVariant(3);
  // dribble: ball bounces, arm follows
  const dribble = Math.abs(Math.sin((f / 12) * Math.PI));
  const ballY = interpolate(dribble, [0, 1], [200, -20]);
  const armRot = interpolate(dribble, [0, 1], [40, 10]);
  return (
    <AbsoluteFill>
      <GymBg variant="hoop" />
      <svg width="100%" height="100%" viewBox="0 0 1920 1080" style={{ position: "absolute", inset: 0 }}>
        <g transform="translate(800, 760)">
          <Kid
            variant={variant}
            rotations={{
              rightArm: armRot,
              leftArm: -10,
              leftLeg: -8,
              rightLeg: 8,
            }}
          />
        </g>
        {/* ball */}
        <g transform={`translate(900, ${720 + ballY})`}>
          <circle r="32" fill={COLORS.coral} stroke={COLORS.ink} strokeWidth="3" />
          <path d="M -30 0 L 30 0 M 0 -30 L 0 30 M -22 -22 Q 0 0 22 22 M 22 -22 Q 0 0 -22 22" stroke={COLORS.ink} strokeWidth="2" fill="none" />
        </g>
      </svg>
      <Label kicker="03 / BASKETBAL" title="Energie & focus" />
    </AbsoluteFill>
  );
};

export const Bootcamp: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const variant = pickVariant(0); // hat
  // jumping jack cycle
  const cycle = Math.sin((f / 18) * Math.PI);
  const arm = interpolate(cycle, [-1, 1], [-10, 170]);
  const leg = interpolate(cycle, [-1, 1], [-3, 30]);
  const jump = Math.max(0, cycle) * -40;
  return (
    <AbsoluteFill>
      <GymBg />
      <svg width="100%" height="100%" viewBox="0 0 1920 1080" style={{ position: "absolute", inset: 0 }}>
        <g transform="translate(960, 760)">
          <Kid
            variant={variant}
            rotations={{
              leftArm: -arm,
              rightArm: arm,
              leftLeg: -leg,
              rightLeg: leg,
              bodyY: jump,
            }}
          />
        </g>
      </svg>
      <Label kicker="04 / BOOTCAMP" title="Doorzettingsvermogen" />
    </AbsoluteFill>
  );
};

export const Fitness: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const variant = pickVariant(4);
  // squat cycle
  const cycle = Math.sin((f / 22) * Math.PI);
  const squat = interpolate(cycle, [-1, 1], [0, 80]);
  const armDown = interpolate(cycle, [-1, 1], [-160, -150]);
  return (
    <AbsoluteFill>
      <GymBg />
      <svg width="100%" height="100%" viewBox="0 0 1920 1080" style={{ position: "absolute", inset: 0 }}>
        <g transform={`translate(960, ${760 + squat})`}>
          <Kid
            variant={variant}
            rotations={{
              leftArm: armDown,
              rightArm: armDown,
              leftLeg: -10,
              rightLeg: 10,
            }}
          />
          {/* barbell overhead */}
          <g transform="translate(0, -340)">
            <rect x="-180" y="-8" width="360" height="14" rx="6" fill={COLORS.ink} />
            <rect x="-220" y="-26" width="40" height="50" rx="6" fill={COLORS.coral} />
            <rect x="180" y="-26" width="40" height="50" rx="6" fill={COLORS.coral} />
          </g>
        </g>
      </svg>
      <Label kicker="05 / FITNESS" title="Kracht & discipline" />
    </AbsoluteFill>
  );
};

const Label: React.FC<{ kicker: string; title: string }> = ({ kicker, title }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const enter = spring({ frame: f - 6, fps, config: { damping: 18 } });
  return (
    <div
      style={{
        position: "absolute",
        left: 80,
        bottom: 80,
        opacity: enter,
        transform: `translateX(${interpolate(enter, [0, 1], [-30, 0])}px)`,
      }}
    >
      <div
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 700,
          fontSize: 22,
          letterSpacing: 6,
          color: COLORS.coral,
          marginBottom: 12,
        }}
      >
        {kicker}
      </div>
      <div
        style={{
          fontFamily: "Anton, sans-serif",
          fontSize: 96,
          color: COLORS.navy,
          lineHeight: 1,
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        {title}
      </div>
    </div>
  );
};
