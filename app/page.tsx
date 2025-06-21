import { Header } from "@/components/header"
import { EnhancedHeroSection } from "@/components/enhanced-hero-section"
import { ServicesPreview } from "@/components/services-preview"
import { AboutPreview } from "@/components/about-preview"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <EnhancedHeroSection />
      <ServicesPreview />
      <AboutPreview />
      <ContactSection />
      <Footer />
    </div>
  )
}
