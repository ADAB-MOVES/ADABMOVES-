import { Character } from "@/components/illustrations/Character";
import { illu } from "@/components/illustrations/tokens";

interface Props {
  className?: string;
  size?: number;
  /** "wave" mascotte standaard; "back" voor trainer-achterzijde */
  pose?: "wave" | "back" | "point" | "whistle";
}

/**
 * Drijvende ADAB MOVES mascotte. Subtiele idle-animatie + hover-wave.
 * Bewust geen interactie nodig — pure sfeer.
 */
export function MascotFloater({ className, size = 160, pose = "wave" }: Props) {
  const variant =
    pose === "back"
      ? "coach-back"
      : pose === "point"
        ? "coach-point"
        : pose === "whistle"
          ? "coach-whistle"
          : "coach-mascot";
  return (
    <div className={`relative inline-block animate-floaty pointer-events-none select-none ${className ?? ""}`}>
      <div aria-hidden className="absolute inset-x-6 bottom-1 h-3 rounded-full bg-[var(--ink)]/15 blur-md" />
      <Character variant={variant} size={size} outfit={illu.coral} />
    </div>
  );
}
