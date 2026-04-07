"use client";

import { useMemo, useState } from "react";

import { FigureFallbackCard } from "@/components/figures/FigureFallbackCard";
import { FigureModal } from "@/components/figures/FigureModal";
import { InlineFigureCard } from "@/components/figures/InlineFigureCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { pickFigureById } from "@/data/resultsShowcase";
import type { FigureItem } from "@/lib/types";
import { cn } from "@/lib/utils";

type ResultsShowcaseProps = {
  figures: FigureItem[];
  items: Array<{
    title: string;
    insight: string;
    figureId: string;
  }>;
};

export function ResultsShowcase({ figures, items }: ResultsShowcaseProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeFigure = useMemo(() => figures.find((f) => f.id === activeId) ?? null, [activeId, figures]);

  return (
    <>
      <div className="space-y-8">
        {items.map((item, index) => {
          const figure = pickFigureById(figures, item.figureId);
          if (!figure) return null;

          return (
            <div key={item.title} className={cn("grid gap-5 rounded-2xl border border-border/70 bg-card/60 p-4 lg:p-5", figure.size === "featured" ? "grid-cols-1" : "lg:grid-cols-2")}>
              <div className={cn(figure.size !== "featured" && index % 2 === 1 && "lg:order-2")}>
                {figure.hasRealAsset ? (
                  <InlineFigureCard figure={figure} onOpen={() => setActiveId(figure.id)} />
                ) : (
                  <FigureFallbackCard number={figure.number} title={figure.title} caption={figure.caption} />
                )}
              </div>
              <Card className={cn("border-border/70 bg-background/75", figure.size !== "featured" && index % 2 === 1 && "lg:order-1")}>
                <CardHeader>
                  <div className="text-xs font-medium uppercase tracking-wide text-primary">{figure.number}</div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.insight}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{figure.caption}</p>
                  {figure.takeaway ? (
                    <p className="mt-3 text-xs text-muted-foreground">Takeaway: {figure.takeaway}</p>
                  ) : null}
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
      <FigureModal figure={activeFigure} open={Boolean(activeId)} onOpenChange={(open) => setActiveId(open ? activeId : null)} />
    </>
  );
}
