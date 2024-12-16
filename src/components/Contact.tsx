const Contact = () => {
  return (
    <div id="contact" className="py-16 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-maroon text-center mb-12">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-maroon mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-600">
                <span className="font-semibold mr-2">Email:</span>
                <a href="mailto:nsshssadoor@gmail.com" className="hover:text-maroon">
                  nsshssadoor@gmail.com
                </a>
              </p>
              <p className="flex items-center text-gray-600">
                <span className="font-semibold mr-2">Phone:</span>
                <a href="tel:+919037193141" className="hover:text-maroon">
                  +91 9037193141
                </a>
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Virtual Tour:</span>
                <br />
                <a
                  href="https://maps.app.goo.gl/RwkYDoP7tPPhycyUA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-maroon hover:underline"
                >
                  Take a virtual tour of our school
                </a>
              </p>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.1814141681116!2d76.74776589999999!3d9.138081900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b061210d6abfe61%3A0xf27d1ae396da2c0d!2sNSS%20HSS%20Adoor!5e0!3m2!1sen!2sin!4v1734329813995!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="School Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;