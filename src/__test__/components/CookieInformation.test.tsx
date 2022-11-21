import { describe, expect, test } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
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
    // expect(screen.getByText('We uses cookies').innerHTML).toBe('');
    // expect(screen.getByTag('CookieInformation').isAccepted).toBe(true);
  })

  test('click on "Learn more" button', () => {
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

    expect(learnMoreButton.getAttribute('href')).toBe(
      'https://www.cloudflare.com/learning/privacy/what-are-cookies/',
    )
  })
})
