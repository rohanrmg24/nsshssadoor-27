import { useAdmin } from "@/contexts/AdminContext";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const Downloads = () => {
  const { isAdmin } = useAdmin();
  const { toast } = useToast();
  const [editing, setEditing] = useState(false);
  const [content, setContent] = useState({
    title: "NSS HSS Adoor Mobile App",
    description: "Stay connected with our school through our official mobile application.",
    features: [
      "Real-time notifications for important updates",
      "Access to student portal",
      "View attendance and academic records",
      "School calendar and events",
      "Direct communication with teachers",
      "Digital library access"
    ]
  });

  const handleSave = async () => {
    try {
      const { error } = await supabase
        .from('content')
        .upsert({
          section: 'downloads',
          key: 'app-content',
          content: JSON.stringify(content)
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Content updated successfully",
      });
      setEditing(false);
    } catch (error) {
      console.error('Error updating content:', error);
      toast({
        title: "Error",
        description: "Failed to update content",
        variant: "destructive",
      });
    }
  };

  return (
    <div id="downloads" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-maroon dark:text-cream text-center mb-12 animate-fade-in">
          Downloads
        </h2>
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="bg-cream dark:bg-gray-800 rounded-lg shadow-lg p-8 border-2 border-maroon dark:border-cream hover:scale-105 transition-transform duration-300 animate-fade-in">
            {editing ? (
              <div className="space-y-4">
                <Input
                  value={content.title}
                  onChange={(e) => setContent({ ...content, title: e.target.value })}
                  className="font-semibold text-xl"
                />
                <Input
                  value={content.description}
                  onChange={(e) => setContent({ ...content, description: e.target.value })}
                />
                <div className="space-y-2">
                  {content.features.map((feature, index) => (
                    <Input
                      key={index}
                      value={feature}
                      onChange={(e) => {
                        const newFeatures = [...content.features];
                        newFeatures[index] = e.target.value;
                        setContent({ ...content, features: newFeatures });
                      }}
                    />
                  ))}
                </div>
                <Button onClick={handleSave}>Save Changes</Button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-semibold text-maroon dark:text-cream mb-4">
                  {content.title}
                  {isAdmin && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-2"
                      onClick={() => setEditing(true)}
                    >
                      Edit
                    </Button>
                  )}
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>{content.description}</p>
                  <h4 className="font-semibold">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    {content.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <Button className="mt-6 w-full bg-maroon text-cream dark:bg-cream dark:text-maroon hover:bg-opacity-90 transition-colors">
                  Download APK
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;