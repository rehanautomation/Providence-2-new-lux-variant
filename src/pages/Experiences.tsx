import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import MirrorVillaPlaceholder from "@/components/MirrorVillaPlaceholder";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const tabs = ["Service", "Culinary", "Wellness", "Activities", "Stays", "Community Impact"];

const activityCards = [
  {
    title: "Luxurious",
    body: "Nature has never felt like this. Immersed in breathtaking landscapes yet wrapped in every comfort you refuse to leave behind — this is the wild, refined. Where the untamed world meets impeccable service, and adventure feels less like a departure from your life and more like the fullest expression of it.",
    closing: "Your Vacation. Your Rules.",
  },
  {
    title: "Tranquillo",
    body: "This is stillness with taste. A sanctuary where time slows, nature breathes, and you finally do too. No agenda but your own. No noise but the kind that heals. Tranquillo is where couples rediscover each other, and individuals rediscover themselves in the most beautifully indulgent way possible.",
    closing: "Your Health. Your Wealth.",
  },
  {
    title: "Transformative",
    body: "The most successful people know that the greatest investment is the one you make in yourself. This isn't a spa weekend, it's a shift. In perspective. In vitality. In the way you move through the world. You'll leave not just rested, but recalibrated, carrying new clarity, new habits, and a version of yourself you didn't know was waiting.",
    closing: "Adventure Awaits You.",
  },
];

const stayCards = [
  {
    status: "Under Construction",
    title: "Costa Rica",
    body: "Secretly tucked away from tourist hotspots lays a nature lovers sanctuary that whispers of untamed luxury with its iconic Whale's Tail sandbar, where young affluent explorers revel in private mountain villas with ocean vistas, intimate humpback whale encounters, cascading hidden waterfalls, and eco-chic retreats amid lush rainforests teeming with wildlife.",
  },
  {
    status: "Coming Soon",
    title: "Panama",
    body: "Panama's emerald Chiriquí Highlands enchants with its eternal spring climate, mist-kissed cloud forests, and world-renowned Geisha coffee estates, where young affluent adventurers indulge in exclusive luxury villas, private volcano summits, cascading waterfalls, and refined outdoor escapades beneath the majestic Volcán Barú.",
  },
  {
    status: "Coming Soon",
    title: "Grenada",
    body: "Perched in the sun-kissed Caribbean as the seductive Spice Isle, Grenada charms its explorers with heady scents of nutmeg, cinnamon, and cocoa drifting from verdant plantations, iconic powdery shores, elite underwater sculpture dives, rainforest waterfalls, Creole gourmet feasts, yacht escapes, and pulsing island rhythm.",
  },
  {
    status: "Coming Soon",
    title: "Belize",
    body: "Hidden on the turquoise-lapped west coast of Ambergris Caye, lures escapists to its crystalline shallows, over-water swings, pineapple-garnished concoctions at chic beach bars, and laid-back Caribbean vibes, private sun-drenched oases, golf-cart adventures, reef-proximate luxury, and effortless barefoot sophistication amid Belize's iconic island allure.",
  },
];

export default function Experiences() {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      for (let i = sectionRefs.current.length - 1; i >= 0; i--) {
        const el = sectionRefs.current[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.4) {
            setActiveTab(i);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e1810] to-[#1a2318]" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-32 md:pt-40">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0, duration: 0.8 }}>
            <div className="divider-gold mx-auto mb-10" />
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-[hsl(var(--cream))] leading-[1.1] mb-6">
              Beyond Travel. A Path<br />of Transformation.
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We curate experiences that are more than activities — they are portals to deeper understanding, personal growth, and connection. Every moment is designed to help you return home to your most vibrant, authentic self.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Anchor Links */}
      <div className="bg-background static z-10 py-6 border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center gap-6 md:gap-10 overflow-x-auto scrollbar-hide">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              onClick={() => scrollToSection(i)}
              className={cn(
                "font-body text-[10px] md:text-[11px] tracking-[0.2em] uppercase whitespace-nowrap transition-all duration-300 relative py-2",
                activeTab === i ? "text-accent" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {tab}
              {activeTab === i && (
                <motion.div className="absolute bottom-0 left-0 right-0 h-px bg-accent" layoutId="underline" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Service */}
      <section ref={(el) => { sectionRefs.current[0] = el; }} className="py-32 md:py-48 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <ScrollReveal delay={0.15}>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-8">Travel Made Intimate</h2>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed mb-8">
                At Club Providence, luxury isn't measured in stars, it's measured in how deeply known you feel. While others serve hundreds, we serve you. Not as a booking, not as a room number, but as an individual whose preferences, rhythms, and desires we understand before you've even thought to ask. This is the essence of true luxury, not the grandness of the gesture, but the intimacy behind it.
              </p>
              <p className="font-heading text-2xl md:text-3xl italic text-accent mb-4">Vacation Minutes Are Precious.</p>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed">
                Ten couples. Zero compromise. Every detail from arrivals, meals, wellness, transport all handled in moments from your member portal. No waiting, no repeating yourself, no friction between wanting something and having it. Your concierge already knows you.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <MirrorVillaPlaceholder landscape="forest" aspectRatio="3/4" className="w-full" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Culinary */}
      <section ref={(el) => { sectionRefs.current[1] = el; }} className="py-40 px-6 bg-background text-center">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-heading font-light tracking-[0.2em] text-gradient-gold mb-8">SEE. TASTE. SAVOR.</h2>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Indulge in a tantalizing array of exotic, plant-based cuisine that will ignite your senses with our all-inclusive menu. Experience a symphony of flavors that will leave your taste buds dancing in bliss. Our team of masterful chefs craft each meal with care, ensuring the finest desserts and exquisite mocktail drinks to accompany your culinary experience.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Wellness */}
      <section ref={(el) => { sectionRefs.current[2] = el; }} className="py-40 px-6 bg-card text-center">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-heading font-light tracking-[0.2em] text-gradient-gold mb-8">REST. RELAX. REPEAT.</h2>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Escape the hustle and bustle of everyday life and immerse yourself in pure bliss at our crafted sanctuaries to rejuvenate your mind, body, heart, and soul. Cease the opportunity to learn practical skills to live a healthier life with onsite Health & Wellness Experts. Indulge in discovery, pampering, and the serenity of nature as you embark on an unforgettable experience.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Activities */}
      <section ref={(el) => { sectionRefs.current[3] = el; }} className="py-32 md:py-48 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <ScrollReveal>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">Choose Your Vibe</h2>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground max-w-xl mx-auto">Extraordinary journeys tailored exclusively for you.</p>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-16">
            {activityCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.1}>
                <div className="border-t border-accent/20 pt-10">
                  <div className="flex justify-between items-start mb-4 gap-8">
                    <h3 className="font-heading text-3xl md:text-5xl font-light text-foreground">{card.title}</h3>
                    {card.closing && <p className="font-heading text-sm text-gradient-gold italic text-right shrink-0">{card.closing}</p>}
                  </div>
                  <p className="font-body text-sm font-light text-muted-foreground leading-relaxed max-w-3xl">{card.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-24 text-center">
            <ScrollReveal delay={0.3}>
              <h3 className="font-heading text-3xl md:text-5xl font-light text-foreground mt-4 mb-5">
                Personalized Adventure.
              </h3>
              <p className="font-body text-sm font-light text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Some dreams deserve a professional. From weeklong escapes to the bucket list you've been quietly building for years, our world class travel planners orchestrate every detail so you arrive as a guest, not a planner. Your itinerary, your vision, your pace handled with the same precision and care you bring to everything else that matters. This one's for you.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stays */}
      <section ref={(el) => { sectionRefs.current[4] = el; }} className="py-32 md:py-48 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <ScrollReveal>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">Our Collection</h2>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground max-w-3xl mx-auto">Travel Made Intimate. At Providence Resorts, we delve deeply into what moves our members, crafting bespoke escapes that transcend mere luxury. Each residence is thoughtfully woven into breathtaking nature to deliver the serene bliss of true Quiet-Cations and our signature five-star Hushpitality, where every whisper of indulgence and every moment of hushed tranquility is yours to savor in effortless, elevated sophistication.</p>
            </ScrollReveal>
          </div>

          <div className="flex flex-col">
            {stayCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.1}>
                <div className="border-t border-border/20 py-10">
                  <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent font-medium">{card.status}</span>
                  <h3 className="font-heading text-4xl md:text-5xl font-light text-foreground mt-3 mb-4">{card.title}</h3>
                  <p className="font-body text-sm font-light text-muted-foreground leading-relaxed max-w-3xl">{card.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section ref={(el) => { sectionRefs.current[5] = el; }} className="py-32 md:py-48 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">Your Journey Creates Change</h2>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground max-w-2xl mx-auto">Ten percent of your membership supports critical global initiatives. Every stay becomes a bridge between personal discovery and global responsibility.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 mt-20 text-left">
            <ScrollReveal delay={0.1}>
              <div>
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent font-medium">Clean Water Initiative</span>
                <h3 className="font-heading text-2xl font-light text-foreground mt-4 mb-3">CharityWater.org Partnership</h3>
                <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
                  Every membership directly funds clean water projects in communities that need it most. Through our partnership with CharityWater.org, your journey becomes a lifeline — providing access to safe, clean drinking water for families across the developing world.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent font-medium">Housing Initiative</span>
                <h3 className="font-heading text-2xl font-light text-foreground mt-4 mb-3">Affordable Housing Initiative</h3>
                <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
                  We believe that shelter is a fundamental right. A portion of every membership contributes to affordable housing projects, creating stable foundations for families and communities to thrive. Your luxury experience directly supports dignity and security for others.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.3}>
            <div className="mt-20 text-center">
              <p className="font-body text-xs font-light text-muted-foreground/80 leading-relaxed max-w-md mx-auto">
                <span className="font-medium text-accent/80">Powered by GivBux</span><br/>
                Through our partnership with GivBux, every charitable contribution is tracked, verified, and reported back to you. Complete transparency ensures that your impact is real, measurable, and meaningful.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-32 md:py-48 px-6 bg-card">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="divider-gold mx-auto mb-10" />
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed italic mb-6">
              Every moment is an invitation to profound discovery.
            </p>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed max-w-xl mx-auto mb-12">
              Join fewer than 250 founding members and begin your pathway to extraordinary living.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/membership">Explore Membership</Link>
              </Button>
              <Button variant="outline-light" size="lg" asChild>
                <Link to="/contact">Begin a Conversation</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
