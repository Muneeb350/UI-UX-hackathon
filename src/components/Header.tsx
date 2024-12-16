import React from "react";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io5";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebook, FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-gray-800 h-[58px] items-center justify-between px-4 text-white hidden sm:flex md:flex">
      {/* Left Section: Contact Info */}
      <div className="flex items-center space-x-4">
        {/* Phone */}
        <div className="flex items-center space-x-2 ml-6">
          <BsTelephone className="text-white text-md" />
          <h6 className="text-[14px] font-bold font-montserrat">
            (225) 555-0118
          </h6>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-1">
          <TfiEmail className="text-white text-md ml-8" />
          <h6 className="text-[14px] font-bold font-montserrat tracking-wider">
            michelle.rivera@example.com
          </h6>
        </div>
      </div>

      {/* Middle Section: Message */}
      <div>
        <h6 className="text-[14px] font-bold font-montserrat">
          Follow Us and get a chance to win 80% off
        </h6>
      </div>

      {/* Right Section: Social Links */}
      <div className="flex items-center space-x-5">
        <h6 className="text-[14px] font-bold font-montserrat">Follow Us</h6>
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


