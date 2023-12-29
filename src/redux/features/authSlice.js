import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'Auth',
    initialState: {
        accessToken: null,
        refreshToken: null
    },
    reducers: {
        setToken: (state, action) => {
             state.accessToken = action.payload.accessToken;
             state.refreshToken = action.payload.refreshToken;
        },
        removeToken: (state) => {
            state.accessToken = null;
            state.refreshToken = null;
        },
    },
});
export const { setToken, removeToken } = authSlice.actions;
export default authSlice.reducer;
