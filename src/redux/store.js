// import { createStore } from 'redux';
// import rootReducer from './reducer';
// const store = createStore(rootReducer);

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import mediaDetailReducer from '~/components/MediaDetail/MediaDetailSlice';
import userSlice from '~/redux/userSlice';

const store = configureStore({
    reducer: {
        showHideDetail: mediaDetailReducer.reducer,
        user: userSlice.reducer,
    },
});

export default store;
