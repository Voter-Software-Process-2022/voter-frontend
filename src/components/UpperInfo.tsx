import React from 'react'
import { Link } from 'react-router-dom'
const UpperInfo: React.FC = () => {
  return (
    <div>
      <div className='flex justify-around text-black'>
        <div className='w-[100%]  bg-stone-300 text-center xl:pt-[1rem] xxs:py-[2rem] flex flex-col justify-between'>
          <div className='flex w-[100%] flex-col justify-between'>
            <h1 className='text-[1.25rem] pt-4 md:text-[1.5rem] lg:text-[2rem] md:mt-5 font-bold'>
              Vote For Party
            </h1>
            <p className=' m-auto mt-[3rem] lg:flex'>
              Click the button below to see the details of Party voting
            </p>
            <p className='w-[60%] m-auto mt-[3rem] hidden  lg:flex'>
              You can select your preferred candidates from the available party
              members. Each candidate has his own biography and photo that
              appears on the ballot paper. Elections typically have multiple
              seats to fill in the national parliament and state assemblies. In
              addition, some countries have a local government as well as a
              senate and a president. All elected officials must take your
              position seriously and fulfill your duties to the people. Failure
              to do so would undermine the democratic process itself.
            </p>
          </div>
          <Link to='/topics/2'>
            <button className='p-2.5 rounded-md mt-[70px] md:mt-[60px] md:p-2 xl:p-[1.5rem] inline-block px-6 py-2.5 bg-[#19303d] text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-ou'>
              See Details
            </button>
          </Link>
        </div>
        <div className='w-[100%] bg-white text-center xl:pt-[1rem] xxs:py-[2rem] '>
          <div className='flex w-[100%] flex-col justify-between'>
            <h1 className='text-[1.25rem] pt-4 md:text-[1.5rem] lg:text-[2rem] md:mt-5 font-bold'>
              Vote For MPS
            </h1>
            <p className=' m-auto mt-[3rem]  lg:flex'>
              Click the button below to see the details of MPS voting
            </p>
            <p className='w-[60%] m-auto mt-[3rem] hidden  lg:flex'>
              You can select your preferred candidates from the available MPS
              members. Each candidate has his own biography and photo that
              appears on the ballot paper. Elections typically have multiple
              seats to fill in the national parliament and state assemblies. In
              addition, some countries have a local government as well as a
              senate and a president. All elected officials must take your
              position seriously and fulfill your duties to the people. Failure
              to do so would undermine the democratic process itself.
            </p>
            <Link to='/topics/1'>
              <button className=' p-2.5 rounded-md mt-[70px] md:mt-[60px] md:p-2  xl:p-[1.5rem] inline-block px-6 py-2.5 bg-[#19303d] text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-ou'>
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpperInfo
