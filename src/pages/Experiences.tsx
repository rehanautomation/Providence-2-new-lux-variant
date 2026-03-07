import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
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
  {
    title: "Adventure",
    body: "For those who've conquered the boardroom and now hunger for the mountain. This is luxury with a pulse where horseback rides trace volcanic ridgelines, zip lines cut through jungle canopies, and white water doesn't care about your title. Every heart-pounding moment is expertly guided, flawlessly executed, and utterly unforgettable. Because the most extraordinary lives aren't just built in offices, they're lived out there.",
    closing: "Personalized Adventure.",
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
  const [tabBarSticky, setTabBarSticky] = useState(false);
  const tabBarRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (tabBarRef.current) {
        const rect = tabBarRef.current.getBoundingClientRect();
        setTabBarSticky(rect.top <= 80);
      }

      for (let i = sectionRefs.current.length - 1; i >= 0; i--) {
        const el = sectionRefs.current[i];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
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
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-background to-background" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="divider-gold mx-auto mb-10" />
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-foreground leading-[1.1] mb-6">
              Beyond Travel. A Path<br />of Transformation.
            </h1>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We curate experiences that are more than activities — they are portals to deeper understanding, personal growth, and connection. Every moment is designed to help you return home to your most vibrant, authentic self.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Tab Bar */}
      <div ref={tabBarRef} className="relative z-30">
        <div className={cn(
          "transition-all duration-500 border-b border-border/30",
          tabBarSticky ? "fixed top-20 md:top-24 left-0 right-0 bg-background/95 backdrop-blur-md z-40" : "bg-card"
        )}>
          <div className="max-w-7xl mx-auto px-6 flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => scrollToSection(i)}
                className={cn(
                  "font-body text-[10px] md:text-[11px] tracking-[0.2em] uppercase py-5 px-4 md:px-6 whitespace-nowrap transition-all duration-300 border-b-2 -mb-px",
                   activeTab === i
                     ? "border-accent text-accent"
                     : "border-transparent text-muted-foreground hover:text-foreground"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Service */}
      <section ref={(el) => { sectionRefs.current[0] = el; }} className="py-20 md:py-32 px-6 scroll-mt-40">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="Travel Made Intimate" />
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 mt-16 items-center">
            <ScrollReveal>
              <MirrorVillaPlaceholder landscape="forest" aspectRatio="3/4" className="w-full" />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed mb-8">
                At Club Providence, luxury isn't measured in stars, it's measured in how deeply known you feel. While others serve hundreds, we serve you. Not as a booking, not as a room number, but as an individual whose preferences, rhythms, and desires we understand before you've even thought to ask. This is the essence of true luxury, not the grandness of the gesture, but the intimacy behind it.
              </p>
              <h3 className="font-heading text-xl md:text-2xl font-light text-foreground mt-8 mb-4">Vacation Minutes Are Precious.</h3>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed">
                Ten couples. Zero compromise. Every detail from arrivals, meals, wellness, transport all handled in moments from your member portal. No waiting, no repeating yourself, no friction between wanting something and having it. Your concierge already knows you.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Culinary */}
      <section ref={(el) => { sectionRefs.current[1] = el; }} className="py-20 md:py-32 px-6 bg-card scroll-mt-40">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="The Culinary Experience" />
          <div className="max-w-3xl mx-auto text-center mt-12 mb-8">
            <ScrollReveal>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed">
                Indulge in a tantalizing array of exotic, plant-based cuisine that will ignite your senses with our all-inclusive menu. Experience a symphony of flavors that will leave your taste buds dancing in bliss. Our team of masterful chefs craft each meal with care, ensuring the finest desserts and exquisite mocktail drinks to accompany your culinary experience.
              </p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.15}>
            <blockquote className="text-center my-16">
              <p className="font-heading text-2xl md:text-3xl font-light text-gradient-gold tracking-wider">
                SEE. TASTE. SAVOR.
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Wellness */}
      <section ref={(el) => { sectionRefs.current[2] = el; }} className="py-20 md:py-32 px-6 scroll-mt-40">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="The Wellness Experience" />
          <div className="max-w-3xl mx-auto text-center mt-12 mb-16">
            <ScrollReveal>
               <blockquote className="text-center my-16">
                <p className="font-heading text-2xl md:text-3xl font-light text-gradient-gold tracking-wider">
                  REST. RELAX. REPEAT.
                </p>
              </blockquote>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed">
                Escape the hustle and bustle of everyday life and immerse yourself in pure bliss at our crafted sanctuaries to rejuvenate your mind, body, heart, and soul. Cease the opportunity to learn practical skills to live a healthier life with onsite Health & Wellness Experts. Indulge in discovery, pampering, and the serenity of nature as you embark on an unforgettable experience.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section ref={(el) => { sectionRefs.current[3] = el; }} className="py-20 md:py-32 px-6 bg-card scroll-mt-40">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Choose Your Vibe"
            subtitle="Extraordinary journeys tailored exclusively for you."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {activityCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.08}>
                <div className="border border-accent/15 p-8 h-full group hover:border-accent/40 transition-colors duration-500 flex flex-col">
                  <h3 className="font-heading text-xl font-light text-foreground mb-4">{card.title}</h3>
                  <p className="font-body text-sm font-light text-muted-foreground leading-relaxed flex-grow">{card.body}</p>
                  {card.closing && <p className="font-heading text-sm text-gradient-gold italic mt-6">{card.closing}</p>}
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-12 border border-accent/25 p-8 md:p-10 text-center bg-background">
            <h3 className="font-heading text-xl md:text-2xl font-light text-foreground mt-4 mb-5">
              Personalized Adventure.
            </h3>
            <p className="font-body text-sm font-light text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Some dreams deserve a professional. From weeklong escapes to the bucket list you've been quietly building for years, our world class travel planners orchestrate every detail so you arrive as a guest, not a planner. Your itinerary, your vision, your pace handled with the same precision and care you bring to everything else that matters. This one's for you.
            </p>
          </div>
        </div>
      </section>

       {/* Stays */}
      <section ref={(el) => { sectionRefs.current[4] = el; }} className="py-20 md:py-32 px-6 scroll-mt-40">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Our Collection"
            subtitle="Travel Made Intimate. At Providence Resorts, we delve deeply into what moves our members, crafting bespoke escapes that transcend mere luxury. Each residence is thoughtfully woven into breathtaking nature to deliver the serene bliss of true Quiet-Cations and our signature five-star Hushpitality, where every whisper of indulgence and every moment of hushed tranquility is yours to savor in effortless, elevated sophistication."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {stayCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.08}>
                <div className="border border-accent/15 p-8 h-full group hover:border-accent/40 transition-colors duration-500">
                  <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent font-medium">{card.status}</span>
                  <h3 className="font-heading text-xl font-light text-foreground mt-4 mb-3">{card.title}</h3>
                  <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">{card.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section ref={(el) => { sectionRefs.current[5] = el; }} className="py-20 md:py-32 px-6 bg-card scroll-mt-40">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Your Journey Creates Change"
            subtitle="Ten percent of your membership supports critical global initiatives. Every stay becomes a bridge between personal discovery and global responsibility."
          />
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <ScrollReveal>
              <div className="border border-border/20 p-8 md:p-10 h-full bg-primary/5">
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent font-medium">Clean Water Initiative</span>
                <h3 className="font-heading text-2xl font-light text-foreground mt-4 mb-5">CharityWater.org Partnership</h3>
                <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
                  Every membership directly funds clean water projects in communities that need it most. Through our partnership with CharityWater.org, your journey becomes a lifeline — providing access to safe, clean drinking water for families across the developing world.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="border border-border/20 p-8 md:p-10 h-full bg-primary/5">
                <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent font-medium">Housing Initiative</span>
                <h3 className="font-heading text-2xl font-light text-foreground mt-4 mb-5">Affordable Housing Initiative</h3>
                <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">
                  We believe that shelter is a fundamental right. A portion of every membership contributes to affordable housing projects, creating stable foundations for families and communities to thrive. Your luxury experience directly supports dignity and security for others.
                </p>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <div className="mt-12 border border-accent/25 p-8 md:p-10 text-center bg-background">
              <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent font-medium">Powered by GivBux</span>
              <h3 className="font-heading text-xl md:text-2xl font-light text-foreground mt-4 mb-5">
                Transparent Impact, Verified Results
              </h3>
              <p className="font-body text-sm font-light text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Through our partnership with GivBux, every charitable contribution is tracked, verified, and reported back to you. Complete transparency ensures that your impact is real, measurable, and meaningful. You'll see exactly where your contribution goes and the lives it changes.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-28 md:py-40 px-6 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="divider-gold mx-auto mb-10" />
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed italic mb-6">
              "Every moment is an invitation to profound discovery."
            </p>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed max-w-xl mx-auto mb-12">
              Join fewer than 250 founding members and begin your pathway to extraordinary living.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg">Explore Membership</Button>
              <Button variant="outline-light" size="lg">Begin a Conversation</Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
