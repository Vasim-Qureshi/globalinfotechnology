import React from "react";

const ReviewsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Client Reviews</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
        <p className="text-gray-600 mb-12">
          Read what our satisfied clients have to say.
        </p>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <span className="text-4xl text-blue-600">&#10077;</span>
            <p className="text-gray-700 italic mt-4">
              “मैंने अपनी वेबसाइट बनाने के लिए Global Info Technology प्लेटफ़ॉर्म का इस्तेमाल किया और यह प्रक्रिया बेहद आसान और सुगम रही।”
            </p>
            <h3 className="mt-6 font-semibold text-gray-900">
              User-Friendly Experience
            </h3>
            <div className="flex justify-center mt-4">
              <img
                src="https://static9.depositphotos.com/1005893/1105/i/950/depositphotos_11050974-stock-photo-indian-businessman.jpg"
                alt="Client"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Review 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <span className="text-4xl text-blue-600">&#10077;</span>
            <p className="text-gray-700 italic mt-4">
              “एक वेब डेवलपर के रूप में, मैंने कई वेबसाइट निर्माण सॉफ़्टवेयर आज़माए हैं, लेकिन Global Info Technology अब तक का सबसे बेहतरीन प्लेटफ़ॉर्म है।”
            </p>
            <h3 className="mt-6 font-semibold text-gray-900">
              Perfect for Developers
            </h3>
            <div className="flex justify-center mt-4">
              <img
                src="https://randomuser.me/api/portraits/men/46.jpg"
                alt="Client"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          </div>

          {/* Review 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <span className="text-4xl text-blue-600">&#10077;</span>
            <p className="text-gray-700 italic mt-4">
              “Global Info Technology प्लेटफ़ॉर्म का उपयोग करने के बाद से मेरे ऑनलाइन बिज़नेस में ट्रैफिक और बिक्री में उल्लेखनीय वृद्धि हुई है।”
            </p>
            <h3 className="mt-6 font-semibold text-gray-900">
              Boosted my Online Business
            </h3>
            <div className="flex justify-center mt-4">
              <img
                src="https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg"
                alt="Client"
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
