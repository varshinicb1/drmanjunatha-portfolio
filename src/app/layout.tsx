import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";

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
      "https://scholar.google.com/citations?user=j13BsSQAAAAJ",
      "https://www.scopus.com/authid/detail.uri?authorId=36940626600",
      "https://orcid.org/0000-0001-5084-6851",
    ],
  };

  return (
    <html lang="en" className={`${bebasNeue.variable} ${montserrat.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
