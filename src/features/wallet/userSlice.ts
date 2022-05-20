import { AccountId, PrivateKey } from '@hashgraph/sdk'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


// export interface UserState {
//     userAccountId: AccountId;
//     userPrivateKey: PrivateKey;
//     userBalance: Number;
// }

const initialState = {
    userAccountId: null,
    userPrivateKey: null,
    userBalance: 0,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUserAccountId: (state, action) => {
            state.userAccountId = action.payload
        },
        updateUserPrivateKey: (state, action) => {
            state.userPrivateKey = action.payload
        },
        updateUserBalance : (state, action) => {
            state.userBalance = action.payload
        },
    },
})

export const { updateUserAccountId, updateUserPrivateKey, updateUserBalance } = userSlice.actions

export default userSlice.reducer