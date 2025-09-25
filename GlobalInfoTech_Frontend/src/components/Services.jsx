// File: Services.jsx
import React, { useState } from "react";

import service1 from "../assets/coding.jpg";
import service2 from "../assets/wordpress.png";
import service3 from "../assets/Shopify.jpg";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Custom Websites",
      img: service1,
      alt: "Laptop with code",
      description:
        "कस्टम वेबसाइट आपके व्यवसाय और ब्रांड पहचान के अनुसार विशेष रूप से तैयार की जाती है। यह न केवल आपके लक्ष्यों के अनुरूप फीचर्स और डिजाइन प्रदान करती है बल्कि लचीलेपन, स्केलेबिलिटी और बेहतर परफ़ॉर्मेंस भी सुनिश्चित करती है।",
      link: "#",
    },
    {
      id: 2,
      title: "WordPress Websites",
      img: service2,
      alt: "WordPress showcase",
      description:
        "वर्डप्रेस वेबसाइट एक शक्तिशाली और लचीला प्लेटफ़ॉर्म है जहाँ आप आसानी से अपनी वेबसाइट प्रबंधित कर सकते हैं। यह आपके व्यवसाय के अनुरूप पूरी तरह कस्टमाइज़ की जा सकती है और पेशेवर ऑनलाइन मौजूदगी देती है।",
      link: "#",
    },
    {
      id: 3,
      title: "Shopify Websites",
      img: service3,
      alt: "Shopify mobile",
      description:
        "शॉपिफाई वेबसाइट एक आसान और तेज़ ई-कॉमर्स समाधान है। यह सुरक्षित पेमेंट गेटवे और आकर्षक थिम्स के साथ ऑनलाइन स्टोर बनाने का सरल तरीका देती है।",
      link: "#",
    },
    {
      id: 4,
      title: "Custom Websites",
      img: service1,
      alt: "Laptop with code",
      description:
        "कस्टम वेबसाइट आपके व्यवसाय और ब्रांड पहचान के अनुसार विशेष रूप से तैयार की जाती है। यह न केवल आपके लक्ष्यों के अनुरूप फीचर्स और डिजाइन प्रदान करती है बल्कि लचीलेपन, स्केलेबिलिटी और बेहतर परफ़ॉर्मेंस भी सुनिश्चित करती है।",
      link: "#",
    },
    {
      id: 5,
      title: "WordPress Websites",
      img: service2,
      alt: "WordPress showcase",
      description:
        "वर्डप्रेस वेबसाइट एक शक्तिशाली और लचीला प्लेटफ़ॉर्म है जहाँ आप आसानी से अपनी वेबसाइट प्रबंधित कर सकते हैं। यह आपके व्यवसाय के अनुरूप पूरी तरह कस्टमाइज़ की जा सकती है और पेशेवर ऑनलाइन मौजूदगी देती है।",
      link: "#",
    },
    {
      id: 6,
      title: "Shopify Websites",
      img: service3,
      alt: "Shopify mobile",
      description:
        "शॉपिफाई वेबसाइट एक आसान और तेज़ ई-कॉमर्स समाधान है। यह सुरक्षित पेमेंट गेटवे और आकर्षक थिम्स के साथ ऑनलाइन स्टोर बनाने का सरल तरीका देती है।",
      link: "#",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? services.length - 1 : prev - 1));

  return (
    <section className="bg-white py-16" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Discover Our Services
          </h2>
          <div className="mt-3 h-1 w-24 bg-blue-500 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Explore the Dynamic Services We Offer
          </p>
        </div>

        {/* Carousel Wrapper */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {services.map((s) => (
              <div
                key={s.id}
                className="min-w-full sm:min-w-1/2 md:min-w-1/3 px-3"
              >
                <article className="flex flex-col bg-white rounded-xl shadow-md hover:shadow-lg transition p-5 h-full">
                  {/* Image */}
                  <div className="w-full h-48 sm:h-56 md:h-60 lg:h-48 overflow-hidden rounded-lg">
                    <img
                      src={s.img}
                      alt={s.alt}
                      className="w-full h-full object-cover transform hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow mt-5">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed flex-grow">
                      {s.description}
                    </p>
                    <a
                      href={s.link}
                      className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Show Now →
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100"
          >
            ◀
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-100"
          >
            ▶
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {services.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-2 w-2 rounded-full ${
                idx === current ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
