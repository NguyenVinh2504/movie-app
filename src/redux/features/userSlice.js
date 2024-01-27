import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'User',
    initialState: {
        isLoggedIn: false,
        user: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.isLoggedIn = true
            state.user = action.payload;
        },
        updateUser: (state, action) => {
            state.isLoggedIn = true
            state.user = { ...state.user, ...action.payload };
        },
        loginOut: (state) => {
            state.isLoggedIn = false
            state.user = null;
        },
    },
});
export const { setUser, updateUser, loginOut } = userSlice.actions;
export default userSlice.reducer;
