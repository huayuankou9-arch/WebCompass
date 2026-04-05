"use client";

import { AbstractSection } from "@/components/AbstractSection";
import { BackToTop } from "@/components/BackToTop";
import { BenchmarkComparisonTable } from "@/components/BenchmarkComparisonTable";
import { CitationSection } from "@/components/CitationSection";
import { ConclusionSection } from "@/components/ConclusionSection";
import { EvaluationSection } from "@/components/EvaluationSection";
import { FiguresGallery } from "@/components/FiguresGallery";
import { FindingsSection } from "@/components/FindingsSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { LimitationsSection } from "@/components/LimitationsSection";
import { MainResultsTable } from "@/components/MainResultsTable";
import { Navbar } from "@/components/Navbar";
import { OverviewMatrix } from "@/components/OverviewMatrix";
import { PaperSourceNote } from "@/components/PaperSourceNote";
import { PipelineSection } from "@/components/PipelineSection";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { citation } from "@/data/citation";
import { comparisonRows } from "@/data/comparison";
import { figureItems } from "@/data/figures";
import { additionalFindings, mainFindings } from "@/data/findings";
import { limitations } from "@/data/limitations";
import { mainResultsRows } from "@/data/mainResultsTable";
import { paperSectionMap } from "@/data/paperMapping";
import { heroLinks, navItems, overviewAbstract, overviewHighlights, siteConfig } from "@/data/site";
import { heroMetrics } from "@/data/stats";
import {
  benchmarkFacts,
  constructionPipeline,
  evaluationPipeline,
  taskCategories,
  whyWebCompass
} from "@/data/tasks";
import { useActiveSection, useScrollProgress } from "@/lib/hooks";

const sectionIds = ["overview", "benchmark", "methodology", "findings", "figures", "discussion", "citation"];

export default function HomePage() {
  const activeSection = useActiveSection(sectionIds);
  const progress = useScrollProgress();

  return (
    <main className="relative bg-grid">
      <Navbar items={navItems} activeSection={activeSection} title={siteConfig.name} progress={progress} />

      <HeroSection
        title={siteConfig.title}
        subtitle={siteConfig.subtitle}
        tagline={siteConfig.tagline}
        authors={siteConfig.authors}
        affiliations={siteConfig.affiliations}
        links={heroLinks}
        arxivBadge={siteConfig.links.arxivBadge}
        metrics={heroMetrics}
      />

      <AbstractSection
        abstract={overviewAbstract}
        highlights={overviewHighlights}
        sourceNote={paperSectionMap.overview}
      />

      <SectionContainer id="benchmark">
        <SectionHeading
          eyebrow="Benchmark Overview"
          title="From 3 Modalities and 3 Task Types to 7 Task Categories"
          description="WebCompass jointly covers text, image, and video inputs across generation, editing, and repair, resulting in seven realistic web coding task categories."
        />
        <PaperSourceNote text={paperSectionMap.benchmark} />
        <OverviewMatrix tasks={taskCategories} whyItems={whyWebCompass} />

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Scale</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">{benchmarkFacts.scale}</CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Difficulty</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {benchmarkFacts.difficulty.join(" / ")}
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Generation Domains</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {benchmarkFacts.generationDomains} domains
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Fine-grained Taxonomy</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Editing: {benchmarkFacts.editingOperationTypes} types, Repair: {benchmarkFacts.repairDefectCategories} types
            </CardContent>
          </Card>
        </div>

        <div className="mt-4 rounded-xl border border-border/70 bg-card/60 p-4 text-xs text-muted-foreground md:text-sm">
          Task counts: Text-Guided Generation ({benchmarkFacts.taskCounts.textGuidedGeneration}), Vision-Guided Generation ({benchmarkFacts.taskCounts.visionGuidedGeneration}), Video-Guided Generation ({benchmarkFacts.taskCounts.videoGuidedGeneration}), Text-Guided Editing ({benchmarkFacts.taskCounts.textGuidedEditing}), Vision-Guided Editing ({benchmarkFacts.taskCounts.visionGuidedEditing}), Diagnostic Repair ({benchmarkFacts.taskCounts.diagnosticRepair}), Visual-Diagnostic Repair ({benchmarkFacts.taskCounts.visualDiagnosticRepair}).
        </div>

        <div className="mt-12">
          <SectionHeading
            eyebrow="Benchmark Comparison"
            title="Coverage Against Prior Benchmarks"
            description="Values are aligned to Table 1 in the paper. Rows are intentionally kept explicit for direct replacement or extension."
          />
          <BenchmarkComparisonTable rows={comparisonRows} />
        </div>
      </SectionContainer>

      <SectionContainer id="methodology">
        <SectionHeading
          eyebrow="Data Construction / Methodology"
          title="Deterministic Construction, Task-aware Evaluation"
          description="WebCompass combines human-in-the-loop data curation with task-specific evaluation protocols for patch-based and open-ended settings."
        />
        <PaperSourceNote text={paperSectionMap.methodology} />

        <h3 className="mb-4 text-xl font-semibold">A. Benchmark Data Construction</h3>
        <PipelineSection steps={constructionPipeline} />

        <h3 className="mb-4 mt-12 text-xl font-semibold">B. Evaluation Methodology</h3>
        <EvaluationSection steps={evaluationPipeline} />
      </SectionContainer>

      <SectionContainer id="findings">
        <SectionHeading
          eyebrow="Experimental Findings"
          title="Behavior-level Gaps Surface in Realistic Web Coding"
          description="Findings are aligned to the Main Results and Further Analysis sections in the experiments chapter."
        />
        <PaperSourceNote text={paperSectionMap.findings} />
        <div className="mb-10">
          <SectionHeading
            eyebrow="Main Results Table"
            title="Table 3: Model Comparison Across Task Types and Dimensions"
            description="This table is reproduced from the first table in Paper/sec/4_experiments.tex (tab:main_results)."
          />
          <MainResultsTable rows={mainResultsRows} />
        </div>
        <FindingsSection mainFindings={mainFindings} additionalFindings={additionalFindings} />
      </SectionContainer>

      <SectionContainer id="figures">
        <SectionHeading
          eyebrow="Figures Gallery"
          title="Paper Figures and Visual Summaries"
          description="Click each figure to inspect a larger view. Real PNG assets are loaded from Paper/figures where available."
        />
        <PaperSourceNote text={paperSectionMap.figures} />
        <FiguresGallery figures={figureItems} />
      </SectionContainer>

      <SectionContainer id="discussion">
        <SectionHeading
          eyebrow="Limitations & Discussion"
          title="Honest Scope and Future Directions"
          description="The following points are directly aligned to the limitations section in the paper."
        />
        <PaperSourceNote text={paperSectionMap.discussion} />
        <LimitationsSection items={limitations} />

        <div className="mt-12">
          <SectionHeading
            eyebrow="Conclusion"
            title="Toward More Realistic Evaluation for Web Coding Agents"
            description="WebCompass highlights that advancing web coding agents requires stronger functional reasoning, visual design understanding, and output consistency."
          />
          <ConclusionSection
            text="WebCompass unifies multimodal inputs and lifecycle tasks under evidence-grounded evaluation, positioning web coding agents as holistic builders of user-facing experiences rather than code-only generators."
          />
        </div>
      </SectionContainer>

      <SectionContainer id="citation">
        <SectionHeading
          eyebrow="Citation / Resources"
          title="Use and Extend WebCompass"
          description="If WebCompass is useful for your research, please cite the paper and explore project resources."
        />
        <PaperSourceNote text={paperSectionMap.citation} />
        <CitationSection
          bibtex={citation.bibtex}
          resources={[
            { label: "Paper", href: siteConfig.links.paper },
            { label: "GitHub", href: siteConfig.links.github },
            { label: "Hugging Face", href: siteConfig.links.huggingface },
            { label: "Dataset", href: siteConfig.links.dataset }
          ]}
        />
      </SectionContainer>

      <Footer projectName={siteConfig.name} builtWith={siteConfig.builtWith} />
      <BackToTop />
    </main>
  );
}
