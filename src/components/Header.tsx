import React from 'react'
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { IoLogoInstagram } from "react-icons/io5";
import { AiFillYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Header = () => {
  return (
    
    <div className='bg-blue-950 w-full h-[58px] flex items-center'>
      <div className='flex items-center space-x-1 ml-8'>
        <BsTelephone className='text-white' />
        <h6 className='text-white font-montserrat font-bold text-[13px] leading-[24px] tracking-[0.2px]'>
          (225) 555-0118
        </h6>
       <div className='flex items-center space-x-2 ml-4'>
         <TfiEmail className='text-white ml-10' />
         <h6 className='text-white font-montserrat font-bold text-[13px] leading-[24px] tracking-[0.2px]'>
          michelle.rivera@example.com
         </h6>
         <div className='flex items-center space-x-2 ml-4'>
          <h6 className='text-white ml-60 font-montserrat font-bold text-[13px] leading-[24px] tracking-[0.2px]'>
            Follow Us and get a chance to win 80% off
          </h6>
          <div className='flex items-center space-x-2 ml-4'>
            <h6 className='text-white ml-64 font-montserrat font-bold text-[13px] leading-[24px] tracking-[0.2px]'>
              Follow Us 
            </h6>
            <div className='text-white text-[13px] font-bold'>
              :
            </div>
            <div className='flex items-center space-x-2 ml-4'>
            <IoLogoInstagram className='text-white ml-2 font-montserrat font-bold text-[18px] leading-[24px] tracking-[0.2px]'/>
            </div>

         <div className='flex items-center space-x-2 ml-4'>
         <AiFillYoutube className='text-white ml-2 font-montserrat font-bold text-[18px] leading-[24px] tracking-[0.2px]' />
         </div>

         <div className='flex items-center space-x-2 ml-4'>
         <FaFacebook className='text-white ml-2 font-montserrat font-bold text-[18px] leading-[24px] tracking-[0.2px]' />
         </div>

         <div className='flex items-center space-x-2 ml-4'>
         <FaTwitter className='text-white ml-1 font-montserrat font-bold text-[18px] leading-[24px] tracking-[0.2px]'/>
         </div>

          </div>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Header
