import React from "react";

const programs = [
  { title: "Strength Training", description: "Build muscle and increase strength with structured workouts.", icon: "💪" },
  { title: "Cardio Training", description: "Improve endurance and heart health with cardio exercises.", icon: "🏃" },
  { title: "Fat Burning", description: "Burn calories efficiently with high-intensity workouts.", icon: "💦" },
  { title: "Health Fitness", description: "Maintain overall fitness with balanced workout routines.", icon: "🏋️" },
];

const ExplorePrograms = () => {
  return (
    <div className="bg-[#FFFAF0] min-h-auto flex flex-col items-center px-4 sm:px-8 pt-12 pb-4">
      
      {/* Heading */}
      <div className="w-[90%] max-w-5xl text-center md:text-left flex flex-col md:flex-row pt-6 justify-between pb-8 mb-8 items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Explore our <br className="hidden md:block" /> all programs
        </h1>
        <p className="text-gray-600 mt-2 md:mt-0 md:max-w-md text-sm sm:text-base">
          Discover a variety of fitness programs tailored to help you achieve your health goals. From strength training to fat-burning workouts, find what fits you best!
        </p>
      </div>
      
      {/* Programs*/}
      <div className="mt-1 mb-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-[90%] max-w-5xl">
        {programs.map((program, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg text-center flex flex-col items-center transition-transform transform hover:scale-105">
            <div className="w-14 h-14 flex justify-center items-center bg-gray-200 rounded-full text-3xl">
              {program.icon}
            </div>
            <h3 className="text-lg font-semibold mt-4">{program.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{program.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePrograms;
