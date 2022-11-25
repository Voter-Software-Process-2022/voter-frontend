import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'js-cookie'
import type { RootState } from '../../app/store'
import type {
  CreateUserResponse,
  LoginUserInputV2,
  LoginUserResponseV2,
  VoteAvailableResponse,
} from '../../generated'
import { UserApi, AuthApi } from '../../generated'
import type { IUser } from '../../interfaces/user'
import { voteApi } from '../vote/voteSlice'

const authApi = new AuthApi()
const userApi = new UserApi()

const initialState: IUser = {
  isAuthenticated: false,
  authUser: null,
  isAcceptedRules: false,
  allowedVoteTopics: [],
}

export const fetchLogin = createAsyncThunk(
  'user/fetchLogin',
  async ({ citizenId, laserId }: LoginUserInputV2) => {
    const loginUserInput = {
      citizenId: citizenId,
      laserId: laserId,
    }
    const { data } = await authApi.authLoginV2Post(loginUserInput)
    return data
  },
)

export const fetchUserInformation = createAsyncThunk(
  'user/fetchUserInformation',
  async () => {
    const token = Cookies.get('token')
    const options = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const { data } = await userApi.usersMeGet(options)
    return data
  },
)

export const fetchUserRightToVote = createAsyncThunk(
  'user/fetchUserRightToVote',
  async () => {
    const token = Cookies.get('token')
    const options = {
      headers: { Authorization: `Bearer ${token}` },
    }
    const { data } = await voteApi.votePreVerifyPost(options)
    // const { data } = await axios.get(
    //   'http://localhost:8000/api/vote/pre-verify',
    //   options,
    // )
    return data
  },
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsAuthenticated: (state: IUser, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload
    },
    setIsAcceptedRules: (state: IUser, action: PayloadAction<boolean>) => {
      state.isAcceptedRules = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchLogin.fulfilled,
      (state, action: PayloadAction<LoginUserResponseV2>) => {
        const { token } = action.payload
        if (token) {
          state.isAuthenticated = true
          Cookies.set('token', token)
        }
      },
    )
    builder.addCase(
      fetchUserInformation.fulfilled,
      (state, action: PayloadAction<CreateUserResponse>) => {
        const { user } = action.payload
        if (user) {
          state.authUser = user
        }
      },
    )
    builder.addCase(fetchUserInformation.rejected, (state) => {
      state.isAuthenticated = false
      state.authUser = null
      state.isAcceptedRules = false
      Cookies.remove('token')
    })
    builder.addCase(
      fetchUserRightToVote.fulfilled,
      (state, action: PayloadAction<VoteAvailableResponse[]>) => {
        const { payload } = action
        state.allowedVoteTopics = payload.map(
          (topic) => topic.voteTopicId ?? -1,
        )
      },
    )
  },
})

export const { setIsAuthenticated, setIsAcceptedRules } = userSlice.actions

export const isUserAuthenticated = (state: RootState) =>
  state.user.isAuthenticated

export default userSlice.reducer
