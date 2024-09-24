import { configureStore } from "@reduxjs/toolkit";
import token from "../features/slices/tokenSlice";
import user from "../features/slices/userSlice";

export const store = configureStore({
    reducer: {
        token,
        user,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store