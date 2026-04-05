import type { FigureItem } from "@/lib/types";

// Figures listed strictly by order of \includegraphics references in Paper/sec (main text).
export const figureItems: FigureItem[] = [
  {
    id: "fig-webcompass-radial",
    number: "Figure 1",
    title: "Radar Chart Across Seven Task Types",
    caption: "Radar chart of model performance across all seven task types in WebCompass.",
    image: "/figures/webcompass_radial.pdf",
    alt: "WebCompass radial chart",
    group: "Benchmark & Method"
  },
  {
    id: "fig-task-distribution",
    number: "Figure 2",
    title: "Difficulty Distribution of WebCompass",
    caption: "Difficulty distribution of WebCompass.",
    image: "/figures/task_distribution_heatmap_stacked.pdf",
    alt: "Difficulty distribution heatmap",
    group: "Benchmark & Method",
    keyInsight: "Benchmark spans balanced Easy/Medium/Hard distributions."
  },
  {
    id: "fig-overview",
    number: "Figure 3",
    title: "Overview of WebCompass",
    caption:
      "The benchmark supports three input modalities and three task types, resulting in seven complementary categories.",
    image: "/figures/overview.pdf",
    alt: "Overview of WebCompass",
    group: "Benchmark & Method"
  },
  {
    id: "fig-data-pipeline",
    number: "Figure 4",
    title: "Data Construction Pipeline",
    caption: "Data construction pipeline for WebCompass across prototype collection and task-specific generation.",
    image: "/figures/data_collection_pipeline.pdf",
    alt: "Data construction pipeline",
    group: "Benchmark & Method"
  },
  {
    id: "fig-llm-judge",
    number: "Figure 5",
    title: "LLM-as-a-Judge Pipeline",
    caption: "Illustration of the LLM-as-a-Judge evaluation pipeline.",
    image: "/figures/llm_as_judge.pdf",
    alt: "LLM-as-a-Judge pipeline",
    group: "Benchmark & Method"
  },
  {
    id: "fig-agent-judge",
    number: "Figure 6",
    title: "Agent-as-a-Judge Pipeline",
    caption:
      "Agent-as-a-Judge evaluation with browser interaction, MCP evidence collection, and adaptive verification.",
    image: "/figures/agent_as_a_judge.pdf",
    alt: "Agent-as-a-Judge pipeline",
    group: "Benchmark & Method"
  },
  {
    id: "fig-rank-comparison",
    number: "Figure 7",
    title: "Agent-based vs Human Ranking",
    caption:
      "Model ranking comparison between automatic agent-based evaluation and human evaluation.",
    image: "/figures/rank_comparison.pdf",
    alt: "Rank comparison",
    group: "Main Results"
  },
  {
    id: "fig-framework-bar",
    number: "Figure 8",
    title: "Framework Subset Evaluation",
    caption: "Overall scores across React, Vue, and Vanilla frameworks for representative models.",
    image: "/figures/framework_bar.pdf",
    alt: "Framework comparison",
    group: "Main Results"
  },
  {
    id: "fig-edit-subtask-bars",
    number: "Figure 9",
    title: "Editing Subtask Breakdown",
    caption: "Overall score breakdown for editing tasks across 16 operation types.",
    image: "/figures/edit_subtask_bars.pdf",
    alt: "Editing subtask bars",
    group: "Main Results",
    keyInsight: "Animation-heavy operations are the hardest edit class."
  },
  {
    id: "fig-repair-subtask-bars",
    number: "Figure 10",
    title: "Repair Subtask Breakdown",
    caption: "Overall score breakdown for repair tasks across 11 defect categories.",
    image: "/figures/repair_subtask_bars.pdf",
    alt: "Repair subtask bars",
    group: "Main Results",
    keyInsight: "Semantic defects remain the hardest repair category."
  },
  {
    id: "fig-diff-gen",
    number: "Figure 11",
    title: "Difficulty Comparison in Generation",
    caption: "Per-dimension scores across Easy/Medium/Hard for generation tasks.",
    image: "/figures/benchmark_dim_comparison_gen.pdf",
    alt: "Generation difficulty comparison",
    group: "Main Results",
    keyInsight: "Interactivity drops sharply on hard generation tasks."
  },
  {
    id: "fig-diff-edit",
    number: "Figure 12",
    title: "Difficulty Comparison in Edit",
    caption: "Per-dimension scores across Easy/Medium/Hard for edit tasks.",
    image: "/figures/benchmark_dim_comparison_edit.pdf",
    alt: "Edit difficulty comparison",
    group: "Main Results"
  },
  {
    id: "fig-diff-repair",
    number: "Figure 13",
    title: "Difficulty Comparison in Repair",
    caption: "Per-dimension scores across Easy/Medium/Hard for repair tasks.",
    image: "/figures/benchmark_dim_comparison_repair.pdf",
    alt: "Repair difficulty comparison",
    group: "Main Results"
  },
  {
    id: "fig-combined-violin",
    number: "Figure 14",
    title: "Patch Complexity Distributions",
    caption: "Distribution of changed lines and patch complexity across models.",
    image: "/figures/combined_violin.pdf",
    alt: "Patch complexity violin",
    group: "Main Results"
  },
  {
    id: "fig-worst-of-n",
    number: "Figure 15",
    title: "Consistency and Stability (Worst-of-N)",
    caption: "Score degradation from Pass@1 to Worst-of-4 under consistency stress testing.",
    image: "/figures/consistency_stability_linechart.pdf",
    alt: "Worst-of-N consistency chart",
    group: "Main Results",
    keyInsight: "Consistency gaps persist even for strong average performers."
  },
  {
    id: "fig-error-overall",
    number: "Figure 16",
    title: "Generation Error Distribution (Overall)",
    caption: "Overall error distribution across evaluated models on generation tasks.",
    image: "/figures/error_statics_gen.pdf",
    alt: "Overall generation error distribution",
    group: "Analysis"
  },
  {
    id: "fig-error-by-input",
    number: "Figure 17",
    title: "Generation Error Distribution by Modality",
    caption: "Error distributions split by text-, image-, and video-conditioned generation.",
    image: "/figures/error_statics_gen_by_input.pdf",
    alt: "Generation error by modality",
    group: "Analysis"
  },
  {
    id: "fig-error-edit",
    number: "Figure 18",
    title: "Quantitative Error Distribution in Edit",
    caption: "Error type proportions and counts for edit tasks.",
    image: "/figures/error_dist_edit.pdf",
    alt: "Edit error distribution",
    group: "Analysis"
  },
  {
    id: "fig-error-repair",
    number: "Figure 19",
    title: "Quantitative Error Distribution in Repair",
    caption: "Error type proportions and counts for repair tasks.",
    image: "/figures/error_dist_repair.pdf",
    alt: "Repair error distribution",
    group: "Analysis"
  }
];