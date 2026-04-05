"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { withBasePath } from "@/lib/base-path";
import type { FigureItem } from "@/lib/types";

type FigureModalProps = {
  figure: FigureItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function FigureModal({ figure, open, onOpenChange }: FigureModalProps) {
  if (!figure) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{figure.number}: {figure.title}</DialogTitle>
          <DialogDescription>{figure.caption}</DialogDescription>
        </DialogHeader>
        <div className="overflow-hidden rounded-lg border border-border bg-muted/40">
          {figure.image.toLowerCase().endsWith(".pdf") ? (
            <object
              data={withBasePath(figure.image)}
              type="application/pdf"
              className="h-[75vh] w-full"
              aria-label={figure.alt}
            >
              <div className="flex h-[260px] items-center justify-center text-sm text-muted-foreground">
                PDF preview unavailable in current browser.
              </div>
            </object>
          ) : (
            <img src={withBasePath(figure.image)} alt={figure.alt} className="h-auto w-full object-cover" loading="lazy" />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
