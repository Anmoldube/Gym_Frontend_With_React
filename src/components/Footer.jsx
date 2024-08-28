// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <>
      <section
        className="bg-cover bg-fuchsia-400 bg-center text-white py-16"
        style={{
          backgroundImage:
            "https://www.shutterstock.com/image-photo/medicine-healthcare-people-concept-female-600nw-2188588635.jpg",
        }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Losing Weight?
          </h2>
          <p className="text-gray-300 mb-8">
            Turpis parturient egestas lacinia libero si dis justo condimentum
            sociosqu. Potenti natoque quisque himenaeos suscipit at pharetra
            placerat. Leo et letius pretium laoreet consequat tempus.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
              Contact Us
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md">
              Get Appointment
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white p-8">
        <div className="container mx-auto flex justify-between">
          {/* Quick Links */}
          <div>
            <h2 className="font-bold mb-4">Quick Links</h2>
            <ul>
              <li>About us</li>
              <li>Contact</li>
              {/* Add other links */}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h2 className="font-bold mb-4">Get In Touch</h2>
            <p>Central Vape HQ,</p>
            <p>Jakarta - Indonesia</p>
            <a
              href="mailto:info@example.com"
              className="hover:underline mt-3 block"
            >
              info@example.com
            </a>
          </div>

          {/* Subscribe to Newsletter */}
          <div>
            <h2 className="font-bold mb-4">Subscribe to our newsletter</h2>
            <input
              type="email"
              placeholder="Write your email here"
              className="w-full p-2 rounded-md"
            />
            <button className="bg-purple-500 text-white px-4 py-2 mt-2 rounded-md">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
