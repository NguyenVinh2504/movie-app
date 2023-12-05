import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'User',
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        updateUser: (state, action) => {
            state.user = { token: state?.user?.token, ...action.payload };
        },
        loginOut: (state) => {
            state.user = null;
        },
    },
});
export const { setUser, updateUser, loginOut } = userSlice.actions;
export default userSlice.reducer;
