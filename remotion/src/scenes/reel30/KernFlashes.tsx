import { AbsoluteFill, Img, Sequence, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

const flashes = [
  { img: "reel30/flash-handshake.jpg", origin: "50% 40%", label: "Respect" },
  { img: "reel30/flash-hug.jpg", origin: "50% 30%", label: "Teamgeest" },
  { img: "reel30/flash-help.jpg", origin: "50% 50%", label: "Vertrouwen" },
  { img: "reel30/flash-coach.jpg", origin: "40% 30%", label: "Begeleiding" },
];

const Flash: React.FC<{ img: string; origin: string; label: string; dur: number }> = ({ img, origin, label, dur }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = interpolate(f, [0, dur], [1.05, 1.15]);
  const fadeIn = interpolate(f, [0, 4], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(f, [dur - 4, dur], [1, 0], { extrapolateLeft: "clamp" });
  const chip = spring({ frame: f - 3, fps, config: { damping: 14, stiffness: 220 } });
  return (
    <AbsoluteFill style={{ background: COLORS.navy, opacity: fadeIn * fadeOut, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${scale})`, transformOrigin: origin }}>
        <Img src={staticFile(img)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(31,34,64,0.25) 0%, transparent 40%, rgba(31,34,64,0.85) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 200,
          left: 60,
          padding: "18px 36px",
          border: `3px solid ${COLORS.coral}`,
          borderRadius: 999,
          background: "rgba(31,34,64,0.7)",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 54,
          color: COLORS.cream,
          letterSpacing: -0.5,
          opacity: chip,
          transform: `translateY(${interpolate(chip, [0, 1], [20, 0])}px) scale(${interpolate(chip, [0, 1], [0.9, 1])})`,
          boxShadow: "0 12px 40px rgba(0,0,0,0.45)",
        }}
      >
        {label}
      </div>
    </AbsoluteFill>
  );
};

export const KernFlashes: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 60f statement + 4 × 30f = 180f total
  const STATE = 60;
  const FLASH = 30;

  const statementIn = spring({ frame: f, fps, config: { damping: 18, stiffness: 160 } });
  const accent = spring({ frame: f - 18, fps, config: { damping: 14 } });

  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={STATE}>
        <AbsoluteFill style={{ background: COLORS.navy }}>
          <div
            style={{
              position: "absolute",
              top: -200,
              right: -200,
              width: 700,
              height: 700,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${COLORS.coral}55 0%, transparent 70%)`,
              filter: "blur(20px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 620,
              left: 0,
              right: 0,
              padding: "0 60px",
              textAlign: "left",
              fontFamily: "Sora, sans-serif",
              fontWeight: 800,
              fontSize: 84,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: COLORS.cream,
              opacity: statementIn,
              transform: `translateY(${interpolate(statementIn, [0, 1], [30, 0])}px)`,
            }}
          >
            Sport met <span style={{ color: COLORS.coral, opacity: accent }}>betekenis</span>.
            <br />
            Sport met <span style={{ color: COLORS.coral, opacity: accent }}>karakter</span>.
          </div>
        </AbsoluteFill>
      </Sequence>

      {flashes.map((flash, i) => (
        <Sequence key={i} from={STATE + i * FLASH} durationInFrames={FLASH}>
          <Flash img={flash.img} origin={flash.origin} label={flash.label} dur={FLASH} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
