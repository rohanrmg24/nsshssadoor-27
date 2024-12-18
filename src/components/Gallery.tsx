import { useEffect, useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { useAdmin } from "@/contexts/AdminContext";
import AdminImageUpload from "./AdminImageUpload";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Trash } from 'lucide-react';

interface Image {
  id: string;
  url: string;
  title: string;
  description: string | null;
  section: string;
}

const Gallery = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isAdmin } = useAdmin();
  const { toast } = useToast();

  const fetchImages = async () => {
    try {
      console.log('Fetching images...');
      const { data, error } = await supabase
        .from('images')
        .select('*')
        .eq('section', 'gallery')
        .order('created_at', { ascending: false });

      if (error) throw error;
      console.log('Fetched images:', data);
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

  useEffect(() => {
    fetchImages();
  }, []);

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

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-maroon"></div>
      </div>
    );
  }

  return (
    <div id="gallery" className="py-16 bg-cream dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-maroon dark:text-cream text-center mb-12">
          Our Gallery
        </h2>

        {isAdmin && (
          <div className="mb-8 flex justify-center">
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full">
              <h3 className="text-xl font-semibold text-maroon dark:text-cream mb-4 text-center">Add New Image</h3>
              <AdminImageUpload section="gallery" onUploadComplete={fetchImages} />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {images.map((image) => (
            <div key={image.id} className="relative group overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover"
              />
              {isAdmin && (
                <Button
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleDelete(image.id)}
                >
                  <Trash className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;