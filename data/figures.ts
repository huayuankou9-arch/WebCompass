import type { FigureItem } from "@/lib/types";

export const figureItems: FigureItem[] = [
  {
    id: "fig-overview",
    number: "Figure 1",
    title: "Overview of WebCompass",
    caption:
      "WebCompass supports three modalities and three task types, forming seven task categories across the web development lifecycle.",
    previewSrc: "/figures/overview.png",
    alt: "Overview of WebCompass",
    section: "overview",
    priority: "primary"
  },
  {
    id: "fig-task-distribution",
    number: "Figure 2",
    title: "Difficulty Distribution",
    caption: "Difficulty distribution over tasks and categories in WebCompass.",
    previewSrc: "/figures/data_statis2.png",
    alt: "Difficulty distribution heatmap",
    section: "benchmark",
    priority: "primary",
    keyInsight: "Balanced coverage over Easy, Medium, and Hard supports robust stress testing."
  },
  {
    id: "fig-data-pipeline",
    number: "Figure 3",
    title: "Data Construction Pipeline",
    caption: "Pipeline from prototype construction to task instantiation and quality control.",
    previewSrc: "/figures/data_collection_pipeline.png",
    alt: "Data construction pipeline",
    section: "method",
    priority: "primary"
  },
  {
    id: "fig-diff-gen",
    number: "Figure 4",
    title: "Difficulty Comparison in Generation",
    caption: "Per-dimension generation scores across Easy/Medium/Hard difficulty partitions.",
    previewSrc: "/figures/Score_of_diff_difficulty.png",
    alt: "Generation difficulty comparison",
    section: "results",
    priority: "primary",
    keyInsight: "Generation interactivity drops steeply as difficulty increases."
  },
  {
    id: "fig-worst-of-n",
    number: "Figure 5",
    title: "Consistency and Stability (Worst-of-N)",
    caption: "Score degradation under Worst-of-N evaluation.",
    previewSrc: "/figures/consistency_stability_linechart.png",
    alt: "Worst-of-N consistency chart",
    section: "results",
    priority: "primary",
    keyInsight: "Consistency matters beyond pass@1 peaks."
  },
  {
    id: "fig-edit-subtask-bars",
    number: "Figure 6",
    title: "Editing Subtask Breakdown",
    caption: "Performance across 16 editing operation types.",
    previewSrc: "/figures/main_results_overview.png",
    alt: "Editing subtask bars",
    section: "results",
    priority: "primary",
    keyInsight: "Animation-heavy operations remain hardest in editing."
  },
  {
    id: "fig-repair-subtask-bars",
    number: "Figure 7",
    title: "Repair Subtask Breakdown",
    caption: "Performance across 11 defect categories in repair tasks.",
    previewSrc: "/figures/check-list-score.png",
    alt: "Repair subtask bars",
    section: "results",
    priority: "primary",
    keyInsight: "Semantic defects are the dominant repair bottleneck."
  },
  {
    id: "fig-webcompass-radial",
    number: "Figure 8",
    title: "Seven-task Radar Chart",
    caption: "Radar chart of model performance across seven task categories.",
    previewSrc: "/figures/webcompass_radial.png",
    alt: "WebCompass radial chart",
    section: "gallery",
    priority: "secondary"
  },
  {
    id: "fig-llm-judge",
    number: "Figure 9",
    title: "LLM-as-a-Judge Pipeline",
    caption: "Checklist-guided judging pipeline for editing and repair tasks.",
    previewSrc: "/figures/Evaluation_Validity_verification.png",
    alt: "LLM-as-a-Judge pipeline",
    section: "gallery",
    priority: "secondary"
  },
  {
    id: "fig-agent-judge",
    number: "Figure 10",
    title: "Agent-as-a-Judge Pipeline",
    caption: "Browser interaction and evidence-grounded evaluation for generation.",
    previewSrc: "/figures/agent-as-a-judge.png",
    alt: "Agent-as-a-Judge pipeline",
    section: "gallery",
    priority: "secondary"
  },
  {
    id: "fig-rank-comparison",
    number: "Figure 11",
    title: "Agent-based vs Human Ranking",
    caption: "Ranking alignment between automatic evaluation and human assessment.",
    previewSrc: "/figures/web-bench-arena-rank.png",
    alt: "Rank comparison",
    section: "gallery",
    priority: "secondary"
  },
  {
    id: "fig-framework-bar",
    number: "Figure 12",
    title: "Framework Subset Evaluation",
    caption: "Overall scores across React, Vue, and Vanilla subsets.",
    previewSrc: "/figures/benchmark-comparison.svg",
    alt: "Framework comparison",
    section: "gallery",
    priority: "secondary"
  },
  {
    id: "fig-diff-edit",
    number: "Figure 13",
    title: "Difficulty Comparison in Edit",
    caption: "Per-dimension edit scores across difficulty levels.",
    previewSrc: "/figures/difficulty-analysis.svg",
    alt: "Edit difficulty comparison",
    section: "gallery",
    priority: "secondary"
  },
  {
    id: "fig-diff-repair",
    number: "Figure 14",
    title: "Difficulty Comparison in Repair",
    caption: "Per-dimension repair scores across difficulty levels.",
    previewSrc: "/figures/difficulty-distribution.svg",
    alt: "Repair difficulty comparison",
    section: "gallery",
    priority: "secondary"
  },
  {
    id: "fig-combined-violin",
    number: "Figure 15",
    title: "Patch Complexity Distributions",
    caption: "Distribution of patch size and complexity across models.",
    previewSrc: "/figures/radar-chart.svg",
    alt: "Patch complexity violin",
    section: "gallery",
    priority: "secondary"
  },
  {
    id: "fig-error-overall",
    number: "Figure 16",
    title: "Generation Error Distribution (Overall)",
    caption: "Overall generation error distribution across evaluated models.",
    previewSrc: "/figures/error-analysis.svg",
    alt: "Overall generation error distribution",
    section: "gallery",
    priority: "secondary"
  },
  {
    id: "fig-error-by-input",
    number: "Figure 17",
    title: "Generation Error Distribution by Modality",
    caption: "Error distributions in text-, image-, and video-conditioned generation.",
    previewSrc: "/figures/repair-subtask-breakdown.svg",
    alt: "Generation error by modality",
    section: "gallery",
    priority: "secondary"
  },
  {
    id: "fig-error-edit",
    number: "Figure 18",
    title: "Error Distribution in Edit",
    caption: "Quantitative edit error categories and proportions.",
    previewSrc: "/figures/edit-subtask-breakdown.svg",
    alt: "Edit error distribution",
    section: "gallery",
    priority: "secondary"
  },
  {
    id: "fig-error-repair",
    number: "Figure 19",
    title: "Error Distribution in Repair",
    caption: "Quantitative repair error categories and proportions.",
    previewSrc: "/figures/benchmark-comparison.svg",
    alt: "Repair error distribution",
    section: "gallery",
    priority: "secondary"
  }
];

export function getFiguresBySection(section: FigureItem["section"]) {
  return figureItems.filter((figure) => figure.section === section);
}

export function getSupplementaryFigures() {
  return figureItems.filter((figure) => figure.section === "gallery" || figure.priority === "secondary");
}
