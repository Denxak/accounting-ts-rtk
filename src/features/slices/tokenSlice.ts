import { createSlice } from "@reduxjs/toolkit";
import { changePassword, fetchUser, registerUser } from "../api/accountApi";

const tokenSlice = createSlice({
    name: "token",
    initialState: "",
    reducers: {
        putToken: (_state, action) => action.payload,
        deleteToken: () => "",
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (_state, action) => action.payload.token)
            .addCase(fetchUser.fulfilled, (_state, action) => action.payload.token)
            .addCase(changePassword.fulfilled, (_state, action) => action.payload);
    },
})

export const { putToken, deleteToken } = tokenSlice.actions;
export default tokenSlice.reducer;
