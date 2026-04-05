import type { LinkItem, NavItem } from "@/lib/types";

export const siteConfig = {
  name: "WebCompass",
  title: "WebCompass",
  subtitle: "A Unified Multimodal Benchmark and Evaluation Framework for Web Coding",
  tagline:
    "WebCompass unifies text-, image-, and video-grounded web coding tasks across generation, editing, and repair, with task-aware evaluation for execution, interactivity, and aesthetics.",
  description:
    "Official project page for WebCompass, a unified multimodal benchmark and evaluation framework for realistic web engineering scenarios.",
  authors: "Author A, Author B, Author C",
  affiliations: "Affiliation 1 · Affiliation 2",
  builtWith: "Next.js, Tailwind CSS, Framer Motion, shadcn/ui",
  links: {
    paper: "https://arxiv.org/abs/TODO",
    github: "https://github.com/huayuankou9-arch/WebCompass",
    huggingface: "https://huggingface.co/datasets/TODO/webcompass",
    dataset: "https://huggingface.co/datasets/TODO/webcompass",
    arxivBadge: "https://arxiv.org/abs/TODO"
  }
};

export const navItems: NavItem[] = [
  { label: "Overview", href: "#overview" },
  { label: "Benchmark", href: "#benchmark" },
  { label: "Methodology", href: "#methodology" },
  { label: "Findings", href: "#findings" },
  { label: "Figures", href: "#figures" },
  { label: "Discussion", href: "#discussion" },
  { label: "Citation", href: "#citation" }
];

export const heroLinks: LinkItem[] = [
  { label: "Paper", href: siteConfig.links.paper },
  { label: "GitHub", href: siteConfig.links.github },
  { label: "Hugging Face", href: siteConfig.links.huggingface },
  { label: "Citation", href: "#citation" }
];

export const overviewHighlights = [
  "Unified lifecycle coverage across generation, editing, and repair with text/image/video inputs.",
  "Rigorous and deterministic task construction with reverse verifiable repair annotations.",
  "Task-aware evaluation: Agent-as-a-Judge for generation, checklist-guided LLM-as-a-Judge for editing/repair.",
  "Three shared evaluation dimensions: Execution, Interactivity, and Aesthetics.",
  "Realistic web engineering scenarios emphasizing multi-page behavior and interaction fidelity."
];

export const overviewAbstract =
  "Evaluating web coding requires more than code correctness: success depends on runtime execution, interaction behavior, and visual quality in browser environments. WebCompass addresses this gap with a unified multimodal benchmark spanning text, image, and video inputs, and lifecycle tasks across generation, editing, and repair. The benchmark is designed for realistic front-end engineering scenarios with deterministic construction and evidence-grounded evaluation.";