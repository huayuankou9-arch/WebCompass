"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { FigureModal } from "@/components/FigureModal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { FigureItem } from "@/lib/types";

type FiguresGalleryProps = {
  figures: FigureItem[];
};

export function FiguresGallery({ figures }: FiguresGalleryProps) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const selected = useMemo(() => figures.find((item) => item.id === activeId) ?? null, [activeId, figures]);

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {figures.map((figure) => (
          <button
            type="button"
            key={figure.id}
            onClick={() => setActiveId(figure.id)}
            className="text-left transition-transform hover:-translate-y-0.5"
          >
            <Card className="h-full overflow-hidden">
              <div className="border-b border-border/60 bg-muted/30 p-3">
                <div className="overflow-hidden rounded-lg border border-border/60 bg-background">
                  <Image
                    src={figure.image}
                    alt={figure.alt}
                    width={900}
                    height={520}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
              <CardHeader className="pb-3">
                <div className="text-xs font-medium text-primary">{figure.number}</div>
                <CardTitle className="text-base">{figure.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{figure.caption}</CardDescription>
              </CardContent>
            </Card>
          </button>
        ))}
      </div>
      <FigureModal figure={selected} open={Boolean(activeId)} onOpenChange={(open) => setActiveId(open ? activeId : null)} />
    </>
  );
}