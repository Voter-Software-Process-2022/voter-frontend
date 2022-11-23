import React from 'react'

interface BallotSelectionProps {
  choice: number
  displayName: string
}

const BallotSelection: React.FC<BallotSelectionProps> = ({
  choice,
  displayName,
}) => {
  return (
    <div className='flex'>
      <input
        className='checkbox-budget'
        type='radio'
        name='budget'
        id={`${choice}`}
      />
      <label className='for-checkbox-budget' htmlFor={`${choice}`}>
        <span>{displayName}</span>
      </label>
    </div>
  )
}

export default BallotSelection
