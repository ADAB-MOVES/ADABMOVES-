import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { loadFont as loadAnton } from "@remotion/google-fonts/Anton";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { Intro } from "./scenes/Intro";
import { KenBurns } from "./scenes/KenBurns";
import { Outro } from "./scenes/Outro";
import { COLORS } from "./theme";

loadAnton();
loadInter("normal", { weights: ["500", "600", "700"], subsets: ["latin"] });

const INTRO = 75;
const SCENE = 78;
const OUTRO = 95;
const T = 18; // transition frames

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.cream }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={INTRO}>
          <Intro duration={INTRO} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-left" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
        />

        <TransitionSeries.Sequence durationInFrames={SCENE}>
          <KenBurns
            image="images/scene-football.jpg"
            label="VOETBAL"
            sublabel="Techniek, samenspel en plezier op het veld."
            duration={SCENE}
            direction="left"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
        />

        <TransitionSeries.Sequence durationInFrames={SCENE}>
          <KenBurns
            image="images/scene-basketball.jpg"
            label="BASKETBAL"
            sublabel="Energie, focus en teamwork in de zaal."
            duration={SCENE}
            direction="right"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-bottom-right" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
        />

        <TransitionSeries.Sequence durationInFrames={SCENE}>
          <KenBurns
            image="images/scene-running.jpg"
            label="ATLETIEK"
            sublabel="Snelheid, doorzettingsvermogen en eerlijke wedstrijden."
            duration={SCENE}
            direction="in"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-left" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
        />

        <TransitionSeries.Sequence durationInFrames={SCENE}>
          <KenBurns
            image="images/scene-boxing.jpg"
            label="WEERBAARHEID"
            sublabel="Boksen en kickboksen met respect, discipline en zelfvertrouwen."
            duration={SCENE}
            direction="left"
          />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T })}
        />

        <TransitionSeries.Sequence durationInFrames={OUTRO}>
          <Outro duration={OUTRO} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
