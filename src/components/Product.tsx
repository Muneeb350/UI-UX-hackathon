import React from 'react'

const Product = () => {
  return (
    // Parent start
    <div className='w-full pt-5 lg:h-[1400px] md:h-[3000px] sm:h-[5500px]'>

       {/* Text Area */}
        <div className=' bg-white w-full font-bold font-montserrat flex items-center flex-col'>
    
        <h4 className='font-montserrat text-xl leading-6 tracking-[0.2px] text-center w-[191px] h-[40px] text-gray-600'>
          Featured Products
          </h4>
        
        <h3 className='font-montserrat text-2xl leading-8 tracking-[0.1px] text-center sm:text-[18px] md:text-[20px] lg:text-[25px]'>
          BESTSELLER PRODUCTS
          </h3>

          <p className='font-montserrat  font-normal leading-[40px] tracking-[0.2px] text-center text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-gray-600'>
            Problems trying to resolve the conflict between
          </p>
          
        </div>
        {/* Text area end */}

          {/* Image Parent 1st row */}
        <div className='container pt-16 justify-center grid lg:grid-cols-4 lg:h-[615px] md:h-[1500px]  gap-[30px] md:grid-cols-2 sm:grid-rows-0 lg:ml-32 md:ml-28 '>

          {/* Image Child Div */}
            <div className='w-[250px] h-[615px] gap-[30px]'>
              <img src="/Product image 1.jpeg" alt="description" className='w-[290px] h-[400px]'/>
              <div className='flex justify-center items-center flex-col leading-[10px]'>
              <h5 className='font-montserrat  leading-[60px] font-bold'>
                Graphic Design
              </h5>
               <h3 className='font-montserrat tracking-[0.2px] text-gray-600'>
                English Department
              </h3>
              </div>


             
              <div className='flex flex-row justify-center tracking-[0.1px] gap-2 font-montserrat font-bold leading-[60px] text-[16px]'>
              <h5 className='text-gray-400'>
                $16.48
              </h5>
              <h5 className='text-green-700'>
                $6.48
              </h5>
              </div>


             {/* Color Div */}
              <div className='flex flex-row justify-center gap-1 size'>
              <div className='w-4 h-4 bg-blue-400 rounded-full flex justify-center'>
             </div>

                <div className='w-4 h-4 bg-green-700 rounded-full'>
                 </div>

                 <div className='w-4 h-4 bg-orange-500 rounded-full'>
                 </div>

                 <div className='w-4 h-4 bg-black rounded-full'>
                </div>

                  </div>

                    </div>

            <div className='w-[250px] h-[615px] gap-[30px]'>
                <img src="/Products image 2.jpeg" alt="" className='w-[290px] h-[400px]'/>
                <div className='flex justify-center items-center flex-col leading-[10px]'>
              <h5 className='font-montserrat  leading-[60px] font-bold'>
                Graphic Design
              </h5>
               <h3 className='font-montserrat tracking-[0.2px] text-gray-600'>
                English Department
              </h3>
              </div>



              <div className='flex flex-row justify-center tracking-[0.1px] gap-2 font-montserrat font-bold leading-[60px] text-[16px]'>
              <h5 className='text-gray-400'>
                $16.48
              </h5>
              <h5 className='text-green-700'>
                $6.48
              </h5>
              </div>



              <div className='flex flex-row justify-center gap-1 size'>
              <div className='w-4 h-4 bg-blue-400 rounded-full flex justify-center'>
             </div>



              <div className='w-4 h-4 bg-green-700 rounded-full'>
                 </div>

                 <div className='w-4 h-4 bg-orange-500 rounded-full'>

                 </div>

                 <div className='w-4 h-4 bg-black rounded-full'>

                 </div>



                </div>
                 </div>

                 <div className='w-[250px] h-[615px] gap-[30px]'>
                  <img src="/Product image 3.jpeg" alt="" className='w-[290px] h-[400px] '/>
                  <div className='flex justify-center items-center flex-col leading-[10px]'>
              <h5 className='font-montserrat  leading-[60px] font-bold'>
                Graphic Design
              </h5>
               <h3 className='font-montserrat tracking-[0.2px] text-gray-600'>
                English Department
              </h3>
              </div>



              <div className='flex flex-row justify-center tracking-[0.1px] gap-2 font-montserrat font-bold leading-[60px] text-[16px]'>
              <h5 className='text-gray-400'>
                $16.48
              </h5>
              <h5 className='text-green-700'>
                $6.48
              </h5>
              </div>



              <div className='flex flex-row justify-center gap-1 size'>
              <div className='w-4 h-4 bg-blue-400 rounded-full flex justify-center'>
             </div>



              <div className='w-4 h-4 bg-green-700 rounded-full'>
                 </div>

                 <div className='w-4 h-4 bg-orange-500 rounded-full'>

                 </div>

                 <div className='w-4 h-4 bg-black rounded-full'>

                 </div>



                </div>

                 </div>

                 <div className='w-[250px] h-[615px] gap-[30px]'>
                  <img src="/Product image 4.jpeg" alt="" className='w-[290px] h-[400px]'/>
                  <div className='flex justify-center items-center flex-col leading-[10px]'>
              <h5 className='font-montserrat  leading-[60px] font-bold'>
                Graphic Design
              </h5>
               <h3 className='font-montserrat tracking-[0.2px] text-gray-600'>
                English Department
              </h3>
              </div>



              <div className='flex flex-row justify-center tracking-[0.1px] gap-2 font-montserrat font-bold leading-[60px] text-[16px]'>
              <h5 className='text-gray-400'>
                $16.48
              </h5>
              <h5 className='text-green-700'>
                $6.48
              </h5>
              </div>



              <div className='flex flex-row justify-center gap-1 size'>
              <div className='w-4 h-4 bg-blue-400 rounded-full flex justify-center'>
             </div>



              <div className='w-4 h-4 bg-green-700 rounded-full'>
                 </div>

                 <div className='w-4 h-4 bg-orange-500 rounded-full'>

                 </div>

                 <div className='w-4 h-4 bg-black rounded-full'>

                 </div>



                </div>


                 </div>

               </div> 
               {/* Image parent end of 1st row */}


               {/* Parent Of 2nd row image */}
          <div className='container pt-16 justify-center grid lg:grid-cols-4 h-[615px] gap-[30px] md:grid-cols-2 sm:grid-rows-0 lg:ml-32 md:ml-28 '>
            {/* image 5 start */}
               <div className='w-[250px] h-[615px] gap-[30px]'>
                  <img src="/Product 5.jpeg" alt="" className='w-[290px] h-[400px]'/>
                  <div className='flex justify-center items-center flex-col leading-[10px]'>
              <h5 className='font-montserrat  leading-[60px] font-bold'>
                Graphic Design
              </h5>
               <h3 className='font-montserrat tracking-[0.2px] text-gray-600'>
                English Department
              </h3>
              </div>


                {/* Number color start */}
              <div className='flex flex-row justify-center tracking-[0.1px] gap-2 font-montserrat font-bold leading-[60px] text-[16px]'>
              <h5 className='text-gray-400'>
                $16.48
              </h5>
              <h5 className='text-green-700'>
                $6.48
              </h5>
              </div>
              {/* Number color end */}


               {/* round color start */}
              <div className='flex flex-row justify-center gap-1 size'>


              <div className='w-4 h-4 bg-blue-400 rounded-full flex justify-center'>
             </div>
                
                 <div className='w-4 h-4 bg-green-700 rounded-full'>
                 </div>

                 <div className='w-4 h-4 bg-orange-500 rounded-full'>
                 </div>

                 <div className='w-4 h-4 bg-black rounded-full'>
                 </div>

                 </div>
                 {/* round color end */}

                    </div>
                    {/* image 5 end */}


                     {/* image 6 start */}
                    <div className='w-[250px] h-[615px] gap-[30px]'>
                  <img src="/Product 6.jpeg" alt="" className='w-[290px] h-[400px]'/>

                  <div className='flex justify-center items-center flex-col leading-[10px]'>
              <h5 className='font-montserrat  leading-[60px] font-bold'>
                Graphic Design
              </h5>
               <h3 className='font-montserrat tracking-[0.2px] text-gray-600'>
                English Department
              </h3>
              </div>



              <div className='flex flex-row justify-center tracking-[0.1px] gap-2 font-montserrat font-bold leading-[60px] text-[16px]'>
              <h5 className='text-gray-400'>
                $16.48
              </h5>
              <h5 className='text-green-700'>
                $6.48
              </h5>
              </div>


              {/* round color start */}
              <div className='flex flex-row justify-center gap-1 size'>
              <div className='w-4 h-4 bg-blue-400 rounded-full flex justify-center'>
             </div>



              <div className='w-4 h-4 bg-green-700 rounded-full'>
                 </div>

                 <div className='w-4 h-4 bg-orange-500 rounded-full'>

                 </div>

                 <div className='w-4 h-4 bg-black rounded-full'>

                 </div>

                 </div>
                 {/* round color end */}

                    </div>
                    {/* image 6 end */}

                    {/* Image 7 start */}
                    <div className='w-[250px] h-[615px] gap-[30px]'>
                  <img src="/Product 7.jpeg" alt="" className='w-[290px] h-[400px]'/>
                  <div className='flex justify-center items-center flex-col leading-[10px]'>
              <h5 className='font-montserrat  leading-[60px] font-bold'>
                Graphic Design
              </h5>
               <h3 className='font-montserrat tracking-[0.2px] text-gray-600'>
                English Department
              </h3>
              </div>



              <div className='flex flex-row justify-center tracking-[0.1px] gap-2 font-montserrat font-bold leading-[60px] text-[16px]'>
              <h5 className='text-gray-400'>
                $16.48
              </h5>
              <h5 className='text-green-700'>
                $6.48
              </h5>
              </div>


               {/* Round color start */}
              <div className='flex flex-row justify-center gap-1 size'>


              <div className='w-4 h-4 bg-blue-400 rounded-full flex justify-center'>
             </div>



              <div className='w-4 h-4 bg-green-700 rounded-full'>
                 </div>

                 <div className='w-4 h-4 bg-orange-500 rounded-full'>
                    </div>

                 <div className='w-4 h-4 bg-black rounded-full'>
                    </div>

                 </div>
                 {/* Round color end */}

                    </div>
                    {/* Image 7 end */}


                    {/* image 8 start */}
                    <div className='w-[250px] h-[615px] gap-[30px]'>
                  <img src="/Product 8.jpeg" alt="" className='w-[290px] h-[400px]'/>

                  <div className='flex justify-center items-center flex-col leading-[10px]'>
              <h5 className='font-montserrat  leading-[60px] font-bold'>
                Graphic Design
              </h5>
               <h3 className='font-montserrat tracking-[0.2px] text-gray-600'>
                English Department
              </h3>
              </div>



              <div className='flex flex-row justify-center tracking-[0.1px] gap-2 font-montserrat font-bold leading-[60px] text-[16px]'>
              <h5 className='text-gray-400'>
                $16.48
              </h5>
              <h5 className='text-green-700'>
                $6.48
              </h5>
              </div>


                 {/* Round color start */}
              <div className='flex flex-row justify-center gap-1 size'>
              <div className='w-4 h-4 bg-blue-400 rounded-full flex justify-center'>
             </div>



              <div className='w-4 h-4 bg-green-700 rounded-full'>
                 </div>

                 <div className='w-4 h-4 bg-orange-500 rounded-full'>

                 </div>

                 <div className='w-4 h-4 bg-black rounded-full'>

                 </div>

                 </div>
                 {/* Round color end */}

                    </div>
                    {/* image 8 end */}
               
               
               
                    

                    

          </div>
          {/* Parent End of 2nd row image */}



               
        
        
        
      
    </div>
    // Parent end
  )
}

export default Product
