import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Tiny Dream Games | Indie Game Studio & Digital Development",
    template: "%s | Tiny Dream Games",
  },
  description:
    "Tiny Dream Games is an independent game development studio creating original games, modern websites, and mobile applications. Small Team. Big Dreams.",
  keywords: [
    "Tiny Dream Games",
    "indie game studio",
    "game development company",
    "mobile game development",
    "web development",
    "app development",
    "Unity game development",
    "digital product development",
  ],
  openGraph: {
    title: "Tiny Dream Games | Small Team. Big Dreams.",
    description:
      "We build original games, modern websites, and mobile applications that turn ideas into digital experiences.",
    url: "https://tinydreamgames.com",
    siteName: "Tiny Dream Games",
    type: "website",
    images: [
      {
        url: "/tiny-dream-logo.png",
        width: 1200,
        height: 630,
        alt: "Tiny Dream Games — Small Team. Big Dreams.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiny Dream Games | Small Team. Big Dreams.",
    description:
      "An independent studio creating original games, websites, and mobile applications.",
    images: ["/tiny-dream-logo.png"],
  },
  alternates: {
    canonical: "https://tinydreamgames.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
