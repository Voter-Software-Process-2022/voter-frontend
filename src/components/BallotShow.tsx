import React, { useState } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import { thaiBallot, englishBallot } from '../config/ballotWords'
import type { BallotShowProps } from '../interfaces/components/ballotShow'

const BallotShow: React.FC<BallotShowProps> = ({
  ballotId,
  amountOfCandidates,
  voteForCandidateNumber,
}) => {
  const [isThaiLanguage, setIsThaiLanguage] = useState<boolean>(true)
  const selectedRule = isThaiLanguage ? thaiBallot : englishBallot

  const listOfNumbers = []
  for (let i = 1; i <= amountOfCandidates; i++) {
    listOfNumbers.push(i)
  }

  return (
    <div
      className='group relative border border-white rounded-xl p-4'
      data-testid='ballot-show'
    >
      <LanguageSwitcher isOpen={isThaiLanguage} setIsOpen={setIsThaiLanguage} />
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
