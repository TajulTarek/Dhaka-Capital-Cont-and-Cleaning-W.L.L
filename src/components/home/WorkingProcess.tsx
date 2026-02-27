// ── WorkingProcess ────────────────────────────────────────────────────────────
"use client";

import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { ClipboardList, Wrench, CheckCircle, Handshake } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Consultation & Planning",
    description:
      "We begin with a thorough consultation to understand your requirements, assess the site, and develop a clear project plan with transparent pricing.",
  },
  {
    step: "02",
    icon: Wrench,
    title: "Material Sourcing",
    description:
      "Our team sources premium, project-appropriate materials from trusted suppliers to ensure quality, durability, and value for every task.",
  },
  {
    step: "03",
    icon: CheckCircle,
    title: "Expert Execution",
    description:
      "Skilled tradespeople carry out the work with precision, following the agreed plan and maintaining strict quality standards throughout.",
  },
  {
    step: "04",
    icon: Handshake,
    title: "Delivery & Handover",
    description:
      "We complete a final inspection, address any snag items, and hand over the project on time — with a commitment to your complete satisfaction.",
  },
];

export default function WorkingProcess() {
  const headingRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });
  const stepsRef = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section className="section-padding bg-white" aria-label="Our working process" id="process">
      <div className="container-custom">
        <div ref={headingRef}>
          <SectionHeading
            eyebrow="Our Working Process"
            title="How We Deliver Every Project"
            subtitle="A clear, structured process that keeps projects on time, on budget, and to the highest quality."
            center
          />
        </div>

        <div
          ref={stepsRef}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connecting line (desktop only) */}
          <div
            className="hidden lg:block absolute top-10 left-[calc(12.5%+20px)] right-[calc(12.5%+20px)] h-[2px] z-0"
            style={{ backgroundColor: "#fee2d0" }}
            aria-hidden="true"
          />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.step}
                className="relative z-10 flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Icon circle */}
                <div
                  className="w-20 h-20 flex items-center justify-center rounded-full mb-5 shadow-lg"
                  style={{ backgroundColor: "#fff3ec", border: "3px solid #e8620a" }}
                >
                  <Icon size={32} style={{ color: "#e8620a" }} />
                </div>

                {/* Step number badge */}
                <span
                  className="absolute top-0 right-[calc(50%-40px+28px)] -mt-1 text-[10px] font-black text-white w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#e8620a" }}
                >
                  {i + 1}
                </span>

                <h3 className="font-bold text-[#0b1120] text-base mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
