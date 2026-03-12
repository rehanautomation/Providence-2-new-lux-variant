import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import travelMadeIntimate from "@/assets/travel-made-intimate.jpeg";
import tranquilloActivity from "@/assets/tranquillo-activity.jpeg";
import transformativeActivity from "@/assets/transformative-activity.jpeg";
import adventureActivity from "@/assets/adventure-activity.jpeg";

const tabs = ["Service", "Culinary", "Wellness", "Activities", "Stays", "Community Impact"];

const activityCards = [
  {
    title: "Luxurious",
    body: "Nature has never felt like this. Immersed in breathtaking landscapes yet wrapped in every comfort you refuse to leave behind — this is the wild, refined. Where the untamed world meets impeccable service, and adventure feels less like a departure from your life and more like the fullest expression of it.",
    closing: "Your Vacation. Your Rules.",
    image: "https://image2url.com/r2/default/images/1773278020657-0cd2b50c-beb1-4005-980f-b0f9f0a96d32.jpg",
  },
  {
    title: "Tranquillo",
    body: "This is stillness with taste. A sanctuary where time slows, nature breathes, and you finally do too. No agenda but your own. No noise but the kind that heals. Tranquillo is where couples rediscover each other, and individuals rediscover themselves in the most beautifully indulgent way possible.",
    closing: "Your Health. Your Wealth.",
    image: tranquilloActivity,
  },
  {
    title: "Transformative",
    body: "The most successful people know that the greatest investment is the one you make in yourself. This isn\'t a spa weekend, it\'s a shift. In perspective. In vitality. In the way you move through the world. You\'ll leave not just rested, but recalibrated, carrying new clarity, new habits, and a version of yourself you didn\'t know was waiting.",
    closing: "Invest in Yourself.",
    image: transformativeActivity,
  },
  {
    title: "Adventure",
    body: "Some dreams deserve a professional. From weeklong escapes to the bucket list you\'ve been quietly building for years, our world class travel planners orchestrate every detail so you arrive as a guest, not a planner. Your itinerary, your vision, your pace handled with the same precision and care you bring to everything else that matters. This one\'s for you.",
    closing: "Adventure Awaits You.",
    image: adventureActivity,
  },
];

const stayCards = [
  {
    status: "Under Construction",
    title: "Costa Rica",
    body: "Secretly tucked away from tourist hotspots lays a nature lovers sanctuary that whispers of untamed luxury with its iconic Whale\'s Tail sandbar, where young affluent explorers revel in private mountain villas with ocean vistas, intimate humpback whale encounters, cascading hidden waterfalls, and eco-chic retreats amid lush rainforests teeming with wildlife.",
    gradient: "bg-gradient-to-br from-[#0e1810] via-[#1a3020] to-[#0d1f12]",
    bgImage: "https://image2url.com/r2/default/images/1773280969793-278f82f2-338d-4578-960d-778e1eaee9e4.jpg"
  },
  {
    status: "Coming Soon",
    title: "Panama",
    body: "Panama\'s emerald Chiriquí Highlands enchants with its eternal spring climate, mist-kissed cloud forests, and world-renowned Geisha coffee estates, where young affluent adventurers indulge in exclusive luxury villas, private volcano summits, cascading waterfalls, and refined outdoor escapades beneath the majestic Volcán Barú.",
    gradient: "bg-gradient-to-br from-[#0f1a14] via-[#1a2d1e] to-[#0a1510]",
    bgImage: "https://image2url.com/r2/default/images/1773278152952-1fecba0f-9634-4c3d-8d01-eaa64bd789e8.jpg"
  },
  {
    status: "Coming Soon",
    title: "Grenada",
    body: "Perched in the sun-kissed Caribbean as the seductive Spice Isle, Grenada charms its explorers with heady scents of nutmeg, cinnamon, and cocoa drifting from verdant plantations, iconic powdery shores, elite underwater sculpture dives, rainforest waterfalls, Creole gourmet feasts, yacht escapes, and pulsing island rhythm.",
    gradient: "bg-gradient-to-br from-[#0e1520] via-[#1a2535] to-[#0a1018]",
    bgImage: "https://image2url.com/r2/default/images/1773278336470-e83695d8-cb47-4040-acfa-77242fa2ed65.jpg"
  },
  {
    status: "Coming Soon",
    title: "Belize",
    body: "Hidden on the turquoise-lapped west coast of Ambergris Caye, lures escapists to its crystalline shallows, over-water swings, pineapple-garnished concoctions at chic beach bars, and laid-back Caribbean vibes, private sun-drenched oases, golf-cart adventures, reef-proximate luxury, and effortless barefoot sophistication amid Belize\'s iconic island allure.",
    gradient: "bg-gradient-to-br from-[#0a1a18] via-[#152d28] to-[#0a1515]",
    bgImage: "https://image2url.com/r2/default/images/1773278410060-9fc8a799-1806-4f88-8150-ad880ad73a01.jpg"
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
      <section className="relative min-h-[70vh] flex items-start justify-center overflow-hidden bg-primary pt-16 md:pt-20">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
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
                At Club Providence, luxury isn\'t measured in stars, it\'s measured in how deeply known you feel. While others serve hundreds, we serve you. Not as a booking, not as a room number, but as an individual whose preferences, rhythms, and desires we understand before you\'ve even thought to ask. This is the essence of true luxury, not the grandness of the gesture, but the intimacy behind it.
              </p>
              <p className="font-heading text-2xl md:text-3xl italic text-accent mb-4">Vacation Minutes Are Precious.</p>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed">
                Ten couples. Zero compromise. Every detail from arrivals, meals, wellness, transport all handled in moments from your member portal. No waiting, no repeating yourself, no friction between wanting something and having it. Your concierge already knows you.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img src={travelMadeIntimate} alt="Luxury travel setting" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 grain-overlay" />
              </div>
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
      <section 
        ref={(el) => { sectionRefs.current[2] = el; }} 
        className="py-40 px-6 text-center relative overflow-hidden"
        style={{
          backgroundImage: `url(https://image2url.com/r2/default/images/1773277847714-7db09845-56a5-42a5-a3a8-551b9227d316.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-6xl font-heading font-light tracking-[0.2em] text-gradient-gold mb-8">REST. RELAX. REPEAT.</h2>
            <p className="font-body text-sm md:text-base font-light text-white/80 leading-relaxed max-w-3xl mx-auto">
              Escape the hustle and bustle of everyday life and immerse yourself in pure bliss at our crafted sanctuaries to rejuvenate your mind, body, heart, and soul. Cease the opportunity to learn practical skills to live a healthier life with onsite Health & Wellness Experts. Indulge in discovery, pampering, and the serenity of nature as you embark on an unforgettable experience.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Activities */}
      <section ref={(el) => { sectionRefs.current[3] = el; }} className="bg-background">
        <div className="max-w-5xl mx-auto py-32 md:py-48 px-6">
          <div className="text-center mb-24">
            <ScrollReveal>
              <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">Choose Your Vibe</h2>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground max-w-xl mx-auto">Extraordinary journeys tailored exclusively for you.</p>
            </ScrollReveal>
          </div>
        </div>

        <div className="flex flex-col">
          {activityCards.map((card, i) => (
            <ScrollReveal key={card.title}>
              <div className="border-t border-accent/15">
                <div className="grid md:grid-cols-5 md:min-h-[560px] overflow-hidden">
                  <div className={cn(
                    "md:col-span-2",
                    i % 2 !== 0 && "md:order-last"
                  )}>
                    <div className="relative w-full h-full">
                      <img src={card.image} alt={card.title} className="w-full h-64 md:h-full md:min-h-[560px] object-cover" />
                      <div className="absolute inset-0 grain-overlay" />
                    </div>
                  </div>

                  <div className="md:col-span-3 flex flex-col h-full p-12 md:p-16 lg:p-20">
                    <div>
                      <div className="w-8 h-px bg-accent mb-8" />
                      <h3 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6">{card.title}</h3>
                      <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed">{card.body}</p>
                    </div>
                    {card.closing && (
                      <p className="font-heading text-lg italic text-accent mt-auto pt-8">{card.closing}</p>
                    )}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Stays */}
        <section ref={(el) => { sectionRefs.current[4] = el; }} className="bg-card">
            <div className="max-w-5xl mx-auto py-32 md:py-48 px-6">
                <div className="text-center mb-24">
                    <ScrollReveal>
                        <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">Our Collection</h2>
                        <p className="font-body text-sm md:text-base font-light text-muted-foreground max-w-3xl mx-auto">Travel Made Intimate. At Providence Resorts, we delve deeply into what moves our members, crafting bespoke escapes that transcend mere luxury. Each residence is thoughtfully woven into breathtaking nature to deliver the serene bliss of true Quiet-Cations and our signature five-star Hushpitality, where every whisper of indulgence and every moment of hushed tranquility is yours to savor in effortless, elevated sophistication.</p>
                    </ScrollReveal>
                </div>
            </div>

            <div>
                {stayCards.map((card) => (
                    <ScrollReveal key={card.title}>
                        <div className="relative min-h-[60vh] md:min-h-[80vh] overflow-hidden">
                            <div className={cn("absolute inset-0 transition-transform duration-[1200ms] ease-out hover:scale-[1.02]", card.gradient)} style={card.bgImage ? { backgroundImage: `url(${card.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />
                            <div className="absolute inset-0 grain-overlay" />
                            <div className="relative z-10 flex flex-col justify-end h-full min-h-[60vh] md:min-h-[80vh] pb-16 md:pb-24 px-8 md:px-20 lg:px-28 text-left">
                                <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-5">{card.status}</p>
                                <h3 className="font-heading text-6xl md:text-8xl lg:text-9xl font-light text-[hsl(var(--cream))] leading-none mb-6">{card.title}</h3>
                                <div className="w-12 h-px bg-accent mb-6" />
                                <p className="font-body text-sm font-light text-[hsl(var(--cream))]/65 leading-relaxed max-w-2xl">{card.body}</p>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
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
