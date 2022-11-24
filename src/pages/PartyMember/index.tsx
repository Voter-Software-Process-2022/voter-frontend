import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useAppDispatch } from '../../app/hooks'
import { fetchCandidateDetails } from '../../features/candidate/candidateSlice'

const CandidateDetail: React.FC = () => {
  const dispatch = useAppDispatch()
  const { voteTopicId, candidateId } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      if (!voteTopicId || !candidateId) return
      const { payload }: { payload: any } = await dispatch(
        fetchCandidateDetails({
          voteTopicId: parseInt(voteTopicId),
          candidateId: parseInt(candidateId),
        }),
      )
      console.log(payload)
    }
    fetchData()
  }, [voteTopicId])

  return <div>CandidateDetail</div>
}

export default CandidateDetail
