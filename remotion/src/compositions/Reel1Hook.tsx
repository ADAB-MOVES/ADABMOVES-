import { AbsoluteFill, Series } from "remotion";
import { loadFont as loadSora } from "@remotion/google-fonts/Sora";
import { loadFont as loadJakarta } from "@remotion/google-fonts/PlusJakartaSans";
import { COLORS } from "../theme";
import { Grain } from "../components/Grain";
import { CoachQuote } from "../scenes/reel1/CoachQuote";
import { BounceBall } from "../scenes/reel1/BounceBall";
import { SportCuts } from "../scenes/reel1/SportCuts";
import { Tagline } from "../scenes/reel1/Tagline";

loadSora("normal", { weights: ["600", "700", "800"], subsets: ["latin"] });
loadJakarta("normal", { weights: ["500", "700", "800"], subsets: ["latin"] });

const S1 = 60;
const S2 = 90;
const S3 = 150;
const S4 = 150;

export const Reel1Hook: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.cream }}>
      <Series>
        <Series.Sequence durationInFrames={S1}>
          <CoachQuote duration={S1} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={S2}>
          <BounceBall duration={S2} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={S3}>
          <SportCuts duration={S3} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={S4}>
          <Tagline duration={S4} />
        </Series.Sequence>
      </Series>
      <Grain opacity={0.06} />
    </AbsoluteFill>
  );
};
