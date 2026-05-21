import { Character, type CharacterVariant } from "@/components/illustrations/Character";

interface Props {
  pose?: "jump" | "run" | "ball" | "kick" | "basket" | "archery";
  size?: number;
  className?: string;
  /** Default ADAB-blauwe outfit voor de mascotte */
  outfit?: string;
  floating?: boolean;
}

const map: Record<string, CharacterVariant> = {
  jump: "kid-jump",
  run: "kid-run",
  ball: "kid-ball",
  kick: "kid-kick",
  basket: "kid-basket",
  archery: "kid-archery",
};

/** Adab Kid — vrolijke kindermascotte in licht blauwe outfit. */
export function KidMascot({ pose = "jump", size = 180, className, outfit = "#7CC4E8", floating = true }: Props) {
  return (
    <div
      className={`relative inline-block ${floating ? "animate-floaty" : ""} pointer-events-none select-none ${className ?? ""}`}
      aria-hidden
    >
      <div className="absolute inset-x-8 bottom-2 h-3 rounded-full bg-[var(--ink)]/15 blur-md" />
      <Character variant={map[pose]} size={size} outfit={outfit} />
    </div>
  );
}
