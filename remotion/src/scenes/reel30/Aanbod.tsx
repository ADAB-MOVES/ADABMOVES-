import { AbsoluteFill, Img, Sequence, staticFile, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";
import { COLORS } from "../../theme";

const sporen = [
  {
    n: "01",
    title: "Scholen",
    sub: "Sport & begeleiding op scholen.",
    img: "reel30/intro-gym.jpg",
    origin: "50% 55%",
  },
  {
    n: "02",
    title: "Multisport",
    sub: "Wekelijks voor kinderen (7–15 jaar).",
    img: "reel30/flash-hug.jpg",
    origin: "50% 35%",
  },
  {
    n: "03",
    title: "ADAB Day",
    sub: "Sportdagen & events op maat.",
    img: "reel30/flash-coach.jpg",
    origin: "40% 30%",
  },
];

const Spoor: React.FC<{ n: string; title: string; sub: string; img: string; origin: string; dur: number; showHeader: boolean }> = ({
  n,
  title,
  sub,
  img,
  origin,
  dur,
  showHeader,
}) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const kb = interpolate(f, [0, dur], [1.06, 1.14]);
  const fadeIn = interpolate(f, [0, 6], [0, 1], { extrapolateRight: "clamp" });
  const fadeOut = interpolate(f, [dur - 6, dur], [1, 0], { extrapolateLeft: "clamp" });
  const chip = spring({ frame: f - 2, fps, config: { damping: 18 } });
  const t = spring({ frame: f - 10, fps, config: { damping: 16, stiffness: 180 } });
  const s = spring({ frame: f - 18, fps, config: { damping: 20 } });
  const header = spring({ frame: f - 4, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill style={{ background: COLORS.navy, opacity: fadeIn * fadeOut, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, transform: `scale(${kb})`, transformOrigin: origin }}>
        <Img src={staticFile(img)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(31,34,64,0.55) 0%, rgba(31,34,64,0.15) 30%, rgba(31,34,64,0.95) 100%)",
        }}
      />

      {showHeader && (
        <div
          style={{
            position: "absolute",
            top: 90,
            left: 60,
            right: 60,
            fontFamily: "Plus Jakarta Sans, sans-serif",
            fontWeight: 800,
            fontSize: 30,
            letterSpacing: 3,
            color: COLORS.coral,
            textTransform: "uppercase",
            opacity: header,
            transform: `translateY(${interpolate(header, [0, 1], [-10, 0])}px)`,
          }}
        >
          Voor scholen, ouders en de gemeenschap
        </div>
      )}

      <div
        style={{
          position: "absolute",
          top: 180,
          left: 60,
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 200,
          color: COLORS.coral,
          lineHeight: 1,
          letterSpacing: -6,
          opacity: chip * 0.9,
          textShadow: "0 6px 30px rgba(0,0,0,0.4)",
        }}
      >
        {n}
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 260,
          left: 60,
          right: 60,
          fontFamily: "Sora, sans-serif",
          fontWeight: 800,
          fontSize: 118,
          lineHeight: 1,
          letterSpacing: -3,
          color: COLORS.cream,
          textShadow: "0 4px 24px rgba(0,0,0,0.55)",
          opacity: t,
          transform: `translateY(${interpolate(t, [0, 1], [30, 0])}px)`,
        }}
      >
        {title}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 160,
          left: 60,
          right: 60,
          fontFamily: "Plus Jakarta Sans, sans-serif",
          fontWeight: 500,
          fontSize: 40,
          color: COLORS.cream,
          opacity: s * 0.9,
          transform: `translateY(${interpolate(s, [0, 1], [20, 0])}px)`,
          textShadow: "0 2px 16px rgba(0,0,0,0.7)",
        }}
      >
        {sub}
      </div>
    </AbsoluteFill>
  );
};

export const Aanbod: React.FC<{ duration: number }> = ({ duration }) => {
  const each = Math.floor(duration / 3);
  return (
    <AbsoluteFill>
      {sporen.map((sp, i) => (
        <Sequence key={sp.n} from={i * each} durationInFrames={i === 2 ? duration - each * 2 : each}>
          <Spoor {...sp} dur={i === 2 ? duration - each * 2 : each} showHeader={i === 0} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
