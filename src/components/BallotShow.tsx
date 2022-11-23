import React from 'react'
import { thaiBallot, englishBallot } from '../config/ballotWords'
import type { BallotShowProps } from '../interfaces/components/ballotShow'

const BallotShow: React.FC<BallotShowProps> = ({
  ballotId,
  amountOfCandidates,
  voteForCandidateNumber,
  isThaiLanguage,
}) => {
  const selectedRule = isThaiLanguage ? thaiBallot : englishBallot
  const listOfNumbers = []
  for (let i = 1; i <= amountOfCandidates; i++) {
    listOfNumbers.push(i)
  }

  return (
    <div
      className='group relative border border-gray-400 text-zinc-800 rounded-xl p-4'
      data-testid='ballot-show'
    >
      <p data-testid='ballot-id'>{`${selectedRule.ballotId}: ${ballotId}`}</p>
      <table data-testid='table'>
        <tr>
          <th>{selectedRule.candidateNumber}</th>
          <th>{selectedRule.checkbox}</th>
        </tr>
        {listOfNumbers.map((x) => (
          <tr key={x}>
            <th>{x}</th>
            <th>
              <input
                disabled
                type='radio'
                checked={x === voteForCandidateNumber}
              />
            </th>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default BallotShow
