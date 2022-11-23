import { lazy } from 'react'
const Home = lazy(() => import('../pages/Home'))
const SignUp = lazy(() => import('../pages/SignUp'))
const SignIn = lazy(() => import('../pages/SignIn'))
const Info = lazy(() => import('../pages/Info'))
const SeeAllBallot = lazy(() => import('../pages/SeeAllBallot'))
const ThankYouPage = lazy(() => import('../pages/ThankYouPage'))
const Topics = lazy(() => import('../pages/Topics'))
const Vote = lazy(() => import('../pages/Vote'))
const routes = [
  {
    path: '/',
    element: <Home />,
  },
  { path: '/register', element: <SignUp /> },
  { path: '/login', element: <SignIn /> },
  { path: '/topics/:id', element: <Info /> },
  {
    path: '/topics/:topicId/vote',
    element: <Vote />,
  },
  { path: '/all-ballot', element: <SeeAllBallot /> },
  { path: '/thank-you', element: <ThankYouPage /> },
  { path: '/topics', element: <Topics /> },
]

export default routes
