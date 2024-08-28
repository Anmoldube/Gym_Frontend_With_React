import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12 ">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Based on client experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="carol.jpg"
              alt="Carol B"
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-gray-600 mb-4">
              "Gravida magnis bibendum dapibus tincidunt laoreet dis sapien
              platea cursus. Gravida nec si orci venenatis potenti mattis
              tristique pharetra turpis vel hoc."
            </p>
            <p className="font-bold">Carol B</p>
            <p className="text-gray-500">HR Professional</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="chester.jpg"
              alt="Chester Oloes"
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-gray-600 mb-4">
              "Cubilia porttitor mi neque magnis volutpat adipiscing euismod
              tempor. Ex scelerisque duis blandit viverra purus per nisi sem
              letius. Eros hendrerit eleifend ipsum metus."
            </p>
            <p className="font-bold">Chester Oloes</p>
            <p className="text-gray-500">Junior Interior Designer</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img
              src="lucia.jpg"
              alt="Lucia Adkins"
              className="w-16 h-16 rounded-full mb-4"
            />
            <p className="text-gray-600 mb-4">
              "Magnis dictumst ornare imperdiet tempor. Duis blandit viverra
              purus per nisi sem letius. Eros hendrerit eleifend ipsum metus."
            </p>
            <p className="font-bold">Lucia Adkins</p>
            <p className="text-gray-500">Entrepreneur</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
