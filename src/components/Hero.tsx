import { useEffect, useState } from 'react';
import { Loader, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import SchoolStats from './SchoolStats';

interface SlideImage {
  id: string;
  url: string;
  title: string;
}

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState<SlideImage[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetchImages();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (images.length > 1) {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [images]);

  const fetchImages = async () => {
    try {
      console.log('Fetching slider images...');
      const { data, error } = await supabase
        .from('images')
        .select('*')
        .eq('section', 'home-slider');

      if (error) throw error;
      console.log('Fetched slider images:', data);
      setImages(data || []);
    } catch (error) {
      console.error('Error fetching slider images:', error);
    }
  };

  const handlePrevious = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => 
      (prev + 1) % images.length
    );
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-cream dark:bg-gray-900">
        <Loader className="w-12 h-12 text-maroon animate-spin" />
      </div>
    );
  }

  return (
    <div id="home" className="pt-16 bg-cream dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl tracking-tight font-extrabold text-maroon dark:text-cream sm:text-5xl md:text-6xl">
            Welcome to NSS Higher Secondary School Adoor
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-700 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Empowering minds, building futures - Excellence in education since establishment.
          </p>
          
          <div className="mt-12 relative h-96 overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
            {images.map((image, index) => (
              <div
                key={image.id}
                className={`absolute w-full h-full transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title || `Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
            {images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  onClick={handlePrevious}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"
                  onClick={handleNext}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
      <SchoolStats />
    </div>
  );
};

export default Hero;