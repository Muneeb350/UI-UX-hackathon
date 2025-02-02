import Bandage from '@/components/Bandage';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Reserved from '@/components/Reserved';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const About: FC = () => {
  return (
    <div className="px-4 md:px-16 lg:px-32 py-8 w-full max-w-screen-xl mx-auto">
      {/* Navbar Section */}
      <Header />
      <Navbar />
      <header className="py-4">
        <nav className="flex flex-wrap items-center justify-between">
          <h1 className="text-2xl font-bold text-blue-500">E-Commerce</h1>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-8">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-sm font-semibold text-gray-600 uppercase">About Company</h2>
          <h1 className="text-4xl font-bold text-gray-900 my-4">ABOUT US</h1>
          <p className="text-gray-700 mb-6">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition">
            Get Quote Now
          </button>
        </div>
        <div className="lg:w-1/2">
          <div className="relative w-full h-64 md:h-96">
            <Image
              src="/About Image.png" // Update this path with your image URL
              alt="About Us Image"
              height={440}
              objectFit="cover"
              width={800}
              className="rounded-md w-full h-full"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-6 mt-16">
        <div className="md:w-1/2">
          <p className='text-red-600'>Problems trying</p>
          <h3 className='font-montserrat font-bold w-full max-w-xs'>
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>
        <div className="md:w-1/2">
          <p className='text-sm text-gray-500 font-montserrat font-bold w-full max-w-md'>
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="mt-12 grid md:mb-10 mb-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-lg font-bold text-gray-900">15K</h3>
          <p className="text-gray-600">Happy Customers</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">150K</h3>
          <p className="text-gray-600">Monthly Visitors</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">15</h3>
          <p className="text-gray-600">Countries Worldwide</p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">100+</h3>
          <p className="text-gray-600">Top Partners</p>
        </div>
      </div>

      <Bandage />
      <Footer />
      <Reserved />
    </div>
  );
};

export default About;
