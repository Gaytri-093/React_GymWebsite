import React from 'react';
import TrainerImg1 from "../assets/trainer1.jpg";
import TrainerImg2 from "../assets/trainer2.jpg";
import TrainerImg3 from "../assets/trainer3.jpg";
import TrainerImg4 from "../assets/trainer4.jpg";

const ExploreMore = () => {
  return (
    <div className="bg-[#F3EFEA] min-h-screen flex flex-col items-center px-12 md:px-16 pt-6 pb-2">
      <div className="w-[85%] m-auto px-12">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Explore our classes</h1>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut habitasse.
          </p>
        </div>

        {/* Content*/}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          {/* Leftcard*/}
          <div className="bg-[#141414] text-white p-6 flex flex-col justify-center md:col-span-2">
            <div className="flex items-center space-x-4">
              <img
                src={TrainerImg1}
                alt="Trainer"
                className="w-20 h-20 border border-gray-500 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">Marcus Gouse</h3>
                <p className="text-sm text-gray-400"> Trainer</p>
              </div>
            </div>
            <h2 className="text-2xl font-bold mt-4">Experienced Trainer</h2>
          </div>

          {/* Right card */}
          <img
            src={TrainerImg2}
            alt="Trainer Working Out"
            className="w-full md:w-[100%] h-56 object-cover "
          />
        </div>

        {/* row2cards*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mt-6">
          <img
            src={TrainerImg3}
            alt="Workout 1"
            className="w-full h-56 object-cover"
          />
          <img
            src={TrainerImg4}
            alt="Workout 2"
            className="w-full h-56 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ExploreMore;
