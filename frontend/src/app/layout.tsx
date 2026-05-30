import type { Metadata } from "next";
import "./globals.css";
import "../styles/bootstrap.min.css";
// all.min.css removed — webfonts were missing; using CDN below instead
import "../styles/animate.css";
import "../styles/swiper-bundle.min.css";
import "../styles/custom.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import PageTransition from "@/components/PageTransition";

export const metadata: Metadata = {
  title: {
    default: 'Rank Spiders | SEO & Digital Marketing Agency India',
    template: '%s | Rank Spiders',
  },
  description: 'Rank Spiders is a data-driven SEO and digital marketing agency in India helping businesses rank higher, build authority, and grow revenue.',
  metadataBase: new URL('https://www.rankspiders.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="bg-color">
        {/* Site-wide ambient gradient orbs — CSS only, pointer-events: none */}
        <div className="ambient-bg" aria-hidden="true">
          <div className="ambient-orb ambient-orb-1" />
          <div className="ambient-orb ambient-orb-2" />
          <div className="ambient-orb ambient-orb-3" />
        </div>
        <Preloader />
        <Header />
        <main><PageTransition>{children}</PageTransition></main>
        <Footer />
      </body>
    </html>
  );
}
