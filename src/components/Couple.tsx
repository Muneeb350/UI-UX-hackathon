import React from 'react'

const Couple = () => {
  return (
    <div>
      {/* Couple image section */}
<div className='w-full min-h-[682px]'>




{/* Image Section */}
<div className='flex justify-end sm:flex-col-reverse flex-col-reverse md:flex-col-reverse lg:flex-row'>
  <img
    src="/Couple image.png"
    alt="Product Image"
    className="w-full md:w-auto h-[300px] md:h-[700px] object-cover "
  />
   
    {/* Text Section */}
<div className="flex flex-col justify-center text-center sm:mt-20 mt-20 md:mr-6 lg:text-left ">
  <h4 className="font-montserrat text-gray-500 uppercase font-bold tracking-[0.5px] text-lg md:text-sm mb-4">
    SUMMER 2020
  </h4>

  <h1 className="font-montserrat mt-6 text-4xl md:text-4xl leading-tight md:leading-[50px] tracking-[0.2px] font-bold text-black">
    Part of the Neural Universe
  </h1>

   <p className='font-montserrat mt-6 leading-tight md:leading-[20px] tracking-wide text-gray-600'>
    We know how large objects will act, <br /> but things on a small scale.
   </p>
   
   <div className='flex md:flex-row justify-center md:mr-6 items-center md:gap-10 flex-col'>

     <button className='bg-green-500 rounded-md hover:bg-green-400 transition duration-300 w-[156px] h-[52px] text-white font-montserrat mt-8 font-bold text-[16px]'>
      BUY NOW
    </button>

    <button className='text-green-500 hover:bg-green-500 hover:text-white transition duration-300 font-montserrat w-[173px] border h-[52px] rounded-[5px] border-green-500 mt-8 font-bold tracking-[0.1px] text-[16px] leading-[32px]'>
      READ MORE
    </button>

   </div>




</div>
{/* Text section end */}

  
</div>

</div>
{/* Couple image End */}

    </div>
  )
}

export default Couple
