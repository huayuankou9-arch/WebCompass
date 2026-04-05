export type MainResultsRow = {
  model: string;
  group: "Closed-Source" | "Open-Source";
  generation: { ex: number; in: number; ae: number };
  editing: { ex: number; in: number; ae: number };
  repair: { ex: number; in: number; ae: number };
  average: { ex: number; in: number; ae: number };
};

// Table 3 in Paper/sec/4_experiments.tex (tab:main_results)
export const mainResultsRows: MainResultsRow[] = [
  {
    model: "GPT-5.2",
    group: "Closed-Source",
    generation: { ex: 75.38, in: 60.22, ae: 55.92 },
    editing: { ex: 66.97, in: 62.7, ae: 56.63 },
    repair: { ex: 41.24, in: 79.33, ae: 58.7 },
    average: { ex: 61.19, in: 67.42, ae: 57.08 }
  },
  {
    model: "Gemini-3-Pro-Preview",
    group: "Closed-Source",
    generation: { ex: 74.05, in: 55.76, ae: 64.07 },
    editing: { ex: 69.52, in: 65.14, ae: 58.16 },
    repair: { ex: 54.16, in: 87.3, ae: 72.0 },
    average: { ex: 65.91, in: 69.4, ae: 64.74 }
  },
  {
    model: "Claude-Opus-4.5",
    group: "Closed-Source",
    generation: { ex: 77.18, in: 68.95, ae: 62.26 },
    editing: { ex: 71.86, in: 65.82, ae: 60.83 },
    repair: { ex: 48.45, in: 85.54, ae: 65.71 },
    average: { ex: 65.83, in: 73.44, ae: 62.93 }
  },
  {
    model: "Gemini-3-Flash-Preview",
    group: "Closed-Source",
    generation: { ex: 74.87, in: 54.32, ae: 62.42 },
    editing: { ex: 65.95, in: 62.35, ae: 57.21 },
    repair: { ex: 53.18, in: 86.84, ae: 71.65 },
    average: { ex: 64.67, in: 67.84, ae: 63.76 }
  },
  {
    model: "Claude-Sonnet-4.5",
    group: "Closed-Source",
    generation: { ex: 65.3, in: 50.37, ae: 56.78 },
    editing: { ex: 60.06, in: 53.71, ae: 45.51 },
    repair: { ex: 40.44, in: 80.63, ae: 61.31 },
    average: { ex: 53.46, in: 63.58, ae: 54.06 }
  },
  {
    model: "Qwen3-VL-235B-A22B-Instruct",
    group: "Open-Source",
    generation: { ex: 61.26, in: 42.14, ae: 47.06 },
    editing: { ex: 27.74, in: 25.48, ae: 23.53 },
    repair: { ex: 27.3, in: 68.87, ae: 46.88 },
    average: { ex: 38.77, in: 45.5, ae: 39.16 }
  },
  {
    model: "Qwen3-VL-235B-A22B-Thinking",
    group: "Open-Source",
    generation: { ex: 63.86, in: 35.02, ae: 45.21 },
    editing: { ex: 22.15, in: 21.67, ae: 19.06 },
    repair: { ex: 27.02, in: 68.74, ae: 46.28 },
    average: { ex: 37.68, in: 41.81, ae: 36.85 }
  },
  {
    model: "Qwen3-VL-30B-A3B-Instruct",
    group: "Open-Source",
    generation: { ex: 41.79, in: 20.8, ae: 29.28 },
    editing: { ex: 20.57, in: 20.97, ae: 17.93 },
    repair: { ex: 19.32, in: 50.71, ae: 31.35 },
    average: { ex: 27.23, in: 30.83, ae: 26.19 }
  },
  {
    model: "Qwen3-VL-30B-A3B-Thinking",
    group: "Open-Source",
    generation: { ex: 47.37, in: 20.87, ae: 37.47 },
    editing: { ex: 19.82, in: 21.21, ae: 18.2 },
    repair: { ex: 18.08, in: 51.85, ae: 31.31 },
    average: { ex: 28.42, in: 31.31, ae: 28.99 }
  },
  {
    model: "Qwen3-VL-32B-Instruct",
    group: "Open-Source",
    generation: { ex: 50.39, in: 25.62, ae: 34.56 },
    editing: { ex: 26.96, in: 26.62, ae: 22.78 },
    repair: { ex: 24.67, in: 61.93, ae: 43.27 },
    average: { ex: 34.01, in: 38.05, ae: 33.54 }
  }
];