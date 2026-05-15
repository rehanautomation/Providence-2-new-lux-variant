import { Link } from "react-router-dom";

const exploreLinks = [
  { label: "Experiences", path: "/experiences" },
  { label: "Accommodations", path: "/experiences#stays" },
  { label: "Wellness", path: "/experiences#wellness" },
  { label: "Culinary", path: "/experiences#culinary" },
];

const membershipLinks = [
  { label: "Our Standard", path: "/membership#standard" },
  { label: "Our Philosophy", path: "/membership#philosophy" },
  { label: "Founding Members Offer", path: "/membership#founding" },
  { label: "What Your Membership Unlocks", path: "/membership#unlocks" },
];

const connectLinks = [
  { label: "Contact Us", path: "/contact" },
  { label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-primary-foreground/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-20 md:pt-12 md:pb-28">
        {/* Brand */}
        <div className="mb-16">
          <img src="/images/logo white.png" alt="Providence Resorts" className="h-32 w-auto object-contain mb-4" />
          <p className="font-body text-sm font-light text-primary-foreground/70 max-w-lg leading-relaxed">
            Where extraordinary feels like home.
          </p>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-accent mb-6">Explore</h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-body text-sm font-light text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-accent mb-6">Membership</h4>
            <ul className="space-y-3">
              {membershipLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-body text-sm font-light text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-[10px] tracking-[0.3em] uppercase text-accent mb-6">Connect</h4>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.label}>
                  {link.path ? (
                    <Link
                      to={link.path}
                      className="font-body text-sm font-light text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <span className="font-body text-sm font-light text-primary-foreground/60 cursor-default">
                      {link.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <p className="font-body text-[10px] tracking-wider text-primary-foreground/30 font-light">
            © 2025 Providence Resort. All rights reserved. Images displayed are conceptual representations of our vision, as Providence Resort is currently in development.
          </p>
        </div>
      </div>
    </footer>
  );
}
