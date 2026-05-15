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
  "Founding Member Inquiry",
  "Investor Inquiry",
  "Partnership Inquiry",
  "Press & Media Inquiry",
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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden pt-32">
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
              Every conversation begins the same way, with genuine curiosity about who you are and what you're looking for. Reach out when you're ready. We'll be here, unhurried and attentive, within 24 hours.
            </p>

            <div className="space-y-4 mb-10">
              {["Your privacy is sacred to us", "Your information goes nowhere"].map((line) => (
                <div key={line} className="flex items-center gap-3">
                  <span className="w-4 h-px bg-accent" />
                  <span className="font-body text-xs font-light text-[hsl(var(--cream))]/50 tracking-wide">{line}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <p className="font-body text-xs font-light text-[hsl(var(--cream))]/40 tracking-wide">Prefer to reach us directly?</p>
              <a href="mailto:hello@clubprovidence.com" className="font-body text-xs text-accent hover:text-accent/80 transition-colors block">hello@clubprovidence.com</a>
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
                <RadioGroup value={form.contactMethod} onValueChange={(v) => setForm({ ...form, contactMethod: v })} className="flex flex-wrap gap-4 md:gap-6">
                  {["Email", "Phone"].map((m) => (
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
                  placeholder="Tell us what brought you here, your interests, the experience you're looking for, or simply what drew you to Providence."
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

      {/* ═══════ SECTION 3 — WHAT AWAITS YOU ═══════ */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[hsl(var(--obsidian))]">
        <div className="absolute inset-0 grain-overlay" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-[hsl(var(--cream))] leading-tight mb-16">
              What Awaits You
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square bg-muted/20 overflow-hidden mb-4 rounded-sm">
                  <img src="/images/private sancuaries contact page .png" alt="Private Sanctuaries" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-heading text-lg font-light text-[hsl(var(--cream))]">Private Sanctuaries</h3>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square bg-muted/20 overflow-hidden mb-4 rounded-sm">
                  <img src="/images/Culinary exp for contact page .jpeg" alt="Culinary Experiences" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-heading text-lg font-light text-[hsl(var(--cream))]">Culinary Experiences</h3>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square bg-muted/20 overflow-hidden mb-4 rounded-sm">
                  <img src="/images/wellness and renewal contact page.jpeg" alt="Wellness and Renewal" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-heading text-lg font-light text-[hsl(var(--cream))]">Wellness and Renewal</h3>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square bg-muted/20 overflow-hidden mb-4 rounded-sm">
                  <img src="/images/cultural immersion contact page .png" alt="Cultural Immersion" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-heading text-lg font-light text-[hsl(var(--cream))]">Cultural Immersion</h3>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.5}>
            <p className="font-body text-[11px] md:text-xs tracking-[0.35em] uppercase text-accent/60 mt-20">
              TRAVEL DELIBERATELY · RECHARGE INTENTIONALLY · BELONG EXCLUSIVELY
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
