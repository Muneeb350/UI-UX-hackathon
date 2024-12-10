'use client';
import React, { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-50 w-[1437px] h-[74px]">
      <div className="flex items-center justify-between px-4 py-2 md:px-6 h-[70px]">
        {/* Logo */}
        <h3 className="font-montserrat font-bold text-[22px] text-gray-800 ml-4">
          Bandage
        </h3>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-4 font-montserrat text-gray-500 font-bold text-[15px] mr-80">
          <li className="hover:text-blue-500 transition duration-200">
            <a href="#">Home</a>
          </li>
          <li className="flex items-center hover:text-blue-500 transition duration-200">
            <a href="#">Shop</a>
            <IoChevronDownSharp className="ml-1" />
          </li>
          <li className="hover:text-blue-500 transition duration-200">
            <a href="#">About</a>
          </li>
          <li className="hover:text-blue-500 transition duration-200">
            <a href="#">Blog</a>
          </li>
          <li className="hover:text-blue-500 transition duration-200">
            <a href="#">Contact</a>
          </li>
          <li className="hover:text-blue-500 transition duration-200">
            <a href="#">Pages</a>
          </li>
        </ul>

        {/* Icons Section */}
        <div className="flex items-center space-x-8 text-[14px] font-bold">
          {/* User Login */}
          <div className="hidden md:flex items-center space-x-2">
            <FaRegUser className="text-sky-500" />
            <a
              href="#"
              className="hover:text-blue-900 text-sky-500 transition duration-200"
            >
              Login
            </a>
            <span>/</span>
            <a
              href="#"
              className="hover:text-blue-900 text-sky-500 transition duration-200"
            >
              Register
            </a>
          </div>

          {/* Search Icon */}
          <a
            href="#"
            className="text-sky-500 hover:text-blue-900 transition duration-200"
          >
            <BsSearch className="text-lg" />
          </a>

          {/* Cart Icon */}
          <div className="flex items-center space-x-1">
            <a
              href="#"
              className="text-sky-500 hover:text-blue-900 transition duration-200"
            >
              <CgShoppingCart className="text-lg" />
            </a>
            <span className="text-sky-500 text-[12px]">1</span>
          </div>

          {/* Wishlist Icon */}
          <div className="flex items-center space-x-1">
            <a
              href="#"
              className="text-sky-500 hover:text-blue-900 transition duration-200"
            >
              <IoIosHeartEmpty className="text-lg" />
            </a>
            <span className="text-sky-500 text-[12px]">1</span>
          </div>

          {/* Mobile Menu Toggle */}
          <div
            className="md:hidden text-sky-500 cursor-pointer"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <AiOutlineClose className="text-2xl" />
            ) : (
              <AiOutlineMenu className="text-2xl" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col items-start space-y-4 px-4 py-2 bg-slate-100 md:hidden">
          <li className="hover:text-blue-500 transition duration-200">
            <a href="#">Home</a>
          </li>
          <li className="flex items-center hover:text-blue-500 transition duration-200">
            <a href="#">Shop</a>
            <IoChevronDownSharp className="ml-1" />
          </li>
          <li className="hover:text-blue-500 transition duration-200">
            <a href="#">About</a>
          </li>
          <li className="hover:text-blue-500 transition duration-200">
            <a href="#">Blog</a>
          </li>
          <li className="hover:text-blue-500 transition duration-200">
            <a href="#">Contact</a>
          </li>
          <li className="hover:text-blue-500 transition duration-200">
            <a href="#">Pages</a>
          </li>
          <div className="flex flex-col items-start space-y-2">
            <a
              href="#"
              className="hover:text-blue-900 text-sky-500 transition duration-200"
            >
              Login
            </a>
            <a
              href="#"
              className="hover:text-blue-900 text-sky-500 transition duration-200"
            >
              Register
            </a>
          </div>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
