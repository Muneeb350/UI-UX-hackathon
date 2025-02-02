import React from "react";
import { RiAlarmLine } from "react-icons/ri";
import { FaRegCommentDots } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";

const ThreeImage = () => {
  return (
    <div className="py-20">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h6 className="font-montserrat text-sky-500 font-bold">
          Practice Advice
        </h6>
        <h2 className="font-montserrat text-3xl md:text-4xl font-bold">
          Featured Posts
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto mt-2">
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics.
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-8">
        {["Car image 1.jpg", "Car image 2.jpg", "Car image 3.jpg"].map(
          (imgSrc, index) => (
            <div key={index} className="w-full sm:w-[350px]">
              {/* Image Section */}
              <div className="relative">
                <img
                  src={`/${imgSrc}`}
                  alt={`Car ${index + 1}`}
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <h6 className="absolute top-4 left-4 text-white bg-red-600 font-montserrat font-bold px-3 py-1 rounded-sm">
                  NEW
                </h6>
              </div>

              {/* Content Section */}
              <div className="bg-white shadow-md p-6 rounded-lg">
                <div className="flex text-sm text-gray-500 gap-4 font-montserrat">
                  <span className="text-sky-300">Google</span>
                  <span>Trending</span>
                  <span>New</span>
                </div>

                <h4 className="mt-3 text-lg font-bold text-slate-900">
                  Loudest à la Madison #1 (L'integral)
                </h4>

                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                  We focus on ergonomics and meeting you where you work. It's
                  only a keystroke away.
                </p>

                {/* Date & Comments */}
                <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <RiAlarmLine className="text-sky-500" />
                    <span>22 April 2021</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaRegCommentDots />
                    <span>10 comments</span>
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="flex items-center gap-2 text-gray-500 font-bold mt-6 cursor-pointer">
                  <h6>Learn More</h6>
                  <SlArrowRight className="text-sky-500" />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ThreeImage;
