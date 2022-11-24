import { useRoutes } from 'react-router-dom'
import type { IUser } from '../interfaces/user'
import routes from './routes'

export default function Router({ user }: { user: IUser }) {
  return useRoutes(routes(user))
}
