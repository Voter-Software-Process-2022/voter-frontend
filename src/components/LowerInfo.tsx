import React from 'react'
import Vote from './../assets/images/vote.jpg'
const LowerInfo = () => {
  return (
    <div
      id='vote-section'
      className='h-[60vh] lg:h-[80vh] flex justify-around text-black   bg-[white] border-t-2 border-[gray]'
    >
      <div className='self-center ml-[7rem]'>
        <div className='flex flex-col '>
          <h1 className='text-[2rem] pt-4 md:text-[2.5rem] lg:text-[4rem] md:mt-5 font-bold'>
            Vote Now
          </h1>
          <p className='w-[60%]  mt-[3rem] text-[1.5rem] lg:text-[2rem] text-[gray] leading-8 hidden md:block'>
            Dummy text goes here
          </p>
          <p className='w-[60%]  mt-[2rem]  lg:flex '>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500sLorem ipsum dolor sit amet
          </p>
        </div>
        <div className='flex flex-row mb-[3rem]'>
          <button className=' p-2.5 px-1.5 mr-[2rem] rounded-md mt-[70px] md:mt-[60px] md:p-2  lg:px[2.5rem]  lg:px-[2rem] lg:py-[15px]    xl:mr-[2rem] xl:px-[3rem] xl:py-[20px]  inline-block px-6 py-2.5 bg-[#19303d] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-ou'>
            Vote Now
          </button>
          <button className=' p-2.5 px-1.5 rounded-md mt-[70px] md:mt-[60px] md:p-2   lg:px[2.5rem]  lg:px-[2rem] lg:py-[15px]    xl:mr-[2rem] xl:px-[3rem] xl:py-[20px]  inline-block px-6 py-2.5 bg-[gray] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[gray] hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-ou'>
            See Details
          </button>
        </div>
      </div>

      <img
        src={Vote}
        alt='vote-image'
        className='self-center   hidden  lg:block lg:w-[60%] lg:h-[60%]  xl:w-[90%] xl:h-[90%]'
      />
    </div>
  )
}

export default LowerInfo
