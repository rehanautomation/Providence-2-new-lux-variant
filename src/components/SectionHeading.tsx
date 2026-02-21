import ScrollReveal from "./ScrollReveal";
import { cn } from "@/lib/utils";

interface Props {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({ title, subtitle, align = "center", className }: Props) {
  return (
    <ScrollReveal className={cn(align === "center" ? "text-center" : "text-left", className)}>
      <div className="divider-gold mx-auto mb-8" style={align === "left" ? { marginLeft: 0 } : {}} />
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-sm md:text-base font-light text-muted-foreground max-w-2xl leading-relaxed" style={align === "center" ? { margin: "0 auto" } : {}}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
