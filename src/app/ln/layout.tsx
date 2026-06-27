import '../../styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MetaTags from '@/components/MetaTags'
import CookieConsent from '@/components/CookieConsent'
import ScrollToTop from '@/components/ScrollToTop'
import { ThemeProvider } from '@/components/ThemeProvider'
import { TranslationProvider } from '@/contexts/TranslationContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-DGRMO | Direction Générale des Recettes de la Mongala',
  description: 'Portail officiel pour les informations fiscales, paiements en ligne, reçus électroniques et services publics numériques',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ln">
      <body className={inter.className}>
        <TranslationProvider>
          <ThemeProvider>
            <MetaTags />
            <Header />
            <main>{children}</main>
            <Footer />
            <CookieConsent />
            <ScrollToTop />
          </ThemeProvider>
        </TranslationProvider>
      </body>
    </html>
  )
}