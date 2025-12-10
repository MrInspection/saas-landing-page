import { Banner } from "@/components/banner";
import { CtaSection } from "@/components/cta-section";
import { FAQsSection } from "@/components/faqs-section";
import { FeaturesSection } from "@/components/features-section";
import { HeroSection } from "@/components/hero-section";
import { LogoTicker } from "@/components/logo-ticker";
import { ProductShowcase } from "@/components/product-showcase";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <Banner />
      <SiteHeader />
      <HeroSection />
      <LogoTicker />
      <FeaturesSection />
      <ProductShowcase />
      <FAQsSection />
      <CtaSection />
      <SiteFooter />
    </>
  );
}
