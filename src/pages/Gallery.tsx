import Navbar from "../components/Navbar";
import GalleryComponent from "../components/Gallery";
import Footer from "../components/Footer";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-cream dark:bg-gray-900">
      <Navbar />
      <div className="pt-24">
        <GalleryComponent />
      </div>
    </div>
  );
};

export default Gallery;