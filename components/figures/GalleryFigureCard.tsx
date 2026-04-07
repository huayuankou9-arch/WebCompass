import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FigureFallbackCard } from "@/components/figures/FigureFallbackCard";
import { withBasePath } from "@/lib/base-path";
import type { FigureItem } from "@/lib/types";

type GalleryFigureCardProps = {
  figure: FigureItem;
  onOpen?: () => void;
};

export function GalleryFigureCard({ figure, onOpen }: GalleryFigureCardProps) {
  if (!figure.previewSrc) {
    if (figure.hideIfMissing) return null;
    return <FigureFallbackCard number={figure.number} title={figure.title} caption={figure.caption} />;
  }

  const src = withBasePath(figure.previewSrc);

  return (
    <Card className="h-full overflow-hidden border-border/70 bg-card/95">
      <button type="button" onClick={onOpen} className="block w-full text-left">
        <div className="border-b border-border/60 bg-muted/10 p-2">
          <div className="overflow-hidden rounded-lg border border-border/60 bg-white">
            <img src={src} alt={figure.alt} className="mx-auto h-auto w-full max-h-[320px]" loading="lazy" />
          </div>
        </div>
      </button>
      <CardHeader className="pb-1">
        <div className="text-xs font-medium text-primary">{figure.number}</div>
        <CardTitle className="text-base leading-snug">{figure.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm leading-relaxed">{figure.caption}</CardDescription>
      </CardContent>
    </Card>
  );
}
