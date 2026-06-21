import { Composition } from "remotion";
import { MainVideo } from "./MainVideo";
import { Reel1Hook } from "./compositions/Reel1Hook";

export const RemotionRoot: React.FC = () => (
  <>
    <Composition
      id="main"
      component={MainVideo}
      durationInFrames={540}
      fps={30}
      width={1920}
      height={1080}
    />
    <Composition
      id="reel-1-hook"
      component={Reel1Hook}
      durationInFrames={450}
      fps={30}
      width={1080}
      height={1920}
    />
  </>
);
