import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";

const TESTIMONIALS = [
  {
    name: "Anil Kumar",
    city: "Delhi",
    quote:
      "Got ₹26,500 for my 2009 WagonR. They picked it up the same day and paid me on UPI before the truck even left. Smooth experience!",
  },
  {
    name: "Meera Joshi",
    city: "Noida",
    quote:
      "I was worried about RC cancellation paperwork for our old Indica. car2scrap handled everything end-to-end. Super professional.",
  },
  {
    name: "Ravi Verma",
    city: "Ghaziabad",
    quote:
      "Best quote among 4 companies I checked. Free pickup, no haggling on the spot. Highly recommended for old vehicles.",
  },
];

export function Testimonials() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {TESTIMONIALS.map((t) => (
        <Card key={t.name} className="group flex h-full flex-col p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-elegant">
          <div className="mb-4 flex items-center gap-1 text-accent-green">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>

          <p className="text-base leading-7 text-foreground/85">“{t.quote}”</p>

          <div className="mt-6 border-t border-border pt-4">
            <p className="font-semibold text-sm text-primary">{t.name}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">{t.city}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
