import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* Footer main div start */}
<div className='w-full lg:h-[272px] h-[1000px] md:h-[800px] flex justify-center items-center'>


{/* Text div start */}
  <div className='w-[900px] lg:h-[170px] h-[800px] md:h-[800px] lg:mr-32 lg:grid-cols-5 grid md:grid-cols-2 gap-[20px] justify-start items-center'>

     {/* first col start */}
    <div className='w-[148px] h-[170px] flex-col ml-9'>
      <h5 className='font-bold font-montserrat text-[16px]'>
      Company Info
      </h5>

      <h1 className='mt-6 font-bold font-montserrat text-[14px] text-gray-500'>
      About Us
      </h1>
      
      <h1 className='mt-4 font-bold font-montserrat text-[14px] text-gray-500'>
      Carrier
      </h1>

      <h1 className='mt-4 font-bold font-montserrat text-[14px] text-gray-500'>
      We are hiring
      </h1>

      <h1 className='mt-4 font-bold font-montserrat text-[14px] text-gray-500'>
      Blog
      </h1> 
    </div>
    {/* first col end */}


     {/* 2nd col start */}
    <div className='w-[152px] h-[170px] flex-col ml-9'>
      <h5 className='font-bold font-montserrat text-[16px]'>
        Legal
      </h5>

      <h1 className='mt-6 font-bold font-montserrat text-[14px] text-gray-500'>
      About Us
      </h1>
      
      <h1 className='mt-4 font-bold font-montserrat text-[14px] text-gray-500'>
      Carrier
      </h1>

      <h1 className='mt-4 font-bold font-montserrat text-[14px] text-gray-500'>
      We are hiring
      </h1>

      <h1 className='mt-4 font-bold font-montserrat text-[14px] text-gray-500'>
      Blog
      </h1> 
    </div>
    {/* 2nd col end */}


     {/* 3rd col start */}
    <div className='w-[148px] h-[170px] flex-col ml-9'>
      <h5 className='font-bold font-montserrat text-[16px]'>
      Features
      </h5>

      <h1 className='mt-6 font-bold font-montserrat text-[14px] text-gray-500'>
      Businees Marketing
      </h1>
      
      <h1 className='mt-4 font-bold font-montserrat text-[14px] text-gray-500'>
      User Analytic
      </h1>

      <h1 className='mt-4 font-bold font-montserrat text-[14px] text-gray-500'>
      Live Chat
      </h1>

      <h1 className='mt-4 font-bold font-montserrat text-[14px] text-gray-500'>
        Unlimited Support
      </h1> 
    </div>
    {/* 3rd col end */}


     {/* 4th col start */}
    <div className='w-[152px] h-[170px] flex-col ml-9'>
      <h5 className='font-bold font-montserrat text-[16px]'>
       Resources
      </h5>

      <h1 className='mt-6 font-bold font-montserrat text-[14px] text-gray-500'>
      IOS & Android
      </h1>
      
      <h1 className='mt-4 font-bold font-montserrat text-[14px] text-gray-500'>
      Watch a Demo
      </h1>

      <h1 className='mt-4 font-bold font-montserrat text-[14px] text-gray-500'>
      Customers
      </h1>

      <h1 className='mt-4 font-bold font-montserrat text-[14px] text-gray-500'>
      API
      </h1> 
    </div>
    {/* 4th col end */}


     


     {/* 5th col start */}
    <div className='w-[280px] h-[170px] flex-col ml-9'>
      <h5 className='font-bold font-montserrat text-[16px]'>
      Get In Touch
      </h5>


         {/* Label and subscribe start */}
      <div className='flex flex-row'>
  <input
    type="email"
    id="email"
    className="px-2 py-4 mt-6 border border-gray-200 bg-gray-50 font-montserrat font-bold text-[14px] focus:outline-none focus:ring-2 focus:ring-blue-500"
    placeholder="Your Email"
  />


{/* Button div start */}
  <div className='pt-6'>
<button className='bg-sky-500 text-white w-[100px] h-[58px] font-montserrat text-[14px] rounded-sm '>
    Subscribe
  </button>
  </div>
  {/* button div end */}


  </div>
    {/* Label and subscribe end */}

    <h1 className='mt-1 tracking-[0.2px] font-montserrat text-[12px] text-gray-500'>
    Lore imp sum dolor Amit
    </h1>


    </div>
    {/* 5th col end */}

    


    




  </div>
  {/* text div end */}

      </div>
      {/* Footer main div end */}
    </div>
  )
}

export default Footer
