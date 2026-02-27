// ── ServiceCTA ────────────────────────────────────────────────────────────────
// Orange CTA strip used at the bottom of every service page.
import React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";

interface Props {
  title?: string;
  subtitle?: string;
}

export default function ServiceCTA({
  title = "Ready to Start Your Project?",
  subtitle = "Contact us today for a free site inspection and transparent quotation.",
}: Props) {
  return (
    <section
      className="py-16"
      style={{
        background: "linear-gradient(135deg, #e8620a 0%, #c9530a 100%)",
      }}
      aria-label="Call to action"
    >
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">{title}</h2>
          <p className="mt-2 text-white/85 text-sm md:text-base">{subtitle}</p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center md:justify-end flex-shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-[#e8620a] bg-white hover:bg-orange-50 transition-colors text-sm shadow-lg"
          >
            Get a Free Quote
          </Link>
          <a
            href="https://wa.me/97455740434"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-lg font-bold text-white border-2 border-white/70 hover:border-white hover:bg-white/10 transition-colors text-sm"
          >
            <Phone size={15} />
            +974 55 740 434
          </a>
        </div>
      </div>
    </section>
  );
}
