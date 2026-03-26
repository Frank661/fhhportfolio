import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollToTop from "@/components/ScrollToTop";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devfrank.dev"),
  title: {
    default: "DevFrank | Full-Stack & AI Developer",
    template: "%s | Frank Hernandez",
  },
  description:
    "Full-stack & AI developer with 7+ years of experience building high-converting websites and scalable web applications. Specializing in React, Node.js, AWS, AI development, and modern web technologies.",
  keywords: [
    "full-stack developer",
    "AI developer",
    "web developer",
    "React developer",
    "Node.js developer",
    "web designer",
    "SEO expert",
    "front-end developer",
    "back-end developer",
    "AWS developer",
    "freelance developer",
    "Frank Hernandez",
    "DevFrank",
  ],
  authors: [{ name: "Frank Hernandez" }],
  creator: "Frank Hernandez",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devfrank.dev",
    siteName: "Frank Hernandez - Developer Portfolio",
    title: "DevFrank | Full-Stack & AI Developer",
    description:
      "Full-stack & AI developer with 7+ years of experience building high-converting websites and scalable web applications.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevFrank - Full-Stack & AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevFrank | Full-Stack & AI Developer",
    description:
      "Full-stack & AI developer with 7+ years of experience building high-converting websites and scalable web applications.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Frank Hernandez",
  jobTitle: "Full-Stack & AI Developer",
  description:
    "Full-stack & AI developer with 7+ years of experience building high-converting websites and scalable web applications.",
  url: "https://devfrank.dev",
  sameAs: [
    "https://github.com/Frank661",
    "https://www.linkedin.com/in/devfrank/",
    "https://devtable.co",
  ],
  knowsAbout: [
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "AWS",
    "AI Development",
    "Web Development",
    "SEO",
    "Web Design",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <LoadingScreen />
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2D7ZT0SHCL"
          strategy="afterInteractive"
        />
        <Script id="gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2D7ZT0SHCL');
          `}
        </Script>
      </body>
    </html>
  );
}
