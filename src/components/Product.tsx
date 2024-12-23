import React from 'react'
import { RiAlarmLine } from "react-icons/ri";
import { FaRegCommentDots } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";

const Product = () => {
  return (
    // Parent start
    <div className='w-full pt-5 lg:h-[1400px] md:h-[3500px] sm:h-[5500px]'>

       {/* Text Area */}
        <div className=' bg-white w-full font-bold font-montserrat flex items-center flex-col justify-center'>
    
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
        <div className='container pt-16 justify-center items-center grid lg:grid-cols-4 lg:h-[615px] md:h-[1500px]  gap-[10px] md:grid-cols-2 sm:grid-rows-0 md:ml-28 '>

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
          <div className='container pt-16 justify-center grid lg:grid-cols-4 h-[615px] gap-[10px] md:grid-cols-2 sm:grid-rows-0 md:ml-28 '>
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


          {/* Green section start */}
          <div className="w-full pt-5 flex justify-center items-center min-h-[600px] bg-emerald-700 lg:mt-20 md:mt-[700px] sm:mt-[2000px] mt-[2000px]">

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



{/* Couple image section */}
<div className='w-full min-h-[682px]'>




    {/* Image Section */}
    <div className='flex justify-end sm:flex-col-reverse flex-col-reverse md:flex-row'>
      <img
        src="/Couple image.png"
        alt="Product Image"
        className="w-full md:w-auto h-[300px] md:h-[700px] object-cover "
      />
       
        {/* Text Section */}
    <div className="flex flex-col justify-center text-center sm:mt-20 mt-20 md:mr-6 lg:text-left md:text-left ">
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



{/* 3 Images parent section start */}
<div className='min-h-[1044px] pt-28'>
  {/* Text div */}
  <div className='flex justify-center items-center flex-col'>
    <h6 className='font-montserrat tracking-[0.2px] text-sky-500 font-bold'>
    Practice Advice
    </h6>
     
     <h2 className='font-montserrat tracking-[0.2px] text-[40px] font-bold'>
     Featured Posts
     </h2>

     <p className='text-center font-montserrat text-gray-600 md:text-[14px] sm:text-[14px] text-[12px]  mt-1'>
     Problems trying to resolve the conflict between <br />
     the two major realms of Classical physics: Newtonian mechanics 
     </p>

  
  </div>
  {/* text end */}


  



  {/* car image section */}
  <div className='justify-center items-center flex md:flex-row sm:flex-col flex-col md:h-[600px] sm:h-[1900px] gap-10'>

    {/* 1 Image section */}
    <div className='w-[328px] h-[606px]'>
    <div className='relative w-[348px] h-[300px]'>
     <img src="/Car image 1.jpg" alt=""  className=' w-[348px] h-[300px] mt-20'/>
     <h6 className='absolute inset-0 top-4 ml-4 rounded-sm text-white bg-red-600 font-montserrat font-bold w-[58px] h-[24px] flex items-center justify-center'>
      NEW
     </h6>
     </div>
     {/* Image section end */}

      {/* text section */}
     <div className='w-[348px] h-[300px] shadow-md'>

      {/* small section */}
      <div className='p-4'>
      <div className="text-sm text-gray-500 flex gap-4 font-montserrat">
      <span className='text-sky-300'>Google</span>
      <span>Trending</span>
      <span>New</span>
    </div>

      <h4 className='mt-2 text-lg font-montserrat text-[20px] text-slate-900'>
      Loudest à la Madison #1 
      (L'integral)
      </h4>

      <p className='mt-4 text-sm text-gray-400 text-[14px] tracking-[0.2px] w-[250px] font-montserrat'>
      We focus on ergonomics and meeting 
        you where you work. It's only a 
         keystroke away.
      </p>


       {/* date start */}
      <div className='w-[298px] h-[46px] pt-[20px] flex flex-row justify-between items-center gap-2'>
        <div className='flex flex-row items-center gap-2'>
      <RiAlarmLine  className='text-sky-500 '/>
      <span className='font-montserrat text-[12px] text-gray-400'>
      22 April 2021
      </span>
      </div>


      <div className='flex items-center gap-1'>

      <FaRegCommentDots />

    <span className='font-montserrat text-gray-400'>
          10 comments
        </span>
      </div>
      


      </div>
      {/* date end */}

      <div className='w-[150px] h-[24px] pt-8 flex flex-row items-center gap-1'>

        <h6 className='font-montserrat tracking-[0.2px] text-gray-500 font-bold'>
          Learn More 
        </h6>

        <SlArrowRight className='text-sky-500'/>
        
      </div>

     </div>
     {/* small section end */}



     </div>
     {/* text end */}

     </div>
     {/* 1 image end */}




       
     {/* 2nd Image section */}
     <div className='w-[328px] h-[606px]'>
    <div className='relative w-[348px] h-[300px]'>
     <img src="/Car image 2.jpg" alt=""  className=' w-[348px] h-[300px] mt-20'/>
     <h6 className='absolute inset-0 top-4 ml-4 rounded-sm text-white bg-red-600 font-montserrat font-bold w-[58px] h-[24px] flex items-center justify-center'>
      NEW
     </h6>
     </div>
     {/* 2nd Image section end */}


     {/* 2nd text section */}
     <div className='w-[348px] h-[300px] shadow-md'>

      {/* small section */}
      <div className='p-4'>
      <div className="text-sm text-gray-500 flex gap-4 font-montserrat">
      <span className='text-sky-300'>Google</span>
      <span>Trending</span>
      <span>New</span>
    </div>

      <h4 className='mt-2 text-lg font-montserrat text-[20px] text-slate-900'>
      Loudest à la Madison #1 
      (L'integral)
      </h4>

      <p className='mt-4 text-sm text-gray-400 text-[14px] tracking-[0.2px] w-[250px] font-montserrat'>
      We focus on ergonomics and meeting 
        you where you work. It's only a 
         keystroke away.
      </p>


       {/* date start */}
      <div className='w-[298px] h-[46px] pt-[20px] flex flex-row justify-between items-center gap-2'>
        <div className='flex flex-row items-center gap-2'>
      <RiAlarmLine  className='text-sky-500 '/>
      <span className='font-montserrat text-[12px] text-gray-400'>
      22 April 2021
      </span>
      </div>


      <div className='flex items-center gap-1'>

      <FaRegCommentDots />

    <span className='font-montserrat text-gray-400'>
          10 comments
        </span>
      </div>
      


      </div>
      {/* date end */}

      <div className='w-[150px] h-[24px] pt-8 flex flex-row items-center gap-1'>

        <h6 className='font-montserrat tracking-[0.2px] text-gray-500 font-bold'>
          Learn More 
        </h6>

        <SlArrowRight className='text-sky-500'/>
        
      </div>

     </div>
     {/* small section end */}



     </div>
     {/* 2nd text end */}

     </div>
     {/* 2nd image end */}




     {/* 3rd Image section */}
     <div className='w-[328px] h-[606px]'>
    <div className='relative w-[348px] h-[300px]'>
     <img src="/Car image 3.jpg" alt=""  className=' w-[348px] h-[300px] mt-20'/>
     <h6 className='absolute inset-0 top-4 ml-4 rounded-sm text-white bg-red-600 font-montserrat font-bold w-[58px] h-[24px] flex items-center justify-center'>
      NEW
     </h6>
     </div>
     {/* 3rd Image section end */}


     {/* 3rd text section */}
     <div className='w-[348px] h-[300px] shadow-md'>

      {/* small section */}
      <div className='p-4'>
      <div className="text-sm text-gray-500 flex gap-4 font-montserrat">
      <span className='text-sky-300'>Google</span>
      <span>Trending</span>
      <span>New</span>
    </div>

      <h4 className='mt-2 text-lg font-montserrat text-[20px] text-slate-900'>
      Loudest à la Madison #1 
      (L'integral)
      </h4>

      <p className='mt-4 text-sm text-gray-400 text-[14px] tracking-[0.2px] w-[250px] font-montserrat'>
      We focus on ergonomics and meeting 
        you where you work. It's only a 
         keystroke away.
      </p>


       {/* date start */}
      <div className='w-[298px] h-[46px] pt-[20px] flex flex-row justify-between items-center gap-2'>
        <div className='flex flex-row items-center gap-2'>
      <RiAlarmLine  className='text-sky-500 '/>
      <span className='font-montserrat text-[12px] text-gray-400'>
      22 April 2021
      </span>
      </div>


      <div className='flex items-center gap-1'>

      <FaRegCommentDots />

    <span className='font-montserrat text-gray-400'>
          10 comments
        </span>
      </div>
      


      </div>
      {/* date end */}

      <div className='w-[150px] h-[24px] pt-8 flex flex-row items-center gap-1'>

        <h6 className='font-montserrat tracking-[0.2px] text-gray-500 font-bold'>
          Learn More 
        </h6>

        <SlArrowRight className='text-sky-500'/>
        
      </div>

     </div>
     {/* small section end */}



     </div>
     {/* 3rd text end */}

     </div>
     {/* 3rd image end */}
    



     </div>
     {/* car image end */}



     



   </div>
{/* 3 images section end */}


   
  



               
</div>
    // Parent end

    
     

  )
}

export default Product
