import React from 'react'
const programs = [
    { title: "Strength Training", description: "Pellentesque et congue cursus tortor lorem amet. Amet, ipsum porta fringilla dolor, integer curabitur elementum.", icon: "\u{1F4AA}" },
    { title: "Cardio Training", description: "Pellentesque et congue cursus tortor lorem amet. Amet, ipsum porta fringilla dolor, integer curabitur elementum.", icon: "\u{1F3C3}" },
    { title: "Fat Burning", description: "Pellentesque et congue cursus tortor lorem amet. Amet, ipsum porta fringilla dolor, integer curabitur elementum.", icon: "\u{1F4A7}" },
    { title: "Health Fitness", description: "Pellentesque et congue cursus tortor lorem amet. Amet, ipsum porta fringilla dolor, integer curabitur elementum.", icon: "\u{1F3CB}" },
  ];

const ExplorePrograms = () => {
  return (
    
        <div className="bg-[#FFFAF0] min-h-screen flex flex-col items-center px-6 pt-14 px-8">
      <div className="w-[85%] max-w-5xl text-center md:text-left flex justify-between">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Explore our <br /> all programs</h1>
        <p className="text-gray-600 mt-2 max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas nihil dolores mollitia quod, minus odit enim optio in necessitatibus! Suscipit asperiores quia omnis iure molestiae optio facere, ut voluptas.habitasse quis scelerisque arcu eget aliquet.
        </p>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-[85%] max-w-5xl">
        {programs.map((program, index) => (
          <div key={index} className="bg-white shadow-md p-6 rounded-lg text-center flex flex-col items-center">
            <div className="w-12 h-12 flex justify-center items-center bg-gray-200 rounded-full text-2xl">
              {program.icon}
            </div>
            <h3 className="text-lg font-semibold mt-4">{program.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{program.description}</p>
          </div>
        ))}
      </div>
    </div>
      
    
  )
}

export default ExplorePrograms
