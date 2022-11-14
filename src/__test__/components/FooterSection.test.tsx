import { describe, expect, test } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import FooterSection from '../../components/FooterSection'

describe('FooterSection', () => {
  test('render footer section', () => {
    render(
      <BrowserRouter>
        <FooterSection />
      </BrowserRouter>,
    )

    const governmentLogo = screen.getByTestId('royal-thai-government')
    expect(governmentLogo).toBeDefined()
    expect(governmentLogo.textContent).toBe('Royal Thai Government')
    const aboutLink = screen.getByText('About')
    expect(aboutLink).toBeDefined()
    const privacyLink = screen.getByText('Privacy Policy')
    expect(privacyLink).toBeDefined()
    const gitHubLink = screen.getByText('Github')
    expect(gitHubLink).toBeDefined()
    const contactLink = screen.getByText('Contact Us')
    expect(contactLink).toBeDefined()
    const developerLink = screen.getByText('Yak3BdPro')
    expect(developerLink).toBeDefined()
  })

  test('click goverment logo link', () => {
    render(
      <BrowserRouter>
        <FooterSection />
      </BrowserRouter>,
    )

    const governmentLogo = screen.getByTestId('royal-thai-government')
    expect(governmentLogo).toBeDefined()
    expect(governmentLogo.textContent).toBe('Royal Thai Government')
    const aboutLink = screen.getByText('About')
    expect(aboutLink).toBeDefined()
    const privacyLink = screen.getByText('Privacy Policy')
    expect(privacyLink).toBeDefined()
    const gitHubLink = screen.getByText('Github')
    expect(gitHubLink).toBeDefined()
    const contactLink = screen.getByText('Contact Us')
    expect(contactLink).toBeDefined()
    const developerLink = screen.getByText('Yak3BdPro')
    expect(developerLink).toBeDefined()

    fireEvent.click(governmentLogo)
    // expect(history.location.pathname).toContain('/github.com/Voter-Software-Process-2022')
  })
})
