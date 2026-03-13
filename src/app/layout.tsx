import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/* ── Global / default SEO metadata ───────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://laibacontracting-wll.com"),
  title: {
    default: "Dhaka Capital Cont and Cleaning W.L.L | Professional Contracting Services in Doha, Qatar",
    template: "%s | Dhaka Capital Cont and Cleaning W.L.L",
  },
  description:
    "Dhaka Capital Cont and Cleaning W.L.L delivers reliable renovation, contracting, and maintenance services in Doha, Qatar. Expert carpentry, painting, tiling, gypsum, marble, masonry, MEP, and moving services.",
  keywords: [
    "contracting Qatar",
    "renovation Doha",
    "carpentry works Qatar",
    "painting services Doha",
    "tiling works Qatar",
    "MEP works Doha",
    "gypsum ceiling Qatar",
    "marble stone works",
    "masonry civil works",
    "moving shifting Qatar",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://laibacontracting-wll.com",
    siteName: "Dhaka Capital Cont and Cleaning W.L.L",
    title: "Dhaka Capital Cont and Cleaning W.L.L | Professional Contracting Services in Doha, Qatar",
    description:
      "Reliable renovation, contracting, and maintenance services in Doha, Qatar. Quality craftsmanship you can trust.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dhaka Capital Cont and Cleaning W.L.L",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhaka Capital Cont and Cleaning W.L.L",
    description: "Professional contracting services in Doha, Qatar.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://laibacontracting-wll.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
