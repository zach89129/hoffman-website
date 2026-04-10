import type { Metadata, Viewport } from "next";
import { Bitter } from "next/font/google";
import { getOrganizationJsonLd } from "@/lib/jsonLd";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const bitter = Bitter({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const site = getSiteUrl();
const siteOrigin = site.origin;

const description =
  "Las Vegas DOT physicals (CDL & commercial drivers) and immigration medical exams (Form I-693) at Hoffman Medical — plus concierge family medicine. Dr. Edward Hoffman, W. Sahara Ave.";

export const metadata: Metadata = {
  metadataBase: site,
  title: {
    default: "Hoffman Medical | Las Vegas Concierge Family Medicine",
    template: "%s | Hoffman Medical",
  },
  description,
  keywords: [
    "DOT physical Las Vegas",
    "CDL physical Las Vegas",
    "commercial driver medical exam Nevada",
    "immigration physical Las Vegas",
    "I-693 doctor Las Vegas",
    "USCIS medical exam Las Vegas",
    "concierge medicine Las Vegas",
    "family doctor Las Vegas",
    "Dr Edward Hoffman",
    "primary care Nevada",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteOrigin,
    siteName: "Hoffman Medical",
    title: "Hoffman Medical | Las Vegas Concierge Family Medicine",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoffman Medical | Las Vegas Concierge Family Medicine",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#0066cc",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getOrganizationJsonLd();
  return (
    <html lang="en" className={bitter.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        {children}
      </body>
    </html>
  );
}
