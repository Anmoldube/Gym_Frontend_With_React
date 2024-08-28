import React from "react";
import backgroundImage from "../assets/background-image.jpg"; // Update the path as per your file location

const QuoteSection = () => {
  return (
    <section
      className="py-12 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto text-center">
        <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg inline-block">
          <p className="text-2xl text-gray-700 italic leading-loose">
            "Those who think they have no time for bodily exercise will sooner
            or later have to find time for illness."
          </p>
          <p className="text-teal-500 mt-4">- Edward Stanley -</p>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
