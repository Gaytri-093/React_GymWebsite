import React from "react";
import TrainerImg1 from "../assets/trainer1.jpg";
import TrainerImg2 from "../assets/trainer2.jpg";
import TrainerImg3 from "../assets/trainer3.jpg";
import TrainerImg4 from "../assets/trainer4.jpg";

const ExploreMore = () => {
  return (
    <div className="bg-[#F3EFEA] min-h-auto flex flex-col items-center px-4 sm:px-8 md:px-12 pt-6 pb-4">
      
      {/* Container */}
      <div className="w-[95%] max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Explore our classes
          </h1>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut habitasse.
          </p>
        </div>

        {/* First Row */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          
          {/* Left Card */}
          <div className="bg-[#141414] text-white p-4 sm:p-6 flex flex-col justify-center md:col-span-2">
            <div className="flex items-center space-x-4">
              <img
                src={TrainerImg1}
                alt="Trainer"
                className="w-16 sm:w-20 h-16 sm:h-20 border border-gray-500 rounded-full"
              />
              <div>
                <h3 className="text-base sm:text-lg font-semibold">Marcus Gouse</h3>
                <p className="text-xs sm:text-sm text-gray-400">Trainer</p>
              </div>
            </div>
            <h2 className="text-lg sm:text-2xl font-bold mt-4">Experienced Trainer</h2>
          </div>

          {/* Right Image */}
          <img
            src={TrainerImg2}
            alt="Trainer Working Out"
            className="w-full h-48 sm:h-56 object-cover rounded-lg"
          />
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-6">
          <img
            src={TrainerImg3}
            alt="Workout 1"
            className="w-full h-48 sm:h-56 object-cover rounded-lg"
          />
          <img
            src={TrainerImg4}
            alt="Workout 2"
            className="w-full h-48 sm:h-56 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
