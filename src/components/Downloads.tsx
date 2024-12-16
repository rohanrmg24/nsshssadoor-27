const Downloads = () => {
  return (
    <div id="downloads" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-maroon text-center mb-12">
          Downloads
        </h2>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-cream rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-semibold text-maroon mb-4">
              School Mobile Application
            </h3>
            <p className="text-gray-600 mb-6">
              Download our school app to stay updated with all the latest news, events, and announcements.
            </p>
            <button className="bg-maroon text-cream px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors">
              Download APK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downloads;