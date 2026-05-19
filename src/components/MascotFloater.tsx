import mascotWave from "@/assets/mascot-wave.png";

interface Props {
  className?: string;
  size?: number;
  pose?: "wave" | "jump" | "point" | "coach";
}

/**
 * Drijvende ADAB MOVES mascotte (transparante PNG).
 * Pure sfeer — geen interactie.
 */
export function MascotFloater({ className, size = 160, pose = "wave" }: Props) {
  // Voor nu alleen wave; uitbreidbaar later.
  void pose;
  return (
    <div
      className={`relative inline-block animate-floaty pointer-events-none select-none ${className ?? ""}`}
      style={{ width: size, height: size }}
    >
      <div
        aria-hidden
        className="absolute inset-x-6 bottom-1 h-3 rounded-full bg-[var(--ink)]/15 blur-md"
      />
      <img
        src={mascotWave}
        alt=""
        className="h-full w-full object-contain drop-shadow-xl"
      />
    </div>
  );
}
