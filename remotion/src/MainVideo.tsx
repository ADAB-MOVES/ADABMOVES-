import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring, staticFile, Img } from "remotion";
import { loadFont as loadHeading } from "@remotion/google-fonts/PlayfairDisplay";
import { loadFont as loadBody } from "@remotion/google-fonts/Inter";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";

const heading = loadHeading("normal", { weights: ["700", "900"], subsets: ["latin"] });
const body = loadBody("normal", { weights: ["400", "600", "800"], subsets: ["latin"] });

const NAVY = "#0b1a3a";
const NAVY_DEEP = "#050d1f";
const CREAM = "#f3ead8";
const GOLD = "#c9a84c";

// ---- Persistent background ----
const Backdrop: React.FC = () => {
  const frame = useCurrentFrame();
  const drift = Math.sin(frame / 60) * 30;
  return (
    <AbsoluteFill style={{
      background: `radial-gradient(circle at ${50 + drift}% ${40 - drift / 2}%, #142a55 0%, ${NAVY} 45%, ${NAVY_DEEP} 100%)`,
    }} />
  );
};

const FloatingDots: React.FC = () => {
  const frame = useCurrentFrame();
  const dots = Array.from({ length: 24 });
  return (
    <AbsoluteFill>
      {dots.map((_, i) => {
        const seed = i * 137.5;
        const x = (seed % 1920);
        const baseY = (seed * 1.7) % 1080;
        const y = baseY + Math.sin((frame + i * 10) / 40) * 25;
        const size = 2 + (i % 4);
        const op = 0.15 + (i % 5) * 0.08;
        return (
          <div key={i} style={{
            position: "absolute", left: x, top: y, width: size, height: size,
            borderRadius: "50%", background: GOLD, opacity: op,
          }} />
        );
      })}
    </AbsoluteFill>
  );
};

// ---- Scene 1: Hook ----
const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame, fps, config: { damping: 18 } });
  const y = interpolate(s, [0, 1], [40, 0]);
  const op = interpolate(frame, [0, 20, 75, 90], [0, 1, 1, 0]);
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", opacity: op }}>
      <div style={{
        fontFamily: body.fontFamily, color: GOLD, letterSpacing: 8,
        fontSize: 28, fontWeight: 600, transform: `translateY(${y}px)`,
        textTransform: "uppercase",
      }}>
        In een wereld vol prikkels
      </div>
      <div style={{
        fontFamily: heading.fontFamily, color: CREAM, fontWeight: 900,
        fontSize: 180, lineHeight: 1, marginTop: 30,
        transform: `translateY(${y * 1.5}px)`, textAlign: "center",
      }}>
        zoekt onze<br />jeugd richting.
      </div>
    </AbsoluteFill>
  );
};

// ---- Scene 2: Problem ----
const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const words = ["Schermen.", "Verleidingen.", "Eenzaamheid."];
  return (
    <AbsoluteFill style={{ justifyContent: "center", paddingLeft: 160 }}>
      {words.map((w, i) => {
        const start = i * 18;
        const op = interpolate(frame, [start, start + 12, 80, 100], [0, 1, 1, 0]);
        const x = interpolate(frame, [start, start + 20], [-60, 0], { extrapolateRight: "clamp" });
        return (
          <div key={i} style={{
            fontFamily: heading.fontFamily, fontWeight: 900,
            fontSize: 140, color: i === 2 ? GOLD : CREAM,
            opacity: op, transform: `translateX(${x}px)`, lineHeight: 1.05,
          }}>{w}</div>
        );
      })}
    </AbsoluteFill>
  );
};

// ---- Scene 3: Mission ----
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame, fps, config: { damping: 14 } });
  const scale = interpolate(s, [0, 1], [0.6, 1]);
  const op = interpolate(frame, [0, 20, 105, 120], [0, 1, 1, 0]);
  const sub = interpolate(frame, [25, 50], [0, 1], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", opacity: op }}>
      <div style={{
        fontFamily: body.fontFamily, color: GOLD, fontSize: 24,
        letterSpacing: 12, textTransform: "uppercase", marginBottom: 40,
        opacity: sub,
      }}>Wij geloven in een ander pad</div>
      <div style={{
        fontFamily: heading.fontFamily, color: CREAM, fontWeight: 900,
        fontSize: 220, transform: `scale(${scale})`, letterSpacing: -4,
      }}>ADAB</div>
      <div style={{
        fontFamily: heading.fontFamily, color: GOLD, fontWeight: 700,
        fontSize: 220, transform: `scale(${scale})`, marginTop: -60, letterSpacing: -4,
      }}>MOVES</div>
      <div style={{
        fontFamily: body.fontFamily, color: CREAM, fontSize: 32,
        marginTop: 30, opacity: sub, fontStyle: "italic",
      }}>karakter, beweging, broederschap.</div>
    </AbsoluteFill>
  );
};

// ---- Scene 4: Pillars ----
const Pillar: React.FC<{ label: string; nl: string; delay: number; img: string }> = ({ label, nl, delay, img }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 16 } });
  const y = interpolate(s, [0, 1], [80, 0]);
  const op = interpolate(s, [0, 1], [0, 1]);
  return (
    <div style={{
      width: 480, height: 620, borderRadius: 24, overflow: "hidden",
      transform: `translateY(${y}px)`, opacity: op, position: "relative",
      border: `2px solid ${GOLD}40`,
    }}>
      <Img src={staticFile(img)} style={{
        position: "absolute", inset: 0, width: "100%", height: "100%",
        objectFit: "cover", filter: "brightness(0.55) saturate(1.1)",
      }} />
      <div style={{
        position: "absolute", inset: 0, padding: 40, display: "flex",
        flexDirection: "column", justifyContent: "flex-end",
      }}>
        <div style={{
          fontFamily: body.fontFamily, color: GOLD, fontSize: 18,
          letterSpacing: 6, textTransform: "uppercase", marginBottom: 12,
        }}>{label}</div>
        <div style={{
          fontFamily: heading.fontFamily, color: CREAM, fontSize: 64,
          fontWeight: 900, lineHeight: 1,
        }}>{nl}</div>
      </div>
    </div>
  );
};

const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const op = interpolate(frame, [0, 15, 105, 120], [0, 1, 1, 0]);
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", opacity: op }}>
      <div style={{
        fontFamily: body.fontFamily, color: GOLD, fontSize: 22,
        letterSpacing: 10, textTransform: "uppercase", marginBottom: 50,
      }}>Drie pilaren</div>
      <div style={{ display: "flex", gap: 32 }}>
        <Pillar label="01" nl="Sport" delay={0} img="coach.jpg" />
        <Pillar label="02" nl="Adab" delay={10} img="community.jpg" />
        <Pillar label="03" nl="Broederschap" delay={20} img="event.jpg" />
      </div>
    </AbsoluteFill>
  );
};

// ---- Scene 5: Cities ----
const cities = ["Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Almere", "Haarlem", "Leiden", "Zaandam", "Delft", "Hilversum", "Amersfoort", "Gouda"];
const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const op = interpolate(frame, [0, 15, 105, 120], [0, 1, 1, 0]);
  const titleS = spring({ frame, fps, config: { damping: 18 } });
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", opacity: op, padding: 100 }}>
      <div style={{
        fontFamily: body.fontFamily, color: GOLD, fontSize: 22,
        letterSpacing: 10, textTransform: "uppercase", marginBottom: 20,
        opacity: titleS,
      }}>De beweging groeit</div>
      <div style={{
        fontFamily: heading.fontFamily, color: CREAM, fontSize: 120,
        fontWeight: 900, marginBottom: 50,
        transform: `translateY(${interpolate(titleS, [0,1], [40,0])}px)`,
      }}>door de Randstad.</div>
      <div style={{
        display: "flex", flexWrap: "wrap", justifyContent: "center",
        gap: 16, maxWidth: 1400,
      }}>
        {cities.map((c, i) => {
          const d = i * 4;
          const s = spring({ frame: frame - 20 - d, fps, config: { damping: 14 } });
          return (
            <div key={c} style={{
              padding: "16px 28px", border: `1.5px solid ${GOLD}`,
              borderRadius: 999, fontFamily: body.fontFamily,
              color: CREAM, fontSize: 26, fontWeight: 600,
              transform: `scale(${s})`, opacity: s,
              background: `${GOLD}10`,
            }}>{c}</div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

// ---- Scene 6: Close ----
const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame, fps, config: { damping: 16 } });
  const y = interpolate(s, [0, 1], [40, 0]);
  const sub = interpolate(frame, [30, 55], [0, 1], { extrapolateRight: "clamp" });
  const op = interpolate(frame, [0, 20, 120, 150], [0, 1, 1, 1]);
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", opacity: op }}>
      <div style={{
        fontFamily: heading.fontFamily, color: CREAM, fontWeight: 900,
        fontSize: 110, transform: `translateY(${y}px)`, textAlign: "center",
        lineHeight: 1.05,
      }}>Word deel van de<br />
        <span style={{ color: GOLD, fontStyle: "italic" }}>beweging.</span>
      </div>
      <div style={{
        marginTop: 60, padding: "20px 50px", border: `2px solid ${GOLD}`,
        borderRadius: 999, fontFamily: body.fontFamily, color: GOLD,
        fontSize: 28, letterSpacing: 6, textTransform: "uppercase",
        opacity: sub, fontWeight: 600,
      }}>ADAB MOVES · gratis aanmelden</div>
    </AbsoluteFill>
  );
};

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: NAVY_DEEP }}>
      <Backdrop />
      <FloatingDots />
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={100}>
          <Scene1 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 15 })} />
        <TransitionSeries.Sequence durationInFrames={110}>
          <Scene2 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={wipe({ direction: "from-right" })} timing={springTiming({ config: { damping: 200 }, durationInFrames: 25 })} />
        <TransitionSeries.Sequence durationInFrames={130}>
          <Scene3 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-bottom" })} timing={springTiming({ config: { damping: 200 }, durationInFrames: 25 })} />
        <TransitionSeries.Sequence durationInFrames={130}>
          <Scene4 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 20 })} />
        <TransitionSeries.Sequence durationInFrames={130}>
          <Scene5 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={wipe({ direction: "from-left" })} timing={springTiming({ config: { damping: 200 }, durationInFrames: 25 })} />
        <TransitionSeries.Sequence durationInFrames={160}>
          <Scene6 />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
