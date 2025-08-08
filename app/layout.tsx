import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { brand } from "@/lib/brand";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${brand.companyName} - Professional Tile Installation & Flooring Services`,
  description: `Expert tile installation, repair, and flooring services. ${brand.tagline}. ${brand.business.licenses} with ${brand.business.experience}.`,
  keywords: "tile installation, flooring services, tile repair, home remodeling, bathroom renovation, kitchen backsplash",
  authors: [{ name: brand.companyName }],
  creator: brand.companyName,
  publisher: brand.companyName,
  metadataBase: new URL(brand.website),
  
  // Open Graph
  openGraph: {
    title: `${brand.companyName} - Professional Tile Installation & Flooring Services`,
    description: `Expert tile installation, repair, and flooring services. ${brand.tagline}. ${brand.business.licenses} with ${brand.business.experience}.`,
    url: brand.website,
    siteName: brand.companyName,
    type: 'website',
    locale: 'en_US',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: `${brand.companyName} - Professional Tile Installation & Flooring Services`,
    description: `Expert tile installation, repair, and flooring services. ${brand.tagline}.`,
    creator: `@${brand.slug}`,
  },
  
  // Additional SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: brand.companyName,
    description: `Expert tile installation, repair, and flooring services. ${brand.tagline}.`,
    url: brand.website,
    telephone: brand.phone,
    email: brand.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: brand.address.street,
      addressLocality: brand.address.city,
      addressRegion: brand.address.state,
      postalCode: brand.address.zip,
      addressCountry: 'US'
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '40.7128',
        longitude: '-74.0060'
      },
      geoRadius: '50000'
    },
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '100'
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
