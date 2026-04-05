"use client";

import { withBasePath } from "@/lib/base-path";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import type { FigureItem } from "@/lib/types";

type FigureModalProps = {
  figure: FigureItem | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function FigureModal({ figure, open, onOpenChange }: FigureModalProps) {
  if (!figure) return null;

  const src = withBasePath(figure.fullSrc ?? figure.previewSrc);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{figure.number}: {figure.title}</DialogTitle>
          <DialogDescription>{figure.caption}</DialogDescription>
        </DialogHeader>
        <div className="overflow-hidden rounded-lg border border-border bg-white p-2">
          <img src={src} alt={figure.alt} className="mx-auto max-h-[78vh] w-auto max-w-full object-contain" loading="lazy" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
