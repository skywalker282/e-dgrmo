import "../styles/globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MetaTags from "@/components/MetaTags";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import { TranslationProvider } from "@/contexts/TranslationContext";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "E-DGRMO | Direction Générale des Recettes de la Mongala",
  description:
    "Portail officiel pour les informations fiscales, paiements en ligne, reçus électroniques et services publics numériques",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={`${ibmPlexSans.className} antialiased`}>
        <TranslationProvider>
          <ThemeProvider>
            <MetaTags />
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <CookieConsent />
            <ScrollToTop />
          </ThemeProvider>
        </TranslationProvider>
      </body>
    </html>
  );
}
