import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const rooms = [
  {
    image: "https://oleanderfarms.com/wp-content/uploads/2023/05/POOL-VIEW-ROOMS--e1712729225581-780x564.jpeg.webp",
    title: "Pool-Facing Rooms",
    desc: "A lovely balcony overlooking the soothing blue expanse of the swimming pool defines the essence of our Pool-Facing Rooms. Just a few steps away from the restaurants and the leisure hot spots…",
  },
  {
    image: "https://oleanderfarms.com/wp-content/uploads/2023/05/the-cottages.webp",
    title: "The Cottages",
    desc: "A private lawn, a seating nook and clean air add life to these neutral-hued rooms, located by the lake and green hills. A perfect choice for seekers of solace in the heart of nature…",
  },
  {
    image: "https://oleanderfarms.com/wp-content/uploads/2023/05/THE-GROVE-VILLA--780x556.jpeg.webp",
    title: "The Grove Villa",
    desc: "A one-of-a-kind luxurious 3-BHK stay, the perfect home away from home, the Grove Villa is the ideal getaway for groups of friends and family. Augmented by a private patio, surrounded by…",
  },
  {
    image: "https://oleanderfarms.com/wp-content/uploads/2024/03/Screenshot-2024-03-11-at-1.38.42-PM-780x785.png.webp",
    title: "Lake View Rooms",
    desc: "A quaint lake, bordered by an expanse of greenery marks the view from the window panes of the Lake-Facing Rooms, representing a life that is grand in its true spirit.",
  },
  {
    image: "https://oleanderfarms.com/wp-content/uploads/2024/12/Valley-View-Rooms--780x520.jpg.webp",
    title: "Valley View Rooms",
    desc: "Relax and immerse yourself in the tranquil landscapes, as you unwind and escape the hustle and bustle of the city.",
  },
  {
    image: "https://oleanderfarms.com/wp-content/uploads/2023/05/LAWN-VIEW-ROOMS-1-1-780x557.jpeg.webp",
    title: "Lawn-Facing Rooms",
    desc: "Fringed by serene greenery yet close to the liveliness and indulgences of the property, Lawn-Facing Rooms offer the best of both worlds. By infusing luxury into every moment…",
  },
];

const AccommodationsSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3;

  const prev = () => setStartIndex((c) => (c - 1 + rooms.length) % rooms.length);
  const next = () => setStartIndex((c) => (c + 1) % rooms.length);

  const getVisible = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      items.push(rooms[(startIndex + i) % rooms.length]);
    }
    return items;
  };

  return (
    <section className="py-20 px-6 bg-oleander-warm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase font-body mb-2">
            stay experience with Amenities
          </p>
          <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Accommodations
          </h3>
          <a
            href="#"
            className="inline-block text-sm font-body tracking-wider text-primary border-b border-primary pb-0.5 hover:opacity-80 transition-opacity"
          >
            Discover All Rooms
          </a>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisible().map((room, i) => (
              <a href="#" key={i} className="group block">
                <div className="overflow-hidden aspect-[4/3] mb-4">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {room.desc}
                </p>
              </a>
            ))}
          </div>

          {/* Nav arrows */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center text-foreground/50 hover:border-foreground hover:text-foreground transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center text-foreground/50 hover:border-foreground hover:text-foreground transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {rooms.map((_, i) => (
              <button
                key={i}
                onClick={() => setStartIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === startIndex ? "bg-foreground" : "bg-foreground/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationsSection;
