// Illustration design tokens — reuse across all SVG illustrations
// Keep palette in sync with src/styles.css brand tokens.

export const illu = {
  // Colors (hex equivalents of brand oklch tokens for SVG use)
  ink: "#1F2240",
  inkSoft: "#3A3F66",
  cream: "#FBF7EE",
  creamDeep: "#F1E8D4",
  coral: "#E8784E",
  coralDeep: "#C95C36",
  skin: "#E2B393",
  skinShadow: "#C99373",

  // Geometry
  stroke: "#1F2240",
  strokeWidth: 2.4,         // characters
  iconStrokeWidth: 1.8,     // small icons
  cornerRadius: 6,

  // Character proportions (head:body ≈ 1:2.4, kid style)
  headRatio: 0.32,
  shoulderRatio: 0.7,
} as const;
