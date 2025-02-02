import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Bandage from '@/components/Bandage';
import Footer from '@/components/Footer';
import Reserved from '@/components/Reserved';

const ContactUs = () => {
  return (
    <div className="flex flex-col px-6 md:px-16 bg-white">
      {/* Home Button */}
      <Header />
      <Navbar />
      <div className="mb-8 ml-10 flex gap-4">
        <h1 className='text-lg text-blue-500 font-semibold'>
        Contact 
        </h1>
        <span className='text-lg text-blue-500 font-semibold'>
        /
        </span>
        <Link href="/" className="text-gray-700 hover:text-gray-900 text-lg font-semibold">
            Home
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col mb-32 md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="md:w-1/2 ml-4 md:ml-10 text-center md:text-left">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
    Get in touch today!
  </h2>
  <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-[90%] md:max-w-[400px] mx-auto md:mx-0 font-montserrat mb-6">
    We know how large objects will act, but things on a small scale.
  </p>
  <div className="space-y-2 sm:space-y-4 text-gray-800">
    <p>
      <span className="font-semibold">Phone: </span>+92 3120800026
    </p>
    <p>
      <span className="font-semibold">Email: </span>Muneebjawed304@gmail.com
    </p>
  </div>

  {/* Social Media Icons */}
  <div className="flex justify-center md:justify-start space-x-4 mt-4 sm:mt-6">
    <Link
      href="https://twitter.com"
      className="text-gray-600 hover:text-gray-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-twitter text-xl sm:text-2xl"></i>
    </Link>
    <Link
      href="https://facebook.com"
      className="text-gray-600 hover:text-gray-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-facebook text-xl sm:text-2xl"></i>
    </Link>
    <Link
      href="https://instagram.com"
      className="text-gray-600 hover:text-gray-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-instagram text-xl sm:text-2xl"></i>
    </Link>
    <Link
      href="https://linkedin.com"
      className="text-gray-600 hover:text-gray-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-linkedin text-xl sm:text-2xl"></i>
    </Link>
  </div>
</div>


        {/* Image Section */}
        <div className="md:w-1/2 mb-10 mt-8 md:mt-0">
          <div className="relative">
            {/* Replace this div with your image */}
            
            <div className="w-full h-64 rounded-lg flex items-center justify-center">
              <img src="/Contact Image.png" alt="Image" className='h-[400px] mt-28 w-[600px]' />
            </div>
          </div>
        </div>
      </div>

      <Bandage />
      <Footer />
      <Reserved />
    </div>
    
  );
};

export default ContactUs;
