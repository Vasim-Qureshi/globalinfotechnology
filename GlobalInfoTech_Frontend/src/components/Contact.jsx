import React from "react";
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/3184323/pexels-photo-3184323.jpeg')" }}>
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-16 h-1 bg-blue-500 mb-6"></div>
          <p className="text-gray-600 mb-6">
            For any questions or inquiries, please don’t hesitate to reach out to us.
          </p>

          <div className="flex items-center gap-3 mb-4 text-gray-700">
            <Phone className="text-blue-500" size={20} />
            <span>+91 9024710909</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <Mail className="text-blue-500" size={20} />
            <span>support@globalinfotechnology.in</span>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Your name</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Your email</label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Your message (optional)</label>
            <textarea
              rows="4"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
