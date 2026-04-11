const amenities = [
  {
    image: "https://oleanderfarms.com/wp-content/uploads/2025/06/fully-equipped-gym.jpg.webp",
    title: "Fully Equipped Gymnasium",
    desc: "Stay active and fit with our modern fitness center.",
  },
  {
    image: "https://oleanderfarms.com/wp-content/uploads/2025/06/infinity-pool.jpg.webp",
    title: "Infinity Pool",
    desc: "Unwind at our breathtaking infinity pool, offering uninterrupted views of the landscape.",
  },
  {
    image: "https://oleanderfarms.com/wp-content/uploads/2025/06/lake-view-restro-bar.jpg.webp",
    title: "Lake-View Restobar",
    desc: "Indulge in culinary delights with panoramic views of tranquil waters.",
  },
];

const AmenitiesSection = () => {
  return (
    <section className="relative">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://oleanderfarms.com/wp-content/uploads/2023/05/THE-GROVE-VILLA-5.jpeg"
          alt="Amenities background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70" />
      </div>

      <div className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-primary-foreground/70 uppercase font-body mb-2">
            Unforgettable Experience
          </p>
          <h3 className="font-heading text-3xl md:text-4xl text-primary-foreground mb-3">
            Discover World Class Amenities
          </h3>
          <p className="text-primary-foreground/70 font-body text-sm mb-12">
            Experience luxury amidst nature like never before
          </p>

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
                <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
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
