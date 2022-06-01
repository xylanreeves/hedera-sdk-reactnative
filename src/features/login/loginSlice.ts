import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface LoginState {
  isSignedIn: boolean
  isLoading: boolean
}

const initialState: LoginState = {
  isSignedIn: false,
  isLoading: false,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setIsSignedIn: (state, action) => {
      state.isSignedIn = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

export const { setIsSignedIn, setIsLoading } = loginSlice.actions

export default loginSlice.reducer
