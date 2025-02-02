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
    <nav className="bg-slate-50 ">
      {/* Navbar Container */}
      <div className="flex items-center justify-between px-4 py-2 md:px-6 h-[74px]">
        {/* Logo */}
        <h3 className="font-montserrat font-bold text-[22px] text-gray-800">
          Bandage
        </h3>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-3 lg:space-x-6 font-montserrat text-gray-500 font-bold text-[14px] mr-20">
          <li className="hover:text-blue-500 transition duration-200">
            <a href="/">Home</a>
          </li>
          <li className="flex items-center hover:text-blue-500 transition duration-200">
            <a href="/shop">Shop</a>
            <IoChevronDownSharp className="ml-1" />
          </li>
          <li className="hover:text-blue-500 transition duration-200">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-blue-500 transition duration-200">
            <a href="/Blog">Blog</a>
          </li>
          <li className="hover:text-blue-500 transition duration-200">
            <a href="/contact">Contact</a>
          </li>
          
        </ul>

        {/* Icons Section */}
        <div className="flex items-center space-x-6 text-[14px] font-bold">
          {/* Login Section */}
          <div className="hidden md:flex items-center space-x-2">
            <FaRegUser className="text-sky-500" />
            <a href="#" className="hover:text-blue-900 text-sky-500">
              Login
            </a>
            <span className="text-sky-500">/</span>
            <a href="#" className="hover:text-blue-900 text-sky-500">
              Register
            </a>
          </div>

          {/* Icons */}
          <BsSearch className="text-sky-500 text-lg hover:text-blue-900" />
          <div className="flex items-start space-x-1">
          <CgShoppingCart className="text-sky-500 text-lg hover:text-blue-900" />
          <span className="text-sky-500 text-[10px]">1</span>
          </div>
          
          <div className="flex items-start space-x-1">
          <IoIosHeartEmpty className="text-sky-500 text-lg hover:text-blue-900" />
          <span className="text-sky-500 text-[10px]">1</span>
          </div>
          {/* Mobile Menu Toggle */}
          <div
            className="md:hidden text-sky-500 cursor-pointer"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="flex flex-col space-y-4 px-4 py-6 bg-slate-100 md:hidden">
          <li className="hover:text-blue-500 transition duration-200">
            <a href="/">Home</a>
          </li>
          <li className="hover:text-blue-500 transition duration-200 flex items-center">
            <a href="/shop">Shop</a>
            <IoChevronDownSharp className="ml-1" />
          </li>
          <li className="hover:text-blue-500 transition duration-200">
            <a href="/about">About</a>
          </li>
          <li className="hover:text-blue-500 transition duration-200">
            <a href="/Blog">Blog</a>
          </li>
          <li className="hover:text-blue-500 transition duration-200">
            <a href="/contact">Contact</a>
          </li>
          
          <li className="hover:text-blue-500 transition duration-200 flex flex-col">
            <a href="#" className="text-sky-500 hover:text-blue-900">Login</a>
            <a href="#" className="text-sky-500 hover:text-blue-900">Register</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
