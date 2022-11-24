import type { UserInformation } from '../generated'

export interface IUser {
  isAuthenticated: boolean
  authUser: UserInformation | null
  isAcceptedRules: boolean
}

export interface IUserLogin {
  citizenId: string
  laserId: string
}
