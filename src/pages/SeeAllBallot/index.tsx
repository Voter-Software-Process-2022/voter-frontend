import React, { useState } from 'react'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import { BALLOT_LIST } from '../../config/mockBallot'
import { Navbar, Sidebar, BallotShow } from '../../components'
import SearchBar from '../../components/SearchBar'
import {
  thaiSearchPlaceholder,
  englishSearchPlaceholder,
} from '../../config/searchWord'

const SeeAllBallot: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
  const [isThaiLanguage, setIsThaiLanguage] = useState<boolean>(true)
  const [filterNumber, setFilterNumber] = useState<string>('')

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterNumber(e.target.value)
  }

  const filteredBallotList = BALLOT_LIST.filter((ballot) =>
    ballot.ballotId.toString().includes(filterNumber.toLowerCase()),
  )

  const selectedSearch = isThaiLanguage
    ? thaiSearchPlaceholder
    : englishSearchPlaceholder

  const selectedBallotList =
    filterNumber === '' ? BALLOT_LIST : filteredBallotList

  return (
    <div className='w-full overflow-x-hidden min-h-screen bg-white'>
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
      <div className='mx-auto max-w-2xl py-16 px-8 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8'>
        <div className='flex flex-row'>
          <SearchBar
            onChangeHandler={searchHandler}
            placeholderWord={selectedSearch.ballotId}
          />
          <div className='self-center'>
            <LanguageSwitcher
              isOpen={isThaiLanguage}
              setIsOpen={setIsThaiLanguage}
            />
          </div>
        </div>
        <div className='mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {selectedBallotList.map((ballot) => (
            <BallotShow
              key={ballot.ballotId}
              ballotId={ballot.ballotId}
              amountOfCandidates={ballot.amountOfCandidates}
              voteForCandidateNumber={ballot.voteForCandidateNumber}
              isThaiLanguage={isThaiLanguage}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SeeAllBallot
