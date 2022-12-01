import { describe, expect, test } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BallotShow from '../../components/BallotShow'

const mockPropWithSelectedCandidate = {
  ballotId: 'test1',
  candidates: [9, 1, 3],
  voteForCandidateNumber: 1,
  isThaiLanguage: false,
}

const mockPropWithUnSelectedCandidate = {
  ballotId: 'test2',
  candidates: [9, 1, 3],
  voteForCandidateNumber: 0,
  isThaiLanguage: false,
}

describe('test ballot show with selected candidate', () => {
  test('render ballot show', () => {
    render(
      <BrowserRouter>
        <BallotShow
          ballotId={mockPropWithSelectedCandidate.ballotId}
          candidates={mockPropWithSelectedCandidate.candidates}
          voteForCandidateNumber={
            mockPropWithSelectedCandidate.voteForCandidateNumber
          }
          isThaiLanguage={mockPropWithSelectedCandidate.isThaiLanguage}
        />
      </BrowserRouter>,
    )

    const ballotShow = screen.getByTestId('ballot-show')
    expect(ballotShow).toBeDefined()
    const ballotId = screen.getByTestId('ballot-id')
    expect(ballotId).toBeDefined()
    expect(ballotId).toHaveTextContent(
      mockPropWithSelectedCandidate.ballotId.toString(),
    )

    const table = screen.getByTestId('table')
    expect(table.getElementsByTagName('input').length).toBe(
      mockPropWithSelectedCandidate.candidates.length,
    )
  })

  test('check candidates', () => {
    render(
      <BrowserRouter>
        <BallotShow
          ballotId={mockPropWithSelectedCandidate.ballotId}
          candidates={mockPropWithSelectedCandidate.candidates}
          voteForCandidateNumber={
            mockPropWithSelectedCandidate.voteForCandidateNumber
          }
          isThaiLanguage={mockPropWithSelectedCandidate.isThaiLanguage}
        />
      </BrowserRouter>,
    )

    const ballotShow = screen.getByTestId('ballot-show')
    expect(ballotShow).toBeDefined()
    const ballotId = screen.getByTestId('ballot-id')
    expect(ballotId).toBeDefined()
    expect(ballotId).toHaveTextContent(
      mockPropWithSelectedCandidate.ballotId.toString(),
    )

    const table = screen.getByTestId('table')
    const tableInputs = table.getElementsByTagName('input')
    expect(tableInputs.length).toBe(
      mockPropWithSelectedCandidate.candidates.length,
    )

    const checkedIndex = mockPropWithSelectedCandidate.candidates
      .map((loopVariable) => loopVariable)
      .indexOf(mockPropWithSelectedCandidate.voteForCandidateNumber)
    expect(tableInputs[checkedIndex].checked).toBe(true)
  })
})

describe('test ballot show with unselected candidate', () => {
  test('render ballot show', () => {
    render(
      <BrowserRouter>
        <BallotShow
          ballotId={mockPropWithUnSelectedCandidate.ballotId}
          candidates={mockPropWithUnSelectedCandidate.candidates}
          voteForCandidateNumber={
            mockPropWithUnSelectedCandidate.voteForCandidateNumber
          }
          isThaiLanguage={mockPropWithUnSelectedCandidate.isThaiLanguage}
        />
      </BrowserRouter>,
    )

    const ballotShow = screen.getByTestId('ballot-show')
    expect(ballotShow).toBeDefined()
    const ballotId = screen.getByTestId('ballot-id')
    expect(ballotId).toBeDefined()
    expect(ballotId).toHaveTextContent(
      mockPropWithUnSelectedCandidate.ballotId.toString(),
    )

    const table = screen.getByTestId('table')
    expect(table.getElementsByTagName('input').length).toBe(
      mockPropWithUnSelectedCandidate.candidates.length,
    )
  })

  test('check candidates', () => {
    render(
      <BrowserRouter>
        <BallotShow
          ballotId={mockPropWithUnSelectedCandidate.ballotId}
          candidates={mockPropWithUnSelectedCandidate.candidates}
          voteForCandidateNumber={
            mockPropWithUnSelectedCandidate.voteForCandidateNumber
          }
          isThaiLanguage={mockPropWithUnSelectedCandidate.isThaiLanguage}
        />
      </BrowserRouter>,
    )

    const ballotShow = screen.getByTestId('ballot-show')
    expect(ballotShow).toBeDefined()
    const ballotId = screen.getByTestId('ballot-id')
    expect(ballotId).toBeDefined()
    expect(ballotId).toHaveTextContent(
      mockPropWithUnSelectedCandidate.ballotId.toString(),
    )

    const table = screen.getByTestId('table')
    const tableInputs = table.getElementsByTagName('input')
    expect(tableInputs.length).toBe(
      mockPropWithUnSelectedCandidate.candidates.length,
    )

    for (let i = 0; i < tableInputs.length; i++) {
      expect(tableInputs[i].checked).toBe(false)
    }
  })
})
