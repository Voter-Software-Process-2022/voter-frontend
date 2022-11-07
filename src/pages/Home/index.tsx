import React, { useState } from 'react'
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
  RuleModal,
} from '../../components'
import { FaChevronDown } from 'react-icons/fa'
import MiddleLogo from './../../assets/images/center-logo.png'

import UpperInfo from '../../components/UpperInfo'
import FooterSection from '../../components/FooterSection'
import LowerInfo from '../../components/LowerInfo'
import SubscribeSection from '../../components/SubscribeSection'
import MiddleInfo from '../../components/MiddleInfo'
import RuleModal from '../../components/RuleModal'

const Home: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
  const [isOpenRuleModal, setIsOpenRuleModal] = React.useState(false)

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
      <MiddleInfo />
      <LowerInfo />
      <SubscribeSection />
      <FooterSection />
      <button
        onClick={() => setIsOpenRuleModal(true)}
        className='hover:bg-gray-700 focus:outline-none p-3 text-center text-white bg-gray-600 rounded'
      >
        Open modal
      </button>
      <RuleModal
        isOpenRuleModal={isOpenRuleModal}
        setIsOpenRuleModal={setIsOpenRuleModal}
      />
      <CookieInformation />
    </div>
  )
}

export default Home
