import { AbsoluteFill, Series } from "remotion";
import { loadFont as loadSora } from "@remotion/google-fonts/Sora";
import { loadFont as loadJakarta } from "@remotion/google-fonts/PlusJakartaSans";
import { COLORS } from "../theme";
import { Grain } from "../components/Grain";
import { HookBank } from "../scenes/reel30/HookBank";
import { Belofte } from "../scenes/reel30/Belofte";
import { VoorOuders } from "../scenes/reel30/VoorOuders";
import { KernFlashes } from "../scenes/reel30/KernFlashes";
import { Aanbod } from "../scenes/reel30/Aanbod";
import { CtaEnd } from "../scenes/reel30/CtaEnd";

loadSora("normal", { weights: ["600", "700", "800"], subsets: ["latin"] });
loadJakarta("normal", { weights: ["500", "700", "800"], subsets: ["latin"] });

// 900 frames total @ 30fps = 30s
const S_HOOK = 120;      // 0-4s
const S_INTRO = 90;      // 4-7s
const S_OUDERS = 150;    // 7-12s
const S_KERN = 300;      // 12-22s (statement 60 + 4×60)
const S_AANBOD = 150;    // 22-27s
const S_CTA = 90;        // 27-30s

export const Reel30Betekenis: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.cream }}>
      <Series>
        <Series.Sequence durationInFrames={S_HOOK}>
          <HookBank duration={S_HOOK} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={S_INTRO}>
          <Belofte duration={S_INTRO} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={S_OUDERS}>
          <VoorOuders duration={S_OUDERS} />
        </Series.Sequence>
        <Series.Sequence durationInFrames={S_KERN}>
          <KernFlashes duration={S_KERN} />
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
