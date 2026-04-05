"use client";

import { useState } from "react";

import { FigureModal } from "@/components/figures/FigureModal";
import { InlineFigureCard } from "@/components/figures/InlineFigureCard";
import type { FigureItem } from "@/lib/types";

type InlineFigureSpotlightProps = {
  figure: FigureItem;
};

export function InlineFigureSpotlight({ figure }: InlineFigureSpotlightProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <InlineFigureCard figure={figure} onOpen={() => setOpen(true)} />
      <FigureModal figure={figure} open={open} onOpenChange={setOpen} />
    </>
  );
}