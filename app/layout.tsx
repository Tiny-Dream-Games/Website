import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const SITE_URL = "https://www.tinydreamgames.com";
const SITE_NAME = "Tiny Dream Games";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Tiny Dream Games | Game, Web and App Development",

  description:
    "Tiny Dream Games creates original games and develops custom websites and mobile applications for businesses, startups, and creators.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    url: "/",
    title: "Tiny Dream Games | Game, Web and App Development",
    description:
      "Explore game development, website development, and app development services from Tiny Dream Games.",
    images: [
      {
        url: "/tiny-dream-logo.png",
        width: 1200,
        height: 630,
        alt: "Tiny Dream Games",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tiny Dream Games | Game, Web and App Development",
    description:
      "Original games, custom websites, and mobile applications by Tiny Dream Games.",
    images: ["/tiny-dream-logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: `${SITE_URL}/`,
      description:
        "Independent game development studio creating games, websites, and mobile applications.",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: "en-IN",
    },
  ],
};

export function GlobalJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(globalSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GlobalJsonLd />
        {children}
      </body>
    </html>
  );
}

