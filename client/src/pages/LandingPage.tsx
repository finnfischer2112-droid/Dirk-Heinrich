import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ReviewsBanner from "@/components/ReviewsBanner";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import PartnerSection from "@/components/PartnerSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background" data-testid="page-landing">
      <Header />
      <main>
        <HeroSection />
        <ReviewsBanner />
        <ServicesSection />
        <BenefitsSection />
        <PartnerSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
