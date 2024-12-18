import { useAdmin } from "@/contexts/AdminContext";
import { useState } from 'react';
import { Pencil } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const SchoolStats = () => {
  const { isAdmin } = useAdmin();
  const { toast } = useToast();
  const [stats, setStats] = useState({
    students: 1200,
    teachers: 80,
    classrooms: 40,
    achievements: 150
  });
  const [editing, setEditing] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");

  const handleEdit = (key: string, value: number) => {
    setEditing(key);
    setEditValue(value.toString());
  };

  const handleSave = async (key: string) => {
    const newValue = parseInt(editValue);
    if (!isNaN(newValue)) {
      try {
        const { error } = await supabase
          .from('stats')
          .upsert({ key, value: newValue });

        if (error) throw error;

        setStats(prev => ({ ...prev, [key]: newValue }));
        setEditing(null);
        toast({
          title: "Success",
          description: "Statistic updated successfully",
        });
      } catch (error) {
        console.error('Error updating stat:', error);
        toast({
          title: "Error",
          description: "Failed to update statistic",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="py-16 bg-cream dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-maroon dark:text-cream text-center mb-12">
          School Statistics
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform duration-300">
              <div className="relative">
                {isAdmin && editing !== key && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute -right-2 -top-2"
                    onClick={() => handleEdit(key, value)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                )}
                {editing === key ? (
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      value={editValue}
                      onChange={(e) => setEditValue(e.target.value)}
                      className="w-24"
                    />
                    <Button onClick={() => handleSave(key)}>Save</Button>
                  </div>
                ) : (
                  <h3 className="text-4xl font-bold text-maroon dark:text-cream animate-scale-in">{value}</h3>
                )}
                <p className="text-gray-600 dark:text-gray-300 mt-2 capitalize">
                  {key}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolStats;