import React from 'react'

const Hero = () => {
  return (
    <section className="relative h-screen w-full bg-cover bg-center"
    style={{ backgroundImage: "url('/Image 1.jpg')" }}
    >
      <div className='text-left md:text-left px-6 md:px-12 lg:px-30 z-10 ml-36'>
      {/* Text Content */}
      <div className="flex flex-col justify-center items-start pl-8 sm:pl-16 w-full lg:w-1/2">
        <h5 className="mt-48 text-sm uppercase tracking-widest text-white font-bold">
         SUMMER 2020
        </h5>
          
      
        <h1 className="mt-10 text-4xl md:text-6xl font-bold text-white">
          New Collection
        </h1>
        <p className="mt-10 text-white text-base md:text-lg">
          We know how large objects will act,<br /> but things on a small scale.
        </p>
        <button className="font-bold mt-6 px-10 py-3 bg-green-500 hover:bg-green-600 text-white rounded-sm text-sm md:text-xl transition-all">
          Shop Now
        </button>
      </div>
      </div>

      
      </section>
    )
    
    
}

export default Hero
