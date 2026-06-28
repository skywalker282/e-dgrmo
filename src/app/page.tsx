import SliderHeroBanner from '@/components/SliderHeroBanner'
import QuickTaxSearch from '@/components/QuickTaxSearch'
import FeaturedServices from '@/components/FeaturedServices'
import ValueProposition from '@/components/ValueProposition'
import CorporateStatistics from '@/components/CorporateStatistics'
import CorporateTestimonials from '@/components/CorporateTestimonials'
import PaymentShowcase from '@/components/PaymentShowcase'
import HowItWorks from '@/components/HowItWorks'
import FAQSection from '@/components/FAQSection'
import NewsSection from '@/components/NewsSection'
import MobileAppPromotion from '@/components/MobileAppPromotion'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <SliderHeroBanner />
      <QuickTaxSearch />
      <ValueProposition />
      <FeaturedServices />
      <CorporateStatistics />
      <PaymentShowcase />
      <CorporateTestimonials />
      <HowItWorks />
      <NewsSection />
      <FAQSection />
      <MobileAppPromotion />
      <ContactSection />
    </main>
  )
}