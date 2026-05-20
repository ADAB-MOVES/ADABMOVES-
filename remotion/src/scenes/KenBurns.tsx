import { AbsoluteFill, Img, interpolate, staticFile, useCurrentFrame } from "remotion";
import { COLORS } from "../theme";

type Direction = "in" | "left" | "right";

export const KenBurns: React.FC<{
  image: string;
  label: string;
  sublabel?: string;
  duration: number;
  direction?: Direction;
}> = ({ image, label, sublabel, duration, direction = "in" }) => {
  const frame = useCurrentFrame();

  // Camera move
  const scale = interpolate(frame, [0, duration], [1.08, 1.22], { extrapolateRight: "clamp" });
  const tx =
    direction === "left"
      ? interpolate(frame, [0, duration], [40, -40])
      : direction === "right"
      ? interpolate(frame, [0, duration], [-40, 40])
      : 0;
  const ty = interpolate(frame, [0, duration], [10, -10]);

  // Text reveal
  const textOpacity = interpolate(frame, [6, 22], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const textY = interpolate(frame, [6, 28], [40, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const subOpacity = interpolate(frame, [16, 32], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Coral underline grows
  const lineWidth = interpolate(frame, [12, 36], [0, 220], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.cream, overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          transform: `scale(${scale}) translate(${tx}px, ${ty}px)`,
          transformOrigin: "center center",
        }}
      >
        <Img
          src={staticFile(image)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </AbsoluteFill>

      {/* Bottom gradient for legibility */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(180deg, rgba(31,34,64,0) 55%, rgba(31,34,64,0.72) 100%)",
        }}
      />

      {/* Caption */}
      <div
        style={{
          position: "absolute",
          left: 96,
          bottom: 96,
          color: COLORS.cream,
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
        }}
      >
        <div
          style={{
            fontFamily: "Anton, Impact, sans-serif",
            fontSize: 124,
            lineHeight: 0.95,
            letterSpacing: -2,
            textTransform: "uppercase",
          }}
        >
          {label}
        </div>
        <div
          style={{
            marginTop: 18,
            height: 8,
            width: lineWidth,
            background: COLORS.coral,
            borderRadius: 4,
          }}
        />
        {sublabel ? (
          <div
            style={{
              marginTop: 18,
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: 30,
              opacity: subOpacity,
              maxWidth: 900,
            }}
          >
            {sublabel}
          </div>
        ) : null}
      </div>
    </AbsoluteFill>
  );
};
