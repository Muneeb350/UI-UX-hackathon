import React from 'react';
import { RiAlarmLine } from "react-icons/ri";
import { FaRegCommentDots } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Bandage from '@/components/Bandage';
import Footer from '@/components/Footer';
import Reserved from '@/components/Reserved';

const threeImage = () => {
  const images = [
    "/Car image 1.jpg",
    "/Car image 2.jpg",
    "/Car image 3.jpg"
  ];

  return (
    <div>
      <Header />
      <Navbar />
      <div className='min-h-screen pt-28 px-4 md:px-8'>
        <div className='text-center'>
          <h6 className='font-montserrat tracking-wide text-sky-500 font-bold'>Practice Advice</h6>
          <h2 className='font-montserrat tracking-wide text-3xl md:text-4xl font-bold'>Featured Posts</h2>
          <p className='text-gray-600 mt-1 text-sm md:text-base'>
            Problems trying to resolve the conflict between <br className='hidden md:block' />
            the two major realms of Classical physics: Newtonian mechanics 
          </p>
        </div>

        <div className='flex flex-wrap justify-center gap-10 py-10'>
          {images.map((img, index) => (
            <div key={index} className='w-full sm:w-[80%] md:w-[45%] lg:w-[30%] space-y-4'>
              <div className='relative'>
                <img src={img} alt={`Car ${index + 1}`} className='w-full h-60 object-cover rounded-lg' />
                <span className='absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded'>NEW</span>
              </div>
              <div className='shadow-lg p-4 rounded-lg'>
                <div className='text-sm text-gray-500 flex gap-4'>
                  <span className='text-sky-300'>Google</span>
                  <span>Trending</span>
                  <span>New</span>
                </div>
                <h4 className='mt-2 text-lg font-bold text-gray-900'>Loudest à la Madison #1 (L'integral)</h4>
                <p className='mt-4 text-sm text-gray-500'>
                  We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
                <div className='flex justify-between items-center mt-4 text-gray-500 text-sm'>
                  <div className='flex items-center gap-2'>
                    <RiAlarmLine className='text-sky-500' />
                    <span>22 April 2021</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FaRegCommentDots />
                    <span>10 comments</span>
                  </div>
                </div>
                <div className='flex items-center gap-2 mt-6 text-gray-500 font-bold cursor-pointer'>
                  <span>Learn More</span>
                  <SlArrowRight className='text-sky-500' />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Bandage />
      <Footer />
      <Reserved />
    </div>
  );
};

export default threeImage;
