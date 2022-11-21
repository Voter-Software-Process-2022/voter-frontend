import { describe, expect, test } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LowerInfo from '../../components/LowerInfo'

describe('LowerInfo', () => {
  test('render lower info', () => {
    render(
      <BrowserRouter>
        <LowerInfo />
      </BrowserRouter>,
    )

    expect(screen.getAllByText('Vote Now')).toBeDefined()

    const voteNowButton = screen.getByTestId('vote-now-button')
    expect(voteNowButton).toBeDefined()
    const seeDetailsButton = screen.getByTestId('see-details-button')
    expect(seeDetailsButton).toBeDefined()
  })

  test('click vote now button', () => {
    render(
      <BrowserRouter>
        <LowerInfo />
      </BrowserRouter>,
    )

    expect(screen.getAllByText('Vote Now')).toBeDefined()

    const voteNowButton = screen.getByTestId('vote-now-button')
    expect(voteNowButton).toBeDefined()
    const seeDetailsButton = screen.getByTestId('see-details-button')
    expect(seeDetailsButton).toBeDefined()

    // expect(governmentLogo.getAttribute("href")).toBe("https://github.com/Voter-Software-Process-2022")
  })

  test('click see details button', () => {
    render(
      <BrowserRouter>
        <LowerInfo />
      </BrowserRouter>,
    )

    expect(screen.getAllByText('Vote Now')).toBeDefined()

    const voteNowButton = screen.getByTestId('vote-now-button')
    expect(voteNowButton).toBeDefined()
    const seeDetailsButton = screen.getByTestId('see-details-button')
    expect(seeDetailsButton).toBeDefined()

    // expect(governmentLogo.getAttribute("href")).toBe("https://github.com/Voter-Software-Process-2022")
  })
})
