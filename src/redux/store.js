// import { createStore } from 'redux';
// import rootReducer from './reducer';
// const store = createStore(rootReducer);

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import mediaDetailReducer from './features/mediaDetailSlice';
import userSlice from './features/userSlice';
const rootReducer = {
    detailMovie: mediaDetailReducer,
    user: userSlice,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
