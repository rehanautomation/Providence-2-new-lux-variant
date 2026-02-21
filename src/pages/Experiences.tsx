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

const tabs = ["Accommodations", "Wellness", "Culinary", "Curations", "Community Impact"];

const accommodationFeatures = [
  "Oversized King Sanctuaries",
  "Private Thermal Pools",
  "Spa-Inspired Bathrooms",
  "Curated Outdoor Terraces",
  "Precision-Filtered Water",
  "Advanced Climate Control",
  "Refined Modern Kitchenette",
  "Expansive Natural Lighting",
];

const wellnessOfferings = [
  {
    title: "Personal Fitness Sessions",
    desc: "Our expert fitness guides become partners in your physical transformation. Customized sessions in open-air pavilions integrate movement, breathwork, and mindful practice — designed to reconnect you with your body's innate intelligence.",
  },
  {
    title: "Nutritionist Consultations",
    desc: "Personalized nutritional guidance that honors your unique biology. Our practitioners craft bespoke wellness protocols using locally sourced ingredients, blending ancient wisdom with modern nutritional science.",
  },
  {
    title: "Permaculture Immersion",
    desc: "Walk our regenerative gardens with expert guides who reveal the interconnected systems of sustainable living. Harvest ingredients for your meals, learn composting techniques, and discover how harmony with the land creates abundance.",
  },
];

const culinaryExperiences = [
  { title: "Garden to Plate", desc: "Harvest ingredients steps from your table and watch our chefs transform them into extraordinary dishes that tell the story of the land." },
  { title: "Artisan Mocktails", desc: "Handcrafted botanical beverages using herbs, flowers, and fruits from our gardens — each drink a celebration of flavor and intention." },
  { title: "Cooking Workshops", desc: "Intimate sessions with local chefs who share generational techniques and cultural narratives through the universal language of food." },
  { title: "Artisanal Desserts", desc: "Edible art created with precision and passion — desserts that honor local traditions while pushing the boundaries of taste and presentation." },
];

const curationCards = [
  { title: "Integrative Health Retreats", desc: "Multi-day journeys combining traditional healing, modern wellness science, and immersive nature therapy to reset your entire being." },
  { title: "Silent Wilderness Retreats", desc: "Guided journeys into profound stillness. Disconnect from noise, reconnect with inner wisdom through curated silence in pristine wilderness." },
  { title: "Indigenous Knowledge Exchanges", desc: "Respectful, reciprocal encounters with local communities. Share stories, learn ancient practices, and gain perspectives that transform how you see the world." },
  { title: "Ecological Restoration Journeys", desc: "Hands-on participation in conservation projects that restore ecosystems. Your contribution leaves a lasting, tangible legacy in the landscapes you visit." },
  { title: "Relationship Renewal Retreats", desc: "Guided experiences designed for couples seeking deeper connection. Through shared adventures and facilitated reflection, rediscover the foundation of your partnership." },
  { title: "Regenerative Leadership Workshops", desc: "For visionary leaders seeking sustainable approaches. Learn how regenerative principles can transform your leadership style and organizational impact." },
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

      // Determine active section
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

      {/* Accommodations */}
      <section ref={(el) => { sectionRefs.current[0] = el; }} className="py-20 md:py-32 px-6 scroll-mt-40">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="An Intimate Collection of Mirror Villas" />

          <div className="grid md:grid-cols-2 gap-12 md:gap-20 mt-16 items-center">
            <ScrollReveal>
              <MirrorVillaPlaceholder landscape="forest" aspectRatio="3/4" className="w-full" />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed mb-6">
                Providence Resorts offers an exclusive 5-star eco sanctuary — meticulously designed havens that represent the pinnacle of sustainable luxury. Our mirror glass villas dissolve into their natural surroundings, reflecting the landscape as perfectly as they reflect your innermost self.
              </p>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed mb-8">
                With an intentional focus on only ten couples per site, we ensure unparalleled personal attention, intuitive service, and tailored experiences. Your individuality is our devotion.
              </p>
              <p className="font-heading text-lg text-gradient-gold italic mb-10">
                30% Accommodation Privilege for Members
              </p>
              <div className="grid grid-cols-2 gap-3">
                {accommodationFeatures.map((f) => (
                  <span key={f} className="font-body text-xs font-light text-muted-foreground/80 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent/60 rounded-full flex-shrink-0" />
                    {f}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Wellness */}
      <section ref={(el) => { sectionRefs.current[1] = el; }} className="py-20 md:py-32 px-6 bg-card scroll-mt-40">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="A Holistic Approach to Renewal" />

          <div className="max-w-3xl mx-auto text-center mt-12 mb-16">
            <ScrollReveal>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed mb-6">
                Our amenities are designed as portals to profound personal transformation. Each space is an invitation to reconnect, restore, and reimagine your potential.
              </p>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed">
                Our team of experts transcends traditional approaches. Fitness instructors become guides to your physical potential, nutritionists craft personalized approaches to nourishment, and permaculture guides offer insights into sustainable living.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {wellnessOfferings.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="border border-accent/20 p-8 md:p-10 h-full hover:border-accent/40 transition-colors duration-500">
                  <span className="font-body text-[10px] tracking-[0.3em] uppercase text-accent font-medium">0{i + 1}</span>
                  <h3 className="font-heading text-xl md:text-2xl font-light text-foreground mt-4 mb-5">{item.title}</h3>
                  <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary */}
      <section ref={(el) => { sectionRefs.current[2] = el; }} className="py-20 md:py-32 px-6 scroll-mt-40">
        <div className="max-w-7xl mx-auto">
          <SectionHeading title="A Narrative of Flavor and Meaning" />

          <div className="max-w-3xl mx-auto text-center mt-12 mb-8">
            <ScrollReveal>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed mb-6">
                Food is a universal language — a bridge between cultures, a reflection of landscape, and a path to understanding.
              </p>
              <p className="font-body text-sm md:text-base font-light text-muted-foreground leading-relaxed">
                Local chefs become storytellers, bringing cultural narratives to life through innovative cuisine that challenges and delights the palate. Every meal is all-inclusive — crafted with intention and expertise, featuring ingredients harvested steps from your table.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.15}>
            <blockquote className="text-center my-16">
              <p className="font-heading text-2xl md:text-3xl font-light text-gradient-gold tracking-wider">
                SEE. TASTE. SAVOR. CONNECT.
              </p>
              <p className="font-body text-sm font-light text-muted-foreground mt-4 italic">
                Culinary art is our medium. Transformation is our message.
              </p>
            </blockquote>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culinaryExperiences.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="border border-accent/15 p-6 h-full group hover:border-accent/40 transition-colors duration-500">
                  <MirrorVillaPlaceholder landscape={["forest", "ocean", "desert", "valley"][i] as any} aspectRatio="16/10" className="w-full mb-5" />
                  <h3 className="font-heading text-lg font-light text-foreground mb-3">{item.title}</h3>
                  <p className="font-body text-xs font-light text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Curations */}
      <section ref={(el) => { sectionRefs.current[3] = el; }} className="py-20 md:py-32 px-6 bg-card scroll-mt-40">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Journeys of Profound Discovery"
            subtitle="We believe true exploration transcends physical movement. Each experience is a carefully orchestrated journey designed to discover your authentic self."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {curationCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.08}>
                <div className="border border-accent/15 p-8 h-full group hover:border-accent/40 transition-colors duration-500">
                  <h3 className="font-heading text-xl font-light text-foreground mb-4">{card.title}</h3>
                  <p className="font-body text-sm font-light text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-20">
            <ScrollReveal>
              <div className="divider-gold mx-auto mb-8" />
              <p className="font-heading text-2xl md:text-3xl font-light text-foreground italic mb-4">
                An Experience is a Conversation with the Unseen
              </p>
              <p className="font-body text-sm font-light text-muted-foreground">
                We don't create experiences. We craft moments of profound revelation.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section ref={(el) => { sectionRefs.current[4] = el; }} className="py-20 md:py-32 px-6 scroll-mt-40">
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

          {/* GivBux */}
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
