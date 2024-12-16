const Downloads = () => {
  return (
    <div id="downloads" className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-maroon dark:text-cream text-center mb-12">
          Downloads
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-cream dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-maroon dark:text-cream mb-4">
              NSS HSS Adoor Mobile App
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 mb-6">
              <p>Stay connected with our school through our official mobile application.</p>
              <h4 className="font-semibold">Key Features:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Real-time notifications for important updates</li>
                <li>Access to student portal</li>
                <li>View attendance and academic records</li>
                <li>School calendar and events</li>
                <li>Direct communication with teachers</li>
                <li>Digital library access</li>
              </ul>
            </div>
            <button className="bg-maroon text-cream dark:bg-cream dark:text-maroon px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors w-full sm:w-auto">
              Download APK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;