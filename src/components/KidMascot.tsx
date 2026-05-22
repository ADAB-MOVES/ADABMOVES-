import mascotImg from "@/assets/mascot-boxer.png";

interface Props {
  pose?: "jump" | "run" | "ball" | "kick" | "basket" | "archery";
  size?: number;
  className?: string;
  outfit?: string;
  floating?: boolean;
}

/** Adab Kid — vrolijke kindermascotte (bokser, juichend). */
export function KidMascot({ size = 180, className, floating = true }: Props) {
  return (
    <div
      className={`relative inline-block ${floating ? "animate-floaty" : ""} pointer-events-none select-none ${className ?? ""}`}
      aria-hidden
      style={{ width: size, height: size }}
    >
      <div className="absolute inset-x-6 bottom-1 h-3 rounded-full bg-[var(--ink)]/15 blur-md" />
      <img
        src={mascotImg}
        alt=""
        className="relative w-full h-full object-contain"
        draggable={false}
      />
    </div>
  );
}
