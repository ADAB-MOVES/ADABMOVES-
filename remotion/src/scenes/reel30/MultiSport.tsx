import { AbsoluteFill, Img, Sequence, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

const Frame: React.FC<{ label: string; sub: string; image: string; dur: number }> = ({ label, sub, image, dur }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const kb = interpolate(f, [0, dur], [1.08, 1.2]);
  const pillIn = spring({ frame: f - 2, fps, config: { damping: 18 } });
  const subIn = spring({ frame: f - 10, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill style={{ background: COLORS.navy, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${kb})`, transformOrigin: "50% 50%" }}>
        <Img src={staticFile(image)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(31,34,64,0.7) 0%, rgba(31,34,64,0.05) 35%, rgba(31,34,64,0.05) 60%, rgba(31,34,64,0.7) 100%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 170,
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

      <div
        style={{
          position: "absolute",
          bottom: 180,
          left: 0,
          right: 0,
          textAlign: "center",
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 84,
          color: COLORS.cream,
          letterSpacing: -1.5,
          padding: "0 70px",
          lineHeight: 1.05,
          textShadow: "0 4px 24px rgba(0,0,0,0.55)",
          opacity: subIn,
          transform: `translateY(${interpolate(subIn, [0, 1], [20, 0])}px)`,
        }}
      >
        {sub}
      </div>
    </AbsoluteFill>
  );
};

export const MultiSport: React.FC<{ duration: number }> = ({ duration }) => {
  const cut = Math.floor(duration / 3);
  return (
    <AbsoluteFill>
      <Sequence from={0} durationInFrames={cut}>
        <Frame label="BASKETBAL" sub="Discipline in beweging." image="reel30/sport-basket.jpg" dur={cut} />
      </Sequence>
      <Sequence from={cut} durationInFrames={cut}>
        <Frame label="VOETBAL" sub="Samenspel & respect." image="reel30/sport-voetbal.jpg" dur={cut} />
      </Sequence>
      <Sequence from={cut * 2} durationInFrames={duration - cut * 2}>
        <Frame label="BOOGSCHIETEN" sub="Focus & geduld." image="reel30/sport-boog.jpg" dur={duration - cut * 2} />
      </Sequence>
    </AbsoluteFill>
  );
};
