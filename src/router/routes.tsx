import { lazy } from 'react'
import type { IUser } from '../interfaces/user'
import { Navigate } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const SignUp = lazy(() => import('../pages/SignUp'))
const SignIn = lazy(() => import('../pages/SignIn'))
const Info = lazy(() => import('../pages/Info'))
const SeeAllBallot = lazy(() => import('../pages/SeeAllBallot'))
const ThankYouPage = lazy(() => import('../pages/ThankYouPage'))
const Topics = lazy(() => import('../pages/Topics'))
const PartyMember = lazy(() => import('../pages/PartyMember'))
const NotFound = lazy(() => import('../pages/NotFound'))
const Vote = lazy(() => import('../pages/Vote'))
const Forbidden = lazy(() => import('../pages/Forbidden'))

const routes = (user: IUser) => [
  {
    path: '/',
    element: <Home />,
  },
  { path: '/register', element: <SignUp /> },
  {
    path: '/login',
    element: !user.isAuthenticated ? <SignIn /> : <Navigate to='/' />,
  },
  { path: '/topics/:voteTopicId', element: <Info /> },
  {
    path: 'topics/candidate/:partyId',
    element: <PartyMember />,
  },
  {
    path: '/topics/:voteTopicId/vote',
    element:
      user.isAuthenticated && user.isAcceptedRules ? (
        <Vote />
      ) : (
        <Navigate to='/forbidden' />
      ),
  },
  { path: '/ballots/:voteTopicId', element: <SeeAllBallot /> },
  { path: '/thank-you', element: <ThankYouPage /> },
  { path: '/topics', element: <Topics /> },
  { path: '/forbidden', element: <Forbidden /> },
  { path: '*', element: <NotFound /> },
]

export default routes
