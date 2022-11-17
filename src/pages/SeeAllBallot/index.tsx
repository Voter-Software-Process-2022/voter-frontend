import React, { useState } from 'react'
import { BALLOT_LIST } from '../../config/mockBallot'
import { Navbar, Sidebar, BallotShow } from '../../components'

const SeeAllBallot: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)

  return (
    <div className='w-full overflow-x-hidden min-h-screen'>
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
      <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {BALLOT_LIST.map((ballot) => (
            <BallotShow
              key={ballot.ballotId}
              ballotId={ballot.ballotId}
              amountOfCandidates={ballot.amountOfCandidates}
              voteForCandidateNumber={ballot.voteForCandidateNumber}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SeeAllBallot
