import React, { useState, useEffect } from 'react'
import {
  CookieInformation,
  Navbar,
  Sidebar,
  Video,
  UpperInfo,
  FooterSection,
  LowerInfo,
  SubscribeSection,
  MiddleInfo,
} from '../../components'
import { FaChevronDown } from 'react-icons/fa'
import MiddleLogo from './../../assets/images/center-logo.png'
import { useAppDispatch } from '../../app/hooks'
import {
  fetchUserInformation,
  fetchUserRightToVote,
} from '../../features/user/userSlice'

const Home: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchUserData = async () => {
      dispatch(fetchUserInformation())
      dispatch(fetchUserRightToVote())
    }
    fetchUserData()
  }, [])

  return (
    <div className='w-full overflow-x-hidden mt-[88px] lg:mt-0'>
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
      <MiddleInfo />
      <LowerInfo />
      <SubscribeSection />
      <FooterSection />
      <CookieInformation />
    </div>
  )
}

export default Home
