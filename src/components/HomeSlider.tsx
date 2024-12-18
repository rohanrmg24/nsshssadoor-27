import { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Loader } from 'lucide-react';

interface SlideImage {
  id: string;
  url: string;
  title: string;
}

const HomeSlider = () => {
  const [images, setImages] = useState<SlideImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchSlideImages();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [images.length]);

  const fetchSlideImages = async () => {
    try {
      const { data, error } = await supabase
        .from('images')
        .select('*')
        .eq('section', 'home-slider');

      if (error) throw error;
      setImages(data || []);
    } catch (error) {
      console.error('Error fetching slide images:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="h-96 flex items-center justify-center bg-cream dark:bg-gray-900">
        <Loader className="w-12 h-12 text-maroon dark:text-cream animate-spin" />
      </div>
    );
  }

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative h-96 overflow-hidden border-2 border-maroon dark:border-cream rounded-lg">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image.url}
            alt={image.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default HomeSlider;