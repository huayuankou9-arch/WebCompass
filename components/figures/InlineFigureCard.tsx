import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { withBasePath } from "@/lib/base-path";
import type { FigureItem } from "@/lib/types";

type InlineFigureCardProps = {
  figure: FigureItem;
  onOpen?: () => void;
};

export function InlineFigureCard({ figure, onOpen }: InlineFigureCardProps) {
  const src = withBasePath(figure.previewSrc);
  const isPdf = src.toLowerCase().endsWith(".pdf");

  return (
    <Card className="overflow-hidden border-border/70 bg-card/90">
      <button type="button" onClick={onOpen} className="block w-full text-left">
        <div className="border-b border-border/60 bg-muted/20 p-3">
          <div className="overflow-hidden rounded-lg border border-border/60 bg-white">
            {isPdf ? (
              <iframe
                src={`${src}#view=FitH`}
                title={figure.alt}
                className="h-[260px] w-full"
              />
            ) : (
              <img src={src} alt={figure.alt} className="h-[260px] w-full object-contain" loading="lazy" />
            )}
          </div>
        </div>
      </button>
      <CardHeader className="pb-2">
        <div className="text-xs font-medium text-primary">{figure.number}</div>
        <CardTitle className="text-base leading-snug">{figure.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{figure.caption}</CardDescription>
        {figure.keyInsight ? <p className="mt-2 text-xs text-muted-foreground">Takeaway: {figure.keyInsight}</p> : null}
      </CardContent>
    </Card>
  );
}