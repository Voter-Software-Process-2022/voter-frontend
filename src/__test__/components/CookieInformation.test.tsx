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
    expect(
      cookieInformation.getElementsByTagName('button')[0].textContent,
    ).toBe('I understood')
    expect(cookieInformation.getElementsByTagName('a')[0].textContent).toBe(
      'Learn more',
    )
  })

  test('click on "I understood" button', () => {
    render(
      <BrowserRouter>
        <CookieInformation />
      </BrowserRouter>,
    )

    const cookieInformation = screen.getByTestId('cookie-information')
    expect(cookieInformation).toBeDefined()
    const understoodButton = cookieInformation.getElementsByTagName('button')[0]
    expect(understoodButton.textContent).toBe('I understood')
    expect(cookieInformation.getElementsByTagName('a')[0].textContent).toBe(
      'Learn more',
    )

    fireEvent.click(understoodButton)

    // expect(screen.getByTestId('cookie-information')).not.toBeInTheDocument();
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
    const learnMoreButton = cookieInformation.getElementsByTagName('a')[0]
    expect(
      cookieInformation.getElementsByTagName('button')[0].textContent,
    ).toBe('I understood')
    expect(learnMoreButton.textContent).toBe('Learn more')

    fireEvent.click(learnMoreButton)

    // expect(history.location).toBe('https://www.cloudflare.com/learning/privacy/what-are-cookies/')
  })
})
