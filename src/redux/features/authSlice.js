import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'Auth',
    initialState: {
        accessToken: null,
    },
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        removeAccessToken: (state) => {
            state.accessToken = null;
        },
    },
});
export const { setAccessToken, removeAccessToken } = authSlice.actions;
export default authSlice.reducer;
