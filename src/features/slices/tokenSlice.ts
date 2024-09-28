import { createSlice } from "@reduxjs/toolkit";
import { changePassword, fetchUser, registerUser } from "../api/accountApi";
import { Token } from "../../utils/types";

const initialState: Token = {
    token: "",
    error: null,
};

const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        putToken: (state, action) => {
            state.error = null;
            state.token = action.payload
        },
        deleteToken: (state) => {
            state.token = "";
            state.error = null;
        },
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.error = null; 
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.error = null;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.error = action.error.message; 
            })
            .addCase(changePassword.fulfilled, (state, action) => {
                state.token = action.payload;
                state.error = null; 
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
})

export const { putToken, deleteToken, clearError } = tokenSlice.actions;
export default tokenSlice.reducer;
