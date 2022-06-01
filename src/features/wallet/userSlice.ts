import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// export interface UserState {
//     userAccountId: AccountId;
//     userPrivateKey: PrivateKey;
//     userBalance: Number;
// }

const initialState = {
  userPublicKey: null,
  userBalance: 0,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserPublicKey: (state, action) => {
      state.userPublicKey = action.payload
    },
    updateUserBalance: (state, action) => {
      state.userBalance = action.payload
    },
  },
})

export const { updateUserPublicKey, updateUserBalance } = userSlice.actions

export default userSlice.reducer
