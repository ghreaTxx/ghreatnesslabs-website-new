import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { LoadingScreen } from '@/components/LoadingScreen'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins' 
})

export const metadata: Metadata = {
  title: 'Ghreatness Labs - Empowering Businesses with Cutting-Edge Solutions',
  description: 'Website development, software solutions, design services, marketing, and more — delivering exceptional UI/UX design, robust cybersecurity solutions, and innovative development experiences.',
  keywords: 'web development, software development, UI/UX design, cybersecurity, digital marketing, Nigeria, Lagos',
  authors: [{ name: 'Ghreatness Labs' }],
  creator: 'Ghreatness Labs',
  publisher: 'Ghreatness Labs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ghreatnesslabs.com.ng'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ghreatness Labs - Empowering Businesses with Cutting-Edge Solutions',
    description: 'Website development, software solutions, design services, marketing, and more — delivering exceptional UI/UX design, robust cybersecurity solutions, and innovative development experiences.',
    url: 'https://ghreatnesslabs.com.ng',
    siteName: 'Ghreatness Labs',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ghreatness Labs',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ghreatness Labs - Empowering Businesses with Cutting-Edge Solutions',
    description: 'Website development, software solutions, design services, marketing, and more — delivering exceptional UI/UX design, robust cybersecurity solutions, and innovative development experiences.',
    images: ['/og-image.jpg'],
    creator: '@ghreatnesslabs',
  },
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a0a0a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <LoadingScreen />
          <div className="relative min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
            <div className="cyber-grid fixed inset-0 opacity-30" />
            <Navigation />
            <main className="relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}