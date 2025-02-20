import React from "react";
import cardImg from "../assets/CardImg.jpg";

const Content = () => {
  return (
    <>
      <div className="bg-[#F3EFEA] min-h-screen flex flex-col items-center py-8">
        
        <div className="w-full bg-[#CD412E] text-white text-center py-5 font-bold flex justify-center space-x-6 uppercase text-md">
          <span>🌟 Fitness</span>
          <span>🌟 Yoga</span>
          <span>🌟 Cardio</span>
          <span>🌟 Cross Fit</span>
          <span>🌟 Box Cycling</span>
          <span>🌟 Body Building</span>
        </div>

      {/* content */}
        <section className="w-[85%] flex flex-col md:flex-row justify-between items-center py-12 px-12 mt-6">
          {/* left */}
          <div className="md:w-[50%] text-center md:text-left">
            <p className="text-gray-700 leading-relaxed">
              Consectetur adipiscing elit. Aenean massa turpis egestas
              pellentesque cursus id metus. Tempor morbi eu viverra quis est. Et
              sed molestie massa egestas placerat ipsum. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Sint, qui.
            </p>
            <h2 className="mt-4 text-lg font-bold relative px-6 py-4 inline-block before:absolute after:absolute before:w-1 before:h-full before:bg-black before:left-0 before:top-0 after:w-1 after:h-full after:bg-black after:right-0 after:top-0 before:content-[''] after:content-['']">
              <span className="absolute top-0 left-0 w-4 h-1 bg-black"></span>
              <span className="absolute top-0 right-0 w-4 h-1 bg-black"></span>
              <span className="absolute bottom-0 left-0 w-4 h-1 bg-black"></span>
              <span className="absolute bottom-0 right-0 w-4 h-1 bg-black"></span>
              Aenean massa turpis egestas pellent esque Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Doloremque, aliquid. cursus id
              metus. Tempor morbi eu viverra quis est.
            </h2>

            <button className="mt-4 bg-[#CD412E] text-white px-6 py-2 rounded-full font-bold shadow-md hover:bg-[#b33628]">
              Get Started
            </button>
          </div>

          {/* Right Image */}
          <div className="relative md:w-[320px] md:h-[380px] bg-[#CD412E] flex justify-center items-center mt-6 md:mt-0 shadow-lg">
            
            <div className="absolute w-72 h-56 bg-[#CD412E] -z-10 top-12 left-8 rounded-lg"></div>

           
            <img
              src={cardImg}
              alt="Gym Model"
              className="w-[298px] h-[368px] object-cover shadow-lg transform -rotate-16 "
            />

            
            <div className="absolute bottom-6 left-8 bg-white text-black p-3 rounded-lg shadow-md text-sm font-bold ">
              Daily Calories:{" "}
              <span className="text-[#CD412E] font-bold">1360 Cal</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Content;
