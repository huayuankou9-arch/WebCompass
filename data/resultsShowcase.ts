import type { FigureItem } from "@/lib/types";

export const resultShowcase: Array<{
  title: string;
  insight: string;
  figureId: string;
}> = [
  {
    title: "Difficulty Scaling",
    insight: "Performance drops monotonically from Easy to Hard across task families.",
    figureId: "fig-diff-gen"
  },
  {
    title: "Interactivity Bottleneck",
    insight: "Generation quality degrades most severely on interactivity under complex requirements.",
    figureId: "fig-diff-repair"
  },
  {
    title: "Editing Difficulty",
    insight: "Animation-heavy operations remain harder than business workflow edits.",
    figureId: "fig-edit-subtask-bars"
  },
  {
    title: "Repair Difficulty",
    insight: "Semantic-level defects remain the major bottleneck in repair tasks.",
    figureId: "fig-repair-subtask-bars"
  }
];

export function pickFigureById(figures: FigureItem[], id: string) {
  return figures.find((figure) => figure.id === id) ?? null;
}