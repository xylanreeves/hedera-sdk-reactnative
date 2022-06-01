import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  hederaClient: null,
}

export const hederaSlice = createSlice({
  name: 'hedera',
  initialState,
  reducers: {
    setHederaClient: (state, action) => {
      state.hederaClient = action.payload
    },
  },
})

export const { setHederaClient } = hederaSlice.actions
export default hederaSlice.reducer
