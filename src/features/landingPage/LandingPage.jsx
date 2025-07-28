import { Navbar, HeroSection, TestimonialsSection } from "./components";
import ComparisonSection from "./components/ComparisonSection";
import FAQsSection from "./components/FAQsSection";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HowItWorksSection from "./components/HowItWorksSection";
import PricingSection from "./components/PricingSection";
import TailoredSection from "./components/TailoredSection";
import Wrapup from "./components/Wrapup";

function LandingPage(props) {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <ComparisonSection />
      <TailoredSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQsSection />
      <Wrapup />
      <Footer />
    </div>
  );
}

export default LandingPage;
