import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Loader } from './components'
import Router from './router'

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Router />
      </Suspense>
    </BrowserRouter>
  )
}

export default App
