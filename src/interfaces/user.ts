export interface IUser {
  isAuthenticated: boolean
  authUser: IUserData | null
  isAcceptedRules: boolean
}

export interface IUserLogin {
  citizenId: string
  laserId: string
}

export interface IUserData {
  firstname: string
  location: string
}
