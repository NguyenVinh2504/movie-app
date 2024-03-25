import { createSlice } from '@reduxjs/toolkit';
import { getAccessTokenLs } from '~/utils/auth';

const isAuthenticatedSlice = createSlice({
    name: 'isAuthenticated',
    initialState: {
        isAuthenticated: Boolean(getAccessTokenLs())
    },
    reducers: {
        setIsAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload
        }
    },
});
export const { setIsAuthenticated } = isAuthenticatedSlice.actions;
export default isAuthenticatedSlice.reducer;
