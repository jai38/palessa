const galleryImages = [
  "https://oleanderfarms.com/wp-content/uploads/2025/06/Oleander-farm-2.webp",
  "https://oleanderfarms.com/wp-content/uploads/2025/06/Oleander-farm-3.webp",
  "https://oleanderfarms.com/wp-content/uploads/2025/06/Oleander-farm-5.webp",
  "https://oleanderfarms.com/wp-content/uploads/2025/06/Oleander-farm-4.webp",
  "https://oleanderfarms.com/wp-content/uploads/2025/06/Oleander-farm-1.webp",
  "https://oleanderfarms.com/wp-content/uploads/2025/06/Oleander-farm.webp",
];

const WelcomeSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-oleander-cream">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="https://oleanderfarms.com/wp-content/uploads/2025/07/CH-Icon-e1751643926951.png.webp"
          alt="Oleander icon"
          className="h-14 mx-auto mb-4"
        />
        <h1 className="font-heading text-3xl md:text-5xl text-foreground mb-6">
           A PALACE OF MODERN SERENITY
        </h1>
        <div className="text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto text-base space-y-4">
          <p>
            PALESSA is a premium 29-room boutique hotel created for guests who seek comfort, elegance, and a sense of calm within the city. Designed with a contemporary aesthetic and thoughtfully curated interiors, the hotel balances modern functionality with warm, inviting spaces.
          </p>
          <p>
            From seamless check-ins to personalized service, every detail at PALESSA is shaped to feel effortless. Whether visiting for business, leisure, or a special occasion, guests experience a refined stay where comfort, attention, and atmosphere come together naturally.
          </p>
        </div>
      </div>

      {/* Gallery grid */}
      <div className="max-w-6xl mx-auto mt-14 grid grid-cols-2 md:grid-cols-3 gap-3">
        {galleryImages.map((img, i) => (
          <div key={i} className="overflow-hidden aspect-[4/3]">
            <img
              src={img}
              alt={`Oleander Farms gallery ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Tagline */}
      <div className="max-w-4xl mx-auto text-center mt-14">
        <p className="font-heading text-xl md:text-2xl text-muted-foreground italic">
          A palace, not of grandeur – but of calm. PALESSA
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;
