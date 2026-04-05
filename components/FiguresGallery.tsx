"use client";

import { useMemo, useState } from "react";

import { FigureModal } from "@/components/FigureModal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { withBasePath } from "@/lib/base-path";
import type { FigureItem } from "@/lib/types";

type FiguresGalleryProps = {
  figures: FigureItem[];
};

const groupOrder: Array<NonNullable<FigureItem["group"]>> = ["Benchmark & Method", "Main Results", "Analysis"];

export function FiguresGallery({ figures }: FiguresGalleryProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const selected = useMemo(() => figures.find((item) => item.id === activeId) ?? null, [activeId, figures]);

  const grouped = useMemo(() => {
    const map = new Map<string, FigureItem[]>();
    figures.forEach((figure) => {
      const key = figure.group ?? "Main Results";
      map.set(key, [...(map.get(key) ?? []), figure]);
    });
    return map;
  }, [figures]);

  return (
    <>
      <div className="space-y-8">
        {groupOrder
          .filter((group) => grouped.has(group))
          .map((group) => (
            <div key={group}>
              <h3 className="mb-3 text-lg font-semibold tracking-tight">{group}</h3>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {(grouped.get(group) ?? []).map((figure) => (
                  <button
                    type="button"
                    key={figure.id}
                    onClick={() => setActiveId(figure.id)}
                    className="text-left transition-transform hover:-translate-y-0.5"
                  >
                    <Card className="h-full overflow-hidden border-border/70">
                      <div className="border-b border-border/60 bg-muted/25 p-3">
                        <div className="overflow-hidden rounded-lg border border-border/60 bg-white">
                          {isPdfFigure(figure.image) ? (
                            <div className="flex h-[180px] items-center justify-center p-3 text-center text-sm text-muted-foreground">
                              {figure.number} preview (PDF). Click to open.
                            </div>
                          ) : (
                            <img
                              src={withBasePath(figure.image)}
                              alt={figure.alt}
                              className="h-[180px] w-full object-contain"
                              loading="lazy"
                            />
                          )}
                        </div>
                      </div>
                      <CardHeader className="pb-3">
                        <div className="text-xs font-medium text-primary">{figure.number}</div>
                        <CardTitle className="text-base">{figure.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{figure.caption}</CardDescription>
                        {figure.keyInsight ? <p className="mt-2 text-xs text-muted-foreground">Insight: {figure.keyInsight}</p> : null}
                      </CardContent>
                    </Card>
                  </button>
                ))}
              </div>
            </div>
          ))}
      </div>
      <FigureModal figure={selected} open={Boolean(activeId)} onOpenChange={(open) => setActiveId(open ? activeId : null)} />
    </>
  );
}

function isPdfFigure(path: string) {
  return path.toLowerCase().endsWith(".pdf");
}