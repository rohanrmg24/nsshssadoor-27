const About = () => {
  return (
    <div id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-maroon sm:text-4xl">
            About Our School
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-maroon mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be a center of excellence in education, nurturing young minds to become responsible global citizens with strong values and leadership qualities.
              </p>
              <h3 className="text-xl font-semibold text-maroon mt-6 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide quality education that develops intellectual curiosity, creativity, and moral values in our students, preparing them for the challenges of tomorrow.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-maroon mb-4">Our Values</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Excellence in Education</li>
                <li>Character Development</li>
                <li>Innovation and Creativity</li>
                <li>Social Responsibility</li>
                <li>Inclusive Learning Environment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;