// ── StatsCounter ─────────────────────────────────────────────────────────────
import React from "react";
import AnimatedCounter from "@/components/shared/AnimatedCounter";

const STATS = [
  { target: 50,  suffix: "+", label: "Commercial Projects" },
  { target: 100,  suffix: "+", label: "Residential Projects" },
  { target: 40,   suffix: "+", label: "Hard Working Employees" },
  { target: 200, suffix: "+", label: "Happy Customers" },
];

export default function StatsCounter({ light = false }: { light?: boolean }) {
  return (
    <section
      className="py-16"
      style={{
        background: light
          ? "#0f1e30"
          : "linear-gradient(135deg, #0b1120 0%, #152840 100%)",
      }}
      aria-label="Company statistics"
    >
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
