import React from 'react'
import { thaiBallot, englishBallot } from '../config/ballotWords'
import type { BallotShowProps } from '../interfaces/components/ballotShow'

const BallotShow: React.FC<BallotShowProps> = ({
  ballotId,
  candidates,
  voteForCandidateNumber,
  isThaiLanguage,
}) => {
  const selectedRule = isThaiLanguage ? thaiBallot : englishBallot

  return (
    <div className='group relative border border-gray-400 text-zinc-800 rounded-xl p-4 bg-zinc-400'>
      {/* <p>{`${selectedRule.ballotId}: ${ballotId}`}</p> */}
      <div className='text-center mb-4 border  border-gray-400 rounded-xl bg-white'>
        <p className='font-bold'>{`${selectedRule.ballotId}`}</p>
        <p className='text-xs'>{`${ballotId}`}</p>
        <p></p>
      </div>
      <table className='bg-white w-full'>
        <tbody>
          <tr>
            <th className='px-2 w-40'>{selectedRule.candidateNumber}</th>
            <th className='px-2 w-40'>{selectedRule.checkbox}</th>
          </tr>
          {candidates.map((x) => (
            <tr key={x}>
              <th className='px-2'>{x}</th>
              <th className='px-2'>
                <input
                  disabled
                  type='radio'
                  checked={x === voteForCandidateNumber}
                />
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default BallotShow
