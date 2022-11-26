import React, { useState, useEffect } from 'react'
import './vote.css'
import { useNavigate, useParams } from 'react-router-dom'
import ReactRouterPrompt from 'react-router-prompt'
import { BallotSelection, Loader, PreventDialog } from '../../components'
import uuid from 'react-uuid'
import { useAppDispatch } from '../../app/hooks'
import { setIsAcceptedRules } from '../../features/user/userSlice'
import type { CandidateI } from '../../interfaces/candidate'
import {
  fetchMpCandidates,
  fetchVoteNo,
  fetchVoteSubmit,
} from '../../features/vote/voteSlice'
import { fetchAllCandidates } from '../../features/candidate/candidateSlice'

const ballotId = uuid()

const Vote: React.FC = () => {
  const { voteTopicId } = useParams()
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateI | null>(
    null,
  )
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isFinished, setIsFinished] = useState<boolean>(false)
  const [candidates, setCandidates] = useState<CandidateI[]>()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const onFetchCandidates = async () => {
      setIsLoading(true)
      if (!voteTopicId) return
      const { payload }: any =
        voteTopicId === '1'
          ? await dispatch(fetchMpCandidates())
          : await dispatch(
              fetchAllCandidates({ voteTopicId: parseInt(voteTopicId) }),
            )
      setCandidates([
        ...payload,
        {
          id: 0,
          name: 'ไม่ลงคะแนนเสียง',
          pictureUrl: '',
        },
      ])
      setIsLoading(false)
    }
    onFetchCandidates()
  }, [])

  useEffect(() => {
    if (!isFinished) return
    navigate('/thank-you')
    setTimeout(() => {
      dispatch(setIsAcceptedRules(false))
    }, 1500)
  }, [isFinished])

  const onClickHandler = (candidate: CandidateI) => {
    setSelectedCandidate(candidate)
  }

  const onSubmitHandler = async () => {
    if (!selectedCandidate || !voteTopicId) return
    setIsLoading(true)
    selectedCandidate.id !== 0
      ? await dispatch(
          fetchVoteSubmit({
            ballotId: ballotId,
            voteTopicId: parseInt(voteTopicId),
            candidateId: selectedCandidate.id,
            areaId: selectedCandidate.areaId,
          }),
        )
      : await dispatch(
          fetchVoteNo({
            ballotId: ballotId,
            voteTopicId: parseInt(voteTopicId),
          }),
        )
    setIsLoading(false)
    setIsFinished(true)
  }

  const onLeavingPage = async (
    isActive: boolean,
    onConfirm: (value: unknown) => void,
  ) => {
    if (!voteTopicId) return
    onConfirm(isActive)
    setIsLoading(true)
    await dispatch(
      fetchVoteNo({
        ballotId: ballotId,
        voteTopicId: parseInt(voteTopicId),
      }),
    )
    setIsLoading(false)
    dispatch(setIsAcceptedRules(false))
  }

  return (
    <div className='min-h-screen'>
      {isLoading && <Loader />}
      <ReactRouterPrompt when={!isFinished}>
        {({ isActive, onConfirm, onCancel }) =>
          isActive && (
            <PreventDialog
              isActive={isActive}
              onConfirm={() => onLeavingPage(isActive, onConfirm)}
              onCancel={onCancel}
            />
          )
        }
      </ReactRouterPrompt>
      <div className='max-w-6xl mx-auto'>
        <div className='flex items-center justify-between py-8'>
          <span className='text-lg lg:text-3xl flex flex-col'>
            <p className='mb-[1rem]'>Ballot ID: {ballotId}</p>
            <p className='text-lg text-[red]'>
              !!! The ballot will be considered as a void ballot if you close
              this page. !!!
            </p>
            <p className='text-lg text-[violet]'>
              !!! Please remember your Ballot ID if you want to see your vote
              result later. !!!
            </p>
          </span>
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
              {candidates &&
                candidates.map((candidate, index) => (
                  <BallotSelection
                    choice={candidate.id}
                    displayName={`${candidate.id}`}
                    key={index}
                    onClickHandler={() => onClickHandler(candidate)}
                  />
                ))}
              <button
                className='bg-green-400 hover:bg-green-500 my-[2rem] duration-150 p-2 rounded text-2xl'
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
  selectedCandidate: CandidateI | null
}) {
  if (selectedCandidate) {
    if (selectedCandidate.id === 0) {
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
