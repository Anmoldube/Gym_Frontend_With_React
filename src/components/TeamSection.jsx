import React from "react";

const TeamSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h3 className="text-teal-500 text-xl">Meet Our Team</h3>
        <h2 className="text-3xl font-bold mt-2">
          Teamwork makes the dream work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          <div className="team-member">
            <img
              src="https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cynthia"
              className="w-full h-auto rounded-lg"
            />
            <h4 className="text-lg font-bold mt-4">Cynthia</h4>
            <p className="text-teal-500">Instructor</p>
          </div>
          <div className="team-member">
            <img
              src="https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Robert Andrade"
              className="w-full h-auto rounded-lg"
            />
            <h4 className="text-lg font-bold mt-4">Robert Andrade</h4>
            <p className="text-teal-500">Nutritionist</p>
          </div>
          <div className="team-member">
            <img
              src="https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Mable Green"
              className="w-full h-auto rounded-lg"
            />
            <h4 className="text-lg font-bold mt-4">Mable Green</h4>
            <p className="text-teal-500">Nutritionist</p>
          </div>
          <div className="team-member">
            <img
              src="https://images.unsplash.com/photo-1521804906057-1df8fdb718b7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Adam Crane"
              className="w-full h-auto rounded-lg"
            />
            <h4 className="text-lg font-bold mt-4">Adam Crane</h4>
            <p className="text-teal-500">Instructor</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
