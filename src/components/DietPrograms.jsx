import React from "react";
import "./DietPrograms.css"; // Make sure to create this CSS file for styling

function DietPrograms() {
  return (
    <div className="bg-green-50 flex justify-center items-center min-h-screen">
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">
            What Service We Offer
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Diet Programs
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Odio lectus in tellus cras per curae amet eu. Phasellus magnis metus
            pharetra mus sem id eget parturient elementum. Finibus maximus
            parturient volutpat vivamus praesent suscipit maecenas. Pretium
            nulla per fringilla velit interdum cursus.
          </p>
          <button className="mt-5 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md">
            View All Services
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Weight Loss Program */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              className="transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105"
              src="https://preview.moxcreative.com/slimkits/wp-content/uploads/sites/25/2022/03/close-up-of-woman-feel-happy-after-lose-weight-for-health-in-house-.jpg"
              alt="Weight Loss Program"
            />
            <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">
              Weight Loss Program
            </h3>
            <p className="mt-2 text-base leading-6 text-gray-500">
              Tortor vivamus faucibus pretium odio suscipit euismod consequat
              blandit.
            </p>
            <button className="mt-6 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md">
              Learn More
            </button>
          </div>

          {/* Personalized Nutrition */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src="https://preview.moxcreative.com/slimkits/wp-content/uploads/sites/25/2022/03/close-up-of-woman-feel-happy-after-lose-weight-for-health-in-house-.jpg"
              alt="Personalized Nutrition"
              className="transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105"
            />
            <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">
              Personalized Nutrition
            </h3>
            <p className="mt-2 text-base leading-6 text-gray-500">
              Tortor vivamus faucibus pretium odio suscipit euismod consequat
              blandit.
            </p>
            <button className="mt-6 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md">
              Learn More
            </button>
          </div>

          {/* Child Nutrition */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src="https://preview.moxcreative.com/slimkits/wp-content/uploads/sites/25/2022/03/portrait-of-young-mother-preparing-high-nutrition-foods-for-her-kid-daughter-in-kitchen.jpg"
              alt="Child Nutrition"
              className="w-full h-48 object-cover rounded-t-lg transform  rounded-xl  sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105"
            />
            <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">
              Child Nutrition
            </h3>
            <p className="mt-2 text-base leading-6 text-gray-500">
              Tortor vivamus faucibus pretium odio suscipit euismod consequat
              blandit.
            </p>
            <button className="mt-6 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md">
              Learn More
            </button>
          </div>

          {/* Workout Routines */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src="https://preview.moxcreative.com/slimkits/wp-content/uploads/sites/25/2022/03/fitness.jpg"
              alt="Workout Routines"
              className="w-full h-48 object-cover rounded-t-lg transform  rounded-xl  sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105"
            />
            <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">
              Workout Routines
            </h3>
            <p className="mt-2 text-base leading-6 text-gray-500">
              Tortor vivamus faucibus pretium odio suscipit euismod consequat
              blandit.
            </p>
            <button className="mt-6 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md">
              Learn More
            </button>
          </div>

          {/* Friendly Healthy Food */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src="https://preview.moxcreative.com/slimkits/wp-content/uploads/sites/25/2022/03/fitness.jpg"
              alt="Friendly Healthy Food"
              className="w-full h-48 object-cover rounded-t-lg transform  rounded-xl  sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105"
            />
            <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">
              Friendly Healthy Food
            </h3>
            <p className="mt-2 text-base leading-6 text-gray-500">
              Tortor vivamus faucibus pretium odio suscipit euismod consequat
              blandit.
            </p>
            <button className="mt-6 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md">
              Learn More
            </button>
          </div>

          {/* Yoga & Meditation */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <img
              src="https://preview.moxcreative.com/slimkits/wp-content/uploads/sites/25/2022/03/yoga-workout.jpg"
              alt="Yoga & Meditation"
              className="w-full h-48 object-cover rounded-t-lg transform  rounded-xl  sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105"
            />
            <h3 className="text-lg leading-6 font-medium text-gray-900 mt-4">
              Yoga & Meditation
            </h3>
            <p className="mt-2 text-base leading-6 text-gray-500">
              Tortor vivamus faucibus pretium odio suscipit euismod consequat
              blandit.
            </p>
            <button className="mt-6 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DietPrograms;
