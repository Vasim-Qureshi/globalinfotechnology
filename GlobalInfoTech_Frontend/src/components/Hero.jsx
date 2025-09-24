// Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.etsystatic.com/40725696/r/il/4882e7/4705247420/il_fullxfull.4705247420_6qbb.jpg')", backgroundBlendMode:"darken"  // Replace with your own bg image
      }}
    >
      {/* Overlay */}
      <div className=""></div>

      {/* Content */}
      <div className="relative text-center text-white font-serif max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          YES WE WILL <br /> CREATE
        </h1>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Your <span className="text-blue-400">Website</span>
        </h2>
        <p className="text-lg md:text-xl mb-8 text-white font-semibold">
          "क्या आप भी अपनी व्यवसायिक वेबसाइट बनवाना चाहते हैं? तो आइए हमारे साथ"
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#get-started"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition"
          >
            Get Started
          </a>
          <a
            href="#learn-more"
            className="bg-white hover:bg-gray-200 text-gray-900 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
