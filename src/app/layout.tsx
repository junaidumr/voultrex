import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://voultrex.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Voultrex — Engineering Scalable Digital Futures",
  description:
    "Voultrex is a modern software engineering studio building enterprise web applications, mobile apps, SaaS platforms, and AI systems for startups and enterprises worldwide.",
  keywords: [
    "software engineering",
    "web development",
    "mobile apps",
    "SaaS",
    "AI systems",
    "enterprise software",
    "Islamabad",
    "Pakistan",
  ],
  authors: [{ name: "Voultrex" }],
  openGraph: {
    title: "Voultrex — Engineering Scalable Digital Futures",
    description:
      "We build digital products that scale globally. Enterprise web apps, mobile, SaaS, and AI systems.",
    type: "website",
    locale: "en_US",
    siteName: "Voultrex",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Voultrex — Engineering Scalable Digital Futures",
    description: "We build digital products that scale globally.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Voultrex",
  url: siteUrl,
  description:
    "Modern software engineering studio building enterprise web applications, mobile apps, SaaS platforms, and AI systems.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Islamabad",
    addressCountry: "PK",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@voultrex.com",
    contactType: "sales",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="noise-overlay min-h-full antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#030308]"
        >
          Skip to main content
        </a>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
