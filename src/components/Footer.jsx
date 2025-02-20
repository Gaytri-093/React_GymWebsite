import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import TrainerImg from "../assets/Trainer.png";

const Footer = () => {
  return (
    <div className="bg-[#FAF8F6] pb-10 px-4 sm:px-8">
      
      {/* Header*/}
      <div className="w-[90%] max-w-6xl mx-auto pt-8 flex flex-col-reverse md:flex-row-reverse items-center gap-6">
        
        {/* Right Side*/}
        <div className="md:w-1/3 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            What Our Customers Say
          </h1>
        </div>

        {/* Left Side */}
        <div className="relative w-full md:w-2/3 bg-[#C84B41] flex flex-col md:flex-row items-center px-6 py-6 rounded-lg shadow-lg">
          
          {/* Trainer Image */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <img src={TrainerImg} alt="Trainer" className="w-full max-w-[180px] sm:max-w-[220px]" />
          </div>

          {/*Content */}
          <div className="w-full md:w-1/2 text-white flex flex-col justify-center px-4 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-semibold">Leo Septimus</h3>
            <p className="text-sm sm:text-base mt-2 leading-relaxed">
              "Absolutely love the training sessions! The best decision I made for my fitness journey."
            </p>
            <div className="flex justify-center md:justify-start space-x-2 mt-4">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
          </div>

        </div>

      </div>

      {/* Footer*/}
      <footer className="mt-10 border-t border-gray-300 pt-6 w-[90%] max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-gray-700">
          
          {/* Contact*/}
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold">GYM UP</h2>
            <p className="text-sm mt-2">contact@lift.agency</p>
            <p className="text-sm">+558445880</p>
          </div>

          {/* Website*/}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold">Website</h3>
            <ul className="text-sm space-y-1 mt-2">
              <li>About Us</li>
              <li>Trainer</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Social*/}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-4 text-lg mt-2">
              <FaFacebookF className="hover:text-[#3b5998] cursor-pointer" />
              <FaLinkedinIn className="hover:text-[#0077b5] cursor-pointer" />
              <FaInstagram className="hover:text-[#C13584] cursor-pointer" />
              <FaTwitter className="hover:text-[#1DA1F2] cursor-pointer" />
            </div>
          </div>

          {/* Newsletter & Address */}
          <div className="text-center sm:text-left">
            <h3 className="font-semibold">Head Office</h3>
            <p className="text-sm mt-2">
              Xilium’s Corner Wine &copy; 2017, 1112 A Market St
            </p>
            <h3 className="font-semibold mt-4">Newsletter</h3>
            <div className="flex items-center border border-gray-400 px-3 py-2 rounded-md mt-2">
              <input type="email" placeholder="Enter your email" className="flex-1 bg-transparent outline-none text-sm" />
              <MdOutlineEmail className="text-gray-600" />
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default Footer;
