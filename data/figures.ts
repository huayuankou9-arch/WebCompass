import usedFigures from "@/data/usedFigures.json";
import type { FigureItem, FigurePlacement } from "@/lib/types";

type FigureSeed = Omit<FigureItem, "hasRealAsset">;

const referencedFiles = new Set(usedFigures.figures.map((item) => item.file));

const figureSeeds: FigureSeed[] = [
  {
    id: "fig-overview",
    number: "Figure 1",
    title: "Overview of WebCompass",
    caption:
      "WebCompass supports three modalities and three task types, forming seven task categories across the web development lifecycle.",
    takeaway: "A unified benchmark view connects modalities, tasks, and evaluation dimensions.",
    sourceRef: "overview.pdf",
    previewSrc: "/figures/overview.png",
    alt: "Overview of WebCompass benchmark design",
    priority: "primary",
    placement: "overview",
    size: "hero"
  },
  {
    id: "fig-radial",
    number: "Figure 2",
    title: "Seven-task Performance Radar",
    caption: "Radar chart of model performance across seven WebCompass task categories.",
    sourceRef: "webcompass_radial.pdf",
    previewSrc: "/figures/webcompass_radial.png",
    alt: "WebCompass seven-task radar chart",
    priority: "primary",
    placement: "benchmark",
    size: "featured"
  },
  {
    id: "fig-task-distribution",
    number: "Figure 3",
    title: "Task Distribution Heatmap",
    caption: "Difficulty and modality-aware distribution across the WebCompass task inventory.",
    sourceRef: "task_distribution_heatmap_stacked.pdf",
    alt: "Task distribution heatmap",
    priority: "secondary",
    placement: "benchmark",
    size: "compact",
    hideIfMissing: true
  },
  {
    id: "fig-data-pipeline",
    number: "Figure 4",
    title: "Data Construction Pipeline",
    caption: "Pipeline from prototype collection to deterministic task construction and quality control.",
    sourceRef: "data_collection_pipeline.pdf",
    previewSrc: "/figures/data_collection_pipeline.png",
    alt: "Data construction pipeline",
    priority: "primary",
    placement: "method",
    size: "featured"
  },
  {
    id: "fig-llm-judge",
    number: "Figure 5",
    title: "LLM-as-a-Judge for Editing and Repair",
    caption: "Checklist-guided judging pipeline for editing and repair tasks.",
    sourceRef: "llm_as_judge.pdf",
    previewSrc: "/figures/Evaluation_Validity_verification.png",
    alt: "LLM-as-a-Judge evaluation pipeline",
    priority: "secondary",
    placement: "method",
    size: "standard"
  },
  {
    id: "fig-agent-judge",
    number: "Figure 6",
    title: "Agent-as-a-Judge for Generation",
    caption: "Browser-grounded interaction and evidence collection for open-ended generation.",
    sourceRef: "agent_as_a_judge.pdf",
    previewSrc: "/figures/agent-as-a-judge.png",
    alt: "Agent-as-a-Judge pipeline",
    priority: "secondary",
    placement: "method",
    size: "standard"
  },
  {
    id: "fig-diff-gen",
    number: "Figure 7",
    title: "Difficulty Scaling in Generation",
    caption: "Per-dimension generation performance across Easy, Medium, and Hard partitions.",
    takeaway: "Interactivity drops the fastest as generation tasks become harder.",
    sourceRef: "benchmark_dim_comparison_gen.pdf",
    previewSrc: "/figures/Score_of_diff_difficulty.png",
    alt: "Difficulty scaling in generation",
    priority: "primary",
    placement: "results",
    size: "featured"
  },
  {
    id: "fig-edit-subtask",
    number: "Figure 8",
    title: "Editing Subtask Breakdown",
    caption: "Performance across 16 editing operation types with clear difficulty skew on animation-heavy edits.",
    takeaway: "Animation-related edits remain significantly harder than structural edits.",
    sourceRef: "edit_subtask_bars.pdf",
    previewSrc: "/figures/main_results_overview.png",
    alt: "Editing subtask breakdown",
    priority: "primary",
    placement: "results",
    size: "featured"
  },
  {
    id: "fig-repair-subtask",
    number: "Figure 9",
    title: "Repair Subtask Breakdown",
    caption: "Repair performance across defect categories with semantic defects as persistent bottlenecks.",
    takeaway: "Repair quality depends on deeper intent understanding, not only syntax correction.",
    sourceRef: "repair_subtask_bars.pdf",
    previewSrc: "/figures/check-list-score.png",
    alt: "Repair subtask breakdown",
    priority: "primary",
    placement: "results",
    size: "featured"
  },
  {
    id: "fig-consistency",
    number: "Figure 10",
    title: "Consistency Under Worst-of-N",
    caption: "Worst-of-N analysis shows that stable behavior matters more than isolated high-scoring attempts.",
    takeaway: "Consistency is a stronger reliability signal than one-off wins.",
    sourceRef: "consistency_stability_linechart.pdf",
    previewSrc: "/figures/consistency_stability_linechart.png",
    alt: "Consistency and stability line chart",
    priority: "primary",
    placement: "results",
    size: "featured"
  },
  {
    id: "fig-rank",
    number: "Figure 11",
    title: "Agent Ranking Alignment",
    caption: "Comparison between agent-based ranking and human ranking over generation outputs.",
    sourceRef: "rank_comparison.pdf",
    previewSrc: "/figures/web-bench-arena-rank.png",
    alt: "Rank comparison between automatic and human evaluation",
    priority: "secondary",
    placement: "gallery",
    size: "standard"
  },
  {
    id: "fig-framework",
    number: "Figure 12",
    title: "Framework-wise Comparison",
    caption: "Result comparison across framework subsets.",
    sourceRef: "framework_bar.pdf",
    alt: "Framework subset comparison",
    priority: "secondary",
    placement: "gallery",
    size: "compact",
    hideIfMissing: true
  },
  {
    id: "fig-diff-edit",
    number: "Figure 13",
    title: "Difficulty Scaling in Editing",
    caption: "Per-dimension editing performance over increasing difficulty.",
    sourceRef: "benchmark_dim_comparison_edit.pdf",
    previewSrc: "/figures/difficulty-analysis.svg",
    alt: "Difficulty scaling in editing",
    priority: "secondary",
    placement: "gallery",
    size: "standard"
  },
  {
    id: "fig-diff-repair",
    number: "Figure 14",
    title: "Difficulty Scaling in Repair",
    caption: "Per-dimension repair performance over increasing difficulty.",
    sourceRef: "benchmark_dim_comparison_repair.pdf",
    previewSrc: "/figures/difficulty-distribution.svg",
    alt: "Difficulty scaling in repair",
    priority: "secondary",
    placement: "gallery",
    size: "standard"
  },
  {
    id: "fig-violin",
    number: "Figure 15",
    title: "Patch Complexity Distribution",
    caption: "Patch size and complexity distributions across evaluated models.",
    sourceRef: "combined_violin.pdf",
    alt: "Patch complexity distribution",
    priority: "secondary",
    placement: "gallery",
    size: "compact",
    hideIfMissing: true
  },
  {
    id: "fig-error-gen",
    number: "Figure 16",
    title: "Generation Error Distribution",
    caption: "Overall generation error distribution in evaluated model outputs.",
    sourceRef: "error_statics_gen.pdf",
    alt: "Generation error distribution",
    priority: "secondary",
    placement: "gallery",
    size: "compact",
    hideIfMissing: true
  },
  {
    id: "fig-error-gen-input",
    number: "Figure 17",
    title: "Generation Errors by Input Modality",
    caption: "Error distribution split by text, image, and video conditioned generation.",
    sourceRef: "error_statics_gen_by_input.pdf",
    alt: "Generation errors by input modality",
    priority: "secondary",
    placement: "gallery",
    size: "compact",
    hideIfMissing: true
  },
  {
    id: "fig-error-edit",
    number: "Figure 18",
    title: "Editing Error Distribution",
    caption: "Category-level error distribution in editing tasks.",
    sourceRef: "error_dist_edit.pdf",
    alt: "Editing error distribution",
    priority: "secondary",
    placement: "gallery",
    size: "compact",
    hideIfMissing: true
  },
  {
    id: "fig-error-repair",
    number: "Figure 19",
    title: "Repair Error Distribution",
    caption: "Category-level error distribution in repair tasks.",
    sourceRef: "error_dist_repair.pdf",
    alt: "Repair error distribution",
    priority: "secondary",
    placement: "gallery",
    size: "compact",
    hideIfMissing: true
  }
];

export const figureItems: FigureItem[] = figureSeeds
  .filter((figure) => referencedFiles.has(figure.sourceRef))
  .map((figure) => ({
    ...figure,
    hasRealAsset: Boolean(figure.previewSrc)
  }));

export function getFiguresByPlacement(placement: FigurePlacement) {
  return figureItems.filter((figure) => figure.placement === placement);
}

export function getFeaturedFiguresByPlacement(placement: FigurePlacement) {
  return figureItems.filter((figure) => figure.placement === placement && figure.priority === "primary");
}

export function getSupplementaryFigures() {
  return figureItems.filter((figure) => {
    if (figure.placement !== "gallery") return false;
    if (figure.hasRealAsset) return true;
    return !figure.hideIfMissing && figure.priority === "primary";
  });
}
