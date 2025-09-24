// src/pages/Home.jsx
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import LearnAbout from "../components/LearnAbout.jsx";
import Services from "../components/Services.jsx";
// import InsideScoop from "../components/InsideScoop.jsx";
import WhyChooseUs from "../components/WhyChooseUs.jsx";
import ProjectSection from "../components/ProjectSection.jsx";
import ReviewsSection from "../components/ReviewsSection.jsx";
import TeamSection from "../components/TeamSection.jsx";
import Contact from "../components/Contact.jsx";
import AIChatFloatingButton from "../components/AIChatFloatingButton.jsx";
import { handleAIQueryStreaming } from "../utils/handleAIQuery.js";

const Home = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>

      {/* Sections */}
      <section id="section1" className="py-12">
        <LearnAbout />
      </section>
      <section id="section2" className="py-12 bg-white">
        <Services />
      </section>
      {/* <section id="section3" className="py-12"> */}
      {/* <InsideScoop /> */}
      {/* </section> */}
      <section id="section4" className="py-12 bg-white">
        <WhyChooseUs />
      </section>
      {/* Projects Section */}
      <section id="projects" className="py-12">
        <ProjectSection />
      </section>
      {/* Reviews Section */}
      <section id="reviews" className="py-12 bg-white">
        <ReviewsSection />
      </section>
      {/* Team Section */}
      <section id="team" className="py-12">
        <TeamSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 bg-gray-100">
        <Contact />
      </section>
      <AIChatFloatingButton
        apiEndpoint="/api/ai" // not used when handleAIQuery provided, but harmless
        handleAIQuery={(message) => handleAIQueryStreaming(message)}
      />
      {/* Footer */}
      <footer className="py-6 text-center text-gray-600 border-t">
        © {new Date().getFullYear()} Global Info Technology. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
