import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'User',
    initialState: {
        user: false,
    },
    reducers: {
        setUser: (state, action) => {
            console.log(state.user);
            state.user = action.payload;
        },
    },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
