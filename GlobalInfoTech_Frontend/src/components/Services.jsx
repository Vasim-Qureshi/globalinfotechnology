// File: Services.jsx
import React from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1280, // large screens
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024, // tablets landscape
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 340, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);
  }, []);


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

        {/* Slider */}
        <Slider {...settings}>
          {services.map((s) => (
            <div key={s.id} className="px-3">
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
                    aria-label={`Show more about ${s.title}`}
                  >
                    Show Now →
                  </a>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Services;
