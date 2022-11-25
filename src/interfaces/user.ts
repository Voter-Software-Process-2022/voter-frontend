import type { UserInformation } from '../generated'

export interface IUser {
  isAuthenticated: boolean
  authUser: UserInformation | null
  isAcceptedRules: boolean
  allowedVoteTopics: number[]
}

export interface IUserLogin {
  citizenId: string
  laserId: string
}
