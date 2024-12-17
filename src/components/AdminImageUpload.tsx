import { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { ImagePlus, Loader } from 'lucide-react';

const AdminImageUpload = ({ section, onUploadComplete }: { section: string, onUploadComplete: () => void }) => {
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      console.log('Starting file upload...');
      const fileExt = file.name.split('.').pop();
      const filePath = `${crypto.randomUUID()}.${fileExt}`;

      // Upload file to storage
      const { error: uploadError, data } = await supabase.storage
        .from('school-images')
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      console.log('File uploaded successfully:', data);

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('school-images')
        .getPublicUrl(filePath);

      console.log('Public URL generated:', publicUrl);

      // Save image record
      const { error: dbError } = await supabase
        .from('images')
        .insert({
          url: publicUrl,
          section: section,
          title: file.name.split('.')[0]
        });

      if (dbError) throw dbError;

      console.log('Image record saved to database');

      toast({
        title: "Success",
        description: "Image uploaded successfully",
      });
      
      onUploadComplete();
    } catch (error) {
      console.error('Error uploading image:', error);
      toast({
        title: "Error",
        description: "Failed to upload image",
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <Input
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        disabled={isUploading}
        className="max-w-xs"
      />
      {isUploading ? (
        <Loader className="w-4 h-4 animate-spin" />
      ) : (
        <ImagePlus className="w-4 h-4" />
      )}
    </div>
  );
};

export default AdminImageUpload;