import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/profile";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const siteUrl = "https://drmanjunatha-cv-portfolio.web.app";

export const metadata: Metadata = {
  title: "Dr. Manjunatha C | Associate Professor | Nanomaterials Researcher",
  description:
    "Portfolio of Dr. Manjunatha Channegowda — Associate Professor at RV College of Engineering, Bengaluru. 120+ publications, 6 patents, nanomaterials synthesis, energy storage, sensors.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "profile",
    title: "Dr. Manjunatha C — Nanomaterials Researcher & Associate Professor",
    description:
      "Portfolio of Dr. Manjunatha Channegowda — 120+ publications, 6 patents, 62+ guided projects. Expertise in nanomaterials, energy storage, sensors, and photocatalysis.",
    siteName: "Dr. Manjunatha C — Portfolio",
    locale: "en_US",
    images: [{ url: "/new-pic.png", width: 640, height: 800, alt: "Dr. Manjunatha Channegowda" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Manjunatha C — Nanomaterials Researcher",
    description:
      "Associate Professor at RVCE — 120+ publications, 6 patents, nanomaterials synthesis, energy storage.",
    images: ["/new-pic.png"],
  },
  robots: { index: true, follow: true },
  other: {
    "google-site-verification": "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Dr. Manjunatha Channegowda",
    givenName: "Manjunatha",
    familyName: "Channegowda",
    honorificPrefix: "Dr.",
    jobTitle: "Associate Professor",
    affiliation: {
      "@type": "CollegeOrUniversity",
      name: "RV College of Engineering",
      address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
    },
    description:
      "Associate Professor at RV College of Engineering with 23+ years of experience. 120+ publications, 6 patents, expertise in nanomaterials, energy storage, and sensors.",
    url: siteUrl,
    image: `${siteUrl}/new-pic.png`,
    sameAs: [
      profile.googleScholar,
      "https://www.scopus.com/authid/detail.uri?authorId=36940626600",
      `https://orcid.org/${profile.orcid}`,
      profile.researchGate,
      profile.linkedinUrl,
    ],
  };

  return (
    <html lang="en" className={`${bebasNeue.variable} ${montserrat.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Dr. Manjunatha C" />
        <meta name="mobile-web-app-capable" content="yes" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script dangerouslySetInnerHTML={{
          __html: `if("serviceWorker" in navigator)navigator.serviceWorker.register("/sw.js")`,
        }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
