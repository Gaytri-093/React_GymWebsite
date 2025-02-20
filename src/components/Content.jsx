import React from "react";
import cardImg from "../assets/CardImg.jpg";

const Content = () => {
  return (
    <>
      <div className="bg-[#F3EFEA] min-h-screen flex flex-col items-center py-6 sm:py-8">
        
        {/* Categories */}
        <div className="w-full bg-[#CD412E] text-white text-center py-3 mt-5 sm:py-4 font-bold flex flex-wrap justify-center gap-3 sm:gap-6 uppercase text-xs sm:text-sm md:text-md lg:text-lg">
          <span>🌟 Fitness</span>
          <span>🌟 Yoga</span>
          <span>🌟 Cardio</span>
          <span>🌟 Cross Fit</span>
          <span>🌟 Box Cycling</span>
          <span>🌟 Body Building</span>
        </div>

        {/* Main*/}
        <section className="w-[90%] max-w-6xl flex flex-col md:flex-row justify-between items-center py-8 sm:py-12 px-4 sm:px-8 mt-6">
          
          {/* Left*/}
          <div className="md:w-[50%] text-center md:text-left">
            <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
              Consectetur adipiscing elit. Aenean massa turpis egestas
              pellentesque cursus id metus. Tempor morbi eu viverra quis est. Et
              sed molestie massa egestas placerat ipsum. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Sint, qui.
            </p>

            <h2 className="mt-4 text-sm sm:text-lg md:text-xl font-bold relative px-6 py-4 inline-block before:absolute after:absolute before:w-1 before:h-full before:bg-black before:left-0 before:top-0 after:w-1 after:h-full after:bg-black after:right-0 after:top-0 before:content-[''] after:content-['']">
              <span className="absolute top-0 left-0 w-4 h-1 bg-black"></span>
              <span className="absolute top-0 right-0 w-4 h-1 bg-black"></span>
              <span className="absolute bottom-0 left-0 w-4 h-1 bg-black"></span>
              <span className="absolute bottom-0 right-0 w-4 h-1 bg-black"></span>
              Aenean massa turpis egestas pellent esque Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Doloremque, aliquid. cursus id
              metus. Tempor morbi eu viverra quis est.
            </h2>

            <button className="mt-4 bg-[#CD412E] text-white px-5 sm:px-6 py-2 rounded-full font-bold shadow-md text-xs sm:text-sm md:text-base hover:bg-[#b33628]">
              Get Started
            </button>
          </div>

          {/* Right Image*/}
          <div className="relative md:w-[320px] md:h-[380px] bg-[#CD412E] flex justify-center items-center mt-6 md:mt-0 shadow-lg">
            
            
            <div className="absolute w-60 sm:w-72 h-44 sm:h-56 bg-[#CD412E] -z-10 top-8 left-4 sm:left-8 rounded-lg"></div>

            
            <img
              src={cardImg}
              alt="Gym Model"
              className="w-[280px] sm:w-[298px] h-[340px] sm:h-[368px] object-cover shadow-lg transform -rotate-16"
            />

            {/* Calories*/}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-8 bg-white text-black p-2 sm:p-3 rounded-lg shadow-md text-xs sm:text-sm font-bold">
              Daily Calories: <span className="text-[#CD412E] font-bold">1360 Cal</span>
            </div>
          </div>

        </section>
      </div>
    </>
  );
};

export default Content;
