import React, { useState } from 'react'
import './vote.css'
import { useNavigate, useParams } from 'react-router-dom'
import ReactRouterPrompt from 'react-router-prompt'
import { BallotSelection, PreventDialog } from '../../components'
import uuid from 'react-uuid'
import { useAppDispatch } from '../../app/hooks'
import { setIsAcceptedRules } from '../../features/user/userSlice'

interface Candidate {
  number: number
  name: string
  pictureUrl: string
}

const mockData = [
  {
    number: 1,
    name: 'Prayut Nahee',
    pictureUrl:
      'https://www.asiafinancial.com/wp-content/uploads/2022/10/Thai-PM-Prayut-Chan-ocha-is-seen-at-Government-House-in-Bangkok-Sept-9-2015.-RsChaiwat-Subprasom.jpg',
  },
  {
    number: 2,
    name: 'Prayut Kuy',
    pictureUrl:
      'https://static.bangkokpost.com/media/content/dcx/2020/06/18/3664912.jpg',
  },
  {
    number: 3,
    name: 'Prayut Edok',
    pictureUrl:
      'https://www.thephuketnews.com/photo/listing/2019/1559752046_1-org.jpg',
  },
  {
    number: 0,
    name: 'ไม่ลงคะแนนเสียง',
    pictureUrl: '',
  },
]

const ballotId = uuid()

const Vote: React.FC = () => {
  const { voteTopicId } = useParams()
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(
    null,
  )
  const [isFinished, setIsFinished] = useState<boolean>(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onClickHandler = (candidate: Candidate) => {
    setSelectedCandidate(candidate)
  }

  const onSubmitHandler = () => {
    if (!selectedCandidate) return
    setIsFinished(true)
    setTimeout(() => {
      navigate('/thank-you')
      dispatch(setIsAcceptedRules(false))
    }, 1000)
  }

  return (
    <div className='min-h-screen'>
      <ReactRouterPrompt when={!isFinished}>
        {({ isActive, onConfirm, onCancel }) =>
          isActive && (
            <PreventDialog
              isActive={isActive}
              onConfirm={onConfirm}
              onCancel={onCancel}
            />
          )
        }
      </ReactRouterPrompt>
      <div className='max-w-6xl mx-auto'>
        <div className='flex items-center justify-between py-8'>
          <span className='text-lg lg:text-3xl'>Ballot ID: {ballotId}</span>
          <span className='text-md lg:text-xl'>{`Vote for ${
            voteTopicId === '1' ? 'MPS' : 'Party'
          }`}</span>
        </div>
        <div className='flex flex-col items-center justify-between px-8 mt-8 lg:flex-row'>
          <div className='flex flex-col'>
            <div className='w-72 h-72 xs:w-96 xs:h-96 mb-10 flex items-center justify-center border border-zinc-600'>
              <SelectedCandidatePicture selectedCandidate={selectedCandidate} />
            </div>
            <p className='text-lg lg:text-2xl'>
              <span className='font-bold'>Name : </span>
              {selectedCandidate?.name || '-'}
            </p>
          </div>
          <div>
            <div className='flex flex-col mt-6 lg:mt-0'>
              {mockData.map((candidate: Candidate, index) => (
                <BallotSelection
                  choice={candidate.number}
                  displayName={`${candidate.number}`}
                  key={index}
                  onClickHandler={() => onClickHandler(candidate)}
                />
              ))}
              <button
                className='bg-green-400 hover:bg-green-500 mt-2 duration-150 p-2 rounded text-2xl'
                onClick={onSubmitHandler}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vote

function SelectedCandidatePicture({
  selectedCandidate,
}: {
  selectedCandidate: Candidate | null
}) {
  if (selectedCandidate) {
    if (selectedCandidate.number === 0) {
      return (
        <span className='text-2xl lg:text-4xl font-semibold'>งดออกเสียง</span>
      )
    } else {
      return (
        <img
          src={selectedCandidate.pictureUrl}
          alt=''
          className='w-full h-full object-contain'
        />
      )
    }
  } else {
    return (
      <span className='text-2xl lg:text-4xl font-semibold'>
        Select candidate...
      </span>
    )
  }
}
