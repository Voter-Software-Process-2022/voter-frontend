import React from 'react'
import './vote.css'
import { Link, useParams } from 'react-router-dom'
import ReactRouterPrompt from 'react-router-prompt'
import { ErrorBoundary } from 'react-error-boundary'

const Vote: React.FC = () => {
  const { topicId } = useParams()
  const formIsDirty = true

  function ErrorFallback({
    error,
    resetErrorBoundary,
  }: {
    error: Error
    resetErrorBoundary: () => void
  }) {
    return (
      <div role='alert'>
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>Try again</button>
      </div>
    )
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <div className='min-h-screen'>
        <ReactRouterPrompt when={formIsDirty}>
          {({ isActive, onConfirm, onCancel }) =>
            isActive && (
              // styling modal alert later
              <div className='lightbox'>
                <div className='container'>
                  <p>Do you really want to leave?</p>
                  <button onClick={onCancel}>Cancel</button>
                  <button onClick={onConfirm}>Ok</button>
                </div>
              </div>
            )
          }
        </ReactRouterPrompt>
        <Link to='/'>home</Link>
        <div className='max-w-6xl mx-auto'>
          <div className='flex items-center justify-between'>
            <span>Ballot ID: 11</span>
            <span>{`Vote for ${topicId === '1' ? 'MPS' : 'Party'}`}</span>
          </div>
          <div className='flex flex-col'>
            {[1, 2, 3, 4].map((number) => (
              <div className='flex' key={number}>
                <input
                  className='checkbox-budget'
                  type='radio'
                  name='budget'
                  id={`budget-${number}`}
                />
                <label
                  className='for-checkbox-budget'
                  htmlFor={`budget-${number}`}
                >
                  <span>{number}</span>
                </label>
              </div>
            ))}
            <div className='flex'>
              <input
                className='checkbox-budget'
                type='radio'
                name='budget'
                id='no'
              />
              <label className='for-checkbox-budget' htmlFor='no'>
                <span>ไม่ลงคะแนนเสียง</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  )
}

export default Vote
