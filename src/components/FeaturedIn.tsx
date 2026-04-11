const logos = [
  { src: "https://oleanderfarms.com/wp-content/uploads/2025/06/elle.webp", alt: "Elle" },
  { src: "https://oleanderfarms.com/wp-content/uploads/2025/06/femina.webp", alt: "Femina" },
  { src: "https://oleanderfarms.com/wp-content/uploads/2025/06/grazia.webp", alt: "Grazia" },
  { src: "https://oleanderfarms.com/wp-content/uploads/2025/06/GQ.webp", alt: "GQ India" },
  { src: "https://oleanderfarms.com/wp-content/uploads/2025/06/AD.webp", alt: "Architectural Digest" },
  { src: "https://oleanderfarms.com/wp-content/uploads/2025/06/traveller.webp", alt: "Traveller" },
  { src: "https://oleanderfarms.com/wp-content/uploads/2025/06/curly-tales.webp", alt: "Curly Tales" },
];

const FeaturedIn = () => {
  return (
    <section className="py-16 px-6 bg-oleander-cream">
      <h4 className="text-center font-heading text-2xl tracking-[0.15em] text-foreground mb-10 uppercase">
        Featured In
      </h4>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-10 md:h-14 mx-8 md:mx-14 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
