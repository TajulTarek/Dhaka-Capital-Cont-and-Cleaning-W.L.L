// ── Services Page ─────────────────────────────────────────────────────────────
import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ServiceCard from "@/components/shared/ServiceCard";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Our Services | Laiba Contracting W.L.L",
  description:
    "Explore the full range of contracting, renovation, and maintenance services offered by Laiba Contracting in Doha, Qatar — including carpentry, painting, tiling, MEP, and more.",
  alternates: { canonical: "https://laibacontracting-wll.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="OUR SERVICES"
        subtitle="A complete range of contracting, renovation, and maintenance services for residential, commercial, and industrial projects."
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
