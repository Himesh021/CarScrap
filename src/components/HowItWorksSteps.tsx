import { Calculator, PhoneCall, Truck } from "lucide-react";

const STEPS = [
  {
    n: 1,
    icon: Calculator,
    title: "Get Instant Quote",
    desc: "Use our calculator or fill the form. Get a transparent price estimate in under 30 seconds.",
  },
  {
    n: 2,
    icon: PhoneCall,
    title: "Schedule Free Pickup",
    desc: "Our team calls you within 30 minutes to confirm details and book a doorstep pickup at your convenience.",
  },
  {
    n: 3,
    icon: Truck,
    title: "Get Paid Instantly",
    desc: "We pick up the car, complete RC cancellation paperwork & pay you on UPI before our truck leaves.",
  },
];

export function HowItWorksSteps({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "grid gap-5 md:grid-cols-3" : "grid gap-6 md:grid-cols-3"}>
      {STEPS.map((s, index) => (
        <div key={s.n} className="relative">
          {index < STEPS.length - 1 && (
            <div className="step-divider hidden md:block" aria-hidden="true" />
          )}
          <div className="premium-card relative h-full p-6 md:p-7">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-cta text-accent-green-foreground shadow-elegant transition-transform duration-200 group-hover:scale-105">
                <s.icon className="h-6 w-6" />
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-green-soft text-sm font-bold text-accent-green ring-8 ring-white">
                {s.n}
              </span>
            </div>

            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-green">
                Step {s.n}
              </p>
              <h3 className="font-bold text-xl font-[Poppins] text-primary">{s.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{s.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
