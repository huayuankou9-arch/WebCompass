import type { FigureItem } from "@/lib/types";

export const figureItems: FigureItem[] = [
  {
    id: "overview",
    number: "Figure 1",
    title: "WebCompass Overview",
    caption:
      "Overview of WebCompass: three modalities (text, image, video) and three task types (generation, editing, repair) forming seven categories.",
    image: "/figures/overview.png",
    alt: "Overview of WebCompass"
  },
  {
    id: "radar",
    number: "Figure 2",
    title: "Dimension Radar",
    caption: "Radar chart of model performance across all seven task categories.",
    image: "/figures/webcompass_radial.png",
    alt: "WebCompass radial chart"
  },
  {
    id: "difficulty-dist",
    number: "Figure 3",
    title: "Difficulty Distribution",
    caption:
      "Difficulty-oriented dataset statistics across WebCompass tasks. TODO: replace with task_distribution_heatmap_stacked converted asset if needed.",
    image: "/figures/data_statis2.png",
    alt: "Difficulty distribution statistics"
  },
  {
    id: "benchmark-comp",
    number: "Figure 4",
    title: "Benchmark Comparison",
    caption:
      "Cross-benchmark ranking and comparison view. TODO: replace with final benchmark comparison figure from camera-ready set if needed.",
    image: "/figures/web-bench-arena-rank.png",
    alt: "Benchmark comparison view"
  },
  {
    id: "edit-breakdown",
    number: "Figure 5",
    title: "Edit Subtask Breakdown",
    caption:
      "Main experimental overview used as edit-related visual placeholder. TODO: replace with edit_subtask_bars converted asset.",
    image: "/figures/main_results_overview.png",
    alt: "Edit subtask proxy figure"
  },
  {
    id: "repair-breakdown",
    number: "Figure 6",
    title: "Repair Subtask Breakdown",
    caption:
      "Checklist score analysis used as repair-related visual placeholder. TODO: replace with repair_subtask_bars converted asset.",
    image: "/figures/check-list-score.png",
    alt: "Repair subtask proxy figure"
  },
  {
    id: "difficulty-analysis",
    number: "Figure 7",
    title: "Difficulty-Level Analysis",
    caption: "Model scores across difficulty levels (Easy/Medium/Hard).",
    image: "/figures/Score_of_diff_difficulty.png",
    alt: "Difficulty level analysis"
  },
  {
    id: "error-analysis",
    number: "Figure 8",
    title: "Error Analysis",
    caption:
      "Consistency and stability trends under stricter evaluation settings. TODO: replace with error_statics_gen converted asset.",
    image: "/figures/consistency_stability_linechart.png",
    alt: "Error and stability analysis proxy"
  }
];
