Polish the Residences page. Do not change any copy. Do not change section order. Here's what to change:
Hero: Stagger the eyebrow, h1, and subline into separate motion.div elements with 0.3s delay between each. Make h1 bigger — text-5xl md:text-6xl lg:text-7xl.
Philosophy section (Section 2): Remove the " opening and closing quote characters from the first italic paragraph — it's a declaration not a quote. Increase padding to py-40 md:py-52.
Costa Rica and Grenada sections: Both are currently bg-primary — change Costa Rica to bg-primary and Grenada to bg-card so the two destinations alternate and the page has visual rhythm instead of one long dark block. On the Grenada section, all text that currently uses text-primary-foreground variants should switch to text-foreground and text-muted-foreground to match the lighter background.
Residency option boxes in both destinations: Remove the border border-primary-foreground/10 rounded-sm boxes. Replace with simple clean rows — a thin border-t border-accent/20 line above each, the title in Cormorant at text-xl font-light, the description in small muted body text below. No boxes, no rounded corners.
Lifestyle points (LifestylePoint component): Remove the border-l border-accent/30 left border. Replace with a thin top line border-t border-accent/15 pt-6 on each point. Increase the title to text-xl md:text-2xl. This makes the lifestyle grid feel editorial rather than listed.
Closing quotes on both destinations — "This is where the world slows down..." and "Some islands are destinations..." — remove the " characters from both.
Community section: Increase padding to py-40. The three CommunityValue items are good — keep them exactly. Just add more space.
Closing section: The buttons are already correctly linked — keep them. Change the mantra from text-accent/60 to text-accent/50. Increase padding to py-44 md:py-56.
Do not change any copy. Do not touch other pages or files.import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

/* ── Section 3 — Three Values ── */
const values = [
  {
    num: "01",
    title: "Nature",
    sub: "Disconnect to Reclaim What Matters.",
    copy: "Extraordinary settings designed to quiet the noise, digitally detox, sharpen your vision, and reconnect you to what truly matters.",
  },
  {
    num: "02",
    title: "Health",
    sub: "Your Greatest Asset, Optimized.",
    copy: "Longevity, vitality, and regenerative living guided by experts, integrated into life, and built to compound over time.",
  },
  {
    num: "03",
    title: "Community",
    sub: "Luxury That Uplifts the World.",
    copy: "Every experience contributes to affordable housing, clean water, and empowered communities because true wealth creates opportunity beyond itself.",
  },
];

/* ── Section 5 — Culture Values ── */
const cultureValues = [
  { title: "Integrity", desc: "The standard behind every decision we make." },
  { title: "Service", desc: "Not as a function. As a philosophy." },
  { title: "Empowerment", desc: "Of our members. Of our communities. Of the world we touch." },
  { title: "Stewardship", desc: "Of nature, of trust, and of the legacy we are building." },
];

const motionProps = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay },
});

export default function Responsibility() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ═══════ SECTION 1 — HERO ═══════ */}
      <section className="relative min-h-screen flex items-end md:items-center overflow-hidden">
        {/* Deep forest green dominant bg */}
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,hsl(145,28%,24%,0.6),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,hsl(145,20%,14%,0.4),transparent_60%)]" />
        <div className="absolute inset-0 grain-overlay" />

        <div className="relative z-10 px-6 md:px-12 pb-20 md:pb-0 max-w-3xl mx-auto md:mx-0">
          <motion.div {...motionProps(0)}>
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-6 block">
              Our Responsibility
            </span>
          </motion.div>
          <motion.div {...motionProps(0.3)}>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-primary-foreground leading-[1.1] mb-8">
              Eco-Conscious<br />by Design
            </h1>
          </motion.div>
          <motion.div {...motionProps(0.6)}>
            <p className="font-heading text-lg md:text-xl font-light text-primary-foreground/60 italic">
              True luxury leaves nothing behind but memory.
            </p>
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

      {/* ═══════ SECTION 2 — PHILOSOPHY STATEMENT ═══════ */}
      <section className="py-40 md:py-56 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed italic">
              Our micro-resort framework was built deliberately small not as a limitation, but as a philosophy. Intimate by design, each sanctuary creates the rare conditions where disconnection becomes possible and reconnection with nature, community, and self becomes inevitable.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed mt-10 max-w-2xl mx-auto">
              Every detail, down to the simplest touch; the linens, the cutlery, the cleaning supplies is chosen with the same intentionality we bring to everything bearing the Providence name. Because those who\'ve built extraordinary lives understand that how you do the small things is how you do everything.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ SECTION 3 — THE THREE VALUES ═══════ */}
      <section className="py-20 md:py-32 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-4 block">Our Values</span>
              <div className="divider-gold mx-auto mb-8" />
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight">
                Luxury With Intention.<br />Impact by Design.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-10 md:gap-16">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.15}>
                <div className="relative border border-accent/20 p-10 md:p-14 h-full hover:bg-primary hover:text-primary-foreground group transition-all duration-700 overflow-hidden">
                  {/* Large faded number */}
                  <span className="absolute top-4 right-6 font-heading text-[80px] md:text-[100px] font-light text-accent/10 group-hover:text-primary-foreground/10 leading-none transition-colors duration-700 select-none">
                    {v.num}
                  </span>
                  <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent group-hover:text-accent font-medium relative z-10">
                    {v.num}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground group-hover:text-primary-foreground mt-4 mb-2 relative z-10 transition-colors duration-700">
                    {v.title}
                  </h3>
                  <p className="font-heading text-sm italic text-accent mb-5 relative z-10">
                    {v.sub}
                  </p>
                  <p className="font-body text-sm font-light text-muted-foreground group-hover:text-primary-foreground/70 leading-relaxed relative z-10 transition-colors duration-700">
                    {v.copy}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <p className="font-heading text-xl md:text-2xl font-light text-foreground text-center mt-16 italic">
              All leading to a healthier, fulfilled, longer life.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ SECTION 4 — AFFORDABLE HOUSING ═══════ */}
      <section className="py-20 md:py-32 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image placeholder */}
            <ScrollReveal>
              <div className="w-full aspect-[3/4] bg-gradient-to-br from-[hsl(25,30%,35%)] via-[hsl(15,25%,45%)] to-[hsl(30,20%,30%)] grain-overlay" />
            </ScrollReveal>
            {/* Copy */}
            <ScrollReveal delay={0.15}>
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-4 block">
                Affordable Housing Initiative
              </span>
              <div className="divider-gold mb-8" />
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-8">
                The Most Meaningful Luxury Doesn\'t Just Elevate Your Life.
              </h2>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed mb-6">
                Membership at Club Providence extends far beyond the sanctuary you sleep in. A portion of every annual revenue is intentionally directed toward vetted nonprofits and community-led initiatives tackling the global affordable housing crisis, not as a marketing moment, but as a founding principle.
              </p>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed mb-10">
                Borders don\'t limit this commitment. Families across the world gain access, stability, and opportunity because you chose to belong here. At Providence, impact isn\'t a campaign we run seasonally or a line item we debate annually. It\'s embedded in how we build, how we operate, and how we grow.
              </p>
              <blockquote className="border-l-2 border-accent/50 pl-6">
                <p className="font-heading text-xl md:text-2xl font-light text-foreground italic leading-relaxed">
                  The most meaningful luxury doesn\'t just elevate your life, it quietly, deliberately, changes someone else\'s.
                </p>
              </blockquote>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5 — OUR CULTURE ═══════ */}
      <section className="py-40 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-4 block">Our Culture</span>
            <div className="divider-gold mx-auto mb-8" />
            <h2 className="font-heading text-4xl md:text-6xl font-light leading-tight mb-4">
              Integrity. Service.<br />Empowerment. Stewardship.
            </h2>
            <p className="font-body text-sm md:text-base font-light text-primary-foreground/60 mb-16">
              Where elevated experiences meet enduring impact.
            </p>
          </ScrollReveal>

          <div className="space-y-10 max-w-2xl mx-auto text-left">
            {cultureValues.map((cv, i) => (
              <ScrollReveal key={cv.title} delay={i * 0.1}>
                <div className="flex items-start gap-4">
                  <span className="w-6 h-px bg-accent mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-2xl md:text-3xl font-light mb-1">{cv.title}</h3>
                    <p className="font-body text-sm font-light text-primary-foreground/60">{cv.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 6 — OUR PHILOSOPHY ═══════ */}
      <section className="py-32 md:py-48 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Copy */}
            <ScrollReveal>
              <span className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-4 block">
                Our Philosophy
              </span>
              <div className="divider-gold mb-8" />
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-8">
                Some Places Exist to Impress. We Exist to Restore.
              </h2>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed mb-6">
                Providence is where the extraordinary couple escapes the noise not just to unwind, but to reconnect. With each other. With nature. With what actually matters.
              </p>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed mb-6">
                We\'ve reimagined luxury as something deeper than thread counts and champagne towers. Here, it\'s the guided breath at sunrise. The skill learned. The digital silence that finally lets you think.
              </p>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed">
                Our Members don\'t just vacation, they belong to something rare. A curated world where world class experience meets genuine purpose: clean water flowing into communities that need it, roofs over heads that deserve them. This is luxury with a conscience & Exclusivity with a soul.
              </p>
            </ScrollReveal>
            {/* Image placeholder — golden hour, intimate */}
            <ScrollReveal delay={0.15}>
              <div className="w-full aspect-[3/4] bg-gradient-to-br from-[hsl(37,40%,50%)] via-[hsl(35,35%,58%)] to-[hsl(30,25%,40%)] grain-overlay" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 7 — CLOSING STATEMENT ═══════ */}
      <section className="relative py-40 md:py-56 px-6 overflow-hidden">
        {/* Wide natural landscape bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-[hsl(145,22%,22%)] to-[hsl(140,18%,18%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(37,40%,50%,0.1),transparent_60%)]" />
        <div className="absolute inset-0 grain-overlay" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="divider-gold mx-auto mb-10" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-primary-foreground leading-tight italic mb-8">
              A Club. A Community.<br />A Way of Life.
            </h2>
            <p className="font-body text-sm md:text-base font-light text-primary-foreground/70 leading-relaxed mb-12 max-w-2xl mx-auto">
              Club Providence is an invitation to elevated living, rare destinations, restored well-being, and luxury with purpose.
            </p>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent/50 mb-2">
              Work Less. Live More.
            </p>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent/50 mb-12">
              Live Vigorously. Live Abundantly. Live Empowered.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Button variant="hero" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/85" asChild>
              <Link to="/membership">Explore Membership</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
