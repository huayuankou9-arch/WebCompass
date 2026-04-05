"use client";

import { useMemo, useState } from "react";

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
      <div className="space-y-6">
        {items.map((item, index) => {
          const figure = pickFigureById(figures, item.figureId);
          if (!figure) return null;

          return (
            <div key={item.title} className="grid gap-4 lg:grid-cols-2 lg:items-stretch">
              <Card className={cn("border-border/70", index % 2 === 1 && "lg:order-2") }>
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.insight}</p>
                </CardContent>
              </Card>
              <div className={cn(index % 2 === 1 && "lg:order-1") }>
                <InlineFigureCard figure={figure} onOpen={() => setActiveId(figure.id)} />
              </div>
            </div>
          );
        })}
      </div>
      <FigureModal figure={activeFigure} open={Boolean(activeId)} onOpenChange={(open) => setActiveId(open ? activeId : null)} />
    </>
  );
}