import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "https://oleanderfarms.com/wp-content/uploads/2025/01/oleander-farm-banner-1.png",
    title: "ULHASNAGAR'S FIRST EVER PALACE OF FLAVOURS,\nNIGHTLIFE & CELEBRATIONS!",
  },
  {
    image: "https://oleanderfarms.com/wp-content/uploads/2025/01/oleander-farm-banner.png",
    title: "WELCOME TO\nPALESSA",
  },
  {
    image: "https://oleanderfarms.com/wp-content/uploads/2024/06/Oleander-farm-5349.jpeg",
    title: "ULHASNAGAR'S FIRST EVER PALACE OF FLAVOURS,\nNIGHTLIFE & CELEBRATIONS!",
  },
  {
    image: "https://oleanderfarms.com/wp-content/uploads/2024/06/luxury-resort-karjat-8211-oleander-farm-5356.jpeg",
    title: "WELCOME TO\nPALESSA",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/20" />
        </div>
      ))}

      {/* Title */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-10">
        <h2 className="font-heading text-primary-foreground text-4xl md:text-6xl lg:text-7xl font-normal whitespace-pre-line leading-tight">
          {slides[current].title}
        </h2>
      </div>

      {/* Arrows */}
      <div className="absolute bottom-20 right-8 md:right-16 flex gap-3 z-10">
        <button
          onClick={prev}
          className="w-10 h-10 rounded-full border border-primary-foreground/60 flex items-center justify-center text-primary-foreground/60 hover:border-primary-foreground hover:text-primary-foreground transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={next}
          className="w-10 h-10 rounded-full border border-primary-foreground/60 flex items-center justify-center text-primary-foreground/60 hover:border-primary-foreground hover:text-primary-foreground transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Booking bar */}
      {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 z-10">
        <div className="bg-oleander-olive/85 backdrop-blur-sm flex flex-wrap items-center gap-4 px-6 py-4 rounded-t-sm">
          <div className="flex-1 min-w-[140px]">
            <select className="w-full bg-transparent border border-primary-foreground/30 text-primary-foreground text-sm px-3 py-2 font-body appearance-none">
              <option>Check In</option>
            </select>
          </div>
          <div className="flex-1 min-w-[140px]">
            <select className="w-full bg-transparent border border-primary-foreground/30 text-primary-foreground text-sm px-3 py-2 font-body appearance-none">
              <option>Check Out</option>
            </select>
          </div>
          <div className="flex-1 min-w-[120px]">
            <select className="w-full bg-transparent border border-primary-foreground/30 text-primary-foreground text-sm px-3 py-2 font-body appearance-none">
              <option>1 Room</option>
            </select>
          </div>
          <div className="flex-1 min-w-[140px]">
            <select className="w-full bg-transparent border border-primary-foreground/30 text-primary-foreground text-sm px-3 py-2 font-body appearance-none">
              <option>1 Adult, 0 Child</option>
            </select>
          </div>
          <a
            href="#accommodations"
            className="bg-primary text-primary-foreground px-8 py-2 text-sm font-body tracking-wider hover:brightness-110 transition-all"
          >
            Check Availability
          </a>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSlider;
