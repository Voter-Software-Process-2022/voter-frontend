import React, { useState } from 'react'
import { CookieInformation, Navbar, Sidebar, Video } from '../../components'
import { FaChevronDown } from 'react-icons/fa'
import MiddleLogo from './../../assets/images/center-logo.png'
import UpperInfo from '../../components/UpperInfo'
import FooterSection from '../../components/FooterSection'
import LowerInfo from '../../components/LowerInfo'

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
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[auto] sm:w-80'>
            <img src={MiddleLogo} />
          </div>
          <a
            href='#vote-section'
            className='bottom-8 left-1/2 absolute transform -translate-x-1/2'
          >
            <FaChevronDown className='text-3xl' />
          </a>
        </Video>
        <Sidebar
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
      </div>
      <UpperInfo />
      <LowerInfo />
      <FooterSection />
      <CookieInformation />
    </div>
  )
}

export default Home
