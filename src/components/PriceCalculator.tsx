import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Sparkles, Info, IndianRupee } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  CAR_CATEGORIES,
  CAR_MODELS,
  CONDITION_LABELS,
  Condition,
  MAX_YEAR,
  MIN_YEAR,
  SCRAP_RATE_PER_KG,
  calculatePrice,
  formatINR,
} from "@/lib/calculator";
import { LeadFormDialog } from "@/components/LeadFormDialog";

interface PriceCalculatorProps {
  variant?: "card" | "embedded";
  source?: string;
}

export function PriceCalculator({ variant = "card", source = "calculator" }: PriceCalculatorProps) {
  const [category, setCategory] = useState("sedan");
  const [modelId, setModelId] = useState<string>("");
  const [year, setYear] = useState(MAX_YEAR - 8);
  const [condition, setCondition] = useState<Condition>("good");
  const [open, setOpen] = useState(false);

  const filteredModels = useMemo(
    () => CAR_MODELS.filter((m) => m.category === category),
    [category],
  );

  const result = useMemo(
    () => calculatePrice({ category, modelId: modelId || undefined, year, condition }),
    [category, modelId, year, condition],
  );

  const Wrapper = variant === "card" ? Card : "div";

  return (
    <>
      <Wrapper
        className={cn(
          variant === "card" &&
            "rounded-[26px] border-2 border-border/80 bg-card p-5 shadow-[0_20px_60px_-32px_rgba(15,23,42,0.35)] md:p-7",
        )}
      >
        <div className="mb-6 flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-blue-soft text-accent-blue shadow-sm">
            <Sparkles className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-[Poppins] text-2xl font-bold tracking-[-0.04em] text-primary">Instant Price Calculator</h3>
            <p className="text-sm text-muted-foreground">Get an estimate in seconds</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-2xl border border-border bg-muted/30 p-4">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Vehicle details</p>
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-medium text-primary">Car type</Label>
                <Select
                  value={category}
                  onValueChange={(v) => {
                    setCategory(v);
                    setModelId("");
                  }}
                >
                  <SelectTrigger className="mt-1.5 h-11 rounded-xl border-border bg-white shadow-sm transition-all duration-200 focus:ring-2 focus:ring-accent-green/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {CAR_CATEGORIES.map((c) => (
                      <SelectItem key={c.id} value={c.id}>
                        {c.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium text-primary">
                  Model <span className="text-muted-foreground text-xs font-normal">(optional)</span>
                </Label>
                <Select
                  value={modelId || "_none"}
                  onValueChange={(v) => setModelId(v === "_none" ? "" : v)}
                >
                  <SelectTrigger className="mt-1.5 h-11 rounded-xl border-border bg-white shadow-sm transition-all duration-200 focus:ring-2 focus:ring-accent-green/20">
                    <SelectValue placeholder="Choose your model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="_none">Skip — use category average</SelectItem>
                    {filteredModels.map((m) => (
                      <SelectItem key={m.id} value={m.id}>
                        {m.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium text-primary">Manufacturing year</Label>
                  <span className="rounded-full bg-accent-green-soft px-2.5 py-1 text-sm font-semibold text-accent-green">{year}</span>
                </div>
                <Slider
                  value={[year]}
                  min={MIN_YEAR}
                  max={MAX_YEAR}
                  step={1}
                  onValueChange={([v]) => setYear(v)}
                  className="mt-4"
                />
                <div className="mt-2 flex justify-between text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  <span>{MIN_YEAR}</span>
                  <span>{MAX_YEAR}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-muted/30 p-4">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Vehicle condition</p>
            <div className="grid grid-cols-3 gap-2">
              {(Object.keys(CONDITION_LABELS) as Condition[]).map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCondition(c)}
                  className={cn(
                    "rounded-xl border px-3 py-2.5 text-sm font-medium transition-all duration-200",
                    condition === c
                      ? "border-accent-green bg-accent-green-soft text-accent-green shadow-sm"
                      : "border-border bg-white text-foreground hover:border-accent-green/40 hover:text-primary",
                  )}
                >
                  {CONDITION_LABELS[c]}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[24px] bg-gradient-hero p-5 text-center text-primary-foreground shadow-[0_26px_54px_-28px_rgba(15,23,42,0.7)]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
            Estimated scrap value
          </p>
          <p className="mt-3 flex items-center justify-center gap-1 text-3xl font-bold tracking-[-0.06em] md:text-4xl">
            <IndianRupee className="h-6 w-6 text-accent-green" />
            {result.min.toLocaleString("en-IN")} – {result.max.toLocaleString("en-IN")}
          </p>
          <p className="mt-3 flex items-center justify-center gap-1 text-xs text-primary-foreground/75">
            <Info className="h-3 w-3" />
            Final price may vary after physical inspection
          </p>
        </div>

        <details className="mt-5 rounded-2xl border border-border bg-muted/30 px-4 py-3 text-sm shadow-sm">
          <summary className="cursor-pointer list-none font-semibold text-primary">Price breakdown</summary>
          <div className="mt-3 space-y-2 text-muted-foreground">
            <div className="flex justify-between gap-3">
              <span>Vehicle weight</span>
              <span>{result.weight} kg</span>
            </div>
            <div className="flex justify-between gap-3">
              <span>Metal value @ ₹{SCRAP_RATE_PER_KG}/kg</span>
              <span>{formatINR(result.basePrice)}</span>
            </div>
            <div className="flex justify-between gap-3">
              <span>Age adjustment ({MAX_YEAR - year} yrs)</span>
              <span className={result.ageAdjustment < 0 ? "text-destructive" : "text-accent-green"}>
                {result.ageAdjustment >= 0 ? "+" : ""}{formatINR(result.ageAdjustment)}
              </span>
            </div>
            <div className="flex justify-between gap-3">
              <span>Condition adjustment</span>
              <span className={result.conditionAdjustment < 0 ? "text-destructive" : "text-accent-green"}>
                {result.conditionAdjustment >= 0 ? "+" : ""}{formatINR(result.conditionAdjustment)}
              </span>
            </div>
          </div>
        </details>

        <Button
          variant="cta"
          size="lg"
          className="mt-5 w-full shadow-[0_18px_38px_-16px_rgba(34,197,94,0.75)] transition-all duration-200 hover:-translate-y-0.5"
          onClick={() => setOpen(true)}
        >
          Book Free Pickup at This Price
        </Button>
      </Wrapper>

      <LeadFormDialog
        open={open}
        onOpenChange={setOpen}
        source={source}
        prefill={{
          car_category: category,
          car_model: modelId,
          year,
          condition,
        }}
      />
    </>
  );
}
