import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'User',
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});
