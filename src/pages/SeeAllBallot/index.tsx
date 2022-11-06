import React, { useState } from 'react'
import { Navbar, Sidebar, FooterSection, BallotShow } from '../../components'

const SeeAllBallot: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)

  return (
    <div className='w-full overflow-x-hidden'>
      <Navbar
        isOpenSidebar={isOpenSidebar}
        setIsOpenSidebar={setIsOpenSidebar}
      />
      <div className='relative'>
        <Sidebar
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
      </div>
      <BallotShow
        ballotId={63105}
        amountOfCandidates={10}
        voteForCandidateNumber={5}
      />
      <FooterSection />
    </div>
  )
}

export default SeeAllBallot
