import SchoolStats from './SchoolStats';

const About = () => {
  const { isAdmin } = useAdmin();
  const { toast } = useToast();
  const [editing, setEditing] = useState({
    vision: false,
    mission: false,
    values: false,
    history: false
  });
  const [content, setContent] = useState({
    vision: "To be a center of excellence in education, nurturing young minds to become responsible global citizens with strong values and leadership qualities.",
    mission: "To provide quality education that develops intellectual curiosity, creativity, and moral values in our students, preparing them for the challenges of tomorrow.",
    values: [
      "Excellence in Education",
      "Character Development",
      "Innovation and Creativity",
      "Social Responsibility",
      "Inclusive Learning Environment"
    ],
    history: "NSS Higher Secondary School Adoor has been a beacon of education since its establishment. Our journey began with a vision to provide quality education to the community, and we have grown to become one of the most respected educational institutions in the region."
  });

  const handleSave = async (section: string) => {
    try {
      const { error } = await supabase
        .from('content')
        .upsert({
          section: 'about',
          key: section,
          content: JSON.stringify(content[section])
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Content updated successfully",
      });
      setEditing({ ...editing, [section]: false });
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
    <div id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-maroon dark:text-cream sm:text-4xl animate-fade-in">
            About Our School
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 animate-fade-in">
            <div className="text-left bg-cream dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-maroon dark:border-cream hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-maroon dark:text-cream">Our Vision</h3>
                {isAdmin && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditing({ ...editing, vision: !editing.vision })}
                  >
                    {editing.vision ? 'Cancel' : 'Edit'}
                  </Button>
                )}
              </div>
              {editing.vision ? (
                <div className="space-y-4">
                  <textarea
                    value={content.vision}
                    onChange={(e) => setContent({ ...content, vision: e.target.value })}
                    className="w-full p-2 rounded border"
                    rows={4}
                  />
                  <Button onClick={() => handleSave('vision')}>Save Changes</Button>
                </div>
              ) : (
                <p className="text-gray-600 dark:text-gray-300">{content.vision}</p>
              )}

              <div className="flex justify-between items-center mt-6 mb-4">
                <h3 className="text-xl font-semibold text-maroon dark:text-cream">Our Mission</h3>
                {isAdmin && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditing({ ...editing, mission: !editing.mission })}
                  >
                    {editing.mission ? 'Cancel' : 'Edit'}
                  </Button>
                )}
              </div>
              {editing.mission ? (
                <div className="space-y-4">
                  <textarea
                    value={content.mission}
                    onChange={(e) => setContent({ ...content, mission: e.target.value })}
                    className="w-full p-2 rounded border"
                    rows={4}
                  />
                  <Button onClick={() => handleSave('mission')}>Save Changes</Button>
                </div>
              ) : (
                <p className="text-gray-600 dark:text-gray-300">{content.mission}</p>
              )}
            </div>

            <div className="text-left bg-cream dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-maroon dark:border-cream hover:scale-105 transition-transform duration-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-maroon dark:text-cream">Our Values</h3>
                {isAdmin && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditing({ ...editing, values: !editing.values })}
                  >
                    {editing.values ? 'Cancel' : 'Edit'}
                  </Button>
                )}
              </div>
              {editing.values ? (
                <div className="space-y-4">
                  {content.values.map((value, index) => (
                    <Input
                      key={index}
                      value={value}
                      onChange={(e) => {
                        const newValues = [...content.values];
                        newValues[index] = e.target.value;
                        setContent({ ...content, values: newValues });
                      }}
                    />
                  ))}
                  <Button onClick={() => handleSave('values')}>Save Changes</Button>
                </div>
              ) : (
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                  {content.values.map((value, index) => (
                    <li key={index}>{value}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="mt-8 bg-cream dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-maroon dark:border-cream hover:scale-105 transition-transform duration-300 text-left animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-maroon dark:text-cream">Our History</h3>
              {isAdmin && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setEditing({ ...editing, history: !editing.history })}
                >
                  {editing.history ? 'Cancel' : 'Edit'}
                </Button>
              )}
            </div>
            {editing.history ? (
              <div className="space-y-4">
                <textarea
                  value={content.history}
                  onChange={(e) => setContent({ ...content, history: e.target.value })}
                  className="w-full p-2 rounded border"
                  rows={4}
                />
                <Button onClick={() => handleSave('history')}>Save Changes</Button>
              </div>
            ) : (
              <p className="text-gray-600 dark:text-gray-300">{content.history}</p>
            )}
          </div>
        </div>
      </div>
      <SchoolStats />
    </div>
  );
};

export default About;
