export const terraFusionBrand = {
  name: "TerraFusion OS",
  essence: "Government. Transcended.",
  tagline: "Government. Transcended.",
  slogan: "Turn Complexity into Clarity.",
  motto: "We do it right the first time.",
  promise: "Every user, every action, every day: simplicity, mastery, and confidence—delivered without compromise.",

  colors: {
    primary: "#0099ff",
    primaryDark: "#0077cc",
    accent: "#00ffaa",
    accentDark: "#00cc88",
    transcend: "#00ffee",
    dark: "#0b1020",
    darkLighter: "#1a1f3a",
    light: "#ffffff",
    gray: "#888888",
    grayLight: "#cccccc",
    error: "#ff3333",
    success: "#00ff88",
    warning: "#ffaa00",
    clarity: "#e0f7ff",
  },

  microcopy: {
    confirmation: [
      "Transcendence complete.",
      "Your path is clear.",
      "All systems: Ready.",
      "Clarity achieved.",
      "Excellence delivered.",
    ],
    loading: [
      "Preparing transcendence…",
      "Advancing county intelligence…",
      "Orchestrating clarity…",
      "Elevating government operations…",
      "Transforming complexity…",
    ],
    error: [
      "Let's clear the path—together.",
      "We anticipate, we adapt, we solve.",
      "Support is standing by your side.",
      "This isn't a setback, it's a setup for clarity.",
      "We're here to help you transcend this.",
    ],
    emptyState: [
      "A blank page for transformation.",
      "Begin your next chapter.",
      "The future starts here.",
      "Your canvas for clarity.",
      "Ready for transcendence.",
    ],
    success: [
      "Transcendence complete.",
      "Your county just got smarter.",
      "Clarity achieved.",
      "Another step toward excellence.",
      "Progress feels inevitable.",
    ],
    welcome: [
      "Welcome to the future.",
      "Government. Transcended.",
      "Your journey to clarity begins.",
      "Excellence starts now.",
      "Transform your county today.",
    ],
  },
} as const

export function getRandomMicrocopy(category: keyof typeof terraFusionBrand.microcopy): string {
  const options = terraFusionBrand.microcopy[category]
  return options[Math.floor(Math.random() * options.length)]
}
