import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
    name: 'Favorites',
    initialState: {
        favorites: [],
    },
    reducers: {
        setFavorites: (state, action) => {
            state.favorites = action.payload;
        },
        addFavorite: (state, action) => {
            state.favorites = [...state.favorites, ...action.payload];
        },
        deleteFavorite: (state, action) => {
            state.favorites = action.payload;
        },
        removeFavorites: (state, action) => {
            state.favorites = [];
        }
    },
});
export const { addFavorite, deleteFavorite, removeFavorites, setFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
