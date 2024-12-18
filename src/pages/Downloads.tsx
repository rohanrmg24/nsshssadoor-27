import Navbar from "../components/Navbar";
import DownloadsComponent from "../components/Downloads";
import Footer from "../components/Footer";

const Downloads = () => {
  return (
    <div className="min-h-screen bg-cream dark:bg-gray-900">
      <Navbar />
      <div className="pt-24">
        <DownloadsComponent />
      </div>
    </div>
  );
};

export default Downloads;