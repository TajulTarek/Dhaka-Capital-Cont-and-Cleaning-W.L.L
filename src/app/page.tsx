//  Home Page 
import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import PrimaryServices from "@/components/home/PrimaryServices";
import WhereWeWork from "@/components/home/WhereWeWork";
import StatsCounter from "@/components/home/StatsCounter";
import BeforeAfter from "@/components/home/BeforeAfter";
import WorkingProcess from "@/components/home/WorkingProcess";
import FAQ from "@/components/home/FAQ";
import Gallery from "@/components/home/Gallery";

export const metadata: Metadata = {
  title: "Dhaka Capital Cont and Cleaning W.L.L | Quality Craftsmanship You Can Trust",
  description:
    "Dhaka Capital Cont and Cleaning W.L.L delivers dependable workmanship for residential, commercial, and industrial projects in Doha, Qatar. From small repairs to full builds  we get it done right.",
  alternates: { canonical: "https://laibacontracting-wll.com" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <PrimaryServices />
      <WhereWeWork />
      <StatsCounter />
      <BeforeAfter />
      <WorkingProcess />
      <FAQ />
      <Gallery />
    </>
  );
}
