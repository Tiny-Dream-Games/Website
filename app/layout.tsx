import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.tinydreamgames.com";
const SITE_NAME = "Tiny Dream Games";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "Web, App & Game Development Studio | Tiny Dream Games",

  description:
    "Tiny Dream Games is an independent development studio offering website, custom app and game development services for businesses, startups and creators.",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    url: "/",
    title: "Web, App & Game Development Studio | Tiny Dream Games",
    description:
      "Explore website development, custom app development and game development services by Tiny Dream Games for businesses, startups and creators.",
    images: [
      {
        url: "/tiny-dream-logo.png",
        width: 1200,
        height: 630,
        alt: "Tiny Dream Games - Web, App and Game Development Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Web, App & Game Development Studio | Tiny Dream Games",
    description:
      "Website development, custom applications and original game development by Tiny Dream Games.",
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
        "Tiny Dream Games is an independent development studio offering website development, custom app development and game development services.",
      knowsAbout: [
        "Website Development",
        "Web Development",
        "App Development",
        "Mobile Application Development",
        "Game Development",
        "Unity Game Development",
      ],
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
      <head>
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="pDkJ/9cOt5/5tiMGhIDRjA"
          async
        />
      </head>

      <body className="min-h-full flex flex-col">
        <GlobalJsonLd />
        {children}
      </body>
    </html>
  );
}
