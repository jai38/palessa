import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "ECHO BY PALESSA",
    desc: "The ECHO restaurant at Palessa brings together global culinary influences with the depth and warmth of Indian Awadhi flavours. The approach is thoughtful and modern - familiar tastes reinterpreted with care and balance.",
    image: "https://oleanderfarms.com/wp-content/uploads/2024/04/essentials-1-scaled.jpg.webp",
  },
  {
    title: "O MOON Rooftop Lounge",
    desc: "Set above the city, O MOON at Palessa is designed for moments that unfold slowly. As the day transitions into night, the space comes alive with crafted cocktails, curated beverages, and a relaxed yet refined ambience.",
    image: "https://oleanderfarms.com/wp-content/uploads/2024/04/essentials-scaled.jpg.webp",
  },
  {
    title: "Emerald by Palessa",
    desc: "PALESSA features two expansive banquet halls - EMERALD & PEARL. Thoughtfully planned to host meaningful celebrations and professional events, the spaces are suitable for weddings, conferences, and social gatherings alike.",
    image: "https://oleanderfarms.com/wp-content/uploads/2023/05/POOL-VIEW-ROOMS--e1712729225581-780x564.jpeg.webp",
  },
  {
    title: "Pearl by Palessa",
    desc: "Each hall offers 4,500 sq. ft. of event space up to 200 guests, stage setup and professional lighting, audio-visual support, projector screen, high-speed Wi-Fi and catering & service assistance.",
    image: "https://oleanderfarms.com/wp-content/uploads/2023/05/the-cottages.webp",
  },
];

const OleanderDifference = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrentIndex((c) => (c + 1) % slides.length);

  return (
    <section id="offerings" className="bg-oleander-cream py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-12 text-center max-w-3xl mx-auto">
          Flavours, conversations, and evenings that linger
        </h3>

        <div className="relative">
          <div className="overflow-hidden relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
                    {/* Image Left */}
                    <div className="w-full lg:w-1/2 relative aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[500px]">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    {/* Content Right */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                      <h5 className="font-heading text-2xl md:text-3xl text-foreground mb-6">{slide.title}</h5>
                      <p className="text-muted-foreground font-body text-base leading-relaxed max-w-lg">
                        {slide.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-3 mt-12">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-foreground/30 flex items-center justify-center text-foreground/50 hover:border-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-foreground/30 flex items-center justify-center text-foreground/50 hover:border-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  i === currentIndex ? "bg-foreground" : "bg-foreground/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OleanderDifference;
