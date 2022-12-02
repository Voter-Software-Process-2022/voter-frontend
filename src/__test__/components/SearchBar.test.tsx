import { describe, expect, test } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from '../../components/SearchBar'

const mockProp = {
  placeholderWord: 'place holder',
}

describe('SubscribeSection', () => {
  test('render subscribe section', () => {
    render(
      <BrowserRouter>
        <SearchBar placeholderWord={mockProp.placeholderWord} />
      </BrowserRouter>,
    )

    const inputField = screen.getByPlaceholderText(
      `${mockProp.placeholderWord}`,
    )
    expect(inputField).toBeDefined()
  })
})
