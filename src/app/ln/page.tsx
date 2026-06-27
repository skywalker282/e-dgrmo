import HeroBanner from '@/components/HeroBanner'
import QuickTaxSearch from '@/components/QuickTaxSearch'
import FeaturedServices from '@/components/FeaturedServices'
import RevenueStatistics from '@/components/RevenueStatistics'
import HowItWorks from '@/components/HowItWorks'
import FAQSection from '@/components/FAQSection'
import NewsSection from '@/components/NewsSection'
import MobileAppPromotion from '@/components/MobileAppPromotion'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroBanner />
      <QuickTaxSearch />
      <FeaturedServices />
      <RevenueStatistics />
      <HowItWorks />
      <NewsSection />
      <FAQSection />
      <MobileAppPromotion />
      <ContactSection />
    </main>
  )
}