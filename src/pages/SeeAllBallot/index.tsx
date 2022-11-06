import React, { useState } from 'react'
import { Navbar, Sidebar } from '../../components'

import FooterSection from '../../components/FooterSection'
import BallotShow from '../../components/BallotShow'

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
