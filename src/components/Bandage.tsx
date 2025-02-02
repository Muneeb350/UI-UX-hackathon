import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Bandage = () => {
  return (
    <div>
      {/* Parent section main start */}
      <div className='w-full bg-gray-50 flex justify-center items-center py-6'>
        {/* Shadow main start */}
        <div className='w-full max-w-[1050px] bg-gray-50 shadow-md flex flex-col md:flex-row md:justify-between items-center md:items-center gap-6 p-4'>
          {/* Brand Name */}
          <h3 className='font-montserrat font-bold text-[24px]'>
            Bandage
          </h3>
          {/* Social Icons */}
          <div className='flex justify-center items-center gap-5'>
            <FaFacebook className='w-[23px] h-[23px] text-sky-600' />
            <FaInstagram className='w-[22px] h-[22px] text-sky-600' />
            <FaTwitter className='w-[22px] h-[18px] text-sky-600' />
          </div>
        </div>
        {/* Shadow main end */}
      </div>
      {/* Parent section main end */}
    </div>
  )
}

export default Bandage