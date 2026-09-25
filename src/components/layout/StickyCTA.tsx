import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LeadFormDialog } from "@/components/LeadFormDialog";
import { Sparkles } from "lucide-react";

export function StickyCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-x-4 bottom-4 z-30 md:left-auto md:right-6 md:bottom-6 md:w-auto pointer-events-none">
        <div className="pointer-events-auto mx-auto max-w-sm md:mx-0">
          <Button
            variant="cta"
            size="lg"
            className="w-full md:w-auto shadow-[0_20px_45px_-15px_rgba(34,197,94,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_24px_48px_-15px_rgba(34,197,94,0.8)]"
            onClick={() => setOpen(true)}
          >
            <Sparkles className="h-4 w-4" />
            Get Best Price Now
          </Button>
        </div>
      </div>
      <LeadFormDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
