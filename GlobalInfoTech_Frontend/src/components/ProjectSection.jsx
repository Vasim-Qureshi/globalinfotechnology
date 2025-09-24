import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import project_1 from "../assets/AutoWorkshop.png";
import project_2 from "../assets/glownest.png";
import project_3 from "../assets/Custom.png";
import project_4 from "../assets/AutoMarket.png";
import project_5 from "../assets/Pharmacy.png";

const ProjectSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const projects = [
    {
      img: project_1,
      title: "Auto Workshop",
      desc: "Auto Workshop platform for vehicle repairs.",
    },
    {
      img: project_2,
      title: "GlowNest Lights",
      desc: "Landing page and promotional site with hero CTA.",
    },
    {
      img: project_3,
      title: "Ecommerce-Shop",
      desc: "Responsive storefront with product cards and cart.",
    },
    {
      img: project_5,
      title: "Health Plus",
      desc: "Medical services site with appointment booking.",
    },
    {
      img: project_4,
      title: "Auto Market",
      desc: "Vehicle Selling Platform with Search and Filters.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Impressive Projects
        </h2>

        <div className="mx-auto my-6 w-36 h-1 bg-blue-500 rounded"></div>

        <p className="max-w-2xl mx-auto text-gray-600 mb-12">
          View some of our most amazing projects completed using globalinfotechnology.
        </p>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <div key={index} className="px-4">
              <div className="relative overflow-hidden rounded shadow-lg" style={{ paddingTop: '60%' }}>
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="mt-4 text-left">
                <h3 className="font-semibold text-gray-800">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProjectSection;