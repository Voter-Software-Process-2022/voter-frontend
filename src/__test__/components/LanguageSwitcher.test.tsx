import React from 'react'
import { describe, expect, test, vi } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import LanguageSwitcher from '../../components/LanguageSwitcher'

const mockPropEnglishLanguage = {
  isOpen: false,
}

const mockPropThaiLanguage = {
  isOpen: true,
}

describe('test English language switcher', () => {
  test('render language switcher', () => {
    const setStateMock = vi.fn()
    const useStateMock: any = (useState: boolean) => [useState, setStateMock]
    vi.spyOn(React, 'useState').mockImplementation(useStateMock)

    render(
      <BrowserRouter>
        <LanguageSwitcher
          isOpen={mockPropEnglishLanguage.isOpen}
          setIsOpen={setStateMock}
        />
      </BrowserRouter>,
    )
    const languageSwitchButton = screen.getByTestId('flag')

    expect(languageSwitchButton).toBeDefined()
    // expect(languageSwitchButton.className).toContain('bg-us-flag')
    expect(languageSwitchButton.innerHTML).toContain(
      'src="/src/assets/images/flag-us.png',
    )
  })

  test('click switch button', () => {
    const setStateMock = vi.fn()
    const useStateMock: any = (useState: boolean) => [useState, setStateMock]
    vi.spyOn(React, 'useState').mockImplementation(useStateMock)

    render(
      <BrowserRouter>
        <LanguageSwitcher
          isOpen={mockPropEnglishLanguage.isOpen}
          setIsOpen={setStateMock}
        />
      </BrowserRouter>,
    )
    const languageSwitchButton = screen.getByTestId('flag')

    expect(languageSwitchButton).toBeDefined()
    expect(languageSwitchButton.innerHTML).toContain(
      'src="/src/assets/images/flag-us.png',
    )

    fireEvent.click(languageSwitchButton)
    // expect(screen.getByTestId('flag').className).toBe(/bg-thai-flag/i)
  })
})

describe('test Thai language switcher', () => {
  test('render language switcher', () => {
    const setStateMock = vi.fn()
    const useStateMock: any = (useState: boolean) => [useState, setStateMock]
    vi.spyOn(React, 'useState').mockImplementation(useStateMock)

    render(
      <BrowserRouter>
        <LanguageSwitcher
          isOpen={mockPropThaiLanguage.isOpen}
          setIsOpen={setStateMock}
        />
      </BrowserRouter>,
    )
    const languageSwitchButton = screen.getByTestId('flag')

    expect(languageSwitchButton).toBeDefined()
    expect(languageSwitchButton.innerHTML).toContain(
      'src="/src/assets/images/flag-th.png',
    )
  })

  test('click switch button', () => {
    const setStateMock = vi.fn()
    const useStateMock: any = (useState: boolean) => [useState, setStateMock]
    vi.spyOn(React, 'useState').mockImplementation(useStateMock)

    render(
      <BrowserRouter>
        <LanguageSwitcher
          isOpen={mockPropThaiLanguage.isOpen}
          setIsOpen={setStateMock}
        />
      </BrowserRouter>,
    )
    const languageSwitchButton = screen.getByTestId('flag')

    expect(languageSwitchButton).toBeDefined()
    expect(languageSwitchButton.innerHTML).toContain(
      'src="/src/assets/images/flag-th.png',
    )

    fireEvent.click(languageSwitchButton)
    // expect(screen.getByTestId('flag').className).toBe(/bg-thai-flag/i)
  })
})
