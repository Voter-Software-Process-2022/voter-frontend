import { describe, expect, test } from 'vitest'
import { BrowserRouter } from 'react-router-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SubscribeSection from '../../components/SubscribeSection'

describe('SubscribeSection', () => {
  test('render subscribe section', () => {
    render(
      <BrowserRouter>
        <SubscribeSection />
      </BrowserRouter>,
    )

    expect(screen.getByText('Get Our Updates')).toBeDefined()
    expect(
      screen.getByText('Find out about voting events and other news'),
    ).toBeDefined()
    const inputField = screen.getByPlaceholderText('john@mail.com')
    expect(inputField).toBeDefined()
    const subscribeButton = screen.getByTestId('subscribe-button')
    expect(subscribeButton).toBeDefined()
  })

  test('click subscribe button without email', () => {
    render(
      <BrowserRouter>
        <SubscribeSection />
      </BrowserRouter>,
    )

    expect(screen.getByText('Get Our Updates')).toBeDefined()
    expect(
      screen.getByText('Find out about voting events and other news'),
    ).toBeDefined()
    const inputField = screen.getByPlaceholderText('john@mail.com')
    expect(inputField).toBeDefined()
    const subscribeButton = screen.getByTestId('subscribe-button')
    expect(subscribeButton).toBeDefined()

    fireEvent.click(subscribeButton)
    // expect please field some email
  })

  test('click subscribe button with email', () => {
    render(
      <BrowserRouter>
        <SubscribeSection />
      </BrowserRouter>,
    )

    expect(screen.getByText('Get Our Updates')).toBeDefined()
    expect(
      screen.getByText('Find out about voting events and other news'),
    ).toBeDefined()
    const inputField = screen.getByPlaceholderText('john@mail.com')
    expect(inputField).toBeDefined()
    const subscribeButton = screen.getByTestId('subscribe-button')
    expect(subscribeButton).toBeDefined()

    // inputField fireevent.change
    // enter email
    fireEvent.click(subscribeButton)
    // expect please field some email
  })
})
