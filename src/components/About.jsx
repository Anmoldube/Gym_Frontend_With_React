import React from "react";

function About() {
  return (
    <div className="bg-white py-16 flex ">
      <div className="container  px-6 text-center">
        <h2 className="text-2xl text-teal-600 font-semibold ">Hello There!</h2>
        <h1 className="text-4xl md:text-5xl font-bold mt-4">
          Welcome to{" "}
          <span className="text-teal-500 animate-pulse">SlimKits</span>
        </h1>
        <p className="text-xl mt-2">Your weight loss support</p>
        <p className="text-gray-600 mt-6">
          Turpis neque libero maximus quis pellentesque leo aenean. Metus
          praesent posuere ante mi fermentum elementum. Mi lacus quis neque
          cubilia bibendum sagittis. Quisque urna nec per mattis ultrices nostra
          vel inceptos ut taciti hac.
        </p>
        <div className="mt-10 space-y-4">
          <div className="flex items-center justify-center">
            <svg
              className="w-6 h-6 text-teal-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414L9.414 14 7 11.586l1.293-1.293 1.293 1.293 6.707-6.707a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="ml-2 text-lg font-semibold text-gray-900">
              Best Weight Loss Service
            </h3>
          </div>
          <p className="text-gray-600">
            Conubia diam sit sem curae dapibus vehicula.
          </p>
          <div className="flex items-center justify-center mt-4">
            <svg
              className="w-6 h-6 text-teal-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414L9.414 14 7 11.586l1.293-1.293 1.293 1.293 6.707-6.707a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h3 className="ml-2 text-lg font-semibold text-gray-900">
              Find Your Healthy Weight Loss Services
            </h3>
          </div>
          <p className="text-gray-600">
            Conubia diam sit sem curae dapibus vehicula.
          </p>
        </div>
      </div>
      <div className="w-full h-full bg-white">
        <img
          className="mr w-[90%] h-[70%]"
          src="https://images.unsplash.com/photo-1485727749690-d091e8284ef3?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=" "
        ></img>
      </div>
    </div>
  );
}

export default About;
