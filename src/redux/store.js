import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { mediaDetailSlice, userSlice, globalLoadingSlice } from './features';
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
const persistConfig = {
    key: 'root',
    storage,
  }

  const rootReducer = combineReducers({
      detailMovie: mediaDetailSlice,
      user: userSlice,
      globalLoading: globalLoadingSlice,
    });
    const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store)