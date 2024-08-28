import {Banner} from "@/components/banner";
import {SiteHeader} from "@/components/site-header";
import {SiteFooter} from "@/components/site-footer";
import {HeroSection} from "@/components/hero-section";
import {LogoTicker} from "@/components/logo-ticker";
import {FeaturesSection} from "@/components/features-section";
import {ProductShowcase} from "@/components/product-showcase";
import {FAQsSection} from "@/components/faqs-section";
import {CtaSection} from "@/components/cta-section";
import {GithubIndicator} from "@/components/github-indicator";

export default function Home() {
    return (
        <>
            <Banner/>
            <SiteHeader/>
            <HeroSection/>
            <LogoTicker/>
            <FeaturesSection/>
            <ProductShowcase/>
            <FAQsSection/>
            <CtaSection/>
            <GithubIndicator />
            <SiteFooter/>
        </>
    )
}
