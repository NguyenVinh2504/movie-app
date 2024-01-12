import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { mediaDetailSlice, userSlice, globalLoadingSlice, authSlice, favoritesSlice } from './features';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['globalLoading', 'detailMovie'],
};

const rootReducer = combineReducers({
    detailMovie: mediaDetailSlice,
    user: userSlice,
    favorites: favoritesSlice,
    globalLoading: globalLoadingSlice,
    auth: authSlice
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
export const persistor = persistStore(store);
