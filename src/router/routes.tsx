import { lazy } from 'react'
const Home = lazy(() => import('../pages/Home'))
const SignUp = lazy(() => import('../pages/SignUp'))
const SignIn = lazy(() => import('../pages/SignIn'))
const Info = lazy(() => import('../pages/Info'))
const routes = [
  {
    path: '/',
    element: <Home />,
  },
  { path: '/register', element: <SignUp /> },
  { path: '/login', element: <SignIn /> },
  { path: '/info/:id', element: <Info /> },
]

export default routes
