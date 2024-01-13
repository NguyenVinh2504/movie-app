import axios from 'axios';
import queryString from 'query-string';
import { toast } from 'react-toastify';
import { API_ROOT } from '~/utils/constants';
axios.defaults.withCredentials = true;

const baseURL = `${API_ROOT}/api/v1/`;
const publicClient = axios.create({
    baseURL,
    withCredentials: true,
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
        if (!window.navigator.onLine && !err.response && err.code === "ERR_NETWORK") {
            toast.error('Mất kết nối với mạng');
        }
        throw err?.response?.data ?? { message: 'Không có kết nối' };
    },
);
export default publicClient;
