import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga'
import { userSlice, authSlice, favoritesSlice, isAuthenticatedSlice } from './features';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import rootSaga from './rootSaga';
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['globalLoading', 'detailMovie', 'isAuthenticated'],
};
// const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    // detailMovie: mediaDetailSlice,
    user: userSlice,
    favorites: favoritesSlice,
    isAuthenticated: isAuthenticatedSlice,
    // globalLoading: globalLoadingSlice,
    auth: authSlice
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: true,
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
    // .concat(sagaMiddleware),
});

// sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store);
