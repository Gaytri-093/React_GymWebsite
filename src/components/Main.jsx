import React from 'react';
import image from "../assets/Image.jpg";
import cardImg1 from '../assets/cardimg1.jpg';
import cardImg2 from '../assets/cardimg2.jpg';
import cardImg3 from '../assets/cardimg3.jpg';

const Main = () => {
  return (
    <div className="bg-[#F3EFEA] min-h-screen flex items-center">
      <section className="w-[90%] max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 pt-6 md:pt-12 h-auto lg:h-screen">
        
        {/* Left card */}
        <div className="lg:w-[55%] text-center lg:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug max-w-xs sm:max-w-md lg:max-w-lg">
            Enjoy life.
          </h1>
          <div className="flex flex-wrap justify-center lg:justify-start items-center mt-2 sm:mt-4 gap-2 sm:gap-4">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">Get fit.</span>
            <span className="bg-gray-200 rounded-full px-2 py-1 text-lg sm:text-xl">🥇</span>
            <span className="ml-2 font-bold text-sm sm:text-lg">+35k Members</span>
          </div>
          <img
            src={image}
            alt="Gym Model"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[480px] mt-4 rounded-lg shadow-lg"
          />
        </div>

        {/* Right Card */}
        <div className="lg:w-[40%] bg-[#CD412E] px-6 md:px-8 py-6 text-white rounded-lg shadow-lg flex flex-col items-center relative mt-6 lg:mt-2 w-full sm:max-w-md lg:max-w-none">
          
          {/* Cards */}
          <div className="grid grid-cols-1 gap-4 w-full">
            {[{ img: cardImg1, label: 'Fitness' }, { img: cardImg2, label: 'Yoga' }, { img: cardImg3, label: 'Cardio' }].map((item, index) => (
              <div key={index} className="relative flex justify-center items-center rounded-lg overflow-hidden">
                
                <div
                  className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 -rotate-10 bg-white text-black px-4 py-1 text-xs sm:text-sm md:text-base font-bold shadow-md w-24 text-center"
                  style={{ clipPath: 'polygon(100% 10%, 100% 100%, 10% 85%, 10% 15%)' }}
                >
                  {item.label}
                </div>
                <img src={item.img} alt={item.label} className="rounded-lg w-40 h-24 sm:w-48 sm:h-28 md:w-56 md:h-36" />
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-6 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-white text-black p-3 text-center rounded-lg shadow-md text-xs sm:text-sm md:text-base font-bold">
                <span className="text-[#CD412E]">120+</span> <br /> Coaches
              </div>
              <div className="bg-white text-black p-3 text-center rounded-lg shadow-md text-xs sm:text-sm md:text-base font-bold">
                <span className="text-[#CD412E]">5250+</span> <br /> Members
              </div>
              <div className="bg-white text-black p-3 text-center rounded-lg shadow-md text-xs sm:text-sm md:text-base font-bold">
                <span className="text-[#CD412E]">20+</span> <br /> Programs
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Main;
