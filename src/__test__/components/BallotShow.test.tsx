import { describe, expect, test } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import BallotShow from '../../components/BallotShow'

const mockPropWithSelectedCandidate = {
  ballotId: 1,
  amountOfCandidates: 3,
  voteForCandidateNumber: 3,
}

const mockPropWithUnSelectedCandidate = {
  ballotId: 1,
  amountOfCandidates: 5,
  voteForCandidateNumber: 0,
}

describe('test ballot show with selected candidate', () => {
  test('render ballot show', () => {
    render(
      <BrowserRouter>
        <BallotShow
          ballotId={mockPropWithSelectedCandidate.ballotId}
          amountOfCandidates={mockPropWithSelectedCandidate.amountOfCandidates}
          voteForCandidateNumber={
            mockPropWithSelectedCandidate.voteForCandidateNumber
          }
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
      mockPropWithSelectedCandidate.amountOfCandidates,
    )
  })

  test('check candidates', () => {
    render(
      <BrowserRouter>
        <BallotShow
          ballotId={mockPropWithSelectedCandidate.ballotId}
          amountOfCandidates={mockPropWithSelectedCandidate.amountOfCandidates}
          voteForCandidateNumber={
            mockPropWithSelectedCandidate.voteForCandidateNumber
          }
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
      mockPropWithSelectedCandidate.amountOfCandidates,
    )

    expect(
      tableInputs[mockPropWithSelectedCandidate.voteForCandidateNumber - 1]
        .checked,
    ).toBe(true)
  })
})

describe('test ballot show with unselected candidate', () => {
  test('render ballot show', () => {
    render(
      <BrowserRouter>
        <BallotShow
          ballotId={mockPropWithUnSelectedCandidate.ballotId}
          amountOfCandidates={
            mockPropWithUnSelectedCandidate.amountOfCandidates
          }
          voteForCandidateNumber={
            mockPropWithUnSelectedCandidate.voteForCandidateNumber
          }
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
      mockPropWithUnSelectedCandidate.amountOfCandidates,
    )
  })

  test('check candidates', () => {
    render(
      <BrowserRouter>
        <BallotShow
          ballotId={mockPropWithUnSelectedCandidate.ballotId}
          amountOfCandidates={
            mockPropWithUnSelectedCandidate.amountOfCandidates
          }
          voteForCandidateNumber={
            mockPropWithUnSelectedCandidate.voteForCandidateNumber
          }
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
      mockPropWithUnSelectedCandidate.amountOfCandidates,
    )

    for (let i = 0; i < tableInputs.length; i++) {
      expect(tableInputs[i].checked).toBe(false)
    }
  })
})
