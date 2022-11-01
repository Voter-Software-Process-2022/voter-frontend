import React, { useState } from 'react'
import { Navbar, Sidebar, Video } from '../../components'
import { FaChevronDown } from 'react-icons/fa'
import MiddleLogo from './../../assets/images/center-logo.png'
import VoteSection from '../../components/VoteSection'
import FooterSection from '../../components/FooterSection'

const Home: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)

  return (
    <div className='w-full overflow-x-hidden'>
      <Navbar
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
      <div className='relative'>
        <Video>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '>
            <img src={MiddleLogo} className='w-[100%] h-[120%]' />
          </div>
          <a
            href='#'
            className='bottom-[0.1rem] lg:bottom-8 left-1/2 absolute transform -translate-x-1/2'
          >
            <FaChevronDown className='text-lg lg:text-3xl' />
          </a>
        </Video>
        <Sidebar
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
      </div>
      <VoteSection />
      <FooterSection />
    </div>
  )
}

export default Home
