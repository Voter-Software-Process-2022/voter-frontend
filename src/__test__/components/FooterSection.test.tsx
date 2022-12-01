import { describe, expect, test } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
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

    const gitHubLink = screen.getByText('Github')
    expect(gitHubLink).toBeDefined()
    const contactLink = screen.getByText('Contact Us')
    expect(contactLink).toBeDefined()
    const developerLink = screen.getByText('Yak3BdPro')
    expect(developerLink).toBeDefined()

    expect(governmentLogo.getAttribute('href')).toBe(
      'https://github.com/Voter-Software-Process-2022',
    )
  })

  test('click about link', () => {
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

    const gitHubLink = screen.getByText('Github')
    expect(gitHubLink).toBeDefined()
    const contactLink = screen.getByText('Contact Us')
    expect(contactLink).toBeDefined()
    const developerLink = screen.getByText('Yak3BdPro')
    expect(developerLink).toBeDefined()

    expect(aboutLink.getAttribute('href')).toBe(
      'https://github.com/orgs/Voter-Software-Process-2022/people',
    )
  })

  test('click github link', () => {
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

    const gitHubLink = screen.getByText('Github')
    expect(gitHubLink).toBeDefined()
    const contactLink = screen.getByText('Contact Us')
    expect(contactLink).toBeDefined()
    const developerLink = screen.getByText('Yak3BdPro')
    expect(developerLink).toBeDefined()

    expect(gitHubLink.getAttribute('href')).toBe(
      'https://github.com/Voter-Software-Process-2022',
    )
  })

  test('click contract link', () => {
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

    const gitHubLink = screen.getByText('Github')
    expect(gitHubLink).toBeDefined()
    const contactLink = screen.getByText('Contact Us')
    expect(contactLink).toBeDefined()
    const developerLink = screen.getByText('Yak3BdPro')
    expect(developerLink).toBeDefined()

    expect(contactLink.getAttribute('href')).toBe(
      'https://github.com/Voter-Software-Process-2022/voter-frontend/issues',
    )
  })

  test('click developer link', () => {
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

    const gitHubLink = screen.getByText('Github')
    expect(gitHubLink).toBeDefined()
    const contactLink = screen.getByText('Contact Us')
    expect(contactLink).toBeDefined()
    const developerLink = screen.getByText('Yak3BdPro')
    expect(developerLink).toBeDefined()

    expect(developerLink.getAttribute('href')).toBe(
      'https://github.com/Voter-Software-Process-2022',
    )
  })
})
