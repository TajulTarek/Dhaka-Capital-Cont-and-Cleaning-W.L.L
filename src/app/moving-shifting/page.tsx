import type { Metadata } from "next";
import ServicePage, { buildServiceMetadata } from "@/components/services/ServicePageTemplate";

const SLUG = "moving-shifting";

export const metadata: Metadata = buildServiceMetadata(SLUG);

export default function MovingPage() {
  return <ServicePage slug={SLUG} />;
}
