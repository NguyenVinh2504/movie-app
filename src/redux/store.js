import { configureStore } from '@reduxjs/toolkit';
import { mediaDetailSlice, userSlice } from './features';
const rootReducer = {
    detailMovie: mediaDetailSlice,
    user: userSlice,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
