import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import MirrorVillaPlaceholder from "@/components/MirrorVillaPlaceholder";
import { Button } from "@/components/ui/button";

/* ── tiny helpers ── */
const LifestylePoint = ({ title, body }: { title: string; body: string }) => (
  <ScrollReveal className="border-l border-accent/30 pl-6 py-2">
    <h4 className="font-heading text-lg md:text-xl font-light text-primary-foreground mb-2">{title}</h4>
    <p className="font-body text-sm font-light text-primary-foreground/60 leading-relaxed">{body}</p>
  </ScrollReveal>
);

const CommunityValue = ({ label, desc }: { label: string; desc: string }) => (
  <ScrollReveal className="text-center">
    <h4 className="font-heading text-2xl md:text-3xl font-light text-foreground mb-3">{label}</h4>
    <div className="divider-gold mx-auto mb-4" />
    <p className="font-body text-sm font-light text-muted-foreground leading-relaxed max-w-xs mx-auto">{desc}</p>
  </ScrollReveal>
);

export default function Residences() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ═══════ SECTION 1 — HERO ═══════ */}
      <section className="relative h-screen flex items-end overflow-hidden">
        {/* bg layers */}
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,hsl(var(--gold),0.15),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_80%,hsl(var(--bronze),0.1),transparent_60%)]" />
        <div className="absolute inset-0 grain-overlay" />

        {/* landscape placeholder right */}
        <div className="absolute right-0 top-0 w-1/2 h-full hidden md:block opacity-40">
          <MirrorVillaPlaceholder landscape="forest" className="w-full h-full rounded-none" aspectRatio="auto" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-24 md:pb-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-2xl"
          >
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-6 block">
              Providence Residences
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-primary-foreground leading-[1.15] mb-6">
              A Vacation You'll Never Have to Depart From
            </h1>
            <p className="font-body text-sm md:text-base font-light text-primary-foreground/60 leading-relaxed max-w-lg">
              12 ultra-exclusive residences. Tropical privacy. Resort-level luxury that's permanently yours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ SECTION 2 — PHILOSOPHY ═══════ */}
      <section className="bg-primary py-28 md:py-36">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center space-y-8">
          <ScrollReveal>
            <p className="font-heading text-xl md:text-2xl font-light text-primary-foreground/80 leading-relaxed italic">
              \"Some people vacation to escape their lives. The rarest ones build a life worth never escaping from.\"
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="font-body text-sm md:text-base font-light text-primary-foreground/50 leading-relaxed">
              Our Residences were designed for exactly that, a community where wellness, privacy, and world-class living aren't reserved for special occasions. They're simply Tuesday.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="font-body text-sm md:text-base font-light text-primary-foreground/50 leading-relaxed">
              This is for the discerning few who've stopped compromising on how they live, this is where intention meets paradise and stays.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ SECTION 3A — COSTA RICA ═══════ */}
      <section className="bg-primary py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
            {/* Image */}
            <ScrollReveal>
              <MirrorVillaPlaceholder landscape="forest" className="w-full" aspectRatio="4/5" />
            </ScrollReveal>
            {/* Copy */}
            <div className="flex flex-col justify-center">
              <ScrollReveal>
                <span className="inline-block font-body text-[10px] tracking-[0.3em] uppercase text-accent border border-accent/30 px-4 py-1.5 rounded-full mb-6 w-fit">
                  Under Construction
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-light text-primary-foreground mb-6">Costa Rica</h2>
                <p className="font-body text-sm md:text-base font-light text-primary-foreground/60 leading-relaxed mb-10">
                  Secretly tucked away from tourist hotspots lays a nature lover's sanctuary that whispers of untamed luxury with its iconic Whale's Tail sandbar, where expats revel in private mountain villas with ocean vistas, cascading hidden waterfalls, amid lush rainforests teeming with wildlife.
                </p>
              </ScrollReveal>

              {/* Residency options */}
              <ScrollReveal delay={0.15}>
                <h3 className="font-body text-[10px] tracking-[0.3em] uppercase text-accent mb-5">Residency Options</h3>
                <div className="space-y-4">
                  <div className="border border-primary-foreground/10 rounded-sm p-5">
                    <h4 className="font-heading text-lg text-primary-foreground font-light mb-1">Inversionista <span className="text-accent text-sm">(Investor Residency)</span></h4>
                    <p className="font-body text-xs text-primary-foreground/50">Allows inclusion of spouse and dependent children.</p>
                  </div>
                  <div className="border border-primary-foreground/10 rounded-sm p-5">
                    <h4 className="font-heading text-lg text-primary-foreground font-light mb-1">Pensionado <span className="text-accent text-sm">(Retiree Residency)</span></h4>
                    <p className="font-body text-xs text-primary-foreground/50">Allows inclusion of spouse and dependent children.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Lifestyle */}
          <ScrollReveal>
            <h3 className="font-heading text-2xl md:text-3xl font-light text-primary-foreground mb-12 text-center">The Costa Rica Way of Life</h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-16">
            <LifestylePoint title="Pristine Nature & Wildlife" body="Lush jungle, tropical mountains, and Pacific beaches. A living, breathing sanctuary where nature surrounds you completely." />
            <LifestylePoint title="Outdoor Lifestyle & Active Living" body="Surfing, hiking, kayaking, waterfall exploration, and paddleboarding — adventure isn't an activity here, it's simply how the day unfolds." />
            <LifestylePoint title="Slow-Paced & Peaceful Living" body="The pura vida philosophy is a lived reality where stress quietly loses its grip and presence takes over." />
            <LifestylePoint title="Fresh Food & Culinary Variety" body="Vibrant local markets overflowing with tropical fruits, fresh vegetables, and traditional produce that remind you what real organic food tastes like." />
            <LifestylePoint title="Amenities & Tight-Knit Community" body="A warm blend of local Ticos and expat residents will make your experience culturally rich, genuinely welcoming, and complete with banks, healthcare, schools, and essential services without sacrificing natural charm." />
            <LifestylePoint title="Ideal for Families, Retirees & Remote Workers" body="Safe, low-stress, and built for flexible living with strong internet infrastructure and a community that understands and supports lives lived on your own terms." />
            <LifestylePoint title="Year-Round Tropical Climate" body="Consistently warm sunshine that makes an outdoor-centered, health-forward lifestyle not just possible, but inevitable." />
          </div>
          <ScrollReveal className="text-center">
            <p className="font-heading text-lg md:text-xl font-light text-primary-foreground/70 italic max-w-2xl mx-auto">
              \"This is where the world slows down just enough for you to remember what you actually want from it.\"
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ SECTION 3B — GRENADA ═══════ */}
      <section className="bg-primary py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header row — reversed */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-20">
            {/* Copy */}
            <div className="flex flex-col justify-center order-2 md:order-1">
              <ScrollReveal>
                <span className="inline-block font-body text-[10px] tracking-[0.3em] uppercase text-accent border border-accent/30 px-4 py-1.5 rounded-full mb-6 w-fit">
                  Coming Soon
                </span>
                <h2 className="font-heading text-4xl md:text-5xl font-light text-primary-foreground mb-6">Grenada</h2>
                <p className="font-body text-sm md:text-base font-light text-primary-foreground/60 leading-relaxed mb-10">
                  Perched in the sun-kissed Spice Isle of Grenada with stunning ocean views, natural breeze on a peninsula sits twelve luxurious modern homes ready for like-minded owners to call home.
                </p>
              </ScrollReveal>

              {/* Residency option */}
              <ScrollReveal delay={0.15}>
                <h3 className="font-body text-[10px] tracking-[0.3em] uppercase text-accent mb-5">Residency Option</h3>
                <div className="border border-primary-foreground/10 rounded-sm p-5">
                  <h4 className="font-heading text-lg text-primary-foreground font-light mb-1">Citizenship by Investment <span className="text-accent text-sm">(CBI)</span></h4>
                  <p className="font-body text-xs text-primary-foreground/50">Grenada's CBI program unlocks visa-free access to 140+ countries, eligibility for the U.S. E-2 Investor Visa, and the freedom of dual citizenship.</p>
                </div>
              </ScrollReveal>
            </div>
            {/* Image */}
            <ScrollReveal className="order-1 md:order-2">
              <MirrorVillaPlaceholder landscape="ocean" className="w-full" aspectRatio="4/5" />
            </ScrollReveal>
          </div>

          {/* Lifestyle */}
          <ScrollReveal>
            <h3 className="font-heading text-2xl md:text-3xl font-light text-primary-foreground mb-12 text-center">The Grenada Way of Life</h3>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-16">
            <LifestylePoint title="Unspoiled, Low-Density Living" body="No mega-resorts. No mass tourism. Just space, stillness, and an island that has refused to be ruined. This is the Caribbean as it was always meant to feel." />
            <LifestylePoint title="World-Class Beaches Without the Crowds" body="From the sweeping arc of Grand Anse to hidden coves that feel entirely your own — white sand, turquoise water, and the rare luxury of silence." />
            <LifestylePoint title="A Climate That Protects You" body="Nestled south of the hurricane belt, Grenada offers gentle, consistent warmth year-round, stable, golden, and forgiving in ways most Caribbean islands simply aren't." />
            <LifestylePoint title="A Culture That Restores You" body="Life here moves at the pace your nervous system has been quietly begging for. Warm, welcoming, and community-rooted. Grenada doesn't just accept expats, it folds them in." />
            <LifestylePoint title="Fresh, Real, Effortless Nourishment" body="The Spice Isle earns its name daily — abundant fruits, fresh-caught fish, organic produce, and flavors that make healthy eating feel less like discipline and more like joy." />
            <LifestylePoint title="A Financial Environment Built for the Intentional" body="No capital gains tax. No inheritance or wealth tax. Favorable structures for investors and entrepreneurs who've earned the right to protect what they've built intelligently, legally, and beautifully." />
            <LifestylePoint title="A Passport That Opens the World" body="Grenada's CBI program unlocks visa-free access to 140+ countries, eligibility for the U.S. E-2 Investor Visa, and the freedom of dual citizenship. For the globally mobile, this isn't a perk, it's a strategy." />
          </div>
          <ScrollReveal className="text-center">
            <p className="font-heading text-lg md:text-xl font-light text-primary-foreground/70 italic max-w-2xl mx-auto">
              \"Some islands are destinations. Grenada is a decision — one that quietly changes everything.\"
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ SECTION 4 — COMMUNITY ═══════ */}
      <section className="bg-background py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <SectionHeading
            title="Your Community Awaits You"
            subtitle="Providence Residences is an exclusive gated community for like-minded expats who prioritize having a Plan B, wellness, privacy, and peace of mind."
          />
          <ScrollReveal className="mt-4 mb-16">
            <p className="font-body text-sm md:text-base font-light text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              With only 12 units in very select destinations, this exclusive gated community combines the best of both worlds — luxury resort living for discerning expats with first world amenities and year-round tropical living.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
            <CommunityValue label="Wellness" desc="A community that prioritizes health, longevity, and intentional living." />
            <CommunityValue label="Privacy" desc="Gated, secluded, and designed for those who value peace of mind." />
            <CommunityValue label="Plan B" desc="A second home, a second passport, a second life — ready when you need it." />
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5 — CLOSING ═══════ */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 opacity-30">
          <MirrorVillaPlaceholder landscape="valley" className="w-full h-full rounded-none" aspectRatio="auto" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/40" />
        <div className="absolute inset-0 grain-overlay" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-5xl font-light text-primary-foreground leading-tight mb-6">
              Build a Life Worth Never Escaping From
            </h2>
            <p className="font-body text-sm md:text-base font-light text-primary-foreground/60 leading-relaxed mb-12">
              Our mission at Providence Residences is simple. Create a vacation you'll never have to depart from.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Express Your Interest</Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <Link to="/membership">Explore Membership</Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent/60">
              Live Vigorously. Live Abundantly. Live Empowered.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
