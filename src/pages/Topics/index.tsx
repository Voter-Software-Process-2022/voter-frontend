import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Sidebar } from '../../components'

const Topics = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)

  return (
    <div className='w-full overflow-x-hidden bg-white min-h-screen'>
      <Navbar
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
      <div className='relative h-full'>
        <Sidebar
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
        <div className='flex flex-col md:flex-row justify-center mx-auto py-16 px-8 sm:py-12 sm:px-6 lg:min-w-[56rem] lg:px-8 h-[calc(100vh-88px)]'>
          <div className='flex-1 w-full bg-white text-black text-center xl:pt-[1rem] xxs:py-[2rem] flex flex-col justify-between'>
            <div className='flex w-[100%] flex-col justify-between'>
              <h1 className='text-[1.25rem] pt-4 md:text-[1.5rem] lg:text-6xl md:mt-5 font-bold'>
                Vote For Party
              </h1>
              <p className=' m-auto mt-[3rem] lg:flex'>
                Click the button below to see the details of Party voting
              </p>
              <p className='w-[60%] m-auto mt-[3rem] flex'>
                You can select your preferred candidates from the available
                party members. Each candidate has his own biography and photo
                that appears on the ballot paper. Elections typically have
                multiple seats to fill in the national parliament and state
                assemblies. In addition, some countries have a local government
                as well as a senate and a president. All elected officials must
                take your position seriously and fulfill your duties to the
                people. Failure to do so would undermine the democratic process
                itself.
              </p>
            </div>
            <div className='flex justify-center'>
              <Link to='2'>
                <button className='mx-4 p-2.5 mt-[70px] md:mt-[60px] md:mb-[30px] xl:p-[1.5rem] inline-block px-6 py-2.5 bg-[#19303d] text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-ou'>
                  See Details
                </button>
              </Link>
              <Link to='/ballots/2'>
                <button className='mx-4 p-2.5 mt-[70px] md:mt-[60px] xl:p-[1.5rem] inline-block px-6 py-2.5 bg-[#3f8391] text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-[#194f5a] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-ou'>
                  Results
                </button>
              </Link>
            </div>
          </div>
          <div className='flex-1 w-[100%] bg-white text-black text-center xl:pt-[1rem] xxs:py-[2rem] flex flex-col justify-between border-l-slate-400'>
            <div className='flex w-[100%] flex-col justify-between'>
              <h1 className='text-[1.25rem] pt-4 md:text-[1.5rem] lg:text-6xl md:mt-5 font-bold'>
                Vote For MPS
              </h1>
              <p className='m-auto mt-[3rem] lg:flex'>
                Click the button below to see the details of MPS voting
              </p>
              <p className='w-[60%] m-auto mt-[3rem] flex'>
                You can select your preferred candidates from the available MPS
                members. Each candidate has his own biography and photo that
                appears on the ballot paper. Elections typically have multiple
                seats to fill in the national parliament and state assemblies.
                In addition, some countries have a local government as well as a
                senate and a president. All elected officials must take your
                position seriously and fulfill your duties to the people.
                Failure to do so would undermine the democratic process itself.
              </p>
            </div>
            <div className='flex justify-center'>
              <Link to='1'>
                <button className='mx-4 p-2.5 mt-[70px] md:mt-[60px] md:mb-[30px] xl:p-[1.5rem] inline-block px-6 py-2.5 bg-[#19303d] text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-ou'>
                  See Details
                </button>
              </Link>
              <Link to='/ballots/1'>
                <button className='mx-4 p-2.5 mt-[70px] md:mt-[60px] xl:p-[1.5rem] inline-block px-6 py-2.5 bg-[#3f8391] text-white font-medium text-xs leading-tight uppercase rounded-lg shadow-md hover:bg-[#194f5a] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-ou'>
                  Results
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topics
