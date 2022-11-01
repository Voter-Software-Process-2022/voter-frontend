import React from 'react'

const VoteSection: React.FC = () => {
  return (
    <div className='h-[25vh] lg:h-[50vh] flex justify-around text-black  '>
      <div className='w-[100%] bg-white text-center'>
        <h1 className='text-[1rem] pt-4 md:text-[1.5rem] lg:text-[2rem] md:mt-5 font-bold'>
          Vote For Party
        </h1>
        <p className='w-[60%] m-auto mt-[3rem]'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <button className=' p-2.5 rounded-md mt-[70px] md:mt-[80px] md:p-1  xl:p-[1.5rem] inline-block px-6 py-2.5 bg-[#19303d] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-ou'>
          See Details
        </button>
      </div>
      <div className='w-[100%] bg-stone-300 text-center'>
        <h1 className='text-[1rem] pt-4 md:text-[1.5rem] lg:text-[2rem] md:mt-5 font-bold'>
          Vote For MP
        </h1>
        <p className='w-[60%] m-auto mt-[3rem]'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
        <button className=' p-2.5 rounded-md mt-[70px] md:mt-[80px] md:p-1  xl:p-[1.5rem] inline-block px-6 py-2.5 bg-[#19303d] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-ou'>
          See Details
        </button>
      </div>
    </div>
  )
}

export default VoteSection
