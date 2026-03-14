import type { Metadata } from "next";
import ServicePage, { buildServiceMetadata } from "@/components/services/ServicePageTemplate";

const SLUG = "building-construction";

export const metadata: Metadata = buildServiceMetadata(SLUG);

export default function BuildingConstructionPage() {
  return <ServicePage slug={SLUG} />;
}
