import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen bg-cream dark:bg-gray-900">
      <Navbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-maroon dark:text-cream mb-8">Contact Us</h1>
        <div className="prose dark:prose-invert max-w-none">
          <p>Content coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;