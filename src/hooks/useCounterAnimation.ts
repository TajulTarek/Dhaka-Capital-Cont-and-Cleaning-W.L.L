// ── useCounterAnimation ─────────────────────────────────────────────────────
// Starts counting from 0 to `target` when the ref element enters the viewport.

"use client";

import { useState, useEffect, useRef } from "react";

interface Options {
  duration?: number; // ms  (default 2000)
  threshold?: number; // 0–1 (default 0.3)
}

export function useCounterAnimation(
  target: number,
  { duration = 2000, threshold = 0.3 }: Options = {}
): { count: number; ref: React.RefObject<HTMLDivElement | null> } {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, threshold]);

  return { count, ref };
}
