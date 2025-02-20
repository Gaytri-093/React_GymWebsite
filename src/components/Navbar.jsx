import React, { useState } from "react";
import { Menu, X } from "lucide-react"; 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#F3EFEA]">
      <nav className="w-[90%] max-w-7xl mx-auto flex justify-between items-center p-4 bg-transparent shadow-lg">
       
        <div className="text-2xl font-bold">GYM UP</div>

       
        <ul className="hidden md:flex space-x-6 text-lg">
          <li className="cursor-pointer hover:text-[#CD412E]">Home</li>
          <li className="cursor-pointer hover:text-[#CD412E]">About</li>
          <li className="cursor-pointer hover:text-[#CD412E]">Trainer</li>
          <li className="cursor-pointer hover:text-[#CD412E]">Pricing</li>
          <li className="cursor-pointer hover:text-[#CD412E]">Blog</li>
        </ul>

       
        <div className="hidden md:block text-[#CD412E] font-bold">+558445880</div>

       
        <button
          className="md:hidden text-[#CD412E] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-4 bg-[#F3EFEA] shadow-lg">
          <li className="cursor-pointer hover:text-[#CD412E]" onClick={() => setIsOpen(false)}>Home</li>
          <li className="cursor-pointer hover:text-[#CD412E]" onClick={() => setIsOpen(false)}>About</li>
          <li className="cursor-pointer hover:text-[#CD412E]" onClick={() => setIsOpen(false)}>Trainer</li>
          <li className="cursor-pointer hover:text-[#CD412E]" onClick={() => setIsOpen(false)}>Pricing</li>
          <li className="cursor-pointer hover:text-[#CD412E]" onClick={() => setIsOpen(false)}>Blog</li>
          <div className="text-[#CD412E] font-bold mt-2">+558445880</div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
