import { describe, test } from 'vitest'
import { BrowserRouter, Router } from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import TopicCard from '../../components/TopicCard'

const mockProp = {
  topicId: 1,
  topicName: 'Vote1',
}

describe('test topic card', () => {
  test('render topic card', () => {
    render(
      <BrowserRouter>
        <TopicCard topicId={mockProp.topicId} topicName={mockProp.topicName} />
      </BrowserRouter>,
    )

    const topic = screen.getByTestId('topic')
    expect(topic).toBeDefined()
    expect(topic.innerHTML).toContain(
      `${mockProp.topicName}: ${mockProp.topicId}`,
    )

    const vote = screen.getByTestId('vote')
    expect(vote).toBeDefined()

    const result = screen.getByTestId('result')
    expect(result).toBeDefined()
  })

  test('click on vote', () => {
    const history = createMemoryHistory()
    render(
      <Router navigator={history} location={history.location}>
        <TopicCard topicId={mockProp.topicId} topicName={mockProp.topicName} />
      </Router>,
    )

    const topic = screen.getByTestId('topic')
    expect(topic).toBeDefined()
    expect(topic.innerHTML).toContain(
      `${mockProp.topicName}: ${mockProp.topicId}`,
    )

    const vote = screen.getByTestId('vote')
    expect(vote).toBeDefined()

    const result = screen.getByTestId('result')
    expect(result).toBeDefined()

    fireEvent.click(vote)
    // wait for vote page implementation
    // expect(history.location.pathname).toBe('/vote')
  })

  test('click on result', () => {
    const history = createMemoryHistory()
    render(
      <Router navigator={history} location={history.location}>
        <TopicCard topicId={mockProp.topicId} topicName={mockProp.topicName} />
      </Router>,
    )

    const topic = screen.getByTestId('topic')
    expect(topic).toBeDefined()
    expect(topic.innerHTML).toContain(
      `${mockProp.topicName}: ${mockProp.topicId}`,
    )

    const vote = screen.getByTestId('vote')
    expect(vote).toBeDefined()

    const result = screen.getByTestId('result')
    expect(result).toBeDefined()

    fireEvent.click(result)
    expect(history.location.pathname).toBe('/all-ballot')
  })
})
