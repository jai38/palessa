const amenities = [
  {
    image: "/images/29_Boutique_Hotel_Rooms.png",
    title: "29 BOUTIQUE HOTEL ROOMS",
    desc: "27 STANDARD &\n2 SUITE ROOMS WITH JACUZZI",
  },
  {
    image: "/images/Rooftop_Lounge.png",
    title: "ROOFTOP LOUNGE WITH PREMIUM AMBIENCE",
    desc: "",
  },
  {
    image: "/images/Global_Fusion_Restaurant_.png",
    title: "GLOBAL FUSION RESTAURANT WITH AWADHI INFLUENCE",
    desc: "",
  },
  {
    image: "/images/Two_Spacious_Banquet_Halls.png",
    title: "TWO SPACIOUS BANQUET HALLS",
    desc: "FOR EVENTS AND CELEBRATIONS",
  },
  {
    image: "/images/Concierge_Services.png",
    title: "CONCIERGE SERVICES",
    desc: "",
  },
  {
    image: "/images/Travel_Desk_Assistance.png",
    title: "TRAVEL DESK ASSISTANCE",
    desc: "",
  },
  // {
  //   image: "https://oleanderfarms.com/wp-content/uploads/2024/03/Screenshot-2024-03-11-at-1.38.42-PM-780x785.png.webp",
  //   title: "DEDICATED PARKING FACILITY",
  //   desc: "",
  // },
];

const AmenitiesSection = () => {
  return (
    <section id="amenities" className="relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/Amenities_Background.png"
          alt="Amenities background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-primary-foreground/70 uppercase font-body mb-2">
            ULHASNAGAR’S NEWEST LANDMARK OF CELEBRATION & LUXURY
          </p>
          <h3 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-12">
            AMENITIES
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {amenities.map((amenity, i) => (
              <div key={i} className="text-center">
                <div className="overflow-hidden rounded-sm aspect-[4/3] mb-5">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h5 className="font-heading text-lg text-primary-foreground mb-2">
                  {amenity.title}
                </h5>
                <p className="text-primary-foreground/70 font-body text-sm leading-relaxed whitespace-pre-line">
                  {amenity.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
