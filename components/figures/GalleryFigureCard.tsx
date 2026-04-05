import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { withBasePath } from "@/lib/base-path";
import type { FigureItem } from "@/lib/types";

type GalleryFigureCardProps = {
  figure: FigureItem;
  onOpen?: () => void;
};

export function GalleryFigureCard({ figure, onOpen }: GalleryFigureCardProps) {
  const src = withBasePath(figure.previewSrc);

  return (
    <Card className="h-full overflow-hidden border-border/70">
      <button type="button" onClick={onOpen} className="block w-full text-left">
        <div className="border-b border-border/60 bg-muted/20 p-3">
          <div className="overflow-hidden rounded-lg border border-border/60 bg-white">
            <img src={src} alt={figure.alt} className="h-[160px] w-full object-contain" loading="lazy" />
          </div>
        </div>
      </button>
      <CardHeader className="pb-2">
        <div className="text-xs font-medium text-primary">{figure.number}</div>
        <CardTitle className="text-sm">{figure.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-xs">{figure.caption}</CardDescription>
      </CardContent>
    </Card>
  );
}
