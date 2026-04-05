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
        <div className="overflow-hidden rounded-lg border border-border bg-white p-2">
          {figure.image.toLowerCase().endsWith(".pdf") ? (
            <iframe
              src={withBasePath(figure.image)}
              title={figure.alt}
              className="h-[78vh] w-full rounded-md border border-border/60 bg-white"
            >
              <div className="flex h-[260px] items-center justify-center text-sm text-muted-foreground">
                PDF preview unavailable in current browser.
              </div>
            </iframe>
          ) : (
            <img
              src={withBasePath(figure.image)}
              alt={figure.alt}
              className="mx-auto max-h-[78vh] w-auto max-w-full object-contain"
              loading="lazy"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
