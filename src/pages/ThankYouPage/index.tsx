import React from 'react'

const ThankYouPage: React.FC = () => {
  return (
    <div className='bg-white h-[100vh] flex justify-center items-center'>
      <div className='flex flex-col items-center text-center text-black '>
        <h1 className=''>THANK YOU!</h1>
        <i className='text-[#20b760] fa-sharp fa-solid fa-circle-check'></i>
        <h1 className=''>
          Thanks for Voting for the 2022 Thailand MPS Election Events
        </h1>
        <div className='flex flex-row'>
          <i className='fa-solid fa-arrow-left-long mr-[1vh] mt-[0.2rem] text-[1rem]'></i>
          <button>
            <p className='text-[1.2rem]'>Back Home</p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ThankYouPage
