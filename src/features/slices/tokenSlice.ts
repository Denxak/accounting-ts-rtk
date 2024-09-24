import { createSlice } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
    name: "token",
    initialState: "",
    reducers: {
        putToken: (_state, action) => action.payload,
        deleteToken: () => "",
    },
})

export const { putToken, deleteToken } = tokenSlice.actions;
export default tokenSlice.reducer;
