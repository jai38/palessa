import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const rooms = [
  {
    image: "https://oleanderfarms.com/wp-content/uploads/2023/05/POOL-VIEW-ROOMS--e1712729225581-780x564.jpeg.webp",
    title: "STANDARD ROOMS",
    desc: "27 STANDARD ROOMS, DESIGNED FOR RELAXED EVERYDAY COMFORT.\n\n• 23 m2 / 247 ft2\n• Queen-size exclusive\n• En-suite bathroom\n• Diptyque amenities",
  },
  {
    image: "https://oleanderfarms.com/wp-content/uploads/2023/05/the-cottages.webp",
    title: "SUITES",
    desc: "2 SUITE ROOMS, FEATURING PRIVATE JACUZZI FACILITIES FOR AN ELEVATED EXPERIENCE.\n\n• Offering views of Waterloo Place\n• Traditional style King-size\n• Separate lounge area\n• Large bathroom with bath and separate rainfall shower\n• Jacuzzi\n• Diptyque amenities",
  }
];

const AccommodationsSection = () => {
  return (
    <section id="accommodations" className="py-20 px-6 bg-oleander-warm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase font-body mb-2">
            stay experience
          </p>
          <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
            Rooms & Suites
          </h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
            Each room at PALESSA is designed as a quiet retreat — calming in tone, intuitive in layout, and refined in detail. Soft lighting, contemporary finishes, and essential amenities ensure a comfortable stay for both short and extended visits. All rooms include complimentary high-speed Wi-Fi, television, and minibar facilities. The suite rooms offer an added layer of indulgence, ideal for guests seeking extra privacy and relaxation.
          </p>
          <a
            href="#accommodations"
            className="inline-block text-sm font-body tracking-wider text-primary border-b border-primary pb-0.5 hover:opacity-80 transition-opacity"
          >
            Discover All Rooms
          </a>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms.map((room, i) => (
              <a href="#accommodations" key={i} className="group block">
                <div className="overflow-hidden aspect-[4/3] mb-4">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h4 className="font-heading text-xl text-foreground mb-2">{room.title}</h4>
                <p className="text-muted-foreground font-body text-sm leading-relaxed whitespace-pre-line">
                  {room.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccommodationsSection;
