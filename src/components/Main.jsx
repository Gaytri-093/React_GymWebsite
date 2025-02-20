import React from 'react';
import image from "../assets/Image.jpg";
import cardImg1 from '../assets/cardimg1.jpg';
import cardImg2 from '../assets/cardimg2.jpg';
import cardImg3 from '../assets/cardimg3.jpg';

const Main = () => {
  return (
    <div className="bg-[#F3EFEA] min-h-screen flex items-center">
     
      <section className="w-[90%] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 pt-6 md:pt-12 h-auto lg:h-screen">
        
        {/* Left card*/}
        <div className="lg:w-[55%] text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug">Enjoy life.</h1>
          <div>
            <span className="text-4xl md:text-5xl font-bold leading-snug">Get fit.</span>
            <span className="bg-gray-200 rounded-full ml-2">🥇</span>
            <span className="ml-2 font-bold text-lg">+35k Members</span>
          </div>
          <img
            src={image}
            alt="Gym Model"
            className="w-full max-w-sm md:max-w-md lg:w-[480px] mt-4 rounded-lg shadow-lg"
          />
        </div>

        {/* Right Card */}
        <div className="lg:w-[40%] bg-[#CD412E] px-6 md:px-8 py-6 text-white rounded-lg shadow-lg flex flex-col items-center relative mt-6 lg:mt-2 w-full sm:max-w-md lg:max-w-none">
          
          {/* Cards */}
          <div className="grid grid-cols-1 gap-4 w-full">
            {[{ img: cardImg1, label: 'Fitness' }, { img: cardImg2, label: 'Yoga' }, { img: cardImg3, label: 'Cardio' }].map((item, index) => (
              <div key={index} className="relative flex justify-center items-center rounded-lg overflow-hidden">
                
                <div
                  className="absolute -left-[10px] top-1/2 -translate-y-1/2 -rotate-20 bg-white text-black px-5 py-1 text-xs md:text-sm font-bold shadow-md w-20 text-center"
                  style={{ clipPath: 'polygon(100% 10%, 100% 100%, 10% 85%, 10% 15%)' }}
                >
                  {item.label}
                </div>
                <img src={item.img} alt={item.label} className="rounded-lg w-44 h-28 md:w-56 md:h-36" />
              </div>
            ))}
          </div>

          {/* Stats*/}
          <div className="mt-6 w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <div className="bg-white text-black p-2 text-center rounded-lg shadow-md text-xs md:text-sm font-bold">120+ Coaches</div>
              <div className="bg-white text-black p-2 text-center rounded-lg shadow-md text-xs md:text-sm font-bold">5250+ Members</div>
              <div className="bg-white text-black p-2 text-center rounded-lg shadow-md text-xs md:text-sm font-bold">20+ Programs</div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Main;
