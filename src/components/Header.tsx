import React from "react";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io5";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-gray-800 text-white px-4 py-2 flex flex-col md:flex-row items-center justify-between text-center md:text-left">
      {/* Left Section: Contact Info */}
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
        {/* Phone */}
        <div className="flex items-center space-x-2">
          <BsTelephone className="text-white text-md" />
          <h6 className="text-sm font-bold font-montserrat">(225) 555-0118</h6>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-2">
          <TfiEmail className="text-white text-md" />
          <h6 className="text-sm font-bold font-montserrat">
            michelle.rivera@example.com
          </h6>
        </div>
      </div>

      {/* Middle Section: Message */}
      <div className="mt-2 md:mt-0">
        <h6 className="text-sm font-bold font-montserrat">
          Follow Us and get a chance to win 80% off
        </h6>
      </div>

      {/* Right Section: Social Links */}
      <div className="flex items-center space-x-3 mt-2 md:mt-0">
        <h6 className="text-sm font-bold font-montserrat">Follow Us</h6>
        <span>:</span>
        <IoLogoInstagram className="text-white text-lg" />
        <AiFillYoutube className="text-white text-lg" />
        <FaFacebook className="text-white text-lg" />
        <FaTwitter className="text-white text-lg" />
      </div>
    </div>
  );
};

export default Header;
