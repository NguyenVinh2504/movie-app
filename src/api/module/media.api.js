import publicClient from '../client/public.client';

const mediaEndpoints = {
    list: ({ mediaType, mediaCategory }) => `${mediaType}/${mediaCategory}`,
    listTrending: ({ mediaType, timeWindow }) => `${mediaType}/trending/${timeWindow}`,
    listDiscoverGenres: ({ mediaType }) => `${mediaType}/discover`,
    detail: ({ mediaType, mediaId }) => `${mediaType}/detail/${mediaId}`,
    detailSeason: ({ series_id, season_number }) => `tv/${series_id}/season/${season_number}`,
    search: ({ mediaType }) => `${mediaType}/search`,
};

const mediaApi = {
    getList: async ({ mediaType, mediaCategory, page }) => {
        try {
            const response = await publicClient.get(mediaEndpoints.list({ mediaType, mediaCategory }), {
                params: {
                    page
                }
            });

            return { response };
        } catch (err) {
            return { err };
        }
    },
    getListTrending: async ({ mediaType, timeWindow, page }) => {
        try {
            const response = await publicClient.get(mediaEndpoints.listTrending({ mediaType, timeWindow }), {
                params: {
                    page
                }
            });
            return { response };
        } catch (err) {
            return { err };
        }
    },
    getDiscoverGenres: async ({ mediaType, withoutGenres, page }) => {
        try {
            const response = await publicClient.get(
                mediaEndpoints.listDiscoverGenres({ mediaType, withoutGenres, page }), {
                params: {
                    page,
                    with_genres: withoutGenres
                }
            }
            );

            return { response };
        } catch (err) {
            return { err };
        }
    },
    getDetail: async ({ mediaType, mediaId }) => {
        try {
            const response = await publicClient.get(mediaEndpoints.detail({ mediaType, mediaId }), {
                params: { append_to_response: 'videos,credits' }
            });
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
            const response = await publicClient.get(mediaEndpoints.search({ mediaType }), {
                params: {
                    query,
                    page
                }
            });

            return { response };
        } catch (err) {
            return { err };
        }
    },
};

export default mediaApi;
