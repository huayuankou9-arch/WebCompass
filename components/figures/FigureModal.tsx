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

function isPdf(src: string) {
  return src.toLowerCase().endsWith(".pdf");
}

export function FigureModal({ figure, open, onOpenChange }: FigureModalProps) {
  if (!figure) return null;
  const modalSrc = figure.fullSrc ?? figure.previewSrc;
  if (!modalSrc) return null;

  const src = withBasePath(modalSrc);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl">
        <DialogHeader>
          <DialogTitle>
            {figure.number}: {figure.title}
          </DialogTitle>
          <DialogDescription>{figure.caption}</DialogDescription>
        </DialogHeader>
        <div className="overflow-hidden rounded-lg border border-border bg-white p-2">
          {isPdf(src) ? (
            <iframe
              src={`${src}#toolbar=0&navpanes=0&scrollbar=1`}
              title={figure.alt}
              className="h-[80vh] w-full"
            />
          ) : (
            <img src={src} alt={figure.alt} className="mx-auto h-auto max-h-[80vh] w-full object-contain" loading="lazy" />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
