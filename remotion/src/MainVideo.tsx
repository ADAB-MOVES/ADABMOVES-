import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring, staticFile, Img, Video, Sequence } from "remotion";
import { loadFont as loadDisplay } from "@remotion/google-fonts/Sora";
import { loadFont as loadBody } from "@remotion/google-fonts/PlusJakartaSans";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";

const display = loadDisplay("normal", { weights: ["600", "700", "800"], subsets: ["latin"] });
const body = loadBody("normal", { weights: ["400", "600", "700", "800"], subsets: ["latin"] });

// Site palette
const INK = "#1F2240";          // navy
const INK_DEEP = "#14162B";
const CREAM = "#FAF5E8";
const CORAL = "#E8784E";
const CORAL_DEEP = "#C95C36";

const fontD = { fontFamily: display.fontFamily, letterSpacing: "-0.02em" as const };
const fontB = { fontFamily: body.fontFamily };

// ---- Persistent background ----
const Backdrop: React.FC = () => {
  const frame = useCurrentFrame();
  const drift = Math.sin(frame / 70) * 25;
  return (
    <AbsoluteFill style={{
      background: `radial-gradient(circle at ${50 + drift}% ${42 - drift / 2}%, #2a2e58 0%, ${INK} 50%, ${INK_DEEP} 100%)`,
    }} />
  );
};

const Blobs: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ overflow: "hidden" }}>
      <div style={{
        position: "absolute", top: -160, left: -120, width: 520, height: 520,
        borderRadius: "50%", background: CORAL, opacity: 0.18,
        filter: "blur(80px)",
        transform: `translate(${Math.sin(frame/80)*40}px, ${Math.cos(frame/90)*30}px)`,
      }} />
      <div style={{
        position: "absolute", bottom: -180, right: -120, width: 460, height: 460,
        borderRadius: "50%", background: CORAL_DEEP, opacity: 0.14,
        filter: "blur(90px)",
        transform: `translate(${Math.cos(frame/100)*40}px, ${Math.sin(frame/80)*30}px)`,
      }} />
    </AbsoluteFill>
  );
};

// ===== Scene 1: Hook with kids video =====
const Scene1: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame, fps, config: { damping: 18 } });
  const y = interpolate(s, [0, 1], [40, 0]);
  const op = interpolate(frame, [0, 18, 75, 90], [0, 1, 1, 0]);
  return (
    <AbsoluteFill>
      <Video src={staticFile("kids-motion.mp4")} startFrom={0} muted style={{
        position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
        filter: "brightness(0.45) saturate(1.1)",
      }} />
      <AbsoluteFill style={{
        background: `linear-gradient(180deg, ${INK_DEEP}cc 0%, ${INK}aa 50%, ${INK_DEEP}ee 100%)`,
      }} />
      <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", opacity: op, padding: 120 }}>
        <div style={{
          ...fontB, color: CORAL, letterSpacing: 10, fontSize: 26,
          fontWeight: 700, transform: `translateY(${y}px)`,
          textTransform: "uppercase",
        }}>
          Bewegen met betekenis
        </div>
        <div style={{
          ...fontD, color: CREAM, fontWeight: 800,
          fontSize: 160, lineHeight: 1, marginTop: 28,
          transform: `translateY(${y * 1.5}px)`, textAlign: "center",
        }}>
          Onze jeugd verdient<br />
          <span style={{ fontStyle: "italic", color: CORAL }}>meer.</span>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ===== Scene 2: Importance — for schools, parents, community =====
const ImportanceCard: React.FC<{ title: string; text: string; delay: number; num: string }> = ({ title, text, delay, num }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame: frame - delay, fps, config: { damping: 16 } });
  const y = interpolate(s, [0, 1], [60, 0]);
  return (
    <div style={{
      width: 440, padding: 44, borderRadius: 28,
      background: `${CREAM}10`, border: `1.5px solid ${CORAL}55`,
      transform: `translateY(${y}px)`, opacity: s,
      backdropFilter: "none",
    }}>
      <div style={{ ...fontD, color: CORAL, fontSize: 56, fontWeight: 800, lineHeight: 1 }}>{num}</div>
      <div style={{ ...fontD, color: CREAM, fontSize: 52, fontWeight: 700, marginTop: 16, lineHeight: 1.05 }}>{title}</div>
      <div style={{ ...fontB, color: `${CREAM}cc`, fontSize: 22, marginTop: 18, lineHeight: 1.5 }}>{text}</div>
    </div>
  );
};

const Scene2: React.FC = () => {
  const frame = useCurrentFrame();
  const op = interpolate(frame, [0, 15, 130, 150], [0, 1, 1, 0]);
  const titleS = spring({ frame, fps: 30, config: { damping: 18 } });
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", opacity: op, padding: 80 }}>
      <div style={{
        ...fontB, color: CORAL, letterSpacing: 8, fontSize: 22,
        fontWeight: 700, textTransform: "uppercase",
        opacity: titleS,
      }}>Waarom ADAB MOVES belangrijk is</div>
      <div style={{
        ...fontD, color: CREAM, fontSize: 78, fontWeight: 800, marginTop: 18,
        marginBottom: 60, textAlign: "center",
        transform: `translateY(${interpolate(titleS, [0,1], [30,0])}px)`,
      }}>Voor scholen, ouders en de gemeenschap.</div>
      <div style={{ display: "flex", gap: 28 }}>
        <ImportanceCard num="01" title="Scholen" text="Professionele bewegingslessen die aansluiten op de schoolcultuur — met meetbare pedagogische impact." delay={10} />
        <ImportanceCard num="02" title="Ouders" text="Een veilige, halal omgeving waar je kind én tiener karakter en zelfvertrouwen opbouwt." delay={25} />
        <ImportanceCard num="03" title="Gemeenschap" text="Sterke broedergroepen, vaste plekken en activiteiten die de wijk dragen." delay={40} />
      </div>
    </AbsoluteFill>
  );
};

// ===== Scene 3: Vision & Mission =====
const Scene3: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const op = interpolate(frame, [0, 15, 115, 135], [0, 1, 1, 0]);
  const a = spring({ frame, fps, config: { damping: 18 } });
  const b = spring({ frame: frame - 30, fps, config: { damping: 18 } });
  return (
    <AbsoluteFill style={{ justifyContent: "center", padding: "0 160px", opacity: op }}>
      <div style={{
        ...fontB, color: CORAL, letterSpacing: 8, fontSize: 22,
        fontWeight: 700, textTransform: "uppercase",
        opacity: a, transform: `translateY(${interpolate(a, [0,1], [20,0])}px)`,
      }}>Onze visie & missie</div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginTop: 50 }}>
        <div style={{ opacity: a, transform: `translateY(${interpolate(a, [0,1], [40,0])}px)` }}>
          <div style={{ ...fontD, color: CREAM, fontSize: 72, fontWeight: 800, lineHeight: 1 }}>Visie</div>
          <div style={{ ...fontB, color: `${CREAM}dd`, fontSize: 30, marginTop: 22, lineHeight: 1.4 }}>
            Een generatie die <span style={{ color: CORAL, fontWeight: 700 }}>beweegt met adab</span> — sterk in lichaam, karakter en geloof.
          </div>
        </div>
        <div style={{ opacity: b, transform: `translateY(${interpolate(b, [0,1], [40,0])}px)` }}>
          <div style={{ ...fontD, color: CREAM, fontSize: 72, fontWeight: 800, lineHeight: 1 }}>Missie</div>
          <div style={{ ...fontB, color: `${CREAM}dd`, fontSize: 30, marginTop: 22, lineHeight: 1.4 }}>
            Sport inzetten als <span style={{ color: CORAL, fontWeight: 700 }}>middel voor karaktervorming</span> — op school, in de community en op events.
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ===== Scene 4: Focus visualization — three orbits =====
const Scene4: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const op = interpolate(frame, [0, 15, 130, 150], [0, 1, 1, 0]);
  const core = spring({ frame, fps, config: { damping: 14 } });

  const pillars = [
    { label: "Adab", desc: "Manieren & respect" },
    { label: "Karakter", desc: "Geduld, dankbaarheid, doorzetting" },
    { label: "Sport", desc: "Het middel & de plek" },
  ];

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", opacity: op }}>
      <div style={{
        ...fontB, color: CORAL, letterSpacing: 8, fontSize: 22,
        fontWeight: 700, textTransform: "uppercase", position: "absolute", top: 140,
      }}>Waar wij op focussen</div>

      {/* Orbital rings */}
      <svg width={1100} height={1100} style={{ position: "absolute" }}>
        {[280, 380, 480].map((r, i) => (
          <circle key={r} cx={550} cy={550} r={r}
            fill="none" stroke={CORAL} strokeOpacity={0.15 - i * 0.03}
            strokeWidth={1.5} strokeDasharray="4 8"
            transform={`rotate(${frame * (0.3 - i * 0.1)} 550 550)`} />
        ))}
      </svg>

      {/* Core */}
      <div style={{
        width: 280, height: 280, borderRadius: "50%",
        background: `radial-gradient(circle at 30% 30%, ${CORAL}, ${CORAL_DEEP})`,
        boxShadow: `0 0 80px ${CORAL}66`,
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        transform: `scale(${core})`,
      }}>
        <div style={{ ...fontD, color: CREAM, fontWeight: 800, fontSize: 38, lineHeight: 1 }}>ADAB</div>
        <div style={{ ...fontD, color: CREAM, fontWeight: 800, fontSize: 38, lineHeight: 1 }}>MOVES</div>
        <div style={{ ...fontB, color: `${CREAM}cc`, fontSize: 14, marginTop: 10, letterSpacing: 4, textTransform: "uppercase" }}>Methode</div>
      </div>

      {/* Three pillars around */}
      {pillars.map((p, i) => {
        const angle = (i * 120 - 90) * (Math.PI / 180);
        const radius = 430;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const delay = 20 + i * 12;
        const s = spring({ frame: frame - delay, fps, config: { damping: 14 } });
        return (
          <div key={p.label} style={{
            position: "absolute", left: "50%", top: "50%",
            transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${s})`,
            opacity: s,
            width: 280, textAlign: "center",
          }}>
            <div style={{
              width: 130, height: 130, borderRadius: "50%",
              background: CREAM, margin: "0 auto",
              display: "flex", alignItems: "center", justifyContent: "center",
              border: `3px solid ${CORAL}`,
              boxShadow: `0 12px 40px ${INK_DEEP}80`,
            }}>
              <div style={{ ...fontD, color: INK, fontWeight: 800, fontSize: 26 }}>0{i + 1}</div>
            </div>
            <div style={{ ...fontD, color: CREAM, fontWeight: 800, fontSize: 38, marginTop: 16 }}>{p.label}</div>
            <div style={{ ...fontB, color: `${CREAM}aa`, fontSize: 18, marginTop: 6 }}>{p.desc}</div>
          </div>
        );
      })}
    </AbsoluteFill>
  );
};

// ===== Scene 5: Kids in motion (video clip) =====
const Scene5: React.FC = () => {
  const frame = useCurrentFrame();
  const op = interpolate(frame, [0, 15, 110, 130], [0, 1, 1, 0]);
  const s = spring({ frame, fps: 30, config: { damping: 18 } });
  return (
    <AbsoluteFill>
      <Video src={staticFile("kids-team.mp4")} startFrom={0} muted style={{
        position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
        filter: "brightness(0.55) saturate(1.15)",
      }} />
      <AbsoluteFill style={{ background: `linear-gradient(90deg, ${INK_DEEP}ee 0%, ${INK}88 60%, transparent 100%)` }} />
      <AbsoluteFill style={{ justifyContent: "center", padding: "0 140px", opacity: op }}>
        <div style={{ maxWidth: 900, transform: `translateX(${interpolate(s,[0,1],[-40,0])}px)` }}>
          <div style={{ ...fontB, color: CORAL, letterSpacing: 8, fontSize: 22, fontWeight: 700, textTransform: "uppercase" }}>
            Eén beweging
          </div>
          <div style={{ ...fontD, color: CREAM, fontWeight: 800, fontSize: 110, lineHeight: 1.05, marginTop: 20 }}>
            Sport, <span style={{ fontStyle: "italic", color: CORAL }}>broederschap</span>, betekenis.
          </div>
          <div style={{ ...fontB, color: `${CREAM}dd`, fontSize: 28, marginTop: 28, lineHeight: 1.5, maxWidth: 780 }}>
            Wekelijks actief in 12+ steden door de Randstad — voor kinderen én tieners van 8 tot 17 jaar.
          </div>
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};

// ===== Scene 6: CTA close =====
const Scene6: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const s = spring({ frame, fps, config: { damping: 16 } });
  const y = interpolate(s, [0, 1], [50, 0]);
  const sub = interpolate(frame, [30, 55], [0, 1], { extrapolateRight: "clamp" });
  const cta = interpolate(frame, [55, 80], [0, 1], { extrapolateRight: "clamp" });
  const url = interpolate(frame, [80, 105], [0, 1], { extrapolateRight: "clamp" });
  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
      <div style={{
        ...fontB, color: CORAL, letterSpacing: 10, fontSize: 24,
        fontWeight: 700, textTransform: "uppercase",
        opacity: sub, marginBottom: 30,
      }}>De volgende generatie begint nu</div>

      <div style={{
        ...fontD, color: CREAM, fontWeight: 800,
        fontSize: 130, lineHeight: 1.02, textAlign: "center",
        transform: `translateY(${y}px)`,
      }}>
        Word onderdeel van<br />
        <span style={{ fontStyle: "italic", color: CORAL }}>ADAB MOVES.</span>
      </div>

      <div style={{
        marginTop: 60, padding: "24px 60px", borderRadius: 999,
        background: CORAL, color: CREAM,
        ...fontB, fontSize: 28, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase",
        opacity: cta, transform: `scale(${interpolate(cta, [0,1], [0.85, 1])})`,
        boxShadow: `0 20px 60px ${CORAL}55`,
      }}>
        Gratis aanmelden community
      </div>

      <div style={{
        ...fontB, color: `${CREAM}cc`, fontSize: 26, marginTop: 36,
        opacity: url, letterSpacing: 3,
      }}>
        adabmoves.nl
      </div>
    </AbsoluteFill>
  );
};

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: INK_DEEP }}>
      <Backdrop />
      <Blobs />
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={100}>
          <Scene1 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 18 })} />
        <TransitionSeries.Sequence durationInFrames={150}>
          <Scene2 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={wipe({ direction: "from-right" })} timing={springTiming({ config: { damping: 200 }, durationInFrames: 25 })} />
        <TransitionSeries.Sequence durationInFrames={135}>
          <Scene3 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={slide({ direction: "from-bottom" })} timing={springTiming({ config: { damping: 200 }, durationInFrames: 25 })} />
        <TransitionSeries.Sequence durationInFrames={150}>
          <Scene4 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={fade()} timing={linearTiming({ durationInFrames: 20 })} />
        <TransitionSeries.Sequence durationInFrames={130}>
          <Scene5 />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition presentation={wipe({ direction: "from-left" })} timing={springTiming({ config: { damping: 200 }, durationInFrames: 25 })} />
        <TransitionSeries.Sequence durationInFrames={170}>
          <Scene6 />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
