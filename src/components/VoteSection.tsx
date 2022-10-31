import React from 'react'

const VoteSection: React.FC = () => {
  return (
    <div className='h-[25vh] lg:h-[50vh] flex justify-around text-black '>
      <div className='w-[100%] bg-white items-center'>
        <p className='text-center text-[1rem] mt-2 md:text-[1.5rem] lg:text-[2rem] md:mt-10 font-bold'>
          Vote For MP
        </p>
      </div>
      <div className='w-[100%] bg-stone-300'>
        <p className='text-center text-[1rem] mt-2 md:text-[1.5rem] lg:text-[2rem] md:mt-10 font-bold'>
          Vote For Party
        </p>
      </div>
    </div>
  )
}

export default VoteSection
