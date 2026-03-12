import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import SectionHeading from "@/components/SectionHeading";

export default function OurResponsibility() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="py-40 px-6 text-center">
        <h1 className="font-heading text-5xl md:text-7xl font-light">Our Responsibility</h1>
        <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
          We believe luxury and responsibility are not mutually exclusive. They are, in fact, intrinsically linked.
        </p>
      </section>

      {/* Our Philosophy */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal>
            <AspectRatio ratio={3/4}>
              <img src="https://image2url.com/r2/default/images/1773323051295-48dc24c1-23f2-4ac4-86c9-738c3d32a8b1.jpg" alt="Our Philosophy" className="absolute inset-0 w-full h-full object-cover" />
            </AspectRatio>
          </ScrollReveal>
          <div>
            <ScrollReveal>
              <SectionHeading
                title="Our Philosophy"
                subtitle="Conscious by design. Sustainable by nature."
              />
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed mt-8">
                Providence is founded on the principle that true luxury is regenerative, not extractive. We build in harmony with nature, utilizing sustainable materials and carbon-light designs. Our commitment extends beyond our sanctuaries to the communities that host us and the planet we all share. Every stay contributes to a larger vision of a world where well-being and responsibility enrich each other.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Affordable Housing Initiative */}
      <section className="py-20 md:py-32 px-6 bg-card">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
           <div className="md:order-2">
            <ScrollReveal>
              <AspectRatio ratio={3/4}>
                <img src="https://image2url.com/r2/default/images/1773322534005-e0d0dcc7-035e-4942-a45d-255c743b4da1.jpeg" alt="Affordable Housing Initiative" className="absolute inset-0 w-full h-full object-cover" />
              </AspectRatio>
            </ScrollReveal>
          </div>
          <div className="md:order-1">
            <ScrollReveal>
                <SectionHeading
                    title="Affordable Housing Initiative"
                    subtitle="Building more than resorts, we're building communities."
                />
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed mt-8">
                Our commitment to community is woven into the very fabric of our purpose. A significant portion of our proceeds is dedicated to building affordable, high-quality housing in the local regions surrounding our sanctuaries. We partner with local builders and communities to create homes that are not just structures, but foundations for a better future. This is our promise: to ensure that the prosperity we cultivate is shared by the communities who welcome us.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}
