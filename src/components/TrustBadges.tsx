import { cn } from "@/lib/utils";
import { ShieldCheck, Banknote, Truck, FileCheck2, Leaf } from "lucide-react";

const BADGES = [
  { icon: ShieldCheck, label: "Govt. Authorized" },
  { icon: Banknote, label: "Instant Payment" },
  { icon: Truck, label: "Free Pickup" },
  { icon: FileCheck2, label: "RC Cancellation" },
  { icon: Leaf, label: "Eco-Certified" },
];

type TrustBadgesProps = {
  className?: string;
  variant?: "default" | "compact" | "overlap";
};

export function TrustBadges({ className, variant = "default" }: TrustBadgesProps) {
  return (
    <div
      className={cn(
        "grid",
        variant === "default" && "grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-5",
        variant === "compact" && "grid gap-2",
        variant === "overlap" && "flex flex-wrap justify-center gap-3 md:gap-2",
        className,
      )}
    >
      {BADGES.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className={cn(
            "premium-card flex items-center gap-3 p-4 text-left",
            variant === "compact" && "p-3",
            variant === "overlap" && "rounded-full border-2 border-background px-4 py-2.5 shadow-md",
          )}
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-green-soft text-accent-green shadow-sm">
            <Icon className="h-5 w-5" />
          </div>
          <span className="text-sm font-semibold text-primary">{label}</span>
        </div>
      ))}
    </div>
  );
}
