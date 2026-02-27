// ── Header ──────────────────────────────────────────────────────────────────
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { NAV_ITEMS } from "@/data/nav";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* ── scroll shadow ── */
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* ── close dropdown on outside click ── */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* ── close mobile menu on route change ── */
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={[
          "sticky top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-white shadow-md"
            : "bg-white shadow-sm",
        ].join(" ")}
      >
        {/* ── Top bar ── */}
        <div
          className="hidden md:block text-xs text-white py-1.5"
          style={{ backgroundColor: "#0b1120" }}
        >
          <div className="container-custom flex items-center justify-between">
            <span>Industrial area Doha – Qatar</span>
            <div className="flex items-center gap-4">
              <a
                href="tel:+97455740434"
                className="flex items-center gap-1 hover:opacity-80 transition-opacity"
              >
                <Phone size={11} />
                +974 55 740 434
              </a>
              <a
                href="https://wa.me/97466895375"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:opacity-80 transition-opacity"
              >
                <span>WA:</span>
                +974 66 895 375
              </a>
            </div>
          </div>
        </div>

        {/* ── Main nav ── */}
        <div className="container-custom flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" aria-label="Dhaka Capital home" className="flex items-center gap-3 group">
            {/* SVG logo mark */}
            <div
              className="w-10 h-10 flex items-center justify-center rounded-lg font-black text-white text-lg transition-transform group-hover:scale-105"
              style={{ backgroundColor: "#e8620a" }}
              aria-hidden="true"
            >
              D
            </div>
            <div className="leading-tight">
              <span className="block font-extrabold text-[#0b1120] text-base tracking-tight">
                Dhaka Capital
              </span>
              <span className="block text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                Cont &amp; Cleaning W.L.L
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.href} className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setDropdownOpen((o) => !o)}
                    className={[
                      "flex items-center gap-1 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "text-[#e8620a]"
                        : "text-[#0b1120] hover:text-[#e8620a]",
                    ].join(" ")}
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {/* Dropdown */}
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={[
                            "block px-4 py-2.5 text-sm transition-colors",
                            pathname === child.href
                              ? "text-[#e8620a] font-semibold bg-orange-50"
                              : "text-slate-700 hover:text-[#e8620a] hover:bg-orange-50",
                          ].join(" ")}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-[#e8620a] font-semibold"
                      : "text-[#0b1120] hover:text-[#e8620a]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+97460024123"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-md text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "#e8620a" }}
            >
              <Phone size={14} />
              Call Us
            </a>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X size={22} className="text-[#0b1120]" />
              ) : (
                <Menu size={22} className="text-[#0b1120]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
