import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";

/* ── Section 2 — Six Pillars ── */
const pillars = [
  {
    title: "Privacy",
    copy: "Some of the world's most coveted addresses aren't on any map you'd find online. Acres of untouched nature. Vistas that silence a room. An atmosphere so intentionally private it feels like the world was paused just for you. We welcome only a select few because extraordinary experiences demand it.",
    landscape: "forest" as const,
    gradient: "from-[hsl(145,30%,22%)] via-[hsl(140,20%,30%)] to-[hsl(145,25%,18%)]",
    image: "https://image2url.com/r2/default/images/1773280007435-e8ad6b2e-8cc6-4aa1-b750-7eb27d8cb9c8.jpg",
  },
  {
    title: "Suites",
    copy: "Every residence is a sanctuary, eco-conscious by design, five-star by standard. Our curated collection of luxury suites exists at the intersection of sustainable living and unapologetic comfort. Thoughtfully crafted, carbon-light, and exclusively yours with a guaranteed 30% member discount, because belonging here should feel as good as it looks.",
    landscape: "desert" as const,
    gradient: "from-[hsl(35,35%,55%)] via-[hsl(37,30%,62%)] to-[hsl(30,25%,50%)]",
    image: "https://image2url.com/r2/default/images/1773298658097-c04e5b7f-f696-4c3f-b0a9-faf8fbb8feb0.png",
  },
  {
    title: "Wellness",
    copy: "This is where burnout meets its match. Each resort hosts a resident team of wellness experts, fitness, nutrition with world-class specialists rotating through regularly. This isn't a spa add-on. It's a full recalibration of how you feel, how you eat, and how you see the life you're returning to.",
    landscape: "valley" as const,
    gradient: "from-[hsl(145,25%,35%)] via-[hsl(130,20%,42%)] to-[hsl(145,22%,30%)]",
    image: "https://image2url.com/r2/default/images/1773198873050-dfe406f8-c416-4687-a3b5-0ebec289280f.jpeg",
  },
  {
    title: "Concierge Services",
    copy: "Your time is your most valuable asset and we treat it accordingly. Whether you're planning a spontaneous escape or mapping out an entire year of restorative travel, your dedicated Travel Ambassador handles every detail with precision and genuine care. Peak season. Off-peak solitude. Last-minute or long-planned. We're already on it.",
    landscape: "mountain" as const,
    gradient: "from-[hsl(33,27%,38%)] via-[hsl(30,22%,45%)] to-[hsl(35,25%,35%)]",
    image: "https://image2url.com/r2/default/images/1773198904925-c7c21b3d-02a5-4205-9a2f-648d7c143043.jpeg",
  },
  {
    title: "Culinary Experience",
    copy: "This is food as philosophy. Plant-based, chef-crafted, and grown steps from your table. Every plate tells the story of the land it came from. Michelin star & local chefs compose each meal with artistry and intention, from vibrant harvest bowls to exquisite desserts and handcrafted mocktails that rival anything you've sipped anywhere in the world. Nourishment, elevated to an experience.",
    landscape: "desert" as const,
    gradient: "from-[hsl(37,40%,50%)] via-[hsl(35,35%,58%)] to-[hsl(33,30%,45%)]",
    image: "https://image2url.com/r2/default/images/1773198966777-e483cf36-23da-4914-a0de-c161352d2d44.jpeg",
  },
  {
    title: "Entertainment",
    copy: "The evenings here are alive. Dancing nights under open skies. Campfire conversations that last until the stars demand you look up. Live local artists, cooking experiences, mocktail parties, and connections formed with people who simply get it. This is community for those who've outgrown the ordinary, where every gathering feels like the best night of a trip you never want to end.",
    landscape: "ocean" as const,
    gradient: "from-[hsl(220,25%,22%)] via-[hsl(210,20%,30%)] to-[hsl(33,20%,35%)]",
    image: "https://image2url.com/r2/default/images/1773279080738-eedc0934-e9b9-476b-af97-9766f0629f86.jpeg",
  },
];

/* ── Section 3 — Resort Features ── */
const resortFeatures = [
  { title: "Nature-First Sanctuaries", short: "Breathtaking. Private. Quiet by design. This is hushpitality — where presence replaces performance." },
  { title: "Sleep-Optimized Residences", short: "Blackout environments. Zero-gravity beds. Spa-inspired bathrooms. Outdoor soaking under open sky. Rest, finally done right." },
  { title: "Wellness as a Way of Life", short: "Thermal therapies. Movement. Recovery. Spaces that reset the mind as fluently as the body." },
  { title: "Culinary Excellence", short: "Chef-curated dining and refined non-alcoholic experiences that nourish as beautifully as they satisfy." },
];

/* ── Section 4 — Membership Benefits ── */
const benefits = [
  { title: "Members-Only Access", desc: "Exclusive Members-Only access to our Collection" },
  { title: "Rate Lock", desc: "Membership Rate Lock on All Future Locations" },
  { title: "Planning Ambassador", desc: "Your own Pre-Trip Planning Ambassador & Concierge" },
  { title: "Global Connectivity", desc: "Complimentary eSIM Data Plan on every stay" },
  { title: "Signature Dining", desc: "Member-Inclusive Signature Dining Experiences" },
  { title: "Wellness Coaching", desc: "Complimentary Onsite Health & Wellness Coaching" },
  { title: "Residence Access", desc: "Preferred Access to Providence Residences" },
];

/* ── Section 5 — Included ── */
const includedCards = [
  { title: "Seamless Arrival & Departure", copy: "Complimentary deluxe private airport transfers." },
  { title: "Elevated Service", copy: "24-hour room service, daily housekeeping, and discreet on-site concierge." },
  { title: "Signature Wellness Touchpoints", copy: "Member-included wellness sessions and spa experiences designed to restore and recalibrate." },
  { title: "Curated Local Experiences", copy: "Preferred access and pricing on cultural, nature, and adventure experiences unique to each destination." },
];

/* ── Section 8 — Destinations ── */
const destinations = [
  { name: "Costa Rica", status: "Under Construction", tagline: "Where the untamed world whispers of luxury.", desc: "Secretly tucked away from tourist hotspots lays a nature lover's sanctuary that whispers of untamed luxury with its iconic Whale's Tail sandbar, where young affluent explorers revel in private mountain villas with ocean vistas, intimate humpback whale encounters, cascading hidden waterfalls, and eco-chic retreats amid lush rainforests teeming with wildlife.", landscape: "forest" as const },
  { name: "Panama", status: "Coming Soon", tagline: "Eternal spring. Mist-kissed cloud forests.", desc: "Panama's emerald Chiriquí Highlands enchants with its eternal spring climate, mist-kissed cloud forests, and world-renowned Geisha coffee estates, where young affluent adventurers indulge in exclusive luxury villas, private volcano summits, cascading waterfalls, and refined outdoor escapades beneath the majestic Volcán Barú.", landscape: "mountain" as const },
  { name: "Grenada", status: "Coming Soon", tagline: "The seductive Spice Isle of the Caribbean.", desc: "Perched in the sun-kissed Caribbean as the seductive Spice Isle, Grenada charms its explorers with heady scents of nutmeg, cinnamon, and cocoa drifting from verdant plantations, iconic powdery shores, elite underwater sculpture dives, rainforest waterfalls, Creole gourmet feasts, yacht escapes, and pulsing island rhythm.", landscape: "ocean" as const },
  { name: "Belize", status: "Coming Soon", tagline: "Barefoot sophistication on turquoise shores.", desc: "Hidden on the turquoise-lapped west coast of Ambergris Caye, lures escapists to its crystalline shallows, over-water swings, pineapple-garnished concoctions at chic beach bars, and laid-back Caribbean vibes, private sun-drenched oases, golf-cart adventures, reef-proximate luxury, and effortless barefoot sophistication amid Belize's iconic island allure.", landscape: "valley" as const },
];

const motionProps = (delay: number) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay },
});

export default function Membership() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ═══════ SECTION 1 — HERO ═══════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Light bg matching homepage */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-background to-background" />
        <div className="absolute inset-0 grain-overlay" />

        {/* Mirror villa — right side */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[280px] md:w-[550px] h-auto opacity-80">
          <img src="https://image2url.com/r2/default/images/1773325888097-362faa3e-be9c-42c0-af18-0de2bd1c7c6d.png" alt="Membership Hero" className="w-full h-full object-cover" />
        </div>

        <div className="relative z-10 px-6 md:px-12 max-w-3xl pt-32 md:pt-40">
          <motion.div {...motionProps(0)}>
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-6 block">
              Club Providence · Membership
            </span>
          </motion.div>
          <motion.div {...motionProps(0.2)}>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[1.1] mb-8">
              The Smartest Way<br />To Travel
            </h1>
          </motion.div>
          <motion.div {...motionProps(0.4)}>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed mb-4 max-w-xl">
              This isn't about traveling more, it's about never settling again. One membership unlocks private access to a global collection of luxury eco-sanctuaries, preferred rates, and priority privileges without ownership burdens, planning fatigue, or compromise.
            </p>
          </motion.div>
          <motion.div {...motionProps(0.6)}>
            <p className="font-heading text-base md:text-lg font-light text-muted-foreground/70 italic mb-12">
              This is not a vacation club. This is simply a better way to live.
            </p>
          </motion.div>
          <motion.div {...motionProps(0.8)}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Claim Your Membership</Link>
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

      {/* ═══════ SECTION 2 — SIX PILLARS ═══════ */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="What Membership Unlocks" />

          <div className="mt-16 space-y-0">
            {pillars.map((pillar, i) => {
              const imageLeft = i % 2 === 0;
              return (
                <ScrollReveal key={pillar.title} delay={0.05}>
                  <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center py-16 md:py-24 ${i > 0 ? "border-t border-border/20" : ""}`}>
                    {/* Image */}
                    <div className={imageLeft ? "order-1" : "order-1 md:order-2"}>
                      <AspectRatio ratio={16/10} className="w-full">
                        {(pillar as any).image ? (
                          <img src={(pillar as any).image} alt={pillar.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className={`bg-gradient-to-br ${pillar.gradient} w-full h-full`} />
                        )}
                      </AspectRatio>
                    </div>
                    {/* Copy */}
                    <div className={imageLeft ? "order-2" : "order-2 md:order-1"}>
                      <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent mb-4 block">
                        0{i + 1}
                      </span>
                      <h3 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-6">
                        {pillar.title}
                      </h3>
                      <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed">
                        {pillar.copy}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 3 — RESORT FEATURES ═══════ */}
      <section className="py-20 md:py-32 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Features That Define Our Resorts" />

          <div className="mt-16">
            {resortFeatures.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <div className="grid grid-cols-[auto,1fr] gap-x-8 gap-y-3 items-center border-t border-accent/15 py-10">
                  <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent font-medium row-span-2">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-2xl font-light text-foreground">
                    {f.title}
                  </h3>
                  <p className="font-body text-sm font-light text-muted-foreground leading-relaxed col-start-2">
                    {f.short}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4 — MEMBERSHIP BENEFITS ═══════ */}
      <section className="py-20 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image */}
            <ScrollReveal>
              <AspectRatio ratio={3/4} className="w-full">
                <img src="https://image2url.com/r2/default/images/1773279607629-cac4f8f5-58d0-4d8d-81c8-f3df6cc99889.jpeg" alt="What Membership Unlocks" className="w-full h-full object-cover" />
              </AspectRatio>
            </ScrollReveal>
            {/* Benefits */}
            <ScrollReveal delay={0.15}>
              <div className="divider-gold mb-8" />
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-10">
                What Membership Unlocks
              </h2>
              <ul className="space-y-6">
                {benefits.map((b) => (
                  <li key={b.title} className="flex items-start gap-4">
                    <span className="w-6 h-px bg-accent mt-3 flex-shrink-0" />
                    <div>
                      <span className="font-body text-sm font-medium text-foreground tracking-wide">{b.title}</span>
                      <p className="font-body text-sm font-light text-muted-foreground mt-1">
                        {b.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5 — INCLUDED WITH EVERY STAY ═══════ */}
      <section className="py-20 md:py-32 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="divider-gold mx-auto mb-8" />
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-3">
                Included With Every Stay
              </h2>
              <p className="font-heading text-lg text-accent italic">The Standard</p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-12">
            {includedCards.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.1}>
                <div className="py-6 border-b border-white/10">
                  <h3 className="font-heading text-lg md:text-xl font-light text-foreground mb-3">{c.title}</h3>
                  <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">{c.copy}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <p className="font-body text-xs md:text-sm font-light text-muted-foreground text-center leading-relaxed max-w-4xl mx-auto">
              Private airport transfers. 24-hour service. Daily housekeeping. Discreet concierge. Signature wellness sessions. Curated local experiences — cultural, natural, unforgettable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ SECTION 6 — HOW IT WORKS ═══════ */}
      <section
        className="py-40 md:py-56 px-6 relative bg-cover bg-center"
        style={{ backgroundImage: "url(https://image2url.com/r2/default/images/1773322316842-28111289-9c23-4746-a726-9d5c2638bfda.jpeg)" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-3xl mx-auto text-center relative">
          <ScrollReveal>
            <div className="divider-gold mx-auto mb-10" />
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8">
              <span className="text-gradient-gold">Simple. Exclusive.</span><br />Designed Around You.
            </h2>
            <p className="font-body text-sm md:text-base font-light text-white/80 leading-relaxed max-w-2xl mx-auto">
              One membership. One monthly fee. A world of sanctuaries that keeps growing with you already inside it. No ownership burdens, no timeshare complexity, no fine print designed to confuse. Just rare access, preserved for those who claimed it early.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ SECTION 7 — FOUNDING MEMBERS ═══════ */}
      <section className="py-40 px-6 bg-gradient-to-br from-primary/30 via-background to-background">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <div className="divider-gold mb-8 mx-auto" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-8">
              Founding Members
            </h2>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed mb-8">
              The first 100 members don't just join, they arrive. A complimentary all-inclusive week at a Providence destination is our welcome to those who recognize something extraordinary before the rest of the world catches on. After your first year, preferred Members-only rates are locked across every current and future destination. Your decision today protects your access tomorrow.
            </p>
            <p className="font-heading text-base text-accent/80 italic">
              Limited to the first 100 Members.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ SECTION 8 — DESTINATIONS ═══════ */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 px-6">
            <ScrollReveal>
              <div className="divider-gold mx-auto mb-8" />
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-6">
                A World Being Built Around You
              </h2>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Begin in Costa Rica, one of the most breathtaking, biodiverse sanctuaries on earth. Then follow us across continents, each new destination hand-selected for its privacy, its beauty, and its power to restore. You won't find these places on a travel algorithm. You'll find them because you belong here.
              </p>
            </ScrollReveal>
          </div>

          <div className="border-t border-border">
            {destinations.map((d, i) => (
              <ScrollReveal key={d.name}>
                <div className={cn("group", i % 2 !== 0 ? 'bg-background' : 'bg-card')}>
                  <div className="grid grid-cols-[140px_1fr] min-h-[320px] border-b border-border">
                    {/* Left Column */}
                    <div className="flex items-center justify-center border-r border-border py-10">
                      <span className="font-heading text-5xl md:text-6xl font-light text-foreground [writing-mode:vertical-rl] [transform:rotate(180deg)] tracking-widest whitespace-nowrap opacity-85 transition-colors duration-500 group-hover:text-accent">
                        {d.name}
                      </span>
                    </div>
                    {/* Right Column */}
                    <div className="flex flex-col justify-between p-12 md:p-16">
                      <div>
                        <p className="font-body text-[9px] tracking-[0.4em] uppercase text-accent mb-4">{d.status}</p>
                        <p className="font-heading text-2xl md:text-3xl font-light italic text-foreground mb-5">{d.tagline}</p>
                        <p className="font-body text-xs md:text-sm font-light text-muted-foreground leading-relaxed max-w-2xl">{d.desc}</p>
                      </div>
                      <div className="flex items-center gap-5 mt-8 pt-6 border-t border-border">
                        <div className="divider-gold" />
                        <span className="font-heading text-xs tracking-[0.3em] text-accent/40">
                          0{i + 1} / 0{destinations.length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 9 — PRIORITY. ALWAYS. ═══════ */}
      <section className="py-40 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="divider-gold mx-auto mb-10" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-8">
              Priority. Always.
            </h2>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              As a Member, priority booking, exclusive offers, and preferred pricing are simply part of the standard. Because luxury without value isn't luxury, it's performance.
            </p>
            <p className="font-heading text-xl md:text-2xl font-light text-muted-foreground/70 italic max-w-2xl mx-auto">
              This is the smarter, more intentional way to experience the world. One membership. Zero compromise. This is Club Providence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ SECTION 10 — FINAL CTA ═══════ */}
      <section className="relative py-28 md:py-40 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-background to-background" />
        <div className="absolute inset-0 grain-overlay" />

        {/* Mirror villa bg element */}
        <div className="absolute right-[10%] top-[15%] w-[35%] h-[60%] opacity-[0.06] hidden md:block">
          <div className="w-full h-full border-glass bg-primary/[0.03]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="divider-gold mx-auto mb-10" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-6">
              Your Journey Begins<br />With One Decision.
            </h2>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground mb-12">
              Limited founding memberships available.
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
              Live Vigorously · Live Abundantly · Live Empowered
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
