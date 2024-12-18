import { useAdmin } from "@/contexts/AdminContext";
import Navbar from "../components/Navbar";
import AdminImageUpload from "../components/AdminImageUpload";
import { useState, useEffect } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Trash2, Pencil } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface Image {
  id: string;
  url: string;
  title: string;
  description: string | null;
  section: string;
}

const Gallery = () => {
  const { isAdmin } = useAdmin();
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  const fetchImages = async () => {
    try {
      console.log('Fetching gallery images...');
      const { data, error } = await supabase
        .from('images')
        .select('*')
        .eq('section', 'gallery')
        .order('created_at', { ascending: false });

      if (error) throw error;
      console.log('Fetched gallery images:', data);
      setImages(data || []);
    } catch (error) {
      console.error('Error fetching images:', error);
      toast({
        title: "Error",
        description: "Failed to load images",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from('images')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Image deleted successfully",
      });
      
      fetchImages();
    } catch (error) {
      console.error('Error deleting image:', error);
      toast({
        title: "Error",
        description: "Failed to delete image",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="min-h-screen bg-cream dark:bg-gray-900">
      <Navbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-maroon dark:text-cream mb-8">Gallery</h1>
        
        {isAdmin && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-maroon dark:text-cream mb-4">Upload New Image</h2>
            <AdminImageUpload section="gallery" onUploadComplete={fetchImages} />
          </div>
        )}

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-maroon dark:border-cream"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.length > 0 ? (
              images.map((image) => (
                <div key={image.id} className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={image.url}
                    alt={image.title || 'Gallery image'}
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  {isAdmin && (
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() => handleDelete(image.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))
            ) : (
              <p className="text-maroon dark:text-cream col-span-full text-center">
                {isAdmin ? "Upload your first image to the gallery!" : "No images in the gallery yet."}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;