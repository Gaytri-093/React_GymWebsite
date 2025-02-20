import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import TrainerImg from "../assets/Trainer.png";

const Footer = () => {
  return (
    <div className="bg-[#FAF8F6] py-12 px-6 md:px-16">
      {/* Header*/}
      <div className="w-[85%] mx-auto flex flex-col md:flex-row items-center gap-6 px-4 md:px-12">
        
        {/* Left Side*/}
        <div className="relative w-full md:w-2/3 bg-[#C84B41] flex flex-col md:flex-row items-center px-4 py-6 rounded-lg shadow-lg">
          
          {/* Image*/}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <img
              src={TrainerImg}
              alt="Trainer"
              className="w-full max-w-[200px] md:max-w-none "
            />
          </div>

          {/*content*/}
          <div className="w-full md:w-1/2 text-white flex flex-col justify-center px-4 text-center md:text-left">
            <h3 className="text-lg font-semibold">Leo Septimus</h3>
            <p className="text-sm md:text-base mt-2 leading-relaxed">
              Commercial dept Bill Hintzen. Liar, arrogant, and incompetent. My machine is over 3 months late, and nothing but excuses.
            </p>
            <div className="flex justify-center md:justify-start space-x-2 mt-4">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
          </div>

        </div>

        {/* Right heading*/}
        <div className="md:w-1/3 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            What Our Customers Say About Us
          </h1>
        </div>

      </div>

      {/* Footer*/}
      <footer className="mt-14 border-t border-gray-300 pt-6 w-[85%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-gray-700">
          
          {/* Contact*/}
          <div>
            <h2 className="text-xl font-semibold">GYM UP</h2>
            <p className="text-sm mt-2">contact@lift.agency</p>
            <p className="text-sm">+558445880</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold">Website</h3>
            <ul className="text-sm space-y-1 mt-2">
              <li>About us</li>
              <li>Trainer</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-semibold">Socials</h3>
            <div className="flex space-x-4 text-lg mt-2 justify-center md:justify-start">
              <FaFacebookF />
              <FaLinkedinIn />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>

          {/* Newsletter & Address */}
          <div>
            <h3 className="font-semibold">Head Office</h3>
            <p className="text-sm mt-2">
              Xilium’s Corner Wine &copy; 2017, 1112 A Market St
            </p>
            <h3 className="font-semibold mt-4">News Letter</h3>
            <div className="flex items-center border border-gray-400 px-3 py-2 rounded-md mt-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent outline-none text-sm"
              />
              <MdOutlineEmail className="text-gray-600" />
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
};

export default Footer;
