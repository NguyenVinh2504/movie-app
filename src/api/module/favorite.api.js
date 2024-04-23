import axios from 'axios';
import privateClient from '../client/private.client';
axios.defaults.withCredentials = true;
const favoriteEndpoints = {
    addFavorite: 'favorite',
    removeFavorite: (favoriteId) => `favorite/${favoriteId}`,
    getFavorites: `favorite`,
};
const favoriteApi = {
    addFavorite: async ({ media_type, mediaId, title, poster_path, vote_average, release_date }) => {
        try {
            const response = await privateClient.post(favoriteEndpoints.addFavorite, {
                media_type,
                mediaId,
                title,
                poster_path,
                vote_average,
                release_date,
            });
            return { response };
        } catch (err) {
            return { err };
        }
    },
    removeFavorite: async (favoriteId) => {
        try {
            const response = await privateClient.delete(favoriteEndpoints.removeFavorite(favoriteId));
            return { response };
        } catch (err) {
            return { err };
        }
    },
    getFavorites: () => {
        return privateClient.get(favoriteEndpoints.getFavorites)
    },
};

export default favoriteApi;
