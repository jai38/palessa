const logos = [
  { src: "/images/omoon_V2.png", alt: "O Moon" },
  { src: "/images/ECHO_V2.png", alt: "Echo" },
  { src: "/images/PALESSA_LOGO.png", alt: "Palessa" },
];

const FeaturedIn = () => {
  return (
    <section className="py-16 px-6 bg-palessa-cream">
      <h4 className="text-center font-heading text-2xl tracking-[0.15em] text-foreground mb-10 uppercase">
        EXPERIENCE GRANDEUR LIKE NEVER BEFORE IN ULHASNAGAR!
      </h4>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {[...Array(4).fill(logos).flat(), ...Array(4).fill(logos).flat()].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-28 md:h-40 mx-12 md:mx-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
