import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { wipe } from "@remotion/transitions/wipe";
import { slide } from "@remotion/transitions/slide";
import { fade } from "@remotion/transitions/fade";
import { loadFont as loadAnton } from "@remotion/google-fonts/Anton";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { COLORS } from "./theme";
import { Hook } from "./scenes/Hook";
import { Ident } from "./scenes/Ident";
import { SpoorScene } from "./scenes/SpoorScene";
import { Methode } from "./scenes/Methode";
import { Cta } from "./scenes/Cta";
import { Grain } from "./components/Grain";
import { AccentLine } from "./components/AccentLine";

loadAnton();
loadInter("normal", { weights: ["500", "600", "700", "800"], subsets: ["latin"] });

// Scene durations. TransitionSeries reduces total by transition lengths.
const HOOK = 60;
const IDENT = 80;
const SP1 = 80;
const SP2 = 80;
const SP3 = 80;
const METHODE = 110;
const CTA = 120;
const T = 12;

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.ink }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={HOOK}>
          <Hook duration={HOOK} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />
        <TransitionSeries.Sequence durationInFrames={IDENT}>
          <Ident duration={IDENT} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-left" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
        />
        <TransitionSeries.Sequence durationInFrames={SP1}>
          <SpoorScene
            src="scholen.jpg"
            number="1"
            label="Scholen"
            sub="Gymlessen · Sportdagen · Workshops"
            duration={SP1}
            reveal="left"
            align="left"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
        />
        <TransitionSeries.Sequence durationInFrames={SP2}>
          <SpoorScene
            src="community-kinderen.jpg"
            number="2"
            label="Kinderen"
            sub="Wekelijkse trainingen · Karaktervorming"
            duration={SP2}
            reveal="right"
            align="right"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-bottom-right" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
        />
        <TransitionSeries.Sequence durationInFrames={SP3}>
          <SpoorScene
            src="event.jpg"
            number="3"
            label="ADAB Day"
            sub="Sportdagen · Events · Community"
            duration={SP3}
            reveal="bottom"
            align="left"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-left" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
        />
        <TransitionSeries.Sequence durationInFrames={METHODE}>
          <Methode duration={METHODE} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T + 4 })}
        />
        <TransitionSeries.Sequence durationInFrames={CTA}>
          <Cta duration={CTA} />
        </TransitionSeries.Sequence>
      </TransitionSeries>

      {/* Persistent overlays */}
      <AccentLine />
      <Grain opacity={0.07} />
    </AbsoluteFill>
  );
};
