import { AbsoluteFill, Img, Sequence, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

const flashes = [
  { img: "reel30/flash-handshake.jpg", origin: "50% 40%" },
  { img: "reel30/flash-hug.jpg", origin: "50% 30%" },
  { img: "reel30/flash-help.jpg", origin: "50% 50%" },
  { img: "reel30/flash-coach.jpg", origin: "40% 30%" },
];

const Flash: React.FC<{ img: string; origin: string; dur: number }> = ({ img, origin, dur }) => {
  const f = useCurrentFrame();
  const scale = interpolate(f, [0, dur], [1.05, 1.15]);
  const fadeIn = interpolate(f, [0, 4], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(f, [dur - 4, dur], [1, 0], { extrapolateLeft: "clamp" });
  return (
    <AbsoluteFill style={{ background: COLORS.navy, opacity: fadeIn * fadeOut, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${scale})`, transformOrigin: origin }}>
        <Img src={staticFile(img)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
    </AbsoluteFill>
  );
};

export const KernFlashes: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 90f statement, then 4 flashes × 60f = 240f. Total 330f.
  const STATE = 90;
  const FLASH = 60;

  const statementIn = spring({ frame: f, fps, config: { damping: 18, stiffness: 150 } });
  const accent = spring({ frame: f - 20, fps, config: { damping: 14 } });
  const anchor = spring({ frame: f - 44, fps, config: { damping: 22 } });

  return (
    <AbsoluteFill>
      {/* 0 - 90: statement scene */}
      <Sequence from={0} durationInFrames={STATE}>
        <AbsoluteFill style={{ background: COLORS.navy }}>
          {/* soft coral glow accent */}
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
              top: 480,
              left: 0,
              right: 0,
              padding: "0 60px",
              textAlign: "left",
              fontFamily: "Sora, sans-serif",
              fontWeight: 800,
              fontSize: 92,
              lineHeight: 1.05,
              letterSpacing: -2,
              color: COLORS.cream,
              opacity: statementIn,
              transform: `translateY(${interpolate(statementIn, [0, 1], [30, 0])}px)`,
            }}
          >
            Een veilige plek
            <br />
            om te <span style={{ color: COLORS.coral, opacity: accent }}>sporten</span>
            <br />
            én <span style={{ color: COLORS.coral, opacity: accent }}>zichzelf</span> te zijn.
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 220,
              left: 60,
              right: 60,
              padding: "20px 28px",
              borderLeft: `6px solid ${COLORS.coral}`,
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontWeight: 700,
              fontSize: 42,
              color: COLORS.cream,
              lineHeight: 1.25,
              opacity: anchor,
              transform: `translateX(${interpolate(anchor, [0, 1], [-20, 0])}px)`,
            }}
          >
            Islamitisch gefundeerd.
          </div>
        </AbsoluteFill>
      </Sequence>

      {/* 4 flash cuts */}
      {flashes.map((flash, i) => (
        <Sequence key={i} from={STATE + i * FLASH} durationInFrames={FLASH}>
          <Flash img={flash.img} origin={flash.origin} dur={FLASH} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
