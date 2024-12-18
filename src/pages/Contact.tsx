import Navbar from "../components/Navbar";
import ContactComponent from "../components/Contact";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-cream dark:bg-gray-900">
      <Navbar />
      <div className="pt-24">
        <ContactComponent />
      </div>
    </div>
  );
};

export default Contact;