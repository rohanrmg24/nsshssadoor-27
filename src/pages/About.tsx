import Navbar from "../components/Navbar";
import AboutComponent from "../components/About";

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