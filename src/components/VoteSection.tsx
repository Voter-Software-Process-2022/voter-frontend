import React from 'react'

const VoteSection: React.FC = () => {
  return (
    <div className='h-[25vh] lg:h-[50vh] flex justify-around text-black  '>
      <div className='w-[100%] bg-white text-center'>
        <p className='text-[1rem] mt-2 md:text-[1.5rem] lg:text-[2rem] md:mt-5 font-bold'>
          Vote For Party
        </p>
        <button className=' p-2.5 rounded-md mt-[70px] md:mt-[50px] md:p-1 xl:mt-[16rem] xl:p-[1.5rem] ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'>
          See Details
        </button>
      </div>
      <div className='w-[100%] bg-stone-300 text-center'>
        <p className='text-[1rem] mt-2 md:text-[1.5rem] lg:text-[2rem] md:mt-5 font-bold'>
          Vote For Party
        </p>
        <button className=' p-2.5 rounded-md mt-[70px] md:mt-[50px] md:p-1 xl:mt-[16rem] xl:p-[1.5rem] ease-in-out delay-150 bg-gray-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...'>
          See Details
        </button>
      </div>
    </div>
  )
}

export default VoteSection
