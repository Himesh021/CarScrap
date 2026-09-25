import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import geminiLogo from "@/assets/logo-transparent.png";

export function Footer() {
  return (
    <footer className="mt-20 bg-primary text-primary-foreground">
      <div className="container py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div className="xl:pr-8">
            <Link to="/" className="flex items-center gap-3 font-bold text-lg">
              <img
                src={geminiLogo}
                alt="Car2Scrap Logo"
                className="h-10 w-auto rounded-xl object-contain"
              />
              <span className="font-[Poppins] text-xl">
                Car<span className="text-accent-green">2</span>Scrap
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-7 text-primary-foreground/70">
              India&apos;s trusted car scrap & recycling platform. Govt. authorized,
              instant payment, free pickup.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/75">
              <li><Link to="/calculator" className="transition-colors hover:text-accent-green">Price Calculator</Link></li>
              <li><Link to="/services" className="transition-colors hover:text-accent-green">Services</Link></li>
              <li><Link to="/how-it-works" className="transition-colors hover:text-accent-green">How It Works</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-accent-green">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-primary-foreground/75">
              <li>End-of-life vehicle scrapping</li>
              <li>Free doorstep pickup</li>
              <li>RC cancellation support</li>
              <li>Instant UPI payment</li>
              <li>Eco-certified recycling</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
              Reach Us
            </h4>
            <ul className="space-y-4 text-sm text-primary-foreground/75">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent-green" />
                <a href={`tel:${BUSINESS.phone}`} className="transition-colors hover:text-accent-green">
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent-green" />
                <a href={`mailto:${BUSINESS.email}`} className="break-all transition-colors hover:text-accent-green">
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-green" />
                <span>{BUSINESS.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-primary-foreground/60 md:flex-row md:text-left">
          <span>© {new Date().getFullYear()} car2scrap. All rights reserved.</span>
          <span>Govt. authorized vehicle recycling facility</span>
        </div>
      </div>
    </footer>
  );
}
