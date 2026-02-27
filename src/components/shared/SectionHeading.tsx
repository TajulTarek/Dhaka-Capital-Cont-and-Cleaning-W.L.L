// ── SectionHeading ──────────────────────────────────────────────────────────
import React from "react";

interface Props {
  eyebrow?: string;     // small orange text above
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;       // white text for dark backgrounds
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  light = false,
  className = "",
}: Props) {
  return (
    <div
      className={[
        "mb-10",
        center ? "text-center" : "",
        className,
      ].join(" ")}
    >
      {eyebrow && (
        <span
          className="inline-block text-sm font-semibold uppercase tracking-widest mb-3"
          style={{ color: "#e8620a" }}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={[
          "text-3xl md:text-4xl font-bold leading-tight",
          light ? "text-white" : "text-[#0b1120]",
        ].join(" ")}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={[
            "mt-4 text-base md:text-lg max-w-3xl leading-relaxed",
            center ? "mx-auto" : "",
            light ? "text-slate-300" : "text-slate-500",
          ].join(" ")}
        >
          {subtitle}
        </p>
      )}

      {/* Decorative underline */}
      <div
        className={["mt-4 h-1 w-16 rounded-full", center ? "mx-auto" : ""].join(" ")}
        style={{ backgroundColor: "#e8620a" }}
      />
    </div>
  );
}
