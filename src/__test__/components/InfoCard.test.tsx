import { describe, expect, test } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import InfoCard from '../../components/InfoCard'

const mockPropInfoSingleCard = {
  id: 1,
  name: 'John Doe',
  description: 'Candidate#1',
}

describe('test info card', () => {
  test('render info card with mock up candidate', () => {
    render(
      <BrowserRouter>
        <InfoCard
          id={mockPropInfoSingleCard.id}
          name={mockPropInfoSingleCard.name}
          description={mockPropInfoSingleCard.description}
        />
      </BrowserRouter>,
    )
    const idText = screen.getByTestId('id-field')
    expect(idText).toBeDefined()
    expect(idText.innerHTML).toContain(mockPropInfoSingleCard.id)

    const nameText = screen.getByTestId('name-field')
    expect(nameText).toBeDefined()
    expect(nameText.innerHTML).toContain(mockPropInfoSingleCard.name)

    const descriptionText = screen.getByTestId('description-field')
    expect(descriptionText).toBeDefined()
    expect(descriptionText.innerHTML).toContain(
      mockPropInfoSingleCard.description,
    )
  })

  test('click see details link', () => {
    render(
      <BrowserRouter>
        <InfoCard
          id={mockPropInfoSingleCard.id}
          name={mockPropInfoSingleCard.name}
          description={mockPropInfoSingleCard.description}
        />
      </BrowserRouter>,
    )
    const idText = screen.getByTestId('id-field')
    expect(idText).toBeDefined()
    expect(idText.innerHTML).toContain(mockPropInfoSingleCard.id)

    const nameText = screen.getByTestId('name-field')
    expect(nameText).toBeDefined()
    expect(nameText.innerHTML).toContain(mockPropInfoSingleCard.name)

    const descriptionText = screen.getByTestId('description-field')
    expect(descriptionText).toBeDefined()
    expect(descriptionText.innerHTML).toContain(
      mockPropInfoSingleCard.description,
    )

    // wait development to finish see details pages

    // const seeDetailsLink = screen.getByTestId('see-details-link')
    // fireEvent.click(seeDetailsLink)
    // expect()
  })
})
