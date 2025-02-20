import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-[#F3EFEA]"> 
      <nav className="w-[85%] m-auto flex justify-between items-center p-4 bg-transparent shadow-lg ">
        <div className="text-2xl font-bold">GYM UP</div>
        <ul className="flex space-x-6 text-lg">
          <li>Home</li>
          <li>About</li>
          <li>Trainer</li>
          <li>Pricing</li>
          <li>Blog</li>
        </ul>
        <div className="text-[#CD412E] font-bold">+558445880</div>
      </nav>
    </div>
  );
};

export default Navbar;
