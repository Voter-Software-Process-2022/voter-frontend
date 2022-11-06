import { lazy } from 'react'

const Home = lazy(() => import('../pages/Home'))
const SignUp = lazy(() => import('../pages/SignUp'))
const SignIn = lazy(() => import('../pages/SignIn'))
const SeeAllBallot = lazy(() => import('../pages/SeeAllBallot'))

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  { path: '/register', element: <SignUp /> },
  { path: '/login', element: <SignIn /> },
  { path: '/all-ballot', element: <SeeAllBallot /> },
]

export default routes
