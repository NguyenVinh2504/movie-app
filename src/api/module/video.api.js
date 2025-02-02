import privateClient from '../client/private.client';

const ROOTPATH = 'get-video';
const videoEndpoints = {
    getVideoMovie: `${ROOTPATH}/movie`,
    getVideoTV: `${ROOTPATH}/tv`,
};
const videoApi = {
    getVideoMovie: async ({ mediaId }) =>
        await privateClient.get(`${videoEndpoints.getVideoMovie}/${mediaId}`),
    getVideoTV: async ({ mediaId, episodeNumber, seasonNumber, episodeId }) =>
        await privateClient.get(
            `${videoEndpoints.getVideoTV}/${mediaId}/${episodeId}/${seasonNumber}/${episodeNumber}`,
        ),
};

export default videoApi;
