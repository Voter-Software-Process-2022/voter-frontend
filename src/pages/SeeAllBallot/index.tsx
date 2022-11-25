import React, { useState, useEffect } from 'react'
import LanguageSwitcher from '../../components/LanguageSwitcher'
import { Navbar, Sidebar, BallotShow, Loader } from '../../components'
import SearchBar from '../../components/SearchBar'
import {
  thaiSearchPlaceholder,
  englishSearchPlaceholder,
} from '../../config/searchWords'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { fetchVoteAllBallot } from '../../features/vote/voteSlice'
import type { RootState } from '../../app/store'
import type { UserInformation } from '../../generated'
import { useAppDispatch } from '../../app/hooks'
import { fetchAllCandidates } from '../../features/candidate/candidateSlice'
import type { CandidateI } from '../../interfaces/candidate'

const SeeAllBallot: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
  const [isThaiLanguage, setIsThaiLanguage] = useState<boolean>(true)
  const [filterNumber, setFilterNumber] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const authUser = useSelector(
    (state: RootState) => state.user.authUser as UserInformation,
  )
  const { voteTopicId } = useParams()
  const dispatch = useAppDispatch()
  const [candidates, setCandidates] = useState<number[]>()
  const [ballotList, setBallotList] = useState<any[]>()

  useEffect(() => {
    const onFetchVoteAllBallot = async () => {
      setIsLoading(true)
      if (!voteTopicId || !authUser || !authUser.DistricID) return
      const { payload: ballotPayload }: any = await dispatch(
        fetchVoteAllBallot({
          voteTopicId: parseInt(voteTopicId),
          areaId: authUser.DistricID,
        }),
      )
      const { payload: candidatePayload }: any = await dispatch(
        fetchAllCandidates({ voteTopicId: parseInt(voteTopicId) }),
      )
      setBallotList(ballotPayload)
      setCandidates([
        ...candidatePayload.map((candidate: CandidateI) => candidate.id),
        0,
      ])
      setIsLoading(false)
    }
    onFetchVoteAllBallot()
  }, [])

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterNumber(e.target.value)
  }

  const filteredBallotList = ballotList?.filter((ballot) =>
    ballot.ballotId
      .toString()
      .toLowerCase()
      .includes(filterNumber.toLowerCase()),
  )

  const selectedSearch = isThaiLanguage
    ? thaiSearchPlaceholder
    : englishSearchPlaceholder

  const selectedBallotList =
    filterNumber === '' ? ballotList : filteredBallotList

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
      {isLoading ? (
        <Loader />
      ) : (
        <div className='mx-auto max-w-4xl py-16 px-8 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8'>
          <div className='flex items-center justify-between relative'>
            <Title
              voteTopicId={voteTopicId ?? ''}
              isThaiLanguage={isThaiLanguage}
            />
            <SearchBar
              onChangeHandler={searchHandler}
              placeholderWord={selectedSearch.ballotId}
            />
            <div className='float-right flex justify-end'>
              <LanguageSwitcher
                isOpen={isThaiLanguage}
                setIsOpen={setIsThaiLanguage}
              />
            </div>
          </div>
          <div className='mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
            {candidates &&
              selectedBallotList?.map((ballot) => (
                <BallotShow
                  key={ballot.ballotId}
                  ballotId={ballot.ballotId}
                  candidates={candidates}
                  voteForCandidateNumber={ballot.CandidateId}
                  isThaiLanguage={isThaiLanguage}
                />
              ))}
          </div>
        </div>
      )}
    </div>
  )
}

const Title = ({
  voteTopicId,
  isThaiLanguage,
}: {
  voteTopicId: string
  isThaiLanguage: boolean
}) => {
  const topic = voteTopicId === '1' ? 'MPS' : 'Party'

  if (isThaiLanguage) {
    return (
      <span className='text-black font-semibold text-2xl w-64'>
        บัตรเลือกตั้งสำหรับ{topic === 'MPS' ? 'สส.' : 'พรรค'}
      </span>
    )
  } else {
    return (
      <span className='text-black font-semibold text-2xl'>
        Ballots for {topic}
      </span>
    )
  }
}

export default SeeAllBallot
