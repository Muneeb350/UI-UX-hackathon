import React from 'react'
import { RiAlarmLine } from "react-icons/ri";
import { FaRegCommentDots } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Product = () => {
  return (
    <div className='w-full pt-5'>
      {/* Text Area */}
      <div className='bg-white w-full font-bold font-montserrat flex items-center flex-col justify-center'>
        <h4 className='font-montserrat text-xl leading-6 tracking-[0.2px] text-center w-full sm:w-[191px] text-gray-600'>
          Featured Products
        </h4>
        <h3 className='font-montserrat text-2xl leading-8 tracking-[0.1px] text-center sm:text-[18px] md:text-[20px] lg:text-[25px]'>
          BESTSELLER PRODUCTS
        </h3>
        <p className='font-montserrat font-normal leading-[40px] tracking-[0.2px] text-center text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-gray-600'>
          Problems trying to resolve the conflict between
        </p>
      </div>
      {/* Text area end */}

      {/* Image Parent 1st row */}
      <div className='container pt-16 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>

        {/* Image Child Div */}
        {["1", "2", "3", "4"].map((imgNum) => (
          <div key={imgNum} className='w-full max-w-xs mx-auto'>
            <img src={`/Product%20image%20${imgNum}.jpeg`} alt="description" className='w-full h-[400px] object-cover'/>
            <div className='flex justify-center items-center flex-col mt-2'>
              <h5 className='font-montserrat leading-[60px] font-bold'>
                Graphic Design
              </h5>
              <h3 className='font-montserrat tracking-[0.2px] text-gray-600'>
                English Department
              </h3>
            </div>
            <div className='flex justify-center gap-2 font-montserrat font-bold leading-[60px] text-[16px] mt-2'>
              <h5 className='text-gray-400'>$16.48</h5>
              <h5 className='text-green-700'>$6.48</h5>
            </div>
            <div className='flex justify-center gap-1 mt-2'>
              <div className='w-4 h-4 bg-blue-400 rounded-full'></div>
              <div className='w-4 h-4 bg-green-700 rounded-full'></div>
              <div className='w-4 h-4 bg-orange-500 rounded-full'></div>
              <div className='w-4 h-4 bg-black rounded-full'></div>
            </div>
          </div>
        ))}

      </div>
      {/* Image parent end of 1st row */}

      {/* Parent Of 2nd row image */}
      <div className='container pt-16 mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {["5", "6", "7", "8"].map((imgNum) => (
          <div key={imgNum} className='w-full max-w-xs mx-auto'>
            <img src={`/Product ${imgNum}.jpeg`} alt="description" className='w-full h-[400px] object-cover'/>
            <div className='flex justify-center items-center flex-col mt-2'>
              <h5 className='font-montserrat leading-[60px] font-bold'>
                Graphic Design
              </h5>
              <h3 className='font-montserrat tracking-[0.2px] text-gray-600'>
                English Department
              </h3>
            </div>
            <div className='flex justify-center gap-2 font-montserrat font-bold leading-[60px] text-[16px] mt-2'>
              <h5 className='text-gray-400'>$16.48</h5>
              <h5 className='text-green-700'>$6.48</h5>
            </div>
            <div className='flex justify-center gap-1 mt-2'>
              <div className='w-4 h-4 bg-blue-400 rounded-full'></div>
              <div className='w-4 h-4 bg-green-700 rounded-full'></div>
              <div className='w-4 h-4 bg-orange-500 rounded-full'></div>
              <div className='w-4 h-4 bg-black rounded-full'></div>
            </div>
          </div>
        ))}
      </div>
      {/* Parent End of 2nd row image */}
    </div>
  )
}

export default Product;
