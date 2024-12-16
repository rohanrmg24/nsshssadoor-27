import Navbar from "../components/Navbar";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-cream dark:bg-gray-900">
      <Navbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-maroon dark:text-cream mb-8">Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder images will be added here */}
          <p className="text-maroon dark:text-cream">Content coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;