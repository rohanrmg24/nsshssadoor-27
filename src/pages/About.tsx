import Navbar from "../components/Navbar";
import AboutComponent from "../components/About";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-cream dark:bg-gray-900">
      <Navbar />
      <div className="pt-24">
        <AboutComponent />
      </div>
    </div>
  );
};

export default About;