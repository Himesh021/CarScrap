import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/business";

export function WhatsAppFAB() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-4 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[hsl(142_70%_45%)] text-white shadow-[0_18px_38px_-12px_rgba(34,197,94,0.8)] transition-all duration-200 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_20px_42px_-12px_rgba(34,197,94,0.9)] md:right-6 md:bottom-24"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
