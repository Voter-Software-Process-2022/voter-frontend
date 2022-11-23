import React from 'react'

interface BallotSelectionProps {
  choice: number
  displayName: string
  onClickHandler: () => void
}

const BallotSelection: React.FC<BallotSelectionProps> = ({
  choice,
  displayName,
  onClickHandler,
}) => {
  return (
    <div className='flex'>
      <input
        className='checkbox-budget'
        type='radio'
        name='budget'
        id={`${choice}`}
      />
      <label
        className='for-checkbox-budget'
        htmlFor={`${choice}`}
        onClick={onClickHandler}
      >
        <span>{choice === 0 ? 'ไม่ลงคะแนนเสียง' : displayName}</span>
      </label>
    </div>
  )
}

export default BallotSelection
