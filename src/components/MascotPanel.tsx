import mascotJump from "@/assets/mascot-jump.png";
import mascotWave from "@/assets/mascot-wave.png";
import mascotPoint from "@/assets/mascot-point.png";
import mascotCoach from "@/assets/mascot-coach.png";

export type MascotPose = "jump" | "wave" | "point" | "coach";
export type MascotTone = "cream" | "creamDeep" | "navy" | "coral";

const POSE_SRC: Record<MascotPose, string> = {
  jump: mascotJump,
  wave: mascotWave,
  point: mascotPoint,
  coach: mascotCoach,
};

const TONE_BG: Record<MascotTone, string> = {
  cream: "bg-[var(--cream)]",
  creamDeep: "bg-[#F1E8D4]",
  navy: "bg-[var(--ink)]",
  coral: "bg-[var(--coral)]/15",
};

interface Props {
  pose?: MascotPose;
  tone?: MascotTone;
  className?: string;
  alt?: string;
  /** Float-style idle animation */
  float?: boolean;
}

/**
 * Gekleurd paneel met de ADAB MOVES mascotte (transparante PNG) gecentreerd.
 * Drop-in vervanging voor de oude foto-blokken.
 */
export function MascotPanel({
  pose = "jump",
  tone = "cream",
  className,
  alt = "ADAB MOVES mascotte",
  float = true,
}: Props) {
  return (
    <div
      className={`relative overflow-hidden ${TONE_BG[tone]} ${className ?? ""}`}
    >
      {/* Subtle background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-[var(--coral)]/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-[var(--coral)]/15 blur-3xl"
      />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <img
          src={POSE_SRC[pose]}
          alt={alt}
          loading="lazy"
          className={`max-h-full max-w-full object-contain drop-shadow-xl ${float ? "animate-floaty" : ""}`}
        />
      </div>
    </div>
  );
}
