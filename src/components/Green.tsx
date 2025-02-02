import React from 'react'

const Green = () => {
  return (
    <div>
      {/* Green section start */}
          <div className="w-full pt-5 flex justify-center items-center min-h-[600px] bg-emerald-700 lg:mt-20 md:mt-[200px] sm:mt-[200px] mt-[100px]">

  {/* Text area */}
  <div className="flex flex-col md:flex-row justify-center items-center sm:mt-24 mt-24 px-4 lg:gap-[100px] gap-8">
    
    {/* Text Section */}
    <div className="flex flex-col justify-center text-center lg:text-left md:text-left">
      <h4 className="font-montserrat text-white uppercase tracking-[0.5px] text-lg md:text-xl mb-4">
        SUMMER 2020
      </h4>

      <h1 className="font-montserrat mt-6 text-4xl md:text-6xl leading-tight md:leading-[70px] tracking-tight font-bold text-white">
        Vita Classic <br />
        Product
      </h1>

       <p className='font-montserrat mt-6 leading-tight md:leading-[20px] tracking-wide text-white'>
        We know how large objects will act. <br /> We know
         how are objects will act. We know
       </p>
       <div className='flex md:flex-row justify-center items-center md:gap-10 flex-col'>
        <h3 className='text-white font-montserrat mt-10 font-bold tracking-[0.1px] text-[24px] leading-[32px]'>
          $16.48
        </h3>

        <button className='bg-green-500 rounded-md w-[184px] h-[45px]  text-white font-montserrat mt-8 font-bold text-[16px]'>
          ADD TO CART
        </button>
       </div>




    </div>

    {/* Image Section */}
    <div>
      <img
        src="Green image.png"
        alt="Product Image"
        className="w-full md:w-auto h-[300px] md:h-[600px] object-cover"
      />
    </div>

  </div>
  {/* Text area end */}
</div>
{/* Green section end */}

    </div>
  )
}

export default Green
