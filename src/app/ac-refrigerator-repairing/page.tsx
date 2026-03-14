import type { Metadata } from "next";
import ServicePage, { buildServiceMetadata } from "@/components/services/ServicePageTemplate";

const SLUG = "ac-refrigerator-repairing";

export const metadata: Metadata = buildServiceMetadata(SLUG);

export default function AcRefrigeratorRepairingPage() {
  return <ServicePage slug={SLUG} />;
}
