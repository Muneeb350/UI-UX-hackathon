import React from "react";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io5";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-blue-950 w-full h-[58px] flex items-center justify-between px-4 sm:px-8 text-white">
      {/* Left Section: Contact Info */}
      <div className="flex items-center space-x-4">
        {/* Phone */}
        <div className="flex items-center space-x-1">
          <BsTelephone className="text-white text-sm" />
          <h6 className="text-[13px] font-bold font-montserrat">
            (225) 555-0118
          </h6>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-1">
          <TfiEmail className="text-white text-sm ml-8" />
          <h6 className="text-[13px] font-bold font-montserrat">
            michelle.rivera@example.com
          </h6>
        </div>
      </div>

      {/* Middle Section: Message */}
      <div className="hidden md:flex">
        <h6 className="text-[13px] font-bold font-montserrat">
          Follow Us and get a chance to win 80% off
        </h6>
      </div>

      {/* Right Section: Social Links */}
      <div className="flex items-center space-x-2">
        <h6 className="text-[13px] font-bold font-montserrat">Follow Us</h6>
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

