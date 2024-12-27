import React from 'react'

const Editor = () => {
  return (
    <div className='min-h-screen bg-gray-50 max-w-full sm:h-[2050px]  md:h-[1100px] lg:h-[770px]'>

      <div className=' flex flex-col justify-center items-center p-20 '>
        <h3 className="font-montserrat font-bold text-[24px] leading-[32px] tracking-[0.1px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-center">
          EDITOR'S PICK
        </h3> 
        
        <p className='font-montserrat text-[14px] leading-[20px] tracking-[0.2px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-gray-600 pt-4 md:pt-2 sm:pt-4'>
        Problems trying to resolve the conflict between
        </p>
        
        
        
      </div>
      <div className="container grid lg:grid-cols-3 gap-[50px] md:grid-cols-2 sm:grid-rows-1 sm:ml-20 ml-5 relative space-x-1">
        <div className='relative bg-cover bg-center sm:justify-center sm:items-center'>
        <img src="Image 2.jpg" alt="description" className='bg-cover bg-center md:w-[400px] w-[300px] h-[500px] left-[1px] lg:ml-32 md:ml-20 sm:ml-32 mt-[4px]' />
        <h5 className='font-montserrat font-bold bg-white absolute bottom-4 w-[170px] h-[48px] ml-10 sm:ml-[150px] lg:ml-[170px] flex items-center justify-center'>
          MEN
        </h5>
        </div>
        <div className='relative bg-cover bg-center sm:justify-center sm:items-center'>
        <img src="/Image 3.jpg" alt="description" className='bg-cover bg-center w-[300px] md:w-[350px] h-[500px] left-[1px] lg:ml-28 md:ml-20 sm:ml-32 mt-[4px]' />
        <h5 className='font-montserrat font-bold bg-white absolute bottom-4 w-[136px] h-[48px] ml-[30px] sm:ml-[150px] lg:ml-[170px] flex items-center justify-center'>
          WOMEN
        </h5>
        </div>
        <div className='relative grid md:grid-cols-2 lg:grid-cols-1 bg-cover bg-center sm:justify-center sm:items-center'>
          <img src="/Image 4.jpg" alt="description" className='bg-cover bg-center sm:mr-60 w-[300px] md:w-[239px] sm:h-[300px] lg:h-[242px] lg:ml-20 md:ml-40 sm:ml-32 mt-[4px] '/>
          <h5 className='font-montserrat font-bold bg-white absolute top-[300px] md:top-40 w-[170px] h-[48px] left-[20px] sm:top-[230px] lg:left-[110px] md:left-[170px] sm:left-[150px] flex items-center justify-center'>
          ACCESSORIES
        </h5>
        <div className='relative bg-cover bg-center sm:justify-center sm:items-center '>
        <img src="/Image 5.jpg" alt="description" className='bg-cover bg-center w-[300px] md:w-[239px] sm:h-[300px] lg:h-[242px] lg:ml-20 md:ml-[400px] sm:ml-32 mt-[16px]'/>
        <h5 className='font-montserrat font-bold bg-white absolute top-[300px] lg:right-40 md:top-44 w-[120px] h-[48px] sm:top-[230px] left-[20px] lg:left-[110px] md:left-[420px] sm:left-[160px] flex items-center justify-center '>
          KIDS
        </h5>
        </div>
        </div>
        
      </div>

      
      
      
    </div>
  )
}

export default Editor
