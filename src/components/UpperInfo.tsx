import React from 'react'
import { Link } from 'react-router-dom'
const UpperInfo: React.FC = () => {
  return (
    <div>
      <div className='flex justify-around text-black  '>
        <div className='w-[100%] bg-white text-center xl:pt-[1rem] xxs:py-[2rem] '>
          <div className='flex w-[100%] flex-col justify-between'>
            <h1 className='text-[1.25rem] pt-4 md:text-[1.5rem] lg:text-[2rem] md:mt-5 font-bold'>
              Vote For MPS
            </h1>
            <p className=' m-auto mt-[3rem]  lg:flex'>
              Click the button below to see the details of MPS voting
            </p>
            <p className='w-[60%] m-auto mt-[3rem] hidden  lg:flex'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Link to='/info/2'>
              <button className=' p-2.5 rounded-md mt-[70px] md:mt-[60px] md:p-2  xl:p-[1.5rem] inline-block px-6 py-2.5 bg-[#19303d] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-ou'>
                See Details
              </button>
            </Link>
          </div>
        </div>
        <div className='w-[100%]  bg-stone-300 text-center xl:pt-[1rem] xxs:py-[2rem] flex flex-col justify-between'>
          <div className='flex w-[100%] flex-col justify-between'>
            <h1 className='text-[1.25rem] pt-4 md:text-[1.5rem] lg:text-[2rem] md:mt-5 font-bold'>
              Vote For Party
            </h1>
            <p className=' m-auto mt-[3rem] lg:flex'>
              {'Click the button below to see the details of Party voting'}
            </p>
            <p className='w-[60%] m-auto mt-[3rem] hidden  lg:flex'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <Link to='/info/1'>
            <button className=' p-2.5 rounded-md mt-[70px] md:mt-[60px] md:p-2 xl:p-[1.5rem] inline-block px-6 py-2.5 bg-[#19303d] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-ou'>
              See Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpperInfo
