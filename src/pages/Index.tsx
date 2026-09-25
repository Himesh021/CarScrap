import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, ShieldCheck, IndianRupee, Truck, Banknote, FileCheck2 } from "lucide-react";
import { PriceCalculator } from "@/components/PriceCalculator";
import { TrustBadges } from "@/components/TrustBadges";
import { Testimonials } from "@/components/Testimonials";
import { HowItWorksSteps } from "@/components/HowItWorksSteps";
import { LiveActivity } from "@/components/LiveActivity";
import { LeadFormDialog } from "@/components/LeadFormDialog";
import heroImg from "@/assets/hero-car.jpg";

const Index = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.title = "Car2Scrap | Best Scrap Price for Your Old Car";
  }, []);

  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div
          className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_30%_20%,white_1px,transparent_1px)]"
          style={{ backgroundSize: "24px 24px" }}
        />
        <div className="container relative py-12 md:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-7 animate-slide-up">
              <div className="hero-feature-pill w-fit">
                <ShieldCheck className="h-4 w-4 text-accent-green" />
                Govt. Authorized Vehicle Recycler
              </div>

              <div className="space-y-4">
                <h1 className="max-w-xl text-4xl font-extrabold leading-[1.05] tracking-[-0.06em] text-white md:text-5xl lg:text-6xl">
                  Get the <span className="text-accent-green">Best Price</span> for Your Old Car
                </h1>

                <p className="max-w-xl text-base leading-7 text-primary-foreground/80 md:text-lg">
                  Free doorstep pickup, instant UPI payment, and complete RC cancellation —
                  all handled by India&apos;s most trusted scrap car platform.
                </p>
              </div>

              <ul className="grid max-w-xl gap-2.5 sm:grid-cols-2">
                {[
                  "Instant transparent quote",
                  "Free doorstep pickup",
                  "Payment before pickup",
                  "RC cancellation included",
                ].map((f) => (
                  <li key={f} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-primary-foreground/90">
                    <CheckCircle2 className="h-4 w-4 text-accent-green shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Button variant="cta" size="xl" onClick={() => setOpen(true)} className="group shadow-[0_18px_40px_-12px_rgba(34,197,94,0.8)] hover:-translate-y-0.5">
                  Get Best Price
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="xl"
                  className="border-white/20 bg-white/5 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
                >
                  <Link to="/calculator">Try the Calculator</Link>
                </Button>
              </div>

              <div className="pt-1">
                <LiveActivity />
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="absolute -inset-6 rounded-full bg-accent-green/15 blur-3xl" aria-hidden />
              <div className="glass-panel relative overflow-hidden rounded-[28px] border border-white/10 p-3 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.9)]">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-accent-green/10" aria-hidden />
                <img
                  src={heroImg}
                  alt="Old car ready for eco-friendly scrapping"
                  className="relative h-[480px] w-full rounded-[22px] object-cover shadow-elegant md:h-[540px]"
                  loading="eager"
                />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-slate-950/55 px-4 py-3 shadow-lg backdrop-blur-sm">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Same-day quote</p>
                    <p className="mt-1 text-xl font-bold text-white">₹ 18,000+</p>
                  </div>
                  <div className="rounded-full border border-accent-green/40 bg-accent-green/15 px-3 py-1.5 text-xs font-semibold text-accent-green">
                    Verified pickup
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border-t border-white/10 bg-black/15">
          <div className="container py-6 md:py-7">
            <div className="grid gap-3 sm:grid-cols-3">
              <Stat value="10,000+" label="Cars scrapped" />
              <Stat value="50+" label="Cities served" />
              <Stat value="₹4.5 Cr+" label="Paid to customers" />
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="container py-16 md:py-20 grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-2 space-y-5">
          <span className="inline-block rounded-full bg-accent-blue-soft text-accent-blue text-xs font-semibold px-3 py-1 uppercase tracking-wide">
            Price Calculator
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-[Poppins]">
            Know your car's scrap value <span className="text-accent-green">in seconds</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our calculator uses real metal recovery rates, vehicle weight, age depreciation
            and condition to give you a transparent quote — the same one our buyers offer
            on inspection.
          </p>
          <ul className="space-y-2">
            {[
              "Based on actual metal weight & current scrap rates",
              "No spam — calculate without sharing details",
              "Lock in your price by booking pickup",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-accent-green mt-0.5 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-3">
          <PriceCalculator source="landing-calculator" />
        </div>
      </section>

      {/* SERVICES */}
      <section className="container py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block rounded-full bg-accent-blue-soft text-accent-blue text-xs font-semibold px-3 py-1 uppercase tracking-wide">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 font-[Poppins]">
            A complete end-to-end scrap car experience
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: Truck,
              title: "Free pickup",
              text: "Doorstep towing, same-day scheduling, and zero pickup charges in our service area.",
            },
            {
              icon: Banknote,
              title: "Instant payment",
              text: "Secure UPI transfer before vehicle removal so you can close the transaction quickly.",
            },
            {
              icon: FileCheck2,
              title: "RC cancellation",
              text: "We handle deregistration paperwork and record updates so your car is legally closed out.",
            },
            {
              icon: ShieldCheck,
              title: "Eco recycling",
              text: "Authorized facilities break down metal responsibly and keep all disposal compliant.",
            },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border bg-card p-6 shadow-card hover:shadow-elegant transition-base">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-green-soft text-accent-green">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold font-[Poppins]">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gradient-soft border-y">
        <div className="container py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block rounded-full bg-accent-green-soft text-accent-green text-xs font-semibold px-3 py-1 uppercase tracking-wide">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-[Poppins]">
              Scrap your car in 3 simple steps
            </h2>
            <p className="text-muted-foreground mt-3">
              From quote to UPI payment — most pickups completed within 24 hours.
            </p>
          </div>
          <HowItWorksSteps />
        </div>
      </section>

      {/* TRUST */}
      <section className="container py-16 md:py-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-[Poppins]">
            Trusted, transparent, certified
          </h2>
          <p className="text-muted-foreground mt-3">
            We follow MoRTH End-of-Life Vehicle guidelines and partner only with
            government-authorized recycling facilities.
          </p>
        </div>
        <TrustBadges />
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gradient-soft border-y">
        <div className="container py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-block rounded-full bg-accent-blue-soft text-accent-blue text-xs font-semibold px-3 py-1 uppercase tracking-wide">
              Customer Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 font-[Poppins]">
              Real customers, real payouts
            </h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="container py-16 md:py-20">
        <div className="rounded-3xl bg-gradient-hero text-primary-foreground p-10 md:p-14 text-center shadow-elegant overflow-hidden relative">
          <div
            className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_70%_80%,white_1px,transparent_1px)]"
            style={{ backgroundSize: "24px 24px" }}
            aria-hidden
          />
          <div className="relative max-w-2xl mx-auto space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold font-[Poppins]">
              Ready to scrap your old car?
            </h2>
            <p className="text-primary-foreground/80">
              Get an instant quote, free pickup, and payment in under 24 hours.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <Button variant="cta" size="xl" onClick={() => setOpen(true)}>
                <IndianRupee className="h-5 w-5" />
                Get My Best Price
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="bg-white/10 text-primary-foreground border-white/20 hover:bg-white/15 hover:text-primary-foreground"
              >
                <Link to="/contact">
                  <Truck className="h-5 w-5" />
                  Talk to Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <LeadFormDialog open={open} onOpenChange={setOpen} source="landing-hero" />
    </div>
  );
};

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="stat-card px-4 py-4 text-center md:px-6 md:py-5">
      <div className="text-2xl font-bold tracking-[-0.05em] text-white md:text-3xl">{value}</div>
      <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-primary-foreground/70 md:text-[11px]">
        {label}
      </div>
    </div>
  );
}

export default Index;
