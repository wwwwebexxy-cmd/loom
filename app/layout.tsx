import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Preloader from "../components/Preloader";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "");

export const metadata: Metadata = {
  title: "Loom and Grain Furnishing LLC | Made for living",
  description: "Thoughtful furnishings, tactile materials, and considered details from Loom and Grain Furnishing LLC.",
  applicationName: "Loom and Grain Furnishing LLC",
  icons: {
    icon: "/loom-and-grain-icon.svg",
    shortcut: "/loom-and-grain-icon.svg",
    apple: "/loom-and-grain-icon.svg",
  },
  keywords: ["Loom and Grain", "Furnishing", "Furniture", "Soft Furnishings", "Textiles", "Home Furnishings"],
  openGraph: {
    title: "Loom and Grain Furnishing LLC",
    description: "Thoughtful furnishings, tactile materials, and considered details.",
    siteName: "Loom and Grain Furnishing LLC",
    ...(siteUrl ? {
      url: `${siteUrl}/`,
      images: [{
        url: `${siteUrl}/loom-and-grain-logo.svg`,
        width: 800,
        height: 230,
        alt: "Loom and Grain Furnishing LLC logo",
      }],
    } : {}),
    type: "website",
  },
  ...(siteUrl ? { alternates: { canonical: `${siteUrl}/` } } : {}),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Loom and Grain Furnishing LLC",
  "description": "Thoughtful furnishings, tactile materials, and considered details.",
  ...(siteUrl ? {
    "@id": `${siteUrl}/#organization`,
    "url": `${siteUrl}/`,
    "logo": `${siteUrl}/loom-and-grain-logo.svg`,
  } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Preloader />
        <Navbar />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
        <ScrollToTop />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
