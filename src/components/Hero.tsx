import React from "react";

const Hero = () => {
  return (
    <section
      className="relative h-[716px] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/Image 1.jpg')" }}
    >
      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-12 lg:px-32 z-10">
        {/* Small Tagline */}
        <h5 className="text-sm uppercase tracking-widest text-white font-bold">
          SUMMER 2020
        </h5>

        {/* Main Heading */}
        <h1 className="mt-4 text-4xl md:text-6xl font-bold text-white leading-tight">
          New Collection
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-white text-base md:text-lg leading-relaxed">
          We know how large objects will act,
          <br />
          but things on a small scale.
        </p>

        {/* Button */}
        <button className="font-bold mt-6 px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-sm text-sm md:text-lg transition-all">
          Shop Now
        </button>
      </div>
      
    </section>
  );
};

export default Hero;

