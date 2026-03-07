import { Link } from "react-router-dom";
import { Button, buttonVariants } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import heroHome from "@/assets/hero-home.png";
import mirrorHouseNature from "@/assets/mirror-house-nature.jpg";
import villaForest from "@/assets/villa-forest.png";
import villaOcean from "@/assets/villa-ocean.png";
import villaDesert from "@/assets/villa-desert.png";
import villaMountain from "@/assets/villa-mountain.png";
import villaValley from "@/assets/villa-valley.png";
import villaCliff from "@/assets/villa-cliff.png";
import { cn } from "@/lib/utils";

const villas = [
  { tag: "Forest Sanctuary", name: "The Verdant Mirror", features: "Private Thermal Pool · King Sanctuary · Forest View", image: villaForest },
  { tag: "Coastal Reserve", name: "The Horizon Reflection", features: "Ocean Vista · Private Terrace · Sunrise Facing", image: villaOcean },
  { tag: "Desert Retreat", name: "The Dune Mirror", features: "Stargazing Deck · Outdoor Jacuzzi · Golden Hour View", image: villaDesert },
  { tag: "Mountain Perch", name: "The Summit Glass", features: "Peak Panorama · Heated Floors · Alpine Serenity", image: villaMountain },
  { tag: "Valley Refuge", name: "The Canopy Mirror", features: "Garden Integration · Rain Shower · Valley Views", image: villaValley },
  { tag: "Clifftop Estate", name: "The Edge Reflection", features: "Infinity Pool · Butler Service · 360° Vistas", image: villaCliff },
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
        <img src={heroHome} alt="Luxury glass villa nestled in tropical jungle overlooking the ocean" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-background/95" />
        <div className="absolute inset-0 grain-overlay" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent/80 mb-8">Club Providence · Est. 2025</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[1.1]">
              Designed for Restoration. <span className="text-gradient-gold">Defined by Intention.</span>
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8 }}>
            <p className="font-body text-sm tracking-[0.15em] text-muted-foreground mt-4 mb-10">Extraordinary Journeys Begin Here</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}>
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
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal>
            <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
              <img src={mirrorHouseNature} alt="Two guests relaxing on the deck of a mirror villa by the lake" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 grain-overlay" />
            </div>
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
              <Button variant="ghost-gold" asChild className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-500 hover:after:w-full">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-16">
            {villas.map((villa, i) => (
              <ScrollReveal key={villa.name} delay={i * 0.1}>
                <div className="group">
                  <div className="relative overflow-hidden mb-5 transition-transform duration-700 group-hover:scale-[1.04]" style={{ aspectRatio: "4/3" }}>
                    <img src={villa.image} alt={villa.name} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 grain-overlay" />
                  </div>
                  <div className="w-6 h-px bg-accent/60 mb-3" />
                  <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent">{villa.tag}</span>
                  <h3 className="font-heading text-xl md:text-2xl font-light text-foreground mt-2 mb-2">{villa.name}</h3>
                  <p className="font-body text-xs font-light text-muted-foreground tracking-wide">{villa.features}</p>
                </div>
              </ScrollReveal>
            ))}
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

      {/* Impact */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-foreground text-center leading-relaxed italic mb-16">
              Providence Resort stands as a testament to conscious living.
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
                  <span className="font-heading text-5xl md:text-6xl text-gradient-gold">{item.stat}</span>
                  <p className="font-body text-sm font-light text-muted-foreground mt-3 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}\
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
          <div className="grid md:grid-cols-2 gap-16 md:gap-20 mb-20">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <blockquote className="border-l-2 border-accent/50 pl-8">
                  <p className="font-heading text-xl md:text-2xl font-light text-foreground leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                  <footer className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                    — {t.author} · {t.location}
                  </footer>
                </blockquote>
              </ScrollReveal>
            ))}\
          </div>

          {/* Press */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-12 border-t border-border/40">
              {pressNames.map((name) => (
                <span key={name} className="font-heading text-lg md:text-xl font-light text-muted-foreground/50 tracking-wider italic">
                  {name}
                </span>
              ))}\
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
             It's a life, chosen deliberately by those who value time above all else, and refuse to spend it anywhere that doesn't deserve it.
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