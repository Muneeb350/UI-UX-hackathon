import React from 'react'
import { IoChevronDownSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { CgShoppingCart } from "react-icons/cg";
import { IoIosHeartEmpty } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-1 bg-slate-50">
    <div className='bg-slate-50 w-full h-[70px] top-[70px] flex justify-start items-center'>
        <div className='w-[187px] h-[58px] left-[38px] ml-2 flex items-center'>
        <h3 className='font-montserrat ml-6 font-bold text-[24px] leading-[32px] tracking-[0.1px] w-[108px] h-[32px]  '>
        Bandage
    </h3>

    <div className='font-montserrat w-[361px] h-[25px] top-[16.5px] gap-[15px] flex items-center ml-32 '>
        <ul className='flex gap-[15px] text-gray-500 text-center font-bold text-[15px]'>
        <li className='w-[43px] h-[24px] hover:text-blue-500 transition duration-200'>
          <a href="#">Home</a></li>
        <li className='flex items-center space-x-1 text-black font-medium hover:text-blue-500 transition duration-200'>
          <a href="#">Shop </a>
        <IoChevronDownSharp className='ml-2'/> </li>
        <li className='hover:text-blue-500 transition duration-200'>
          <a href="#">About</a>
          </li>
        <li className='hover:text-blue-500 transition duration-200'>
          <a href="#"> Blog </a>

        </li>
        <li className='hover:text-blue-500 transition duration-200'>
          <a href="#">Contact</a>
          </li>
        <li className='hover:text-blue-500 transition duration-200'>
          <a href="#">Pages</a>

        </li>
        </ul>

        <div className="text-right flex items-center space-x-6 ml-96">
          <ul className='font-montserrat flex justify-center items-center ml-12 font-bold text-sky-500'>
            <li className='w-3 h-2 flex justify-center items-center '>
            <FaRegUser />
            </li>
            <li className='ml-1 hover:text-blue-900 transition duration-200'>
              <a href="#">Login</a>
             
            </li>
            <li className='ml-2'>
              /
            </li>
            <li className='ml-2 hover:text-blue-900 transition duration-200'>
              <a href="#">Register</a>
            </li>

          </ul>

          <div className='flex justify-between text-sky-500 w-[35px] h-[16px] hover:text-blue-900 transition duration-200'>
            <a href="#">
            <BsSearch className='size-[18px] ml-4'/>
            </a>
            
          </div>
          <div className="flex items-center space-x-1">
  {/* Icon Section */}
  <a
    href="#"
    className="text-sky-500 hover:text-blue-900 transition duration-200"
  >
    <CgShoppingCart className="text-[20px] ml-2" />
  </a>

  {/* Text Section */}
  <a
    href="#"
    className="text-sky-500 text-[12px] hover:text-blue-900 transition duration-200 "
  >
    1
  </a>
</div>

          
    
  </div>

  <div className='text-sky-500 ml-3 w-[6px] h-[20px]'>
    <a href="#"
    className='hover:text-blue-900 transition duration-200'>
          <IoIosHeartEmpty className='text-[22px]'/>
          </a>
          </div>
          <div className=' text-[12px] ml-1'>
          <a href=""
          className='text-sky-500 flex justify-between hover:text-blue-900 transition duration-200'>
          1
          </a>
        </div>
    </div>
        </div>

    
    </div>
    </nav>
  )
}

export default Navbar
