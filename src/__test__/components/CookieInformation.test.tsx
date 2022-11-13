import { describe, expect, test } from 'vitest'
import { BrowserRouter, Router } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { createMemoryHistory } from 'history'
import CookieInformation from '../../components/CookieInformation'

describe('CookieInformation', () => {
  test('render cookie information', () => {
    render(
      <BrowserRouter>
        <CookieInformation />
      </BrowserRouter>,
    )

    const cookieInformation = screen.getByTestId('cookie-information')
    expect(cookieInformation).toBeDefined()
    const understoodButton = screen.getByText('I understood')
    expect(understoodButton).toBeDefined()
    const learnMoreButton = screen.getByText('Learn more')
    expect(learnMoreButton).toBeDefined()
  })

  test('click on "I understood" button', () => {
    render(
      <BrowserRouter>
        <CookieInformation />
      </BrowserRouter>,
    )

    const cookieInformation = screen.getByTestId('cookie-information')
    expect(cookieInformation).toBeDefined()
    const understoodButton = screen.getByText('I understood')
    expect(understoodButton).toBeDefined()
    const learnMoreButton = screen.getByText('Learn more')
    expect(learnMoreButton).toBeDefined()

    fireEvent.click(understoodButton)

    // expect(screen.getByTestId('cookie-information')).not.toBeVisible();
  })

  test('click on "Learn more" button', () => {
    const history = createMemoryHistory()
    render(
      <Router navigator={history} location={history.location}>
        <CookieInformation />
      </Router>,
    )

    const cookieInformation = screen.getByTestId('cookie-information')
    expect(cookieInformation).toBeDefined()
    const understoodButton = screen.getByText('I understood')
    expect(understoodButton).toBeDefined()
    const learnMoreButton = screen.getByText('Learn more')
    expect(learnMoreButton).toBeDefined()

    fireEvent.click(learnMoreButton)

    // expect(history.location).toBe('https://www.cloudflare.com/learning/privacy/what-are-cookies/')
  })
})
