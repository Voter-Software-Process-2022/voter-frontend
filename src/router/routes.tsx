import { lazy } from 'react'
import type { IUser } from '../interfaces/user'
const Home = lazy(() => import('../pages/Home'))
const SignUp = lazy(() => import('../pages/SignUp'))
const SignIn = lazy(() => import('../pages/SignIn'))
const Info = lazy(() => import('../pages/Info'))
const SeeAllBallot = lazy(() => import('../pages/SeeAllBallot'))
const ThankYouPage = lazy(() => import('../pages/ThankYouPage'))
const Topics = lazy(() => import('../pages/Topics'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Vote = lazy(() => import('../pages/Vote'))
const Forbidden = lazy(() => import('../pages/Forbidden'))
const routes = (user: IUser) => [
  {
    path: '/',
    element: <Home />,
  },
  { path: '/register', element: <SignUp /> },
  { path: '/login', element: <SignIn /> },
  { path: '/topics/:id', element: <Info /> },
  {
    path: '/topics/:topicId/vote',
    element: user.isAcceptedRules ? <Vote /> : <div>Not allowed</div>,
  },
  { path: '/all-ballot', element: <SeeAllBallot /> },
  { path: '/thank-you', element: <ThankYouPage /> },
  { path: '/topics', element: <Topics /> },
  { path: '*', element: <NotFound /> },
  { path: '/403', element: <Forbidden /> },
]

export default routes
