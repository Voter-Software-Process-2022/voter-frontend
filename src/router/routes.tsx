import { lazy } from 'react'

const Home = lazy(() => import('../pages/Home'))
const SignUp = lazy(() => import('../pages/SignUp'))

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  { path: '/register', element: <SignUp /> },
]

export default routes
