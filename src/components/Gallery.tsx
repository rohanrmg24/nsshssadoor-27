const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      alt: "School Activity 1"
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      alt: "School Activity 2"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "School Activity 3"
    },
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      alt: "School Activity 4"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "School Activity 5"
    },
    {
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      alt: "School Activity 6"
    },
  ];

  return (
    <div id="gallery" className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-maroon text-center mb-12">
          Our Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;