import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        login: '',
        isLoggedIn: false
    },
    reducers: {
        login(state, action) {
            state.login = action.payload
            state.isLoggedIn = true
        },
        logOut(state, action) {
            state.login = ''
            state.isLoggedIn = false
        }
    }

})
export const { login, logOut } = userSlice.actions