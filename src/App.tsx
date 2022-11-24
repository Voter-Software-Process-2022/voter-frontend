import { Suspense } from 'react'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Loader } from './components'
import Router from './router'
import { useSelector } from 'react-redux'
import type { RootState } from './app/store'

const App = () => {
  const user = useSelector((state: RootState) => state.user)

  return (
    <HistoryRouter history={createBrowserHistory()}>
      <Suspense fallback={<Loader />}>
        <Router user={user} />
      </Suspense>
    </HistoryRouter>
  )
}

export default App
