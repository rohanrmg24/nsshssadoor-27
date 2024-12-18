import SchoolStats from './SchoolStats';

const About = () => {
  return (
    <div id="about" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-maroon dark:text-cream sm:text-4xl animate-fade-in">
            About Our School
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 animate-fade-in">
            <div className="text-left bg-cream dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-maroon dark:border-cream hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-maroon dark:text-cream mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To be a center of excellence in education, nurturing young minds to become responsible global citizens with strong values and leadership qualities.
              </p>
              <h3 className="text-xl font-semibold text-maroon dark:text-cream mt-6 mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-300">
                To provide quality education that develops intellectual curiosity, creativity, and moral values in our students, preparing them for the challenges of tomorrow.
              </p>
            </div>
            <div className="text-left bg-cream dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-maroon dark:border-cream hover:scale-105 transition-transform duration-300">
              <h3 className="text-xl font-semibold text-maroon dark:text-cream mb-4">Our Values</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li>Excellence in Education</li>
                <li>Character Development</li>
                <li>Innovation and Creativity</li>
                <li>Social Responsibility</li>
                <li>Inclusive Learning Environment</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 bg-cream dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-maroon dark:border-cream hover:scale-105 transition-transform duration-300 text-left animate-fade-in">
            <h3 className="text-xl font-semibold text-maroon dark:text-cream mb-4">Our History</h3>
            <p className="text-gray-600 dark:text-gray-300">
              NSS Higher Secondary School Adoor has been a beacon of education since its establishment. Our journey began with a vision to provide quality education to the community, and we have grown to become one of the most respected educational institutions in the region.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <SchoolStats />
      </div>
    </div>
  );
};

export default About;