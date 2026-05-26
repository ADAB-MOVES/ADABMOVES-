import { AbsoluteFill } from "remotion";
import { TransitionSeries, linearTiming, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { slide } from "@remotion/transitions/slide";
import { wipe } from "@remotion/transitions/wipe";
import { loadFont as loadAnton } from "@remotion/google-fonts/Anton";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { Intro, Outro } from "./scenes/IntroOutro";
import { PhotoScene } from "./scenes/PhotoScene";
import { COLORS } from "./theme";

loadAnton();
loadInter("normal", { weights: ["500", "600", "700", "800"], subsets: ["latin"] });

const INTRO = 90;
const SCENE = 70;
const OUTRO = 100;
const T = 14;

export const MainVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.ink }}>
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={INTRO}>
          <Intro duration={INTRO} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-left" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
        />
        <TransitionSeries.Sequence durationInFrames={SCENE}>
          <PhotoScene src="scholen.jpg" eyebrow="Spoor 01" label="Scholen" duration={SCENE} zoom="in" pan="right" align="left" />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
        />
        <TransitionSeries.Sequence durationInFrames={SCENE}>
          <PhotoScene src="community-kinderen.jpg" eyebrow="Spoor 02" label="Kinderen" duration={SCENE} zoom="out" pan="left" align="right" />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-bottom-right" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
        />
        <TransitionSeries.Sequence durationInFrames={SCENE}>
          <PhotoScene src="community.jpg" eyebrow="Onze methode" label="Karakter" duration={SCENE} zoom="in" pan="up" align="left" />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-left" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
        />
        <TransitionSeries.Sequence durationInFrames={SCENE}>
          <PhotoScene src="event.jpg" eyebrow="Spoor 03" label="ADAB Day" duration={SCENE} zoom="in" pan="right" align="right" />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-top-right" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: T })}
        />
        <TransitionSeries.Sequence durationInFrames={SCENE}>
          <PhotoScene src="coach.jpg" eyebrow="Vaste trainers" label="Vertrouwen" duration={SCENE} zoom="out" pan="down" align="left" />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={fade()}
          timing={linearTiming({ durationInFrames: T + 4 })}
        />
        <TransitionSeries.Sequence durationInFrames={OUTRO}>
          <Outro duration={OUTRO} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
