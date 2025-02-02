import React from 'react';

const Editor = () => {
  return (
    <div className='min-h-screen bg-gray-50 w-full py-10 px-4'>
      <div className='flex flex-col justify-center items-center text-center'>
        <h3 className='font-montserrat font-bold text-2xl sm:text-xl md:text-2xl lg:text-3xl tracking-wide'>
          EDITOR'S PICK
        </h3>
        <p className='font-montserrat text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 pt-4'>
          Problems trying to resolve the conflict between
        </p>
      </div>

      <div className='container mx-auto grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-center items-center mt-10'>
        <div className='relative flex justify-center'>
          <img src='Image 2.jpg' alt='Men' className='w-full max-w-[300px] md:max-w-[400px] h-auto' />
          <h5 className='font-montserrat font-bold bg-white absolute bottom-4 w-[170px] h-[48px] flex items-center justify-center'>
            MEN
          </h5>
        </div>

        <div className='relative flex justify-center'>
          <img src='/Image 3.jpg' alt='Women' className='w-full max-w-[300px] md:max-w-[350px] h-auto' />
          <h5 className='font-montserrat font-bold bg-white absolute bottom-4 w-[136px] h-[48px] flex items-center justify-center'>
            WOMEN
          </h5>
        </div>

        <div className='flex lg:flex-col md:flex-row flex-col gap-4 items-center'>
          <div className='relative flex justify-center'>
            <img src='/Image 4.jpg' alt='Accessories' className='w-full max-w-[300px] md:max-w-[239px] h-auto' />
            <h5 className='font-montserrat font-bold bg-white absolute bottom-4 w-[170px] h-[48px] flex items-center justify-center'>
              ACCESSORIES
            </h5>
          </div>

          <div className='relative flex justify-center'>
            <img src='/Image 5.jpg' alt='Kids' className='w-full max-w-[300px] md:max-w-[239px] h-auto' />
            <h5 className='font-montserrat font-bold bg-white absolute bottom-4 w-[120px] h-[48px] flex items-center justify-center'>
              KIDS
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
