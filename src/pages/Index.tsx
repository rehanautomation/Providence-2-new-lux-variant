import { Link } from "react-router-dom";
import { Button, buttonVariants } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const villas = [
  { 
    name: "Costa Rica", 
    status: "Under Construction",
    features: "Mountain Vista · Private Thermal Pool · Pura Vida Vibes", 
    image: "/images/Hero section hero image home page.png" 
  },
  { 
    name: "Grenada", 
    status: "Coming Soon",
    features: "Ocean Panorama · Sunrise Facing · Island Bliss", 
    image: "/images/The Verdant Mirror new image .png" 
  },
  { 
    name: "UAE", 
    status: "Coming Soon",
    features: "Private Terraces · Golden Sunsets · Desert Oasis", 
    image: "/images/Home page UAE new image (HOME PAGE).png" 
  },
  { 
    name: "Belize", 
    status: "Coming Soon",
    features: "Ocean Vista · Sunset Facing · Serene Nature", 
    image: "/images/Home page our collection belzie new image 2.png" 
  },
];

const pillars = [
  {
    title: "Nature-First Sanctuaries",
    body: "Breathtaking. Private. Quiet by design. This is hushpitality where presence replaces performance.",
  },
  {
    title: "Sleep Optimized Villas",
    body: "Blackout environments. Zero-gravity beds. Spa-level bathrooms and outdoor soaking under open sky. Rest, finally done right.",
  },
  {
    title: "The Wellness Life",
    body: "Thermal therapies, movement, and recovery spaces that reset the mind as fluently as the body.",
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
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-32 md:pt-40">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-8">Club Providence · Est. 2025</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1]">
              <span className="bg-gradient-to-br from-[hsl(145,30%,35%)] to-[hsl(37,40%,50%)] bg-clip-text text-transparent">You've Built an Extraordinary Life. This Is Where You Live It.</span>
            </h1>
          </motion.div>
          <motion.div className="mt-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}>
            <Button variant="rounded-pill" asChild>
              <Link to="/experiences">
                Begin Your Journey
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <ArrowRight className="text-primary w-4 h-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                </div>
              </Link>
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
            <h2 className="font-heading text-sm tracking-[0.3em] uppercase text-accent mb-6">The Providence Experience</h2>
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
                Our sanctuaries aren't built upon the landscape. They are woven into it. Every villa is a living mirror reflecting the sky, the forest, the mountains that surround it. A space that becomes invisible so that you can become visible.
              </p>
              <Button variant="rounded-pill" asChild>
                <Link to="/experiences">
                  Explore Our Sanctuaries
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <ArrowRight className="text-primary w-4 h-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                  </div>
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Sanctuaries Grid */}
      <section className="pt-0 pb-16 px-6 bg-card">
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
                      <h3 className="font-heading text-xl md:text-2xl font-light text-white mt-2 mb-2">{villas[0].name}</h3>
                      <p className="font-body text-xs font-light text-white/70 tracking-wide">{villas[0].features}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Bottom section: remaining 3 villas in equal columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 pb-0">
              {villas.slice(1).map((villa, i) => (
                <ScrollReveal key={villa.name} delay={(i + 1) * 0.1}>
                  <div className="group">
                    <div className="relative overflow-hidden mb-3 transition-transform duration-700 group-hover:scale-[1.04]" style={{ aspectRatio: "4/3" }}>
                      <img src={villa.image} alt={villa.name} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 grain-overlay" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      <div className="absolute bottom-0 left-0 p-4">
                        <div className="w-6 h-px bg-accent/60 mb-3" />
                        {villa.status && (
                          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent/70 mb-0">{villa.status}</p>
                        )}
                        <h3 className="font-heading text-xl md:text-2xl font-light text-white mt-0 mb-0">{villa.name}</h3>
                      </div>
                    </div>
                    <p className="font-body text-[10px] text-muted-foreground/80 tracking-widest uppercase mt-3 mb-0 text-center">{villa.features}</p>
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
            subtitle="Distinct by design..."
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
              Members only access to a global collection of sanctuaries, no crowds, no compromise. Rate lock across every current and future destination. A dedicated planning ambassador who understands your preferences and curates each stay before, during, and beyond arrival. Complimentary eSIM connectivity with every stay, seamless when you need it, invisible when you don't.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <Button variant="rounded-pill" asChild>
							<Link to="/membership">
                Explore Membership
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <ArrowRight className="text-primary w-4 h-4 -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
                </div>
              </Link>
						</Button>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ SECTION 7 — FOUNDING MEMBERS ═══════ */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary/30 via-background to-background">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <div className="divider-gold mb-8 mx-auto" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-8">
              Founding Members
            </h2>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed mb-8">
              You won't just join, you'll arrive. A complimentary, fully hosted week at a Providence destination is our welcome to those who recognize something extraordinary before the rest of the world catches on. Your preferred rates are locked across every current and future destination, for life. Your decision today protects your access tomorrow.
            </p>
            <p className="font-heading text-base text-accent/80 italic">
              Limited to the first 100 Members.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="py-12 text-center text-accent/30 text-xs">
        ·
      </div>

      {/* Final CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="divider-gold mx-auto mb-10" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-6">
              Your Time Is Sacred. Spend It Accordingly.
            </h2>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12">
             Founding membership is limited. Your access begins with a single conversation.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
								<Link to="/contact">Claim Your Membership</Link>
							</Button>
              <Button variant="outline-light" size="lg" asChild>
								<Link to="/contact">Begin a Conversation</Link>
							</Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent/40 mt-16">
              TRAVEL DELIBERATELY · RECHARGE INTENTIONALLY · BELONG EXCLUSIVELY
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
