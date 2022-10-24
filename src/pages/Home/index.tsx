import React, { useState } from 'react'
import { Navbar, Sidebar, Video } from '../../components'
import { FaChevronDown } from 'react-icons/fa'

const Home: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)

  return (
    <div className='w-full'>
      <Navbar
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
      <div className='relative'>
        <Video>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[auto] sm:w-80'>
            <img src='../src/assets/images/center-logo.png' />
          </div>
          <a
            href='#'
            className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
          >
            <FaChevronDown className='text-3xl' />
          </a>
        </Video>
        <Sidebar
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
      </div>
    </div>
  )
}

export default Home
