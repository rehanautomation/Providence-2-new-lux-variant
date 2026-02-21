import { Link } from "react-router-dom";

const exploreLinks = [
  { label: "Experiences", path: "/experiences" },
  { label: "Accommodations", path: "/experiences" },
  { label: "Wellness", path: "/experiences" },
  { label: "Culinary", path: "/experiences" },
];

const membershipLinks = [
  { label: "Tiers & Pricing" },
  { label: "Founding Member Offer" },
  { label: "Our Philosophy" },
  { label: "Community Impact" },
];

const connectLinks = [
  { label: "Contact Us" },
  { label: "WhatsApp" },
  { label: "Instagram" },
  { label: "Schedule a Call" },
];

export default function Footer() {
  return (
    <footer className="bg-near-black border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
        {/* Brand */}
        <div className="mb-16">
          <h3 className="font-heading text-2xl md:text-3xl tracking-[0.2em] text-foreground font-light mb-2">
            PROVIDENCE
          </h3>
          <p className="font-body text-sm font-light text-muted-foreground max-w-lg leading-relaxed">
            A sanctuary of transformation. A portal to profound personal discovery — where extraordinary journeys begin.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-6">Explore</h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-body text-sm font-light text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-6">Membership</h4>
            <ul className="space-y-3">
              {membershipLinks.map((link) => (
                <li key={link.label}>
                  <span className="font-body text-sm font-light text-muted-foreground/50 cursor-default">
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-primary mb-6">Connect</h4>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  <span className="font-body text-sm font-light text-muted-foreground/50 cursor-default">
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-8 border-t border-border/20">
          <p className="font-body text-[10px] tracking-wider text-muted-foreground/40 font-light">
            © 2025 Providence Resort. All rights reserved. Images displayed are conceptual representations of our vision, as Providence Resort is currently in development.
          </p>
        </div>
      </div>
    </footer>
  );
}
