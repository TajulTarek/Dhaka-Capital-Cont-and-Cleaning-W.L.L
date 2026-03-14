// ── Services Page ─────────────────────────────────────────────────────────────
import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ServiceCard from "@/components/shared/ServiceCard";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  // কিউওয়ার্ড সমৃদ্ধ টাইটেল
  title:
    "Our Services | Dhaka Capital Contracting WLL - Construction & Maintenance",
  description:
    "Explore our professional services at Dhaka Capital Contracting WLL. We offer carpentry, painting, tiling, MEP, and renovation services in Doha, Qatar.",

  // আপনার বর্তমান লাইভ ইউআরএল অনুযায়ী ক্যানোনিকাল লিঙ্ক
  alternates: {
    canonical: "https://www.dhakacapitalcontracting-wll.app/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="OUR SERVICES"
        subtitle="A complete range of contracting, renovation, and maintenance services for residential, commercial, and industrial projects in Qatar."
        breadcrumbs={[{ label: "Services" }]}
        backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600&auto=format&fit=crop"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                title={service.title}
                tagline={service.tagline}
                icon={service.icon}
                image={service.heroImage}
                variant="image"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
