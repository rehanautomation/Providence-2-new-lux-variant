import { cn } from "@/lib/utils";

type Landscape = "forest" | "ocean" | "desert" | "mountain" | "valley" | "cliff";

const gradients: Record<Landscape, string> = {
  forest: "from-[hsl(145,25%,75%)] via-[hsl(140,20%,82%)] to-[hsl(145,25%,70%)]",
  ocean: "from-[hsl(200,25%,75%)] via-[hsl(190,20%,82%)] to-[hsl(200,25%,72%)]",
  desert: "from-[hsl(35,30%,78%)] via-[hsl(37,35%,85%)] to-[hsl(30,25%,75%)]",
  mountain: "from-[hsl(220,15%,78%)] via-[hsl(210,12%,85%)] to-[hsl(220,15%,74%)]",
  valley: "from-[hsl(120,15%,74%)] via-[hsl(110,18%,80%)] to-[hsl(130,12%,72%)]",
  cliff: "from-[hsl(210,10%,78%)] via-[hsl(200,8%,84%)] to-[hsl(210,12%,76%)]",
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
        <div className="w-full h-full border-glass bg-white/[0.25] backdrop-blur-[2px]" />
        {/* Reflection below */}
        <div className="w-full h-[30%] mt-px bg-white/[0.12] border-x border-b border-white/[0.15] opacity-60 scale-y-[-0.5] origin-top" />
      </div>

      {/* Atmosphere glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-background/20" />
    </div>
  );
}
