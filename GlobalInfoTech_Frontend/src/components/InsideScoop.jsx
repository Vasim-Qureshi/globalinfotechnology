import React from "react";

const InsideScoop = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Image */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/images/section3.png"
            alt="Team meeting"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-600 inline-block pb-2">
            Inside Scoop
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            “क्या आप यह जानने के इच्छुक हैं कि हम Global Info Technology में कारोबार कैसे करते हैं? तो फिर और कहीं देखने की ज़रूरत नहीं।”
          </p>
          <p className="text-lg text-gray-700 mb-6">
            “हमारी टीम अपने ग्राहकों को बेहतरीन वेबसाइट और सेवाएँ प्रदान करने के लिए समर्पित है।”
          </p>
          <a
            href="#"
            className="text-blue-600 font-semibold hover:underline transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default InsideScoop;
