import { describe, expect, test } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import InfoCard from '../../components/InfoCard'

const mockPropInfoSingleCard = {
  voteTopicId: 0,
  candidate: {
    id: 1,
    name: 'John Doe',
    pictureUrl: 'pictureUrl',
  },
}

describe('test info card', () => {
  test('render info card with mock up candidate', () => {
    render(
      <BrowserRouter>
        <InfoCard
          voteTopicId={mockPropInfoSingleCard.voteTopicId}
          candidate={mockPropInfoSingleCard.candidate}
        />
      </BrowserRouter>,
    )
    const idText = screen.getByTestId('id-field')
    expect(idText).toBeDefined()
    expect(idText.innerHTML).toContain(mockPropInfoSingleCard.candidate.id)

    const nameText = screen.getByTestId('name-field')
    expect(nameText).toBeDefined()
    expect(nameText.innerHTML).toContain(mockPropInfoSingleCard.candidate.name)
  })

  test('click see details link', () => {
    render(
      <BrowserRouter>
        <InfoCard
          voteTopicId={mockPropInfoSingleCard.voteTopicId}
          candidate={mockPropInfoSingleCard.candidate}
        />
      </BrowserRouter>,
    )
    const idText = screen.getByTestId('id-field')
    expect(idText).toBeDefined()
    expect(idText.innerHTML).toContain(mockPropInfoSingleCard.candidate.id)

    const nameText = screen.getByTestId('name-field')
    expect(nameText).toBeDefined()
    expect(nameText.innerHTML).toContain(mockPropInfoSingleCard.candidate.name)

    // wait development to finish see details pages

    // const seeDetailsLink = screen.getByTestId('see-details-link')
    // fireEvent.click(seeDetailsLink)
    // expect()
  })
})
