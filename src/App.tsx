import { Suspense } from 'react'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Loader } from './components'
import Router from './router'

const App = () => {
  return (
    <HistoryRouter history={createBrowserHistory()}>
      <Suspense fallback={<Loader />}>
        <Router />
      </Suspense>
    </HistoryRouter>
  )
}

export default App
