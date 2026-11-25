
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type React from "react";
import Script from "next/script";

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

const META_TITLE = "Tiny Dream Games | Indie Game Development Studio";

const META_DESCRIPTION =
  "Tiny Dream Games is an independent game development studio focused on creating, developing and producing original games and engaging interactive experiences.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: META_TITLE,

  description: META_DESCRIPTION,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: SITE_NAME,
    url: "/",
    title: META_TITLE,
    description: META_DESCRIPTION,
    images: [
      {
        url: "/tiny-dream-logo.png",
        width: 1200,
        height: 630,
        alt: "Tiny Dream Games - Indie Game Development Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: META_TITLE,
    description: META_DESCRIPTION,
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
        "Tiny Dream Games is an independent game development studio focused on creating and producing original games, gameplay experiences and interactive projects. The studio also provides website and app development services.",
      knowsAbout: [
        "Indie Game Development",
        "Game Development",
        "Game Production",
        "Game Design",
        "Gameplay Mechanics",
        "Unity Game Development",
        "2D Game Development",
        "3D Game Development",
        "Mobile Game Development",
        "Interactive Game Experiences",
        "Web Development",
        "Website Development",
        "App Development",
        "Mobile Application Development",
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
      <body className="min-h-full flex flex-col">
        <GlobalJsonLd />

        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
  `}
        </Script>

        <Script
          src="https://www.googletagmanager.com/gtm.js?id=GTM-53NX84H6"
          strategy="afterInteractive"
        />

        {/* Ahrefs Analytics */}
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="pDkJ/9cOt5/5tiMGhIDRjA"
          strategy="afterInteractive"
        />

        {children}
      </body>
    </html>
  );
}
