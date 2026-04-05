"use client";

import { useMemo, useState } from "react";

import { FigureModal } from "@/components/FigureModal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { withBasePath } from "@/lib/base-path";
import type { FigureItem } from "@/lib/types";
import { pickFigureById } from "@/data/resultsShowcase";

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
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((item) => {
          const figure = pickFigureById(figures, item.figureId);
          if (!figure) return null;

          return (
            <button
              type="button"
              key={item.title}
              onClick={() => setActiveId(figure.id)}
              className="text-left transition-transform hover:-translate-y-0.5"
            >
              <Card className="h-full border-border/70">
                <div className="rounded-t-xl border-b border-border/60 bg-muted/30 p-3">
                  {figure.image.toLowerCase().endsWith(".pdf") ? (
                    <div className="flex h-[180px] items-center justify-center rounded-md border border-border/60 bg-white text-sm text-muted-foreground">
                      {figure.number} • PDF Figure
                    </div>
                  ) : (
                    <img src={withBasePath(figure.image)} alt={figure.alt} className="h-[180px] w-full rounded-md object-contain bg-white" />
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.insight}</p>
                </CardContent>
              </Card>
            </button>
          );
        })}
      </div>
      <FigureModal figure={activeFigure} open={Boolean(activeId)} onOpenChange={(open) => setActiveId(open ? activeId : null)} />
    </>
  );
}