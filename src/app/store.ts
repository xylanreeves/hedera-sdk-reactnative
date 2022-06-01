import userReducer from '../features/wallet/userSlice'
import loginReducer from '../features/login/loginSlice'
import hederaReducer from '../features/hedera/hederaSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    user: userReducer,
    login: loginReducer,
    hedera: hederaReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch