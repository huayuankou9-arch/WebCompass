export type NavItem = {
  label: string;
  href: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type HeroMetric = {
  label: string;
  value: number;
  suffix?: string;
};

export type HighlightItem = {
  title: string;
  description: string;
};

export type TaskCategory = {
  id: string;
  title: string;
  modality: "Text" | "Image" | "Video" | "Diagnostic";
  taskType: "Generation" | "Editing" | "Repair";
  description: string;
};

export type ComparisonRow = {
  benchmark: string;
  size: string;
  editingCount?: number;
  repairCount?: number;
  text: boolean;
  image: boolean;
  video: boolean;
  generation: boolean;
  editing: boolean;
  repair: boolean;
  multiPage: boolean;
  interaction: boolean;
  visual: boolean;
  agentic: boolean;
  reverseDeterministicRepair: boolean;
  isWebCompass?: boolean;
};

export type PipelineStep = {
  title: string;
  description: string;
  tags?: string[];
};

export type FindingItem = {
  title: string;
  summary: string;
  emphasis: string;
};

export type FigureItem = {
  id: string;
  number: string;
  title: string;
  caption: string;
  previewSrc: string;
  fullSrc?: string;
  alt: string;
  section: "overview" | "benchmark" | "method" | "results" | "gallery";
  priority: "primary" | "secondary";
  keyInsight?: string;
};

export type LimitationItem = {
  title: string;
  description: string;
};
