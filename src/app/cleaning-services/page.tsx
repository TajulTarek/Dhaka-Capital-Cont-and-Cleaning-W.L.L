import type { Metadata } from "next";
import ServicePage, { buildServiceMetadata } from "@/components/services/ServicePageTemplate";

const SLUG = "cleaning-services";

export const metadata: Metadata = buildServiceMetadata(SLUG);

export default function CleaningServicesPage() {
  return <ServicePage slug={SLUG} />;
}
