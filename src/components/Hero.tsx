const Hero = () => {
  return (
    <div id="home" className="pt-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-maroon sm:text-5xl md:text-6xl">
            Welcome to NSS HSS Adoor
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-700 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Empowering minds, building futures - Excellence in education since establishment
          </p>
        </div>
        <div className="mt-10">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="School Building"
            className="rounded-lg shadow-xl w-full h-[400px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;