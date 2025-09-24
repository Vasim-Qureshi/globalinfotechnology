import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800">Why Choose Us</h2>
        <div className="w-28 h-1 bg-blue-500 mx-auto mt-6 rounded"></div>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">Create a stunning website with ease.</p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Card 1 */}
          <div className="flex flex-col items-center px-6">
            <div className="w-16 h-16 flex items-center justify-center mb-6">
              {/* Code icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5L4.5 12l3.75 4.5M15.75 7.5L19.5 12l-3.75 4.5" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Efficient Design</h3>
            <p className="text-gray-600 text-sm leading-relaxed">“हमारे द्वारा बनाई गई वेबसाइट आपको विस्तृत कस्टमाइज़ेबल टेम्पलेट्स और आधुनिक डिज़ाइन फीचर्स प्रदान करती है।”</p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center px-6">
            <div className="w-16 h-16 flex items-center justify-center mb-6">
              {/* Shield icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v5l3 2 3-2V8a9 9 0 11-6 0V3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Secure Hosting</h3>
            <p className="text-gray-600 text-sm leading-relaxed">“हम सुरक्षा को प्राथमिकता देते हैं और आपकी वेबसाइट के लिए सुरक्षित होस्टिंग विकल्प प्रदान करते हैं।”</p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center px-6">
            <div className="w-16 h-16 flex items-center justify-center mb-6">
              {/* Gear icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-500 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12a7.5 7.5 0 01-.165 1.5l2.145 1.65-1.5 2.598-2.55-.45a7.48 7.48 0 01-1.125.657l-.375 2.7h-3l-.375-2.7a7.48 7.48 0 01-1.125-.657l-2.55.45-1.5-2.598L4.665 13.5A7.5 7.5 0 014.5 12c0-.5.033-.99.165-1.5L2.52 9.15l1.5-2.598 2.55.45c.36-.237.747-.434 1.125-.657L8.07 3.75h3l.375 2.7c.378.223.765.42 1.125.657l2.55-.45 1.5 2.598-2.145 1.35c.132.51.165 1.01.165 1.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovative Solutions</h3>
            <p className="text-gray-600 text-sm leading-relaxed">“हमारी टीम लगातार अपने क्लाइंट्स के लिए नए फीचर्स और समाधान पर शोध कर रही है और उन्हें लागू कर रही है।”</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;