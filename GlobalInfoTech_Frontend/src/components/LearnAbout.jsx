import React from "react";

const LearnAbout = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Learn About
        </h2>
        <div className="w-20 h-1 border-b-4 border-gray-600 mb-6"></div>
        <p className="text-xl font-semibold text-gray-700 mb-4">
          “हमसे जुड़ें और हमारी वेबसाइट निर्माण को जानें।”
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          “हमारा लक्ष्य छोटे-छोटे व्यवसायों को आधुनिक दौर के साथ नई ऊँचाइयों पर ले
          जाना है, सहज, सरल, सस्ती और विश्वसनीय वेबसाइट और एप्लिकेशन के ज़रिए।
          अगर आप नई ऊँचाइयों को छूने के लिए तैयार हैं, तो आइए मिलकर कुछ बेहतर
          बनाते हैं।”
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded shadow-md transition duration-300">
          JOIN NOW
        </button>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          src="https://images.pexels.com/photos/3277808/pexels-photo-3277808.jpeg"
          alt="Our Mission"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default LearnAbout;
