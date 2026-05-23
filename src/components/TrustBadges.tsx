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
        "flex",
        variant === "default" && "flex-wrap justify-center gap-3",
        variant === "compact" && "flex-col gap-2",
        variant === "overlap" &&
          "flex flex-wrap justify-center gap-2 md:gap-0 md:-space-x-3 px-2",
        className
      )}
    >
      {BADGES.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className={cn(
            "flex items-center gap-2 border bg-card shadow-card transition-base",
            variant === "default" &&
              "rounded-lg px-4 py-3 min-w-[140px] flex-1 hover:-translate-y-0.5 hover:shadow-md",
            variant === "compact" &&
              "rounded-lg px-3 py-2 hover:-translate-y-0.5 hover:shadow-md",
            variant === "overlap" &&
              "rounded-full border-2 border-background px-4 py-2.5 hover:z-10 hover:scale-105 hover:shadow-md"
          )}
        >
          <Icon
            className={cn(
              "shrink-0 text-accent-green",
              variant === "compact" || variant === "overlap"
                ? "h-4 w-4"
                : "h-5 w-5"
            )}
          />
          <span
            className={cn(
              "font-medium",
              variant === "compact" ? "text-xs" : "text-sm"
            )}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}
