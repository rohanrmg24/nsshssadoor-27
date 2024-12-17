import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [heroImage, setHeroImage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchHeroImage();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const fetchHeroImage = async () => {
    try {
      const { data, error } = await supabase
        .from('images')
        .select('url')
        .eq('section', 'hero')
        .single();

      if (error) throw error;
      if (data) setHeroImage(data.url);
    } catch (error) {
      console.error('Error fetching hero image:', error);
    }
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
            Empowering minds, building futures - Excellence in education since establishment. Join us in our journey of creating tomorrow's leaders through quality education and comprehensive development.
          </p>
          <div className="mt-8">
            <button
              onClick={() => navigate('/about')}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-cream bg-maroon hover:bg-maroon/90 dark:bg-cream dark:text-maroon dark:hover:bg-cream/90 transition-colors duration-300"
            >
              Learn More
            </button>
          </div>
          <div className="mt-12">
            <img
              src={heroImage || "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"}
              alt="Education"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;