import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import WelcomeSection from "@/components/WelcomeSection";
import AccommodationsSection from "@/components/AccommodationsSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OleanderDifference from "@/components/OleanderDifference";
import FeaturedIn from "@/components/FeaturedIn";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSlider />
      <WelcomeSection />
      <AccommodationsSection />
      <AmenitiesSection />
      <TestimonialsSection />
      <OleanderDifference />
      <FeaturedIn />
      <Footer />
    </div>
  );
};

export default Index;
