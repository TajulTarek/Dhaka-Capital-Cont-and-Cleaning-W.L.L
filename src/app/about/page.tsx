// ── About Page ───────────────────────────────────────────────────────────────
import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import CoreValues from "@/components/about/CoreValues";
import MissionVision from "@/components/about/MissionVision";
import StatsCounter from "@/components/home/StatsCounter";
import SectionHeading from "@/components/shared/SectionHeading";

export const metadata: Metadata = {
  // কিউওয়ার্ড সমৃদ্ধ টাইটেল
  title:
    "About Us | Dhaka Capital Contracting WLL - Construction Experts in Qatar",
  description:
    "Learn about Dhaka Capital Contracting WLL. With over 5+ years of experience, we provide top-tier construction, renovation, and maintenance services in Doha, Qatar.",
  openGraph: {
    title: "About Us | Dhaka Capital Contracting WLL",
    description:
      "Quality craftsmanship and reliable construction services for residential and commercial projects in Qatar.",
    url: "https://www.dhakacapitalcontracting-wll.app/about",
  },
  // সঠিক লাইভ ইউআরএল সেট করা হয়েছে
  alternates: {
    canonical: "https://www.dhakacapitalcontracting-wll.app/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="ABOUT US"
        subtitle="Dhaka Capital Contracting WLL delivers reliable renovation, contracting, and maintenance services with a focus on quality workmanship and customer satisfaction."
        breadcrumbs={[{ label: "About" }]}
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&auto=format&fit=crop"
      />

      {/* ── Core values ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Our Core Values"
            subtitle="What sets Dhaka Capital Contracting WLL apart - the principles we commit to on every single project."
            center
          />
          <CoreValues />
        </div>
      </section>

      {/* ── Stats ── */}
      <StatsCounter />

      {/* ── Mission & Vision ── */}
      <section
        className="section-padding"
        style={{ backgroundColor: "#f8f7f5" }}
      >
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Direction"
            title="Mission & Vision"
            center
          />
          <MissionVision />
        </div>
      </section>
    </>
  );
}
