import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { government } from '../../client'
import type { IUser, IUserData, IUserLogin } from '../../interfaces/user'

const initialState: IUser = {
  isAuthenticated: false,
  authUser: null,
}

export const fetchLogin = createAsyncThunk(
  'user/fetchLogin',
  async ({ citizenId, laserId }: IUserLogin) => {
    const { data } = await government.post<IUserData>('/login', {
      citizenId: citizenId,
      laserId: laserId,
    })
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
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchLogin.fulfilled,
      (state, action: PayloadAction<IUserData>) => {
        state.isAuthenticated = true
        state.authUser = action.payload
      },
    )
  },
})

export const { setIsAuthenticated } = userSlice.actions

export const isUserAuthenticated = (state: RootState) =>
  state.user.isAuthenticated

export default userSlice.reducer
