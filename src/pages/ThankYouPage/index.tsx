import React from 'react'
import { Link } from 'react-router-dom'

const ThankYouPage: React.FC = () => {
  return (
    <div className='bg-white h-[100vh] flex justify-center items-center '>
      <div className='flex flex-col items-center text-center text-black  '>
        <h1 className='text-[3rem] mb-[1rem] md:text-[6rem] md:mb-[3rem] font-bold'>
          THANK YOU!
        </h1>
        <i className='text-[5rem] md:text-[6rem] mb-[3rem] lg:text-[8rem] lg:mb-[4rem] text-[#20b760] fa-sharp fa-solid fa-circle-check'></i>
        <p className='mb-[1rem] md:text-[1.5rem] '>
          Thanks for Voting for the 2022 Thailand MPS Election Events
        </p>
        <div className='flex flex-row md:mt-[2rem] lg:mt-[2rem]'>
          <i className='fa-solid md:text-[2rem] fa-arrow-left-long mr-[1vh] mt-[0.2rem] text-[1rem]'></i>
          <Link to='/'>
            <button>
              <p className='text-[1.2rem]  md:text-[2rem]'>Back Home</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ThankYouPage
