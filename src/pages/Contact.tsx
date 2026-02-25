import { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import MirrorVillaPlaceholder from "@/components/MirrorVillaPlaceholder";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const interests = [
  "Membership Information",
  "Wellness Experiences",
  "Custom Journeys",
  "General Inquiry",
  "Partnership Opportunities",
];

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    contactMethod: "email",
    interests: [] as string[],
    message: "",
  });

  const toggleInterest = (val: string) =>
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(val)
        ? f.interests.filter((i) => i !== val)
        : [...f.interests, val],
    }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || form.interests.length === 0) {
      toast({ title: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    toast({ title: "Thank you", description: "We'll be in touch within 24 hours." });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* ═══════ SECTION 1 — HERO ═══════ */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 bg-[hsl(var(--obsidian))]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,hsl(145,28%,22%,0.3),transparent_70%)]" />
        <div className="absolute inset-0 grain-overlay" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-6 block">
            Get In Touch
          </span>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-light text-[hsl(var(--cream))] leading-[1.15] mb-6">
            Your Journey Begins<br />With a Conversation
          </h1>
          <p className="font-body text-sm md:text-base font-light text-[hsl(var(--cream))]/70 leading-relaxed max-w-2xl mx-auto">
            We believe that every interaction is an opportunity for connection. We are here to listen, to understand, and to help you discover the extraordinary experiences that await.
          </p>
        </motion.div>
      </section>

      {/* ═══════ SECTION 2 — INQUIRY FORM ═══════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(var(--obsidian))]" />
        <div className="absolute inset-0 grain-overlay" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 md:gap-20">
          {/* Left — context */}
          <ScrollReveal>
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-accent mb-4 block">
              Connect With Purpose
            </span>
            <h2 className="font-heading text-2xl md:text-4xl font-light text-[hsl(var(--cream))] leading-tight mb-6">
              We Value Meaningful Communication
            </h2>
            <p className="font-body text-sm font-light text-[hsl(var(--cream))]/60 leading-relaxed mb-10">
              Our team approaches each conversation with care, intention, and a commitment to understanding your unique aspirations. Reach out and we will respond with the same attention and care that defines our approach to travel and wellness.
            </p>

            <div className="space-y-4 mb-10">
              {["Response within 24 hours", "No obligation, no pressure", "Your information is never shared"].map((line) => (
                <div key={line} className="flex items-center gap-3">
                  <span className="w-4 h-px bg-accent" />
                  <span className="font-body text-xs font-light text-[hsl(var(--cream))]/50 tracking-wide">{line}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <p className="font-body text-xs font-light text-[hsl(var(--cream))]/40 tracking-wide">Prefer to reach us directly?</p>
              <a href="mailto:hello@clubprovidence.com" className="font-body text-xs text-accent hover:text-accent/80 transition-colors block">hello@clubprovidence.com</a>
              <a href="https://wa.me/1234567890" className="font-body text-xs text-accent hover:text-accent/80 transition-colors block">WhatsApp</a>
            </div>
          </ScrollReveal>

          {/* Right — form */}
          <ScrollReveal delay={0.15}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label className="font-body text-xs tracking-wide text-[hsl(var(--cream))]/70 mb-2 block">Your Full Name *</Label>
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-[hsl(var(--cream))]/5 border-[hsl(var(--cream))]/10 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream))]/20 focus-visible:ring-accent"
                  maxLength={100}
                />
              </div>

              <div>
                <Label className="font-body text-xs tracking-wide text-[hsl(var(--cream))]/70 mb-2 block">Your Email Address *</Label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-[hsl(var(--cream))]/5 border-[hsl(var(--cream))]/10 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream))]/20 focus-visible:ring-accent"
                  maxLength={255}
                />
              </div>

              <div>
                <Label className="font-body text-xs tracking-wide text-[hsl(var(--cream))]/70 mb-2 block">Your Phone Number</Label>
                <Input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-[hsl(var(--cream))]/5 border-[hsl(var(--cream))]/10 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream))]/20 focus-visible:ring-accent"
                />
                <span className="font-body text-[10px] text-[hsl(var(--cream))]/30 mt-1 block">Optional</span>
              </div>

              <div>
                <Label className="font-body text-xs tracking-wide text-[hsl(var(--cream))]/70 mb-3 block">How Would You Prefer We Reach You? *</Label>
                <RadioGroup value={form.contactMethod} onValueChange={(v) => setForm({ ...form, contactMethod: v })} className="flex gap-6">
                  {["Email", "Phone", "WhatsApp"].map((m) => (
                    <div key={m} className="flex items-center gap-2">
                      <RadioGroupItem value={m.toLowerCase()} id={m.toLowerCase()} className="border-[hsl(var(--cream))]/30 text-accent" />
                      <Label htmlFor={m.toLowerCase()} className="font-body text-xs text-[hsl(var(--cream))]/60 cursor-pointer">{m}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label className="font-body text-xs tracking-wide text-[hsl(var(--cream))]/70 mb-3 block">What Are You Most Interested In? *</Label>
                <div className="space-y-3">
                  {interests.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Checkbox
                        checked={form.interests.includes(item)}
                        onCheckedChange={() => toggleInterest(item)}
                        className="border-[hsl(var(--cream))]/30 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                      />
                      <span className="font-body text-xs text-[hsl(var(--cream))]/60">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="font-body text-xs tracking-wide text-[hsl(var(--cream))]/70 mb-2 block">Tell Us About Your Journey</Label>
                <Textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Share anything you'd like us to know — your interests, your ideal experience, or simply what drew you to Providence."
                  className="bg-[hsl(var(--cream))]/5 border-[hsl(var(--cream))]/10 text-[hsl(var(--cream))] placeholder:text-[hsl(var(--cream))]/20 focus-visible:ring-accent min-h-[120px]"
                  maxLength={1000}
                />
              </div>

              <Button
                type="submit"
                variant="outline-light"
                size="lg"
                className="w-full border-accent text-accent hover:bg-accent hover:text-[hsl(var(--obsidian))] transition-all duration-500"
              >
                Begin the Conversation
              </Button>

              <p className="font-body text-[10px] text-[hsl(var(--cream))]/30 text-center leading-relaxed">
                By submitting this form, you agree to receive communications from Club Providence. We respect your privacy and will never share your information.
              </p>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ SECTION 3 — YOUR STORY MATTERS ═══════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute inset-0 grain-overlay" />
        <ScrollReveal className="relative z-10 text-center px-6">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-primary-foreground leading-tight mb-6">
            Your Story Matters
          </h2>
          <p className="font-body text-sm md:text-base font-light text-primary-foreground/60 max-w-xl mx-auto">
            Every journey begins with a single step. Let this be yours.
          </p>
        </ScrollReveal>
      </section>

      {/* ═══════ SECTION 4 — AREAS OF INTEREST ═══════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(var(--obsidian))]" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          <ScrollReveal className="text-center mb-16">
            <div className="divider-gold mx-auto mb-8" />
            <h2 className="font-heading text-2xl md:text-4xl font-light text-[hsl(var(--cream))] leading-tight">
              What Awaits You
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { landscape: "forest" as const, label: "Private Sanctuaries" },
              { landscape: "desert" as const, label: "Culinary Experiences" },
              { landscape: "valley" as const, label: "Wellness & Renewal" },
              { landscape: "mountain" as const, label: "Founding Membership" },
            ].map((tile, i) => (
              <ScrollReveal key={tile.label} delay={i * 0.1}>
                <div className="group">
                  <MirrorVillaPlaceholder landscape={tile.landscape} aspectRatio="4/3" className="mb-4 opacity-80" />
                  <p className="font-body text-[11px] tracking-[0.15em] uppercase text-[hsl(var(--cream))]/50 text-center">
                    {tile.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SECTION 5 — CLOSING MANTRA ═══════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[hsl(var(--obsidian))]" />
        <ScrollReveal className="relative z-10 text-center px-6">
          <p className="font-body text-[11px] md:text-xs tracking-[0.35em] uppercase text-accent/60">
            Live Vigorously. Live Abundantly. Live Empowered.
          </p>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}
