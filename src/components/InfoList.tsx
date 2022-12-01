import React from 'react'
import type { InfoListProps } from '../interfaces/components/infoList'
import InfoCard from './InfoCard'

const InfoList: React.FC<InfoListProps> = ({ voteTopicId, candidates }) => {
  return (
    <div className='bg-white p-8'>
      <div className='mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-8 text-black'>
        {candidates.map((candidate) => (
          <InfoCard
            voteTopicId={voteTopicId}
            candidate={candidate}
            key={candidate.id}
          />
        ))}
      </div>
    </div>
  )
}

export default InfoList
