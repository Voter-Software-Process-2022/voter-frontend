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
  console.log(voteForCandidateNumber)

  return (
    <div
      className='group relative border border-gray-400 text-zinc-800 rounded-xl p-4 bg-zinc-400'
      data-testid='ballot-show'
    >
      {/* <p>{`${selectedRule.ballotId}: ${ballotId}`}</p> */}
      <div className='text-center mb-4 border  border-gray-400 rounded-xl bg-white'>
        <p className='font-bold'>{`${selectedRule.ballotId}`}</p>
        <p className='text-xs' data-testid='ballot-id'>{`${ballotId}`}</p>
        <p></p>
      </div>
      <table className='bg-white w-full' data-testid='table'>
        <tbody>
          <tr>
            <th className='px-2 w-40'>{selectedRule.candidateNumber}</th>
            <th className='px-2 w-40'>{selectedRule.checkbox}</th>
          </tr>
          {candidates.map((x) => (
            <tr key={x}>
              <th className='px-2'>{x === 0 ? 'ไม่ลงคะแนน' : x}</th>
              <th className='px-2'>
                <input
                  disabled
                  type='radio'
                  checked={
                    voteForCandidateNumber
                      ? x === voteForCandidateNumber
                      : x === 0
                  }
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
