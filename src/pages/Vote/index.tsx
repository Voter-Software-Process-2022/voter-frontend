import React from 'react'

import type { VoteProps } from '../../interfaces/components/vote'
const Vote: React.FC<VoteProps> = ({ topicId, topicName }) => {
  return (
    <div>
      Vote
      {topicId} {topicName}
    </div>
  )
}

export default Vote
