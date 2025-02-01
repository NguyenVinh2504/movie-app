import privateClient from '../client/private.client';

const ROOTPATH = 'get-video';
const videoEndpoints = {
    getVideoMovie: `${ROOTPATH}/movie`,
};
const videoApi = {
    getVideoMovie: async ({ movieId }) =>
        await privateClient.get(`${videoEndpoints.getVideoMovie}/${movieId}`),
};

export default videoApi;
