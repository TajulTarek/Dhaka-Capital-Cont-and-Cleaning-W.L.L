// ── AnimatedCounter ─────────────────────────────────────────────────────────
"use client";

import React from "react";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

interface Props {
  target: number;
  suffix?: string;
  label: string;
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({
  target,
  suffix = "",
  label,
  duration = 2000,
  className = "",
}: Props) {
  const { count, ref } = useCounterAnimation(target, { duration });

  return (
    <div
      ref={ref}
      className={["flex flex-col items-center text-center", className].join(" ")}
    >
      <span className="text-5xl font-bold text-white tabular-nums">
        {count}
        <span style={{ color: "#39b2be" }}>{suffix}</span>
      </span>
      <span className="mt-2 text-sm font-medium uppercase tracking-widest text-slate-300">
        {label}
      </span>
    </div>
  );
}
