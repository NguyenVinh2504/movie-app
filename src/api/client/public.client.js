import axios from 'axios';
import queryString from 'query-string';
import { API_ROOT } from '~/utils/constants';

const baseURL = `${API_ROOT}/api/v1/`;
const publicClient = axios.create({
    baseURL,
    paramsSerializer: {
        encode: (params) => queryString.stringify(params),
    },
});

publicClient.interceptors.request.use(async (config) => {
    return {
        ...config,
        headers: {
            'Content-Type': 'application/json',
        },
    };
});

publicClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (err) => {
        throw err?.response?.data ?? { message: 'Không có kết nối' };
    },
);

export default publicClient;
