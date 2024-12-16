import { useEffect, useState } from 'react';
import { Loader } from 'lucide-react';

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-cream">
        <Loader className="w-12 h-12 text-maroon animate-spin" />
      </div>
    );
  }

  return (
    <div id="home" className="pt-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl tracking-tight font-extrabold text-maroon sm:text-5xl md:text-6xl">
            Welcome to NSS HSS Adoor
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-700 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Empowering minds, building futures - Excellence in education since establishment
          </p>
          <div className="mt-8">
            <a
              href="#about"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-cream bg-maroon hover:bg-maroon/90 transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="mt-10">
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
            alt="School Building"
            className="rounded-lg shadow-xl w-full h-[400px] object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;