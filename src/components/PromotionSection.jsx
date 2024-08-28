import React from "react";
// import runningWoman from "../../assets/image.png"; // Adjust the path to your image

const PromotionSection = () => {
  return (
    <section className="relative w-full h-screen">
      <img
        src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Running Woman"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-20">
        <h2 className="text-white text-xl md:text-2xl font-light">Promotion</h2>
        <h1 className="text-white text-3xl md:text-6xl font-bold my-4">
          Stop wishing to lose weight and take action to change your fate.
        </h1>
        <p className="text-pink-300 text-lg md:text-xl">
          Register for the program now, and get discounts of up to 20%!
        </p>
        <button className="mt-8 px-6 py-3 bg-teal-500 text-white text-lg font-semibold rounded hover:bg-teal-600">
          Claim Promo
        </button>
      </div>
    </section>
  );
};

export default PromotionSection;
