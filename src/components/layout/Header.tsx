import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LeadFormDialog } from "@/components/LeadFormDialog";
import { cn } from "@/lib/utils";
import geminiLogo from "@/assets/logo-transparent.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/calculator", label: "Price Calculator" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [leadOpen, setLeadOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
           <img
  src={geminiLogo}
  className="h-10 w-auto object-contain"
/>
            <span className="text-lg font-bold font-[Poppins] tracking-tight">
              Car<span className="text-accent-green">2</span>Scrap
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <RouterNavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-accent"
                  )
                }
              >
                {item.label}
              </RouterNavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button variant="cta" size="sm" onClick={() => setLeadOpen(true)}>
              Get Best Price
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden rounded-md p-2 hover:bg-accent transition-colors"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="md:hidden border-t border-border bg-background animate-fade-in">
            <div className="container flex flex-col gap-1 py-2">
              {navItems.map((item) => (
                <RouterNavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "bg-accent text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-primary"
                    )
                  }
                >
                  {item.label}
                </RouterNavLink>
              ))}

              <Button
                variant="cta"
                className="mt-2"
                onClick={() => {
                  setOpen(false);
                  setLeadOpen(true);
                }}
              >
                Get Best Price
              </Button>
            </div>
          </div>
        )}
      </header>

      <LeadFormDialog open={leadOpen} onOpenChange={setLeadOpen} />
    </>
  );
}