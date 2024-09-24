import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserData, UserRegister } from "../../utils/types";
import { base_url, createToken } from "../../utils/constants";
import { RootState } from "../../app/store";

export const registerUser = createAsyncThunk(
    'user/register',
    async (user: UserRegister) => {
        const response = await fetch(`${base_url}/user`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if (response.status === 409) {
            throw new Error(`user ${user.login} already exists`);
        }
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        const token = createToken(user.login, user.password);
        return { token, user: data };
    }
)

export const fetchUser = createAsyncThunk(
    'user/login',
    async (token: string) => {
        const response = await fetch(`${base_url}/login`, {
            method: 'POST',
            headers: {
                'Authorization': `${token}`
            }
        })
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        return { token, user: data };
    }
)

export const updateUser = createAsyncThunk<UserData, UserData, { state: RootState }>(
    'user/update',
    async (user, { getState }) => {
        const response = await fetch(`${base_url}/user`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getState().token,
            }
        })
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const { firstName, lastName } = await response.json();
        return { firstName, lastName };
    }
)

export const changePassword = createAsyncThunk<string, [string, string], { state: RootState }>(
    'user/password',
    async (passwords, { getState }) => {
        const response = await fetch(`${base_url}/user/password`, {
            method: 'PUT',
            headers: {
                'X-Password': passwords[0],
                'Authorization': createToken(getState().user.login, passwords[1]),
            }
        })
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        return createToken(getState().user.login, passwords[0]);
    }
)