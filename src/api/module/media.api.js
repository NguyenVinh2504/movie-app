import publicClient from '../client/public.client';

const mediaEndpoints = {
    list: ({ mediaType, mediaCategory, page }) => `${mediaType}/${mediaCategory}?page=${page}`,
    listTrending: ({ mediaType, timeWindow, page }) => `${mediaType}/trending/${timeWindow}?page=${page}`,
    listDiscoverGenres: ({ mediaType, withoutGenres, page }) =>
        `${mediaType}/discover?page=${page}&with_genres=${withoutGenres}`,
    detail: ({ mediaType, mediaId }) => `${mediaType}/detail/${mediaId}?append_to_response=videos,credits`,
    detailSeason: ({ series_id, season_number }) => `tv/${series_id}/season/${season_number}`,
    search: ({ mediaType, query, page }) => `${mediaType}/search?query=${query}&page=${page}`,
};

const mediaApi = {
    getList: async ({ mediaType, mediaCategory, page }) => {
        try {
            const response = await publicClient.get(mediaEndpoints.list({ mediaType, mediaCategory, page }));

            return { response };
        } catch (err) {
            return { err };
        }
    },
    getListTrending: async ({ mediaType, timeWindow, page }) => {
        try {
            const response = await publicClient.get(mediaEndpoints.listTrending({ mediaType, timeWindow, page }));

            return { response };
        } catch (err) {
            return { err };
        }
    },
    getDiscoverGenres: async ({ mediaType, withoutGenres, page }) => {
        try {
            const response = await publicClient.get(
                mediaEndpoints.listDiscoverGenres({ mediaType, withoutGenres, page }),
            );

            return { response };
        } catch (err) {
            return { err };
        }
    },
    getDetail: async ({ mediaType, mediaId }) => {
        try {
            const response = await publicClient.get(mediaEndpoints.detail({ mediaType, mediaId }));

            return { response };
        } catch (err) {
            return { err };
        }
    },
    getDetailSeason: async ({ series_id, season_number }) => {
        try {
            const response = await publicClient.get(mediaEndpoints.detailSeason({ series_id, season_number }));

            return { response };
        } catch (err) {
            return { err };
        }
    },
    search: async ({ mediaType, query, page }) => {
        try {
            const response = await publicClient.get(mediaEndpoints.search({ mediaType, query, page }));

            return { response };
        } catch (err) {
            return { err };
        }
    },
};

export default mediaApi;
