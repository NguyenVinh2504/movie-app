import axios from 'axios';
import privateClient from '../client/private.client';
import publicClient from '../client/public.client';
axios.defaults.withCredentials = true;
const commentEndpoints = {
    addComment: 'comment/add-comment',
    getListComment: 'comment/get-comment/',
};
const commentApi = {
    addComment: async ({ movieId, movieType, content }) =>
        await privateClient.post(commentEndpoints.addComment, {
            movieId,
            movieType,
            content,
        }),
    getListComment: async ({ mediaType, movieId, pageParam }) =>
        await publicClient.get(
            `${commentEndpoints.getListComment}${mediaType}/${movieId}`,
            {
                params: {
                    page: pageParam,
                },
            },
        ),
};

export default commentApi;
