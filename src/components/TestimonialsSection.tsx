import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    text: "It's picture perfect property!!!! Great food, amazing ambience, lake is serene. Had gone for a day trip. Rooms are also specious. Little heavy on pocket, food portions are less as compared to the price, But worth the visit!",
    author: "Shweta Joshi",
    source: "Google Maps",
  },
  {
    text: "We had a GREAT time at PALESSA. Our stay here was lovely with very well maintained amenities, ECHO restaurant had some yummy food too. We also loved the rooftop lounge. My family will certainly come back and recommend everyone we know. Highly recommended",
    author: "Vanessa Gomes",
    source: "Google Maps",
  },
  {
    text: "The perfect place to escape from the busy life and spend a quality time with your friends and family. Amazing scenery to look deep into nature. Hospitality is too good, well behaved staff with excellent customer service. Highly recommend this place is a must visit. Looking forward to visit soon.",
    author: "Pawan Singh",
    source: "Google Maps",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-20 px-6 bg-palessa-cream">
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative min-h-[200px]">
          <p className="font-body text-muted-foreground leading-relaxed text-base italic mb-6">
            "{testimonials[current].text}"
          </p>
          <p className="font-heading text-foreground text-lg mb-1">
            {testimonials[current].author}
          </p>
          <p className="text-muted-foreground text-xs font-body tracking-wider">
            {testimonials[current].source}
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-3 mt-6">
          <button onClick={prev} className="w-8 h-8 rounded-full border border-foreground/30 flex items-center justify-center text-foreground/50 hover:text-foreground transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={next} className="w-8 h-8 rounded-full border border-foreground/30 flex items-center justify-center text-foreground/50 hover:text-foreground transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-foreground" : "bg-foreground/20"}`}
            />
          ))}
        </div>

        {/* Stars */}
        <div className="flex justify-center gap-1 mt-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-primary text-primary" />
          ))}
          <span className="ml-2 text-sm text-muted-foreground font-body">Rated 5 out of 5</span>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
