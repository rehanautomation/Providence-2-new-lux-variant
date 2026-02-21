import { cn } from "@/lib/utils";

type Landscape = "forest" | "ocean" | "desert" | "mountain" | "valley" | "cliff";

const gradients: Record<Landscape, string> = {
  forest: "from-deep-forest via-secondary to-deep-forest",
  ocean: "from-[hsl(200,25%,15%)] via-[hsl(190,20%,22%)] to-[hsl(200,25%,12%)]",
  desert: "from-[hsl(35,30%,18%)] via-[hsl(37,35%,25%)] to-[hsl(30,25%,15%)]",
  mountain: "from-[hsl(220,15%,18%)] via-[hsl(210,12%,25%)] to-[hsl(220,15%,14%)]",
  valley: "from-[hsl(120,15%,14%)] via-[hsl(110,18%,20%)] to-[hsl(130,12%,12%)]",
  cliff: "from-[hsl(210,10%,20%)] via-[hsl(200,8%,28%)] to-[hsl(210,12%,16%)]",
};

interface Props {
  landscape: Landscape;
  className?: string;
  aspectRatio?: string;
}

export default function MirrorVillaPlaceholder({ landscape, className, aspectRatio = "4/3" }: Props) {
  return (
    <div
      className={cn(
        "relative overflow-hidden grain-overlay bg-gradient-to-br rounded-sm",
        gradients[landscape],
        className
      )}
      style={{ aspectRatio }}
    >
      {/* Horizon line */}
      <div className="absolute inset-x-0 top-[55%] h-px bg-foreground/5" />
      
      {/* Mirror villa shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[40%]">
        <div className="w-full h-full border-glass bg-foreground/[0.03] backdrop-blur-[1px]" />
        {/* Reflection below */}
        <div className="w-full h-[30%] mt-px bg-foreground/[0.015] border-x border-b border-foreground/[0.06] opacity-60 scale-y-[-0.5] origin-top" />
      </div>

      {/* Atmosphere glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20" />
    </div>
  );
}
