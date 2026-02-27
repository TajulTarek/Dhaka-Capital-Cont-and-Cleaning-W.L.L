import type { Metadata } from "next";
import ServicePage, { buildServiceMetadata } from "@/components/services/ServicePageTemplate";

const SLUG = "masonry-civil-works";

export const metadata: Metadata = buildServiceMetadata(SLUG);

export default function MasonryPage() {
  return <ServicePage slug={SLUG} />;
}
