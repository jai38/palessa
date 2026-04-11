const differences = [
  {
    title: "Nature-Bound Stays",
    desc: "Tastefully designed rooms by the lake, pool, and lush landscapes that speak of luxury, simplicity, and serenity together",
  },
  {
    title: "Fulfilment for All",
    desc: "Indulgent activities and offerings to match the needs of anyone and everyone, families, corporate off-sites, or a party of two or more",
  },
  {
    title: "Surreal Celebrations",
    desc: "Countless spots, surrounded by nature's wonders and luxury, perfected on demand to suit your preferences for your big days",
  },
  {
    title: "Unparalleled Comfort",
    desc: "An endless array of luxurious amenities and restaurants to attend to your comfort needs and offer you comprehensive experiences",
  },
];

const OleanderDifference = () => {
  return (
    <section className="relative">
      {/* Two-column layout with bg image */}
      <div className="flex flex-col lg:flex-row">
        {/* Image side */}
        <div className="lg:w-1/2 relative min-h-[400px]">
          <img
            src="https://oleanderfarms.com/wp-content/uploads/2024/04/essentials-1-scaled.jpg.webp"
            alt="Oleander Farms difference"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/30" />
          <div className="relative z-10 flex items-end p-10 h-full">
            <p className="font-heading text-primary-foreground text-lg md:text-xl italic max-w-md">
              With the welcoming success of the restaurant then began the pursuit of a venture larger than that, larger than life – Oleander Farms.
            </p>
          </div>
        </div>

        {/* Content side */}
        <div className="lg:w-1/2 bg-oleander-cream py-16 px-8 md:px-16">
          <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase font-body mb-2">
            A LUXURY RESORT IN KARJAT
          </p>
          <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-10">
            The Oleander Difference
          </h3>

          <div className="space-y-8">
            {differences.map((item, i) => (
              <div key={i}>
                <h5 className="font-heading text-lg text-foreground mb-2">{item.title}</h5>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second image */}
      <div className="w-full h-[300px] md:h-[400px]">
        <img
          src="https://oleanderfarms.com/wp-content/uploads/2024/04/essentials-scaled.jpg.webp"
          alt="Oleander Farms"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default OleanderDifference;
