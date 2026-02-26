import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", path: "/", active: true },
  { label: "Experiences", path: "/experiences", active: true },
  { label: "Membership", path: "/membership", active: true },
  { label: "Our Responsibility", path: "/responsibility", active: true },
  { label: "Residences", path: "/residences", active: true },
  { label: "Contact", path: "/contact", active: true },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start">
            <span className="font-heading text-xl md:text-2xl tracking-[0.3em] text-foreground font-light">
              PROVIDENCE
            </span>
            <span className="font-body text-[8px] md:text-[9px] tracking-[0.5em] text-muted-foreground font-light uppercase">
              Resort
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) =>
              link.active ? (
                <Link
                  key={link.label}
                  to={link.path}
                  className={cn(
                    "font-body text-[11px] tracking-[0.2em] uppercase transition-colors duration-300",
                     location.pathname === link.path
                       ? "text-accent"
                       : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ) : (
                <span
                  key={link.label}
                  className="font-body text-[11px] tracking-[0.2em] uppercase text-muted-foreground/40 cursor-default"
                >
                  {link.label}
                </span>
              )
            )}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={cn("w-6 h-px bg-foreground transition-all duration-300", menuOpen && "rotate-45 translate-y-[3.5px]")} />
            <span className={cn("w-6 h-px bg-foreground transition-all duration-300", menuOpen && "-rotate-45 -translate-y-[3.5px]")} />
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 bg-background/95 backdrop-blur-md",
          menuOpen ? "max-h-80 border-b border-border/50" : "max-h-0"
        )}
      >
        <nav className="flex flex-col items-center gap-6 py-8">
          {navLinks.map((link) =>
            link.active ? (
              <Link
                key={link.label}
                to={link.path}
                className={cn(
                  "font-body text-xs tracking-[0.2em] uppercase transition-colors duration-300",
                   location.pathname === link.path
                     ? "text-accent"
                     : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ) : (
              <span
                key={link.label}
                className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground/40"
              >
                {link.label}
              </span>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
