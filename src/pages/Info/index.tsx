import { useParams } from 'react-router-dom'
import { Loader, Navbar, RuleModal, Sidebar } from '../../components'
import { Fragment, useEffect, useState } from 'react'
import InfoList from '../../components/InfoList'
import type { CandidateI } from '../../interfaces/candidate'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchAllCandidates } from '../../features/candidate/candidateSlice'
import { ToastContainer } from 'react-toastify'
import { useSelector } from 'react-redux'
import type { RootState } from '../../app/store'
import { fetchMpCandidates } from '../../features/vote/voteSlice'
import { isUserAuthenticated } from '../../features/user/userSlice'

const Info: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
  const [isOpenRuleModal, setIsOpenRuleModal] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [candidates, setCandidates] = useState<CandidateI[]>()
  const [canVote, setCanVote] = useState<boolean>(false)
  const { voteTopicId } = useParams()
  const dispatch = useAppDispatch()
  const userAllowedTopics = useSelector(
    (state: RootState) => state.user.allowedVoteTopics,
  )
  const verifyUserAuthenticated = useAppSelector(isUserAuthenticated)

  useEffect(() => {
    const verifyRightToVote = () => {
      if (!voteTopicId || !userAllowedTopics) return
      if (userAllowedTopics.includes(parseInt(voteTopicId))) {
        setCanVote(true)
      }
    }
    verifyRightToVote()
  })

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      if (!voteTopicId) return
      let fetchCandidate: any
      if (voteTopicId === '1') {
        const { payload }: any = verifyUserAuthenticated
          ? await dispatch(fetchMpCandidates())
          : await dispatch(
              fetchAllCandidates({ voteTopicId: parseInt(voteTopicId) }),
            )
        fetchCandidate = payload
      } else {
        const { payload }: any = await dispatch(
          fetchAllCandidates({ voteTopicId: parseInt(voteTopicId) }),
        )
        fetchCandidate = payload
      }
      setCandidates(fetchCandidate)
      setIsLoading(false)
    }
    fetchData()
  }, [voteTopicId])

  return (
    <div className='min-h-screen bg-white'>
      <div className='flex flex-col'>
        <Navbar
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
        {isLoading ? (
          <Loader />
        ) : (
          <div className='relative flex flex-col pb-16'>
            <ToastContainer
              position='bottom-right'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme='dark'
            />
            <Sidebar
              isOpenSidebar={isOpenSidebar}
              setIsOpenSidebar={setIsOpenSidebar}
            />
            {voteTopicId && candidates ? (
              <Fragment>
                <InfoList
                  voteTopicId={parseInt(voteTopicId)}
                  candidates={candidates}
                />
                <button
                  onClick={() => setIsOpenRuleModal(true)}
                  className='hover:bg-gray-700 focus:outline-none p-3 w-16 self-center flex-center text-center text-white bg-gray-600 rounded'
                >
                  Vote
                </button>
              </Fragment>
            ) : (
              <div className='my-8'>
                <span className='text-black text-xl flex justify-center'>
                  Not found available candidates in your area...
                </span>
              </div>
            )}
            <RuleModal
              topicId={voteTopicId}
              canVote={canVote}
              isOpenRuleModal={isOpenRuleModal}
              setIsOpenRuleModal={setIsOpenRuleModal}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Info
