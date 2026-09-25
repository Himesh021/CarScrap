import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, MessageCircle, MapPin, Mail, Clock, CheckCircle2, Loader2, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";
import { BUSINESS, whatsappLink } from "@/lib/business";
import { leadSchema, type LeadInput } from "@/lib/validation";
import {
  CAR_CATEGORIES,
  CONDITION_LABELS,
  Condition,
  MAX_YEAR,
  MIN_YEAR,
} from "@/lib/calculator";
import { supabase } from "@/integrations/supabase/client";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | car2scrap";
  }, []);

  const form = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      car_category: "sedan",
      car_model: "",
      year: MAX_YEAR - 8,
      condition: "good",
    },
    mode: "onTouched",
  });

  const phoneValue = form.watch("phone") || "";

  async function onSubmit(data: LeadInput) {
    const { error } = await supabase.from("leads").insert({
      name: data.name,
      phone: data.phone,
      city: data.city,
      car_category: data.car_category,
      car_model: data.car_model || null,
      year: data.year,
      condition: data.condition,
      source: "contact-page",
      status: "new",
    });
    if (error) {
      toast.error("Could not submit. Please try again or call us.");
      return;
    }
    supabase.functions
      .invoke("notify-admin-lead", { body: { ...data, source: "contact-page" } })
      .catch(() => {});
    setSubmitted(true);
    toast.success("Request received! We'll call you within 30 minutes.");
  }

  return (
    <div>
      <section className="bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto max-w-3xl px-4 py-10 text-center md:py-14">
          <span className="inline-block rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85">
            Contact
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight font-[Poppins] md:text-5xl">
            Talk to a real human — <span className="text-accent-green">no bots</span>
          </h1>
          <p className="mt-3 text-sm text-primary-foreground/80 md:text-base">
            Call, WhatsApp, or fill the form. We respond within 30 minutes during business hours.
          </p>
        </div>
      </section>

      <section className="container mx-auto grid gap-6 px-4 py-8 md:py-12 lg:grid-cols-5 lg:gap-8 lg:py-16">
        <div className="space-y-3 lg:col-span-2">
          <a
            href={`tel:${BUSINESS.phone}`}
            aria-label="Call car2scrap"
            className="block rounded-xl border bg-card p-4 shadow-card transition-base hover:shadow-elegant"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-blue-soft text-accent-blue">
                <Phone className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Call us</p>
                <p className="text-base font-bold text-foreground">{BUSINESS.phoneDisplay}</p>
              </div>
            </div>
          </a>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="block rounded-xl border bg-card p-4 shadow-card transition-base hover:shadow-elegant"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[hsl(142_70%_45%)]/15 text-[hsl(142_70%_35%)]">
                <MessageCircle className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">WhatsApp</p>
                <p className="text-base font-bold text-foreground">Chat with us</p>
              </div>
            </div>
          </a>

          <a
            href={`mailto:${BUSINESS.email}`}
            aria-label="Email car2scrap"
            className="block rounded-xl border bg-card p-4 shadow-card transition-base hover:shadow-elegant"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-green-soft text-accent-green">
                <Mail className="h-4 w-4" />
              </span>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Email</p>
                <p className="break-all text-base font-semibold text-foreground">{BUSINESS.email}</p>
              </div>
            </div>
          </a>

          <div className="rounded-xl border bg-card p-4 shadow-card">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                <MapPin className="h-4 w-4" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">Office</p>
                <p className="mt-1 text-sm font-medium leading-relaxed text-foreground">{BUSINESS.address}</p>
                <a
                  href={BUSINESS.mapsLink || BUSINESS.mapsEmbed}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-blue hover:text-accent-blue/80"
                >
                  Open in Maps
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              Mon – Sat, 9 AM – 8 PM
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border shadow-card">
            <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
              <iframe
                title="car2scrap location"
                src={BUSINESS.mapsEmbed}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <Card className="p-5 shadow-elegant md:p-7">
            {submitted ? (
              <div className="space-y-4 py-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent-green-soft">
                  <CheckCircle2 className="h-8 w-8 text-accent-green" />
                </div>
                <h2 className="text-2xl font-bold font-[Poppins]">Request Received!</h2>
                <p className="text-muted-foreground">
                  Our team will call you on <strong>+91 {phoneValue}</strong> within 30 minutes.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Submit another
                </Button>
              </div>
            ) : (
              <>
                <h2 className="mb-1 text-2xl font-bold font-[Poppins]">Request a callback</h2>
                <p className="mb-6 text-sm text-muted-foreground">
                  Fill in the details and we'll reach out within 30 minutes.
                </p>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="rounded-xl border bg-muted/20 p-4">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Your details
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <Label htmlFor="c-name" className="text-sm font-medium text-foreground">
                          Full name
                        </Label>
                        <Input
                          id="c-name"
                          aria-invalid={Boolean(form.formState.errors.name)}
                          aria-describedby={form.formState.errors.name ? "c-name-error" : undefined}
                          {...form.register("name")}
                          className="mt-1.5"
                        />
                        {form.formState.errors.name && (
                          <p id="c-name-error" className="mt-1 text-xs text-destructive">
                            {form.formState.errors.name.message}
                          </p>
                        )}
                      </div>

                      <div className="sm:col-span-1">
                        <Label htmlFor="c-phone" className="text-sm font-medium text-foreground">
                          Mobile Number
                        </Label>
                        <div className="mt-1.5 flex items-stretch overflow-hidden rounded-md border border-input bg-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
                          <span className="flex items-center border-r bg-muted px-3 text-sm text-muted-foreground">
                            +91
                          </span>
                          <Input
                            id="c-phone"
                            type="tel"
                            inputMode="numeric"
                            autoComplete="tel"
                            aria-invalid={Boolean(form.formState.errors.phone)}
                            aria-describedby={form.formState.errors.phone ? "c-phone-error" : undefined}
                            maxLength={10}
                            {...form.register("phone", {
                              onChange: (event) => {
                                const digits = event.target.value.replace(/\D/g, "").slice(0, 10);
                                form.setValue("phone", digits, { shouldValidate: true, shouldDirty: true });
                              },
                            })}
                            className="flex-1 border-0 rounded-none bg-transparent text-base focus-visible:ring-0 focus-visible:ring-offset-0"
                          />
                        </div>
                        {form.formState.errors.phone && (
                          <p id="c-phone-error" className="mt-1 text-xs text-destructive">
                            {form.formState.errors.phone.message}
                          </p>
                        )}
                      </div>

                      <div className="sm:col-span-2">
                        <Label htmlFor="c-city" className="text-sm font-medium text-foreground">
                          City
                        </Label>
                        <Input
                          id="c-city"
                          autoComplete="address-level2"
                          aria-invalid={Boolean(form.formState.errors.city)}
                          aria-describedby={form.formState.errors.city ? "c-city-error" : undefined}
                          {...form.register("city")}
                          className="mt-1.5"
                        />
                        {form.formState.errors.city && (
                          <p id="c-city-error" className="mt-1 text-xs text-destructive">
                            {form.formState.errors.city.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border bg-muted/20 p-4">
                    <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Vehicle details
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label className="text-sm font-medium text-foreground">Car Type</Label>
                        <Select
                          value={form.watch("car_category")}
                          onValueChange={(value) => form.setValue("car_category", value, { shouldValidate: true })}
                        >
                          <SelectTrigger className="mt-1.5 w-full" aria-label="Car type">
                            <SelectValue placeholder="Select car type" />
                          </SelectTrigger>
                          <SelectContent>
                            {CAR_CATEGORIES.map((option) => (
                              <SelectItem key={option.id} value={option.id}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {form.formState.errors.car_category && (
                          <p className="mt-1 text-xs text-destructive">
                            {form.formState.errors.car_category.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="c-model" className="text-sm font-medium text-foreground">
                          Model
                        </Label>
                        <Input
                          id="c-model"
                          {...form.register("car_model")}
                          placeholder="e.g. Swift"
                          className="mt-1.5"
                        />
                      </div>

                      <div>
                        <Label htmlFor="c-year" className="text-sm font-medium text-foreground">
                          Year
                        </Label>
                        <Input
                          id="c-year"
                          type="number"
                          inputMode="numeric"
                          min={MIN_YEAR}
                          max={MAX_YEAR}
                          aria-invalid={Boolean(form.formState.errors.year)}
                          aria-describedby={form.formState.errors.year ? "c-year-error" : undefined}
                          {...form.register("year", { valueAsNumber: true })}
                          className="mt-1.5"
                        />
                        {form.formState.errors.year && (
                          <p id="c-year-error" className="mt-1 text-xs text-destructive">
                            {form.formState.errors.year.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label className="text-sm font-medium text-foreground">Condition</Label>
                        <div className="mt-1.5 grid grid-cols-3 gap-2">
                          {(Object.keys(CONDITION_LABELS) as Condition[]).map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => form.setValue("condition", option, { shouldValidate: true })}
                              className={`rounded-lg border px-2 py-2.5 text-xs font-medium transition-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                                form.watch("condition") === option
                                  ? "border-accent-green bg-accent-green-soft text-accent-green"
                                  : "border-border hover:border-primary/30"
                              }`}
                              aria-pressed={form.watch("condition") === option}
                            >
                              {CONDITION_LABELS[option]}
                            </button>
                          ))}
                        </div>
                        {form.formState.errors.condition && (
                          <p className="mt-1 text-xs text-destructive">
                            {form.formState.errors.condition.message}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="w-full text-base font-semibold"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                    Request Callback
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    By submitting you agree to be contacted regarding your scrap car quote.
                  </p>
                </form>
              </>
            )}
          </Card>
        </div>
      </section>
    </div>
  );
}
