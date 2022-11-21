import { describe, test } from 'vitest'
import { BrowserRouter, Router } from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import SidebarLink from '../../components/SidebarLink'

const mockProp = {
  topic: 'Vote',
  subTopic: [
    {
      topic: 'Vote 1',
      path: '/vote/1',
    },
    {
      topic: 'Vote 2',
      path: '/vote/2',
    },
  ],
  hasSubTopic: true,
  path: '/vote',
}

const mockPropNoSubTopic = {
  topic: 'Home',
  subTopic: [],
  hasSubTopic: false,
  path: '/',
}

describe('test sidebar link component with prop have sub topic', () => {
  test('render sidebar link with correctly topic', () => {
    render(
      <BrowserRouter>
        <SidebarLink
          topic={mockProp.topic}
          subTopic={mockProp.subTopic}
          hasSubTopic={mockProp.hasSubTopic}
          path={mockProp.path}
        />
      </BrowserRouter>,
    )
    const topicDOM = screen.getByTestId('sidebar-topic')
    expect(topicDOM).toBeDefined()
    expect(topicDOM.textContent).toBe(mockProp.topic)
  })

  test('click on topic then render all sub topic', () => {
    render(
      <BrowserRouter>
        <SidebarLink
          topic={mockProp.topic}
          subTopic={mockProp.subTopic}
          hasSubTopic={mockProp.hasSubTopic}
          path={mockProp.path}
        />
      </BrowserRouter>,
    )
    const topicDOM = screen.getByTestId('sidebar-topic')
    expect(topicDOM).toBeDefined()
    expect(topicDOM.textContent).toBe(mockProp.topic)

    fireEvent.click(topicDOM)
    mockProp.subTopic.forEach((subTopic) => {
      const subTopicDOM = screen.getByText(subTopic.topic)
      expect(subTopicDOM).toBeDefined()
    })
  })

  test('click on subtopic to navigate to specific path', () => {
    const history = createMemoryHistory()
    render(
      <Router navigator={history} location={history.location}>
        <SidebarLink
          topic={mockProp.topic}
          subTopic={mockProp.subTopic}
          hasSubTopic={mockProp.hasSubTopic}
          path={mockProp.path}
        />
      </Router>,
    )

    const topicDOM = screen.getByTestId('sidebar-topic')
    expect(topicDOM).toBeDefined()
    fireEvent.click(topicDOM)
    const subTopic = mockProp.subTopic[0]
    const subTopicDOM = screen.getByText(subTopic.topic)
    expect(subTopicDOM).toBeDefined()
    fireEvent.click(subTopicDOM)
    expect(history.location.pathname).toBe(subTopic.path)
  })
})

describe('test sidebar link component with prop have sub topic', () => {
  test('render sidebar link with correctly topic', () => {
    render(
      <BrowserRouter>
        <SidebarLink
          topic={mockPropNoSubTopic.topic}
          subTopic={mockPropNoSubTopic.subTopic}
          hasSubTopic={mockPropNoSubTopic.hasSubTopic}
          path={mockPropNoSubTopic.path}
        />
      </BrowserRouter>,
    )
    const topicDOM = screen.getByTestId('sidebar-topic')
    expect(topicDOM).toBeDefined()
    expect(topicDOM.textContent).toBe(mockPropNoSubTopic.topic)
  })

  test('click on topic then navigate to specific path', () => {
    const history = createMemoryHistory()
    render(
      <Router navigator={history} location={history.location}>
        <SidebarLink
          topic={mockPropNoSubTopic.topic}
          subTopic={mockPropNoSubTopic.subTopic}
          hasSubTopic={mockPropNoSubTopic.hasSubTopic}
          path={mockPropNoSubTopic.path}
        />
      </Router>,
    )

    const topicDOM = screen.getByTestId('sidebar-topic')
    expect(topicDOM).toBeDefined()
    fireEvent.click(topicDOM)
    expect(history.location.pathname).toBe(mockPropNoSubTopic.path)
  })
})
