import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

import tranquilloActivity from "@/assets/tranquillo-activity.jpeg";
import transformativeActivity from "@/assets/transformative-activity.jpeg";
import adventureActivity from "@/assets/adventure-activity.jpeg";

const tabs = ["Service", "Culinary", "Wellness", "Activities", "Stays"];

const activityCards = [
  {
    title: "Luxurious",
    body: "Nature has never felt like this. Immersed in breathtaking landscapes yet wrapped in every comfort you've earned, this is the wild, refined. Where the untamed world meets impeccable service, and adventure becomes the fullest expression of your life.",
    closing: "Your Vacation. Your Rules.",
    image: "/images/experence page Choose Your Vibe luxirious.png",
  },
  {
    title: "Tranquillo",
    body: "This is stillness with taste. A sanctuary where time slows, nature breathes, and you finally do too. No agenda but your own. No noise but the kind that heals. Tranquillo is where couples rediscover each other, and individuals rediscover themselves in the most beautifully indulgent way possible.",
    closing: "Your Health. Your Wealth.",
    image: "/images/experence page Choose Your Vibe tranquillo.png",
  },
  {
    title: "Transformative",
    body: "The most successful people know that the greatest investment is the one you make in yourself. This isn't a spa weekend, it's a shift. In perspective. In vitality. In the way you move through the world. You'll leave not just rested, but recalibrated, carrying new clarity, new habits, and a version of yourself you didn't know was waiting.",
    closing: "Invest in Yourself.",
    image: transformativeActivity,
  },
  {
    title: "Adventure",
    body: "For those who've conquered the boardroom and now hunger for the mountain. From horseback riding through mist-covered trails and summiting dormant volcanoes, to ziplining across ancient rainforest canopies, we curate high-octane experiences that push boundaries. Your adrenaline, perfectly orchestrated.",
    closing: "Personalized Adventure.",
    image: "/images/experence page Choose Your Vibe adventure.png",
  },
  {
    title: "Personalized",
    body: "Some dreams deserve a professional. From weeklong escapes to the bucket list you've been quietly building for years, our world class travel planners orchestrate every detail so you arrive as a guest, not a planner. Your itinerary, your vision, your pace handled with the same precision and care you bring to everything else that matters. This one's for you.",
    closing: "Adventure Awaits You.",
    image: "/images/personalized section of experience page.png",
  },
];

const stayCards = [
  {
    status: "Under Construction",
    title: "Costa Rica",
    body: "Secretly tucked away from tourist hotspots lays a nature lovers sanctuary that whispers of untamed luxury with its iconic Whale's Tail sandbar, where young affluent explorers revel in private mountain villas with ocean vistas, intimate humpback whale encounters, cascading hidden waterfalls, and eco-chic retreats amid lush rainforests teeming with wildlife.",
    gradient: "bg-gradient-to-br from-[#0e1810] via-[#1a3020] to-[#0d1f12]",
    bgImage: "/images/Experience page costa rica image.png"
  },
  {
    status: "Coming Soon",
    title: "UAE",
    body: "Dubai's gilded horizons enamour with eternal golden warmth and ancient Bedouin mystique woven into breathtaking modern grandeur where falcon-dotted dunes dissolve into glittering skylines and every sunrise over the Gulf whispers of something rare and extraordinary. Here, our members will indulge in an exclusive golden oasis crafted for those who have learned to demand nothing less than the world itself.",
    gradient: "bg-gradient-to-br from-[#1a1200] via-[#2d2000] to-[#1a1500]",
    bgImage: "/images/UAE NEW IMAGE OUR COLLECTON SECTON .png"
  },
  {
    status: "Coming Soon",
    title: "Grenada",
    body: "Perched in the sun-kissed Caribbean as the seductive Spice Isle, Grenada charms its explorers with heady scents of nutmeg, cinnamon, and cocoa drifting from verdant plantations, iconic powdery shores, elite underwater sculpture dives, rainforest waterfalls, Creole gourmet feasts, yacht escapes, and pulsing island rhythm.",
    gradient: "bg-gradient-to-br from-[#0e1520] via-[#1a2535] to-[#0a1018]",
    bgImage: "/images/GRENADA NEW IMAGE.png"
  },
  {
    status: "Coming Soon",
    title: "Belize",
    body: "Hidden on the turquoise-lapped west coast of Ambergris Caye, lures escapists to its crystalline shallows, over-water swings, pineapple-garnished concoctions at chic beach bars, and laid-back Caribbean vibes, private sun-drenched oases, golf-cart adventures, reef-proximate luxury, and effortless barefoot sophistication amid Belize's iconic island allure.",
    gradient: "bg-gradient-to-br from-[#0a1a18] via-[#152d28] to-[#0a1515]",
    bgImage: "/images/Experience page belize image.png"
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
      <section className="relative min-h-fit flex items-center justify-center overflow-hidden bg-primary pt-16 md:pt-20 pb-20">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0, duration: 0.8 }}>
            <div className="divider-gold mx-auto mb-10" />
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-[hsl(var(--cream))] leading-[1.1] mb-6">
              Beyond Travel. A Path of Transformation.
            </h1>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
            <p className="font-body text-sm md:text-base font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Because the most meaningful thing you can bring home isn't a souvenir. It's a better version of who you already are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Anchor Links */}
      <div className="bg-background static z-10 py-6 border-b border-border/20">
        <div className="max-w-7xl mx-auto px-6 flex justify-center items-center gap-6 md:gap-10 overflow-x-auto scrollbar-hide px-6">
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
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img src="/images/Experience page travel made intimate .png" alt="Luxury travel setting" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 grain-overlay" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Culinary & Wellness Split */}
      <section className="relative min-h-[90vh] flex overflow-hidden">
        {/* Left: Culinary */}
        <div 
          ref={(el) => { sectionRefs.current[1] = el; }}
          className="w-1/2 relative overflow-hidden"
          style={{
            backgroundImage: `url('/images/SEE. TASTE. SAVOR. new mage .png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 z-10 flex items-center justify-center p-8 md:p-16 text-center">
            <div className="max-w-xl">
              <ScrollReveal>
                <h2 className="text-3xl md:text-5xl font-heading font-light tracking-[0.2em] text-gradient-gold mb-8 uppercase">SEE. TASTE. SAVOR.</h2>
                <p className="font-body text-sm md:text-base font-light text-white/80 leading-relaxed">
                  Indulge in a tantalizing array of exotic, plant-based cuisine that will ignite your senses with our all-inclusive menu. Experience a symphony of flavors that will leave your taste buds dancing in bliss. Our team of masterful chefs craft each meal with care, ensuring the finest desserts and exquisite mocktail drinks to accompany your culinary experience.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Diagonal Divider */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[3px] bg-accent/60 transform -skew-x-6 z-20 -translate-x-1/2" />

        {/* Right: Wellness */}
        <div 
          ref={(el) => { sectionRefs.current[2] = el; }}
          className="w-1/2 relative overflow-hidden"
          style={{
            backgroundImage: `url('/images/Rest relax repeat section.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 z-10 flex items-center justify-center p-8 md:p-16 text-center">
            <div className="max-w-xl">
              <ScrollReveal>
                <h2 className="text-3xl md:text-5xl font-heading font-light tracking-[0.2em] text-gradient-gold mb-8 uppercase">REST. RELAX. REPEAT.</h2>
                <p className="font-body text-sm md:text-base font-light text-white/80 leading-relaxed">
                  Escape the hustle and bustle of everyday life and immerse yourself in pure bliss at our crafted sanctuaries to rejuvenate your mind, body, heart, and soul. Cease the opportunity to learn practical skills to live a healthier life with onsite Health & Wellness Experts. Indulge in discovery, pampering, and the serenity of nature as you embark on an unforgettable experience.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section ref={(el) => { sectionRefs.current[3] = el; }} className="bg-background">
        <div className="max-w-5xl mx-auto py-16 md:py-24 px-6">
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
              <div className="border-t border-accent/15 group">
                <div className="grid md:grid-cols-5 md:min-h-[560px] overflow-hidden">
                  <div
                    className={cn(
                      "md:col-span-2 flex items-center justify-center bg-background",
                      i % 2 !== 0
                        ? "md:order-last md:py-10 md:pr-10 md:pl-6"
                        : "md:py-10 md:pr-6 md:pl-10"
                    )}
                  >
                    <div className="w-full h-full min-h-[300px] md:min-h-[460px] overflow-hidden rounded-sm shadow-2xl transition-shadow duration-700 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)] relative">
                      <div className="absolute inset-0 w-full h-full transition-transform duration-700 ease-in-out group-hover:scale-105">
                        <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 grain-overlay" />
                        <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-3 flex flex-col h-full p-12 md:p-16 lg:p-20 bg-background">
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
            <div className="max-w-5xl mx-auto py-16 md:py-24 px-6">
                <div className="text-center mb-24">
                    <ScrollReveal>
                        <h2 className="font-heading text-4xl md:text-5xl font-light bg-gradient-to-br from-[hsl(145,30%,35%)] to-[hsl(37,40%,50%)] bg-clip-text text-transparent mb-4">Our Collection</h2>
                        <p className="font-body text-sm md:text-base font-light text-muted-foreground max-w-3xl mx-auto">Distinct By Design. At Providence Resorts, we delve deeply into what moves our members, crafting bespoke escapes that transcend mere luxury. Each residence is thoughtfully woven into breathtaking nature to deliver the serene bliss of true Quiet-Cations and our signature five-star Hushpitality, where every whisper of indulgence and every moment of hushed tranquility is yours to savor in effortless, elevated sophistication.</p>
                    </ScrollReveal>
                </div>
            </div>

            <div>
                {stayCards.map((card) => (
                    <ScrollReveal key={card.title}>
                        <div className="relative min-h-[60vh] md:min-h-[80vh] overflow-hidden">
                            <div className={cn("absolute inset-0 transition-transform duration-[1200ms] ease-out hover:scale-[1.02]", card.gradient)} style={card.bgImage ? { backgroundImage: `url('${card.bgImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}} />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent" />
                            <div className="absolute inset-0 grain-overlay" />
                            <div className="relative z-10 flex flex-col justify-end h-full min-h-[60vh] md:min-h-[80vh] pb-16 md:pb-24 px-8 md:px-20 lg:px-28 text-left">
                                <p className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-5">{card.status}</p>
                                <h3 className="font-heading text-4xl md:text-8xl lg:text-9xl font-light text-[hsl(var(--cream))] leading-none mb-6">{card.title}</h3>
                                <div className="w-12 h-px bg-accent mb-6" />
                                <p className="font-body text-sm font-light text-[hsl(var(--cream))]/65 leading-relaxed max-w-2xl">{card.body}</p>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>

        <div className="py-24 md:py-32 text-center bg-card">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent/40">
            TRAVEL DELIBERATELY · RECHARGE INTENTIONALLY · BELONG EXCLUSIVELY
          </p>
        </div>

      <Footer />
    </div>
  );
}
