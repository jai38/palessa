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
    <section className="py-20 px-6 bg-oleander-cream">
      <div className="max-w-4xl mx-auto text-center">
        <img
          src="https://oleanderfarms.com/wp-content/uploads/2025/07/CH-Icon-e1751643926951.png.webp"
          alt="Oleander icon"
          className="h-14 mx-auto mb-4"
        />
        <p className="text-sm tracking-[0.3em] text-muted-foreground uppercase font-body mb-3">
          Welcome to
        </p>
        <h1 className="font-heading text-3xl md:text-5xl text-foreground mb-6">
          Oleander Farms Resort in Karjat
        </h1>
        <p className="text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto text-base">
          Set amidst panoramic hills, lush greenery, and scenic lakes, Oleander Farms spans across a 180-acre wide land. Etched with the qualities of an immersive family retreat, it also comes with the promise of luxury and nature both in equal measure. The uncommon blend of farm-style living and unparalleled amenities makes us a preferred destination for weekend escapes, celebrations, and more.
        </p>
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
          Inspired by our history, surrounded by nature and designed to offer a different experience
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;
