import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import service1 from '../assets/coding.jpg';
import service2 from '../assets/wordpress.png';
import service3 from '../assets/Shopify.jpg';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Custom Websites',
      img: service1,
      alt: 'Laptop with code',
      description:
        'कस्टम वेबसाइट आपके व्यवसाय और ब्रांड पहचान के अनुसार विशेष रूप से तैयार की जाती है। यह न केवल आपके लक्ष्यों के अनुरूप फीचर्स और डिजाइन प्रदान करती है बल्कि लचीलेपन, स्केलेबिलिटी और बेहतर परफ़ॉर्मेंस भी सुनिश्चित करती है।',
      link: '#',
    },
    {
      id: 2,
      title: 'WordPress Websites',
      img: service2,
      alt: 'WordPress showcase',
      description:
        'वर्डप्रेस वेबसाइट एक शक्तिशाली और लचीला प्लेटफ़ॉर्म है जहाँ आप आसानी से अपनी वेबसाइट प्रबंधित कर सकते हैं। यह आपके व्यवसाय के अनुरूप पूरी तरह कस्टमाइज़ की जा सकती है और पेशेवर ऑनलाइन मौजूदगी देती है।',
      link: '#',
    },
    {
      id: 3,
      title: 'Shopify Websites',
      img: service3,
      alt: 'Shopify mobile',
      description:
        'शॉपिफाई वेबसाइट एक आसान और तेज़ ई-कॉमर्स समाधान है। यह सुरक्षित पेमेंट गेटवे और आकर्षक थिम्स के साथ ऑनलाइन स्टोर बनाने का सरल तरीका देती है।',
      link: '#',
    },
    {
      id: 4,
      title: 'Custom Websites',
      img: service1,
      alt: 'Laptop with code',
      description:
        'कस्टम वेबसाइट आपके व्यवसाय और ब्रांड पहचान के अनुसार विशेष रूप से तैयार की जाती है। यह न केवल आपके लक्ष्यों के अनुरूप फीचर्स और डिजाइन प्रदान करती है बल्कि लचीलेपन, स्केलेबिलिटी और बेहतर परफ़ॉर्मेंस भी सुनिश्चित करती है।',
      link: '#',
    },
    {
      id: 5,
      title: 'WordPress Websites',
      img: service2,
      alt: 'WordPress showcase',
      description:
        'वर्डप्रेस वेबसाइट एक शक्तिशाली और लचीला प्लेटफ़ॉर्म है जहाँ आप आसानी से अपनी वेबसाइट प्रबंधित कर सकते हैं। यह आपके व्यवसाय के अनुरूप पूरी तरह कस्टमाइज़ की जा सकती है और पेशेवर ऑनलाइन मौजूदगी देती है।',
      link: '#',
    },
    {
      id: 6,
      title: 'Shopify Websites',
      img: service3,
      alt: 'Shopify mobile',
      description:
        'शॉपिफाई वेबसाइट एक आसान और तेज़ ई-कॉमर्स समाधान है। यह सुरक्षित पेमेंट गेटवे और आकर्षक थिम्स के साथ ऑनलाइन स्टोर बनाने का सरल तरीका देती है।',
      link: '#',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-16" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900">Discover Our Services</h2>
          <div className="mt-3 h-1 w-28 bg-blue-500 mx-auto rounded"></div>
          <p className="mt-4 text-gray-600">Explore the Dynamic Services We Offer</p>
        </div>

        <Slider {...settings}>
          {services.map((s) => (
            <div key={s.id} className="px-4">
              <article className="flex flex-col items-start bg-white rounded shadow-sm p-4">
                <div className="w-full overflow-hidden rounded">
                  <img
                    src={s.img}
                    alt={s.alt}
                    className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-gray-800">{s.title}</h3>
                <p className="mt-3 text-gray-600 leading-relaxed text-sm">{s.description}</p>

                <a
                  href={s.link}
                  className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium"
                  aria-label={`Show more about ${s.title}`}
                >
                  Show Now
                </a>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Services;