import { useParams } from 'react-router-dom'
import { Navbar, RuleModal, Sidebar } from '../../components'
import { useEffect, useState } from 'react'
import InfoList from '../../components/InfoList'
import type { CandidateI } from '../../interfaces/candidate'
import { useAppDispatch } from '../../app/hooks'
import { fetchAllCandidates } from '../../features/candidate/candidateSlice'

const Info: React.FC = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false)
  const [isOpenRuleModal, setIsOpenRuleModal] = useState(false)
  const [candidates, setCandidates] = useState<CandidateI[]>()
  const { voteTopicId } = useParams()
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchData = async () => {
      if (!voteTopicId) return
      const { payload }: any = await dispatch(
        fetchAllCandidates({ voteTopicId: parseInt(voteTopicId) }),
      )
      setCandidates(payload)
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
        <div className='relative flex flex-col pb-16'>
          <Sidebar
            isOpenSidebar={isOpenSidebar}
            setIsOpenSidebar={setIsOpenSidebar}
          />
          {voteTopicId && candidates && (
            <InfoList
              voteTopicId={parseInt(voteTopicId)}
              candidates={candidates}
            />
          )}
          <button
            onClick={() => setIsOpenRuleModal(true)}
            className='hover:bg-gray-700 focus:outline-none p-3 w-16 self-center flex-center text-center text-white bg-gray-600 rounded'
          >
            Vote
          </button>
          <RuleModal
            topicId={voteTopicId}
            isOpenRuleModal={isOpenRuleModal}
            setIsOpenRuleModal={setIsOpenRuleModal}
          />
        </div>
      </div>
    </div>
  )
}

export default Info
