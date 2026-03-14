import type { Metadata } from "next";
import ServicePage, { buildServiceMetadata } from "@/components/services/ServicePageTemplate";

const SLUG = "manpower-supply";

export const metadata: Metadata = buildServiceMetadata(SLUG);

export default function ManpowerSupplyPage() {
  return <ServicePage slug={SLUG} />;
}
