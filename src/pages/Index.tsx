import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import MirrorVillaPlaceholder from "@/components/MirrorVillaPlaceholder";
import { motion } from "framer-motion";

const villas = [
  { tag: "Forest Sanctuary", name: "The Verdant Mirror", features: "Private Thermal Pool · King Sanctuary · Forest View", landscape: "forest" as const },
  { tag: "Coastal Reserve", name: "The Horizon Reflection", features: "Ocean Vista · Private Terrace · Sunrise Facing", landscape: "ocean" as const },
  { tag: "Desert Retreat", name: "The Dune Mirror", features: "Stargazing Deck · Outdoor Jacuzzi · Golden Hour View", landscape: "desert" as const },
  { tag: "Mountain Perch", name: "The Summit Glass", features: "Peak Panorama · Heated Floors · Alpine Serenity", landscape: "mountain" as const },
  { tag: "Valley Refuge", name: "The Canopy Mirror", features: "Garden Integration · Rain Shower · Valley Views", landscape: "valley" as const },
  { tag: "Clifftop Estate", name: "The Edge Reflection", features: "Infinity Pool · Butler Service · 360° Vistas", landscape: "cliff" as const },
];

const pillars = [
  {
    title: "Wellness & Renewal",
    body: "Wellness is not an amenity. It is a journey of personal renewal. Our retreats heal, inspire, and rediscover — inviting you to explore the depths of your potential through carefully designed experiences.",
  },
  {
    title: "Cultural Discovery",
    body: "Intimate encounters with local wisdom. We curate moments that connect you deeply with cultures, landscapes, and the subtle rhythms of extraordinary destinations.",
  },
  {
    title: "Mindful Adventure",
    body: "For those who seek more than relaxation — thoughtful expeditions that blend mindful exploration with sustainable travel, creating experiences that resonate long after the journey ends.",
  },
];

const testimonials = [
  { quote: "There are places you visit, and places that visit you. Providence is the latter.", author: "Founding Member", location: "Cape Town" },
  { quote: "We came to rest. We left transformed. The difference matters.", author: "Legacy Member", location: "New York" },
];

const pressNames = ["Condé Nast", "Travel + Leisure", "Wallpaper*", "Robb Report"];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        <div className="absolute inset-0 grain-overlay" />
        
        {/* Subtle mirror villa in hero background */}
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[200px] md:h-[320px] opacity-10">
          <div className="w-full h-full border-glass bg-primary/[0.03]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="divider-gold mx-auto mb-10" />
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.1] mb-6">
              Extraordinary Journeys<br />Begin Here
            </h1>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground max-w-xl mx-auto leading-relaxed mb-12">
              A sanctuary of transformation. A mirror to your most authentic self.
            </p>
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
          <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>
      </section>

      {/* Philosophy */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed italic">
              "Providence Resort is not a destination. It is a doorway to your most authentic self."
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed mt-10 max-w-2xl mx-auto">
              We believe true luxury is not about possessions, but about moments of genuine connection. Our sanctuaries are designed to transform perspectives — offering a profound respite from the ordinary.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mirror House */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal>
            <MirrorVillaPlaceholder landscape="forest" aspectRatio="3/4" className="w-full" />
          </ScrollReveal>
          <div>
            <ScrollReveal>
              <div className="divider-gold mb-8" />
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-6">
                Where Architecture Disappears Into Nature
              </h2>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed mb-8">
                Our sanctuaries are not built upon the landscape. They are woven into it. Every villa is a living mirror — reflecting the sky, the forest, the mountains that surround it. A space that becomes invisible so that you can become visible.
              </p>
              <Button variant="ghost-gold" asChild>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {villas.map((villa, i) => (
              <ScrollReveal key={villa.name} delay={i * 0.1}>
                <div className="group">
                  <MirrorVillaPlaceholder landscape={villa.landscape} className="w-full mb-5 transition-transform duration-700 group-hover:scale-[1.02]" />
                  <span className="font-body text-[10px] tracking-[0.3em] uppercase text-primary">{villa.tag}</span>
                  <h3 className="font-heading text-xl md:text-2xl font-light text-foreground mt-2 mb-2">{villa.name}</h3>
                  <p className="font-body text-xs font-light text-muted-foreground tracking-wide">{villa.features}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Three Pathways to Transformation"
            subtitle="Every journey at Providence is a deeply personal one"
          />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-16">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 0.15}>
                <div className="border border-border/30 p-8 md:p-10 h-full">
                  <span className="font-body text-[10px] tracking-[0.3em] uppercase text-primary">0{i + 1}</span>
                  <h3 className="font-heading text-2xl font-light text-foreground mt-4 mb-5">{pillar.title}</h3>
                  <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">{pillar.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="py-20 md:py-32 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeading
            title="Joining Our Community Unlocks More Than Destinations"
          />
          <ScrollReveal delay={0.1}>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-14">
              You gain access to personalized wellness experiences, global connections, and a lifestyle of intentional living. Each membership is a key to unlock your most authentic self.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {[
              { stat: "5, 10 & 20", label: "Year Membership Pathways" },
              { stat: "< 250", label: "Founding Members" },
              { stat: "10%", label: "of Every Membership Funds Global Change" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={0.1 + i * 0.1}>
                <div className="text-center">
                  <span className="font-heading text-3xl md:text-4xl text-gradient-gold">{item.stat}</span>
                  <p className="font-body text-xs font-light text-muted-foreground mt-2 tracking-wide">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <Button variant="hero" size="lg">Explore Membership</Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-foreground text-center leading-relaxed italic mb-16">
              "Providence Resort stands as a testament to conscious living."
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-10 mb-16">
            {[
              { stat: "10%", desc: "of every membership funds global initiatives" },
              { stat: "H₂O", desc: "Clean water projects via CharityWater.org" },
              { stat: "∞", desc: "Ripple effect of every journey taken" },
            ].map((item, i) => (
              <ScrollReveal key={item.stat} delay={i * 0.1}>
                <div className="text-center">
                  <span className="font-heading text-4xl md:text-5xl text-gradient-gold">{item.stat}</span>
                  <p className="font-body text-sm font-light text-muted-foreground mt-3 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              We are dedicated to sustainable luxury, personal transformation, and meaningful global impact. Every experience is an opportunity to grow, to understand, to connect.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <blockquote className="border-l border-primary/40 pl-8">
                  <p className="font-heading text-xl md:text-2xl font-light text-foreground leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                  <footer className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    — {t.author} · {t.location}
                  </footer>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>

          {/* Press */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-12 border-t border-border/20">
              {pressNames.map((name) => (
                <span key={name} className="font-heading text-lg md:text-xl font-light text-muted-foreground/30 tracking-wider italic">
                  {name}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 md:py-40 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="divider-gold mx-auto mb-10" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-6">
              Life is too short for mere existence.
            </h2>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
              Whether you seek luxurious serenity, transformative journeys, cultural immersion, or personal growth — Providence Resort is your gateway to a life less ordinary.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg">Claim Your Journey</Button>
              <Button variant="outline-light" size="lg">Begin a Conversation</Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground/50 mt-16">
              Live Vigorously · Live Abundantly · Live Empowered
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
