import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { withBasePath } from "@/lib/base-path";
import type { FigureItem } from "@/lib/types";
import { cn } from "@/lib/utils";

type InlineFigureCardProps = {
  figure: FigureItem;
  onOpen?: () => void;
  className?: string;
};

const figureSizeClass: Record<FigureItem["size"], string> = {
  hero: "max-h-[680px]",
  featured: "max-h-[560px]",
  standard: "max-h-[440px]",
  compact: "max-h-[300px]"
};

export function InlineFigureCard({ figure, onOpen, className }: InlineFigureCardProps) {
  if (!figure.previewSrc) return null;
  const src = withBasePath(figure.previewSrc);

  return (
    <Card className={cn("overflow-hidden border-border/70 bg-card/95", className)}>
      <button type="button" onClick={onOpen} className="block w-full text-left">
        <div className="border-b border-border/60 bg-muted/10 p-2 md:p-3">
          <div className="overflow-hidden rounded-lg border border-border/60 bg-white">
            <img
              src={src}
              alt={figure.alt}
              className={cn("mx-auto h-auto w-full", figureSizeClass[figure.size])}
              loading="lazy"
            />
          </div>
        </div>
      </button>
      <CardHeader className="space-y-2 pb-1">
        <div className="text-xs font-medium text-primary">{figure.number}</div>
        <CardTitle className="text-base leading-snug md:text-lg">{figure.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <CardDescription className="text-sm leading-relaxed">{figure.caption}</CardDescription>
        {figure.takeaway ? <p className="mt-2 text-xs text-muted-foreground">Takeaway: {figure.takeaway}</p> : null}
      </CardContent>
    </Card>
  );
}
