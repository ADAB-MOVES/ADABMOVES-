import {
  AbsoluteFill,
  Img,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { COLORS } from "../theme";

export const Intro: React.FC<{ duration: number }> = ({ duration }) => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Ken Burns push-in on hero
  const t = interpolate(f, [0, duration], [0, 1], { extrapolateRight: "clamp" });
  const scale = interpolate(t, [0, 1], [1.08, 1.22]);

  const logoIn = spring({ frame: f, fps, config: { damping: 18 } });
  const eyebrowIn = spring({ frame: f - 14, fps, config: { damping: 18 } });
  const titleIn = spring({ frame: f - 22, fps, config: { damping: 16 } });
  const underline = interpolate(f, [38, 60], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.ink, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `scale(${scale})`,
        }}
      >
        <Img
          src={staticFile("hero.jpg")}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      {/* Dark wash */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(15,16,36,0.55) 0%, rgba(15,16,36,0.2) 35%, rgba(15,16,36,0.78) 100%)",
        }}
      />

      {/* Logo top-left */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 80,
          opacity: logoIn,
          transform: `translateY(${interpolate(logoIn, [0, 1], [-20, 0])}px)`,
        }}
      >
        <Img
          src={staticFile("logo.png")}
          style={{ height: 160, width: "auto", display: "block" }}
        />
      </div>

      {/* Title block bottom-left */}
      <div
        style={{
          position: "absolute",
          left: 110,
          bottom: 130,
          maxWidth: 1500,
        }}
      >
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            color: COLORS.coral,
            fontSize: 26,
            letterSpacing: 8,
            textTransform: "uppercase",
            opacity: eyebrowIn,
            transform: `translateY(${interpolate(eyebrowIn, [0, 1], [16, 0])}px)`,
            marginBottom: 22,
          }}
        >
          Multisport met betekenis
        </div>
        <div
          style={{
            fontFamily: "Anton, sans-serif",
            fontSize: 180,
            color: "#FBF7EE",
            lineHeight: 0.92,
            textTransform: "uppercase",
            opacity: titleIn,
            transform: `translateY(${interpolate(titleIn, [0, 1], [30, 0])}px)`,
          }}
        >
          Bewegen
          <br />
          met betekenis
        </div>
        <div
          style={{
            marginTop: 26,
            height: 6,
            width: 360,
            background: COLORS.coral,
            borderRadius: 6,
            transformOrigin: "left center",
            transform: `scaleX(${underline})`,
          }}
        />
      </div>
    </AbsoluteFill>
  );
};

export const Outro: React.FC<{ duration: number }> = () => {
  const f = useCurrentFrame();
  const { fps } = useVideoConfig();
  const logoIn = spring({ frame: f, fps, config: { damping: 16 } });
  const lineIn = spring({ frame: f - 18, fps, config: { damping: 18 } });
  const urlIn = spring({ frame: f - 32, fps, config: { damping: 20 } });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at center, ${COLORS.cream} 0%, ${COLORS.warmBeige} 100%)`,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Img
          src={staticFile("logo.png")}
          style={{
            height: 380,
            width: "auto",
            opacity: logoIn,
            transform: `scale(${interpolate(logoIn, [0, 1], [0.85, 1])})`,
          }}
        />
        <div
          style={{
            marginTop: 28,
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            fontSize: 34,
            letterSpacing: 10,
            color: COLORS.coral,
            opacity: lineIn,
            textTransform: "uppercase",
            transform: `translateY(${interpolate(lineIn, [0, 1], [14, 0])}px)`,
          }}
        >
          Bewegen met betekenis
        </div>
        <div
          style={{
            marginTop: 36,
            fontFamily: "Anton, sans-serif",
            fontSize: 56,
            color: COLORS.navy,
            opacity: urlIn,
            letterSpacing: 2,
          }}
        >
          adabmoves.nl
        </div>
      </div>
    </AbsoluteFill>
  );
};
