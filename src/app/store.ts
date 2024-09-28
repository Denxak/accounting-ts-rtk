import { configureStore } from "@reduxjs/toolkit";
import token from "../features/slices/tokenSlice";
import user from "../features/slices/userSlice";
import { Token, UserProfile } from "../utils/types";

const savedState = localStorage.getItem('state');
let preloadedState: { user: UserProfile; token: Token } | undefined;

if (savedState) {
    const parsedState = JSON.parse(savedState);
    if (typeof parsedState.token === 'string') {
        localStorage.removeItem('state');
        preloadedState = undefined;
    } else {
        preloadedState = parsedState as { user: UserProfile; token: Token };
    }
}

export const store = configureStore({
    reducer: {
        token,
        user,
    },
    preloadedState
})

store.subscribe(() => localStorage.setItem('state', JSON.stringify(store.getState())));

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store