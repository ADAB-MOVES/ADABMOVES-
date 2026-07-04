import { AbsoluteFill, Series } from "remotion";
import { loadFont as loadSora } from "@remotion/google-fonts/Sora";
import { loadFont as loadJakarta } from "@remotion/google-fonts/PlusJakartaSans";
import { COLORS } from "../theme";
import { Grain } from "../components/Grain";
import { HookBank } from "../scenes/reel30/HookBank";
import { Belofte } from "../scenes/reel30/Belofte";
import { CoachWelkom } from "../scenes/reel30/CoachWelkom";
import { MultiSport } from "../scenes/reel30/MultiSport";
import { Waarden } from "../scenes/reel30/Waarden";
import { Aanbod } from "../scenes/reel30/Aanbod";
import { CtaEnd } from "../scenes/reel30/CtaEnd";

loadSora("normal", { weights: ["600", "700", "800"], subsets: ["latin"] });
loadJakarta("normal", { weights: ["500", "700", "800"], subsets: ["latin"] });

const S_HOOK = 90;
const S_BELOFTE = 90;
const S_COACH = 180;
const S_SPORT = 180;
const S_WAARDEN = 120;
const S_AANBOD = 120;
const S_CTA = 120;

export const Reel30Betekenis: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.cream }}>
      <Series>
        <Series.Sequence durationInFrames={S_HOOK}>
          <HookBank duration={S_HOOK} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={S_BELOFTE}>
          <Belofte duration={S_BELOFTE} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={S_COACH}>
          <CoachWelkom duration={S_COACH} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={S_SPORT}>
          <MultiSport duration={S_SPORT} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={S_WAARDEN}>
          <Waarden duration={S_WAARDEN} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={S_AANBOD}>
          <Aanbod duration={S_AANBOD} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={S_CTA}>
          <CtaEnd duration={S_CTA} />
        </Series.Sequence>
      </Series>
      <Grain opacity={0.05} />
    </AbsoluteFill>
  );
};
