import { Link } from "react-router-dom";
import { Button, buttonVariants } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const villas = [
  { 
    tag: "Costa Rica", 
    name: "The Edge Reflection", 
    status: "Under Construction",
    features: "Infinity Pool · Butler Service · 360° Vistas", 
    image: "/images/Hero section hero image home page.png" 
  },
  { 
    tag: "Belize", 
    name: "The Verdant Mirror", 
    status: "Coming Soon",
    features: "Private Thermal Pool · King Sanctuary · Forest View", 
    image: "/images/The Verdant Mirror new image .png" 
  },
  { 
    tag: "UAE", 
    name: "The Horizon Reflection", 
    status: "Coming Soon",
    features: "Ocean Vista · Private Terrace · Sunrise Facing", 
    image: "/images/Coastal Reserve The Horizon Reflection new image.png" 
  },
  { 
    tag: "Grenada", 
    name: "The Summit Glass", 
    status: "Coming Soon",
    features: "Peak Panorama · Heated Floors · Alpine Serenity", 
    image: "/images/Summit glass new image.png" 
  },
];

const pillars = [
  {
    title: "Nature-First Sanctuaries",
    body: "Breathtaking. Private. Quiet by design. This is hushpitality — where presence replaces performance.",
  },
  {
    title: "Sleep-Optimized Residences",
    body: "Blackout environments. Zero-gravity beds. Spa-level bathrooms. Outdoor soaking under open sky. Rest, finally done right.",
  },
  {
    title: "Wellness as a Way of Life",
    body: "Thermal therapies. Movement. Recovery. Spaces that reset the mind as fluently as the body.",
  },
  {
    title: "Culinary Excellence",
    body: "Chef-curated dining and refined non-alcoholic experiences that nourish as beautifully as they satisfy.",
  },
];



export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src="/images/Hero section hero image home page.png" alt="Providence Resort Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-background/95" />
        <div className="absolute inset-0 grain-overlay" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-8">Club Providence · Est. 2025</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1]">
              Designed for Restoration. <span className="text-accent">Defined by Intention.</span>
            </h1>
          </motion.div>
          <motion.div className="mt-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/experiences">Begin Your Journey</Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-accent/60 to-transparent" />
        </motion.div>
      </section>

      {/* Philosophy */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed italic">
              Providence is built for one kind of person, the one who's done chasing and started choosing. Three pillars. One standard: rare access, refined living, enduring well-being. Every sanctuary secluded. Every detail deliberate. Every moment yours.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mirror House */}
      <section 
        className="relative min-h-[85vh] flex items-center py-20 px-6"
        style={{ backgroundImage: `url('/images/Home page Where Architecture Disappears Into Nature.png')`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 grain-overlay" />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="max-w-xl">
            <ScrollReveal>
              <div className="divider-gold mb-8" />
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-6">
                Where Architecture Disappears Into Nature
              </h2>
              <p className="font-body text-sm md:text-base font-light text-white/80 leading-relaxed mb-8">
                Our sanctuaries are not built upon the landscape. They are woven into it. Every villa is a living mirror — reflecting the sky, the forest, the mountains that surround it. A space that becomes invisible so that you can become visible.
              </p>
              <Button variant="hero" asChild>
                <Link to="/experiences">Explore Our Sanctuaries →</Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sanctuaries Grid */}
      <section className="py-20 md:py-32 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Each Villa, A World of Its Own"
            subtitle="Exclusively ten couples per site. Every unit meticulously designed for privacy, immersion, and transformation."
          />

          <div className="mt-16">
            {/* Top section: Hero card */}
            <div className="mb-8 md:mb-10">
              <ScrollReveal>
                <div className="group">
                  <div className="relative overflow-hidden mb-5 transition-transform duration-700 group-hover:scale-[1.04]" style={{ aspectRatio: "16/9" }}>
                    <img src={villas[0].image} alt={villas[0].name} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 grain-overlay" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <div className="w-6 h-px bg-accent/60 mb-3" />
                      {villas[0].status && (
                        <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent/70 mb-1">{villas[0].status}</p>
                      )}
                      <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent">{villas[0].tag}</span>
                      <h3 className="font-heading text-xl md:text-2xl font-light text-white mt-2 mb-2">{villas[0].name}</h3>
                      <p className="font-body text-xs font-light text-white/70 tracking-wide">{villas[0].features}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Bottom section: remaining 3 villas in equal columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
              {villas.slice(1).map((villa, i) => (
                <ScrollReveal key={villa.name} delay={(i + 1) * 0.1}>
                  <div className="group">
                    <div className="relative overflow-hidden mb-5 transition-transform duration-700 group-hover:scale-[1.04]" style={{ aspectRatio: "4/3" }}>
                      <img src={villa.image} alt={villa.name} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 grain-overlay" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-6">
                        <div className="w-6 h-px bg-accent/60 mb-3" />
                        {villa.status && (
                          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent/70 mb-1">{villa.status}</p>
                        )}
                        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent">{villa.tag}</span>
                        <h3 className="font-heading text-xl md:text-2xl font-light text-white mt-2 mb-2">{villa.name}</h3>
                        <p className="font-body text-xs font-light text-white/70 tracking-wide">{villa.features}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="What Defines Our Resorts"
            subtitle="Every journey at Providence is a deeply personal one"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-16">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 0.15}>
                <div className="border border-accent/20 p-8 md:p-10 h-full hover:border-accent/40 transition-colors duration-500 hover:bg-primary/5">
                   <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent font-medium">0{i + 1}</span>
                   <h3 className="font-heading text-2xl font-light text-foreground mt-4 mb-5">{pillar.title}</h3>
                  <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">{pillar.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="py-20 md:py-32 px-6 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            title="Joining Our Community Unlocks More Than Destinations"
          />
          <ScrollReveal delay={0.1}>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-14">
              Private access to a global collection of sanctuaries, no crowds, no compromise. Rate lock across every current and future destination. A dedicated planning ambassador who knows you before you arrive. Global eSIM connectivity seamless when you need it, invisible when you don't. Preferred access to Providence residences worldwide.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <Button variant="hero" size="lg" asChild>
							<Link to="/membership">Explore Membership</Link>
						</Button>
          </ScrollReveal>
        </div>
      </section>



      {/* Final CTA */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="divider-gold mx-auto mb-10" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-6">
              Life's Too Short For Should Haves.
            </h2>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
             Why not have it all?
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
								<Link to="/contact">Claim Your Journey</Link>
							</Button>
              <Button variant="outline-light" size="lg" asChild>
								<Link to="/contact">Begin a Conversation</Link>
							</Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent/40 mt-16">
              Live Vigorously · Live Abundantly · Live Empowered
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
