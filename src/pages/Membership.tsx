import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import MirrorVillaPlaceholder from "@/components/MirrorVillaPlaceholder";
import { motion } from "framer-motion";

/* ── Section 2 — Six Pillars ── */
const pillars = [
  {
    title: "Privacy",
    copy: "Some of the world's most coveted addresses aren't on any map you'd find online. Acres of untouched nature. Vistas that silence a room. An atmosphere so intentionally private it feels like the world was paused just for you. We welcome only a select few because extraordinary experiences demand it.",
    landscape: "forest" as const,
    gradient: "from-[hsl(145,30%,22%)] via-[hsl(140,20%,30%)] to-[hsl(145,25%,18%)]",
  },
  {
    title: "Suites",
    copy: "Every residence is a sanctuary, eco-conscious by design, five-star by standard. Our curated collection of luxury suites exists at the intersection of sustainable living and unapologetic comfort. Thoughtfully crafted, carbon-light, and exclusively yours with a guaranteed 30% member discount, because belonging here should feel as good as it looks.",
    landscape: "desert" as const,
    gradient: "from-[hsl(35,35%,55%)] via-[hsl(37,30%,62%)] to-[hsl(30,25%,50%)]",
  },
  {
    title: "Wellness",
    copy: "This is where burnout meets its match. Each resort hosts a resident team of wellness experts, fitness, nutrition with world-class specialists rotating through regularly. This isn't a spa add-on. It's a full recalibration of how you feel, how you eat, and how you see the life you're returning to.",
    landscape: "valley" as const,
    gradient: "from-[hsl(145,25%,35%)] via-[hsl(130,20%,42%)] to-[hsl(145,22%,30%)]",
  },
  {
    title: "Concierge Services",
    copy: "Your time is your most valuable asset and we treat it accordingly. Whether you're planning a spontaneous escape or mapping out an entire year of restorative travel, your dedicated Travel Ambassador handles every detail with precision and genuine care. Peak season. Off-peak solitude. Last-minute or long-planned. We're already on it.",
    landscape: "mountain" as const,
    gradient: "from-[hsl(33,27%,38%)] via-[hsl(30,22%,45%)] to-[hsl(35,25%,35%)]",
  },
  {
    title: "Culinary Experience",
    copy: "This is food as philosophy. Plant-based, chef-crafted, and grown steps from your table. Every plate tells the story of the land it came from. Michelin star & local chefs compose each meal with artistry and intention, from vibrant harvest bowls to exquisite desserts and handcrafted mocktails that rival anything you've sipped anywhere in the world. Nourishment, elevated to an experience.",
    landscape: "desert" as const,
    gradient: "from-[hsl(37,40%,50%)] via-[hsl(35,35%,58%)] to-[hsl(33,30%,45%)]",
  },
  {
    title: "Entertainment",
    copy: "The evenings here are alive. Dancing nights under open skies. Campfire conversations that last until the stars demand you look up. Live local artists, cooking experiences, mocktail parties, and connections formed with people who simply get it. This is community for those who've outgrown the ordinary, where every gathering feels like the best night of a trip you never want to end.",
    landscape: "ocean" as const,
    gradient: "from-[hsl(220,25%,22%)] via-[hsl(210,20%,30%)] to-[hsl(33,20%,35%)]",
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
  { name: "Costa Rica", status: "Under Construction", desc: "Secretly tucked away from tourist hotspots lays a nature lover's sanctuary that whispers of untamed luxury with its iconic Whale's Tail sandbar, where young affluent explorers revel in private mountain villas with ocean vistas, intimate humpback whale encounters, cascading hidden waterfalls, and eco-chic retreats amid lush rainforests teeming with wildlife.", landscape: "forest" as const },
  { name: "Panama", status: "Coming Soon", desc: "Panama's emerald Chiriquí Highlands enchants with its eternal spring climate, mist-kissed cloud forests, and world-renowned Geisha coffee estates, where young affluent adventurers indulge in exclusive luxury villas, private volcano summits, cascading waterfalls, and refined outdoor escapades beneath the majestic Volcán Barú.", landscape: "mountain" as const },
  { name: "Grenada", status: "Coming Soon", desc: "Perched in the sun-kissed Caribbean as the seductive Spice Isle, Grenada charms its explorers with heady scents of nutmeg, cinnamon, and cocoa drifting from verdant plantations, iconic powdery shores, elite underwater sculpture dives, rainforest waterfalls, Creole gourmet feasts, yacht escapes, and pulsing island rhythm.", landscape: "ocean" as const },
  { name: "Belize", status: "Coming Soon", desc: "Hidden on the turquoise-lapped west coast of Ambergris Caye, lures escapists to its crystalline shallows, over-water swings, pineapple-garnished concoctions at chic beach bars, and laid-back Caribbean vibes, private sun-drenched oases, golf-cart adventures, reef-proximate luxury, and effortless barefoot sophistication amid Belize's iconic island allure.", landscape: "valley" as const },
];

export default function Membership() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ═══════ SECTION 1 — HERO ═══════ */}
      <section className="relative min-h-screen flex items-end md:items-center overflow-hidden">
        {/* Dark cinematic bg */}
        <div className="absolute inset-0 bg-obsidian" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,hsl(145,28%,18%,0.35),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,hsl(145,20%,14%,0.25),transparent_60%)]" />
        <div className="absolute inset-0 grain-overlay" />

        {/* Mirror villa — right side */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 flex items-center justify-center opacity-20 md:opacity-30">
          <div className="w-[70%] h-[50%]">
            <div className="w-full h-full border-glass bg-white/[0.08] backdrop-blur-[2px]" />
            <div className="w-full h-[20%] mt-px bg-white/[0.04] border-x border-b border-white/[0.08] scale-y-[-0.5] origin-top" />
          </div>
        </div>

        <div className="relative z-10 px-6 md:px-12 pb-20 md:pb-0 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-6 block">
              Club Providence · Membership
            </span>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-cream leading-[1.1] mb-8">
              The Smartest Way<br />To Travel
            </h1>
            <p className="font-body text-sm md:text-base font-light text-cream/70 leading-relaxed mb-4 max-w-xl">
              This isn't about traveling more, it's about never settling again. One membership unlocks private access to a global collection of luxury eco-sanctuaries, preferred rates, and priority privileges without ownership burdens, planning fatigue, or compromise.
            </p>
            <p className="font-heading text-base md:text-lg font-light text-cream/50 italic mb-12">
              This is not a vacation club. This is simply a better way to live.
            </p>
            <Button variant="hero" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/85">
              Claim Your Membership
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
          <SectionHeading title="What You're Actually Getting" />

          <div className="mt-16 space-y-0">
            {pillars.map((pillar, i) => {
              const imageLeft = i % 2 === 0;
              return (
                <ScrollReveal key={pillar.title} delay={0.05}>
                  <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center py-12 md:py-16 ${i > 0 ? "border-t border-border/20" : ""}`}>
                    {/* Image */}
                    <div className={imageLeft ? "order-1" : "order-1 md:order-2"}>
                      <MirrorVillaPlaceholder
                        landscape={pillar.landscape}
                        aspectRatio="16/10"
                        className="w-full"
                      />
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {resortFeatures.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.1}>
                <div className="border border-accent/20 p-8 h-full hover:border-accent/40 transition-colors duration-500 bg-background">
                  <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent font-medium">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl font-light text-foreground mt-4 mb-5">
                    {f.title}
                  </h3>
                  <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
                    {f.short}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 4 — MEMBERSHIP BENEFITS ═══════ */}
      <section className="py-20 md:py-32 px-6 bg-obsidian text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image */}
            <ScrollReveal>
              <MirrorVillaPlaceholder landscape="forest" aspectRatio="3/4" className="w-full" />
            </ScrollReveal>
            {/* Benefits */}
            <ScrollReveal delay={0.15}>
              <div className="divider-gold mb-8" />
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-cream leading-tight mb-10">
                What Membership Unlocks
              </h2>
              <ul className="space-y-6">
                {benefits.map((b) => (
                  <li key={b.title} className="flex items-start gap-4">
                    <span className="w-6 h-px bg-accent mt-3 flex-shrink-0" />
                    <div>
                      <span className="font-body text-sm font-medium text-cream tracking-wide">{b.title}</span>
                      <p className="font-body text-sm font-light text-cream/60 mt-1">{b.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5 — INCLUDED WITH EVERY STAY ═══════ */}
      <section className="py-20 md:py-32 px-6 bg-obsidian text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="divider-gold mx-auto mb-8" />
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-cream leading-tight mb-3">
                Included With Every Stay
              </h2>
              <p className="font-heading text-lg text-accent italic">The Standard</p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {includedCards.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.1}>
                <div className="border border-cream/10 p-8 h-full hover:border-accent/30 transition-colors duration-500">
                  <h3 className="font-heading text-lg md:text-xl font-light text-cream mb-4">{c.title}</h3>
                  <p className="font-body text-sm font-light text-cream/50 leading-relaxed">{c.copy}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <p className="font-body text-xs md:text-sm font-light text-cream/40 text-center leading-relaxed max-w-4xl mx-auto">
              Private airport transfers. 24-hour service. Daily housekeeping. Discreet concierge. Signature wellness sessions. Curated local experiences — cultural, natural, unforgettable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ SECTION 6 — HOW IT WORKS ═══════ */}
      <section className="py-20 md:py-32 px-6 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="divider-gold mx-auto mb-10" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-primary-foreground leading-tight mb-8">
              Simple. Exclusive.<br />Designed Around You.
            </h2>
            <p className="font-body text-sm md:text-base font-light text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              One membership. One monthly fee. A world of sanctuaries that keeps growing with you already inside it. No ownership burdens, no timeshare complexity, no fine print designed to confuse. Just rare access, preserved for those who claimed it early.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ SECTION 7 — FOUNDING MEMBERS ═══════ */}
      <section className="py-20 md:py-32 px-6 bg-obsidian text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal>
              <MirrorVillaPlaceholder landscape="valley" aspectRatio="4/5" className="w-full" />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="divider-gold mb-8" />
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-cream leading-tight mb-8">
                Founding Members
              </h2>
              <p className="font-body text-sm md:text-base font-light text-cream/70 leading-relaxed mb-8">
                The first 100 members don't just join, they arrive. A complimentary all-inclusive week at a Providence destination is our welcome to those who recognize something extraordinary before the rest of the world catches on. After your first year, preferred Members-only rates are locked across every current and future destination. Your decision today protects your access tomorrow.
              </p>
              <p className="font-body text-xs font-light text-cream/30 tracking-wider uppercase">
                Limited to the first 100 Members.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 8 — DESTINATIONS ═══════ */}
      <section className="py-20 md:py-32 px-6 bg-obsidian text-cream">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <div className="divider-gold mx-auto mb-8" />
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-cream leading-tight mb-6">
                A World Being Built Around You
              </h2>
              <p className="font-body text-sm md:text-base font-light text-cream/60 leading-relaxed max-w-3xl mx-auto">
                Begin in Costa Rica, one of the most breathtaking, biodiverse sanctuaries on earth. Then follow us across continents, each new destination hand-selected for its privacy, its beauty, and its power to restore. You won't find these places on a travel algorithm. You'll find them because you belong here.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((d, i) => (
              <ScrollReveal key={d.name} delay={i * 0.1}>
                <div className="group">
                  <MirrorVillaPlaceholder
                    landscape={d.landscape}
                    aspectRatio="4/3"
                    className="w-full mb-5 transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-heading text-xl md:text-2xl font-light text-cream">{d.name}</h3>
                    <span className="font-body text-[9px] tracking-[0.2em] uppercase text-accent px-2 py-0.5 border border-accent/30">
                      {d.status}
                    </span>
                  </div>
                  <p className="font-body text-xs font-light text-cream/50 leading-relaxed">{d.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 9 — PRIORITY. ALWAYS. ═══════ */}
      <section className="py-20 md:py-32 px-6 bg-obsidian text-cream">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="divider-gold mx-auto mb-10" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-cream leading-tight mb-8">
              Priority. Always.
            </h2>
            <p className="font-body text-sm md:text-base font-light text-cream/70 leading-relaxed mb-8 max-w-2xl mx-auto">
              As a Member, priority booking, exclusive offers, and preferred pricing are simply part of the standard. Because luxury without value isn't luxury, it's performance.
            </p>
            <p className="font-heading text-base md:text-lg font-light text-cream/50 italic max-w-2xl mx-auto">
              This is the smarter, more intentional way to experience the world. One membership. Zero compromise. This is Club Providence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ SECTION 10 — FINAL CTA ═══════ */}
      <section className="relative py-28 md:py-40 px-6 overflow-hidden">
        {/* Golden hour cinematic bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(37,40%,25%)] via-obsidian to-obsidian" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,hsl(37,47%,55%,0.15),transparent_70%)]" />
        <div className="absolute inset-0 grain-overlay" />

        {/* Mirror villa bg element */}
        <div className="absolute right-[10%] top-[15%] w-[35%] h-[60%] opacity-10 hidden md:block">
          <div className="w-full h-full border-glass bg-white/[0.06]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="divider-gold mx-auto mb-10" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-cream leading-tight mb-6">
              Your Journey Begins<br />With One Decision.
            </h2>
            <p className="font-body text-sm md:text-base font-light text-cream/60 mb-12">
              Limited founding memberships available.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/85">
                Claim Your Membership
              </Button>
              <Button variant="outline-light" size="lg" className="border-cream/30 text-cream hover:border-cream/60 hover:text-cream">
                Begin a Conversation
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-cream/30 mt-16">
              Live Vigorously · Live Abundantly · Live Empowered
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
