import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import WelcomeSection from "@/components/WelcomeSection";
import AccommodationsSection from "@/components/AccommodationsSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OleanderDifference from "@/components/OleanderDifference";
import FeaturedIn from "@/components/FeaturedIn";
import Footer from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider />
      <FadeIn delay={0.2}>
        <WelcomeSection />
      </FadeIn>
      <FadeIn>
        <AccommodationsSection />
      </FadeIn>
      <FadeIn>
        <AmenitiesSection />
      </FadeIn>
      <FadeIn>
        <TestimonialsSection />
      </FadeIn>
      <FadeIn>
        <OleanderDifference />
      </FadeIn>
      <FadeIn>
        <FeaturedIn />
      </FadeIn>
      <Footer />
    </div>
  );
};

export default Index;
