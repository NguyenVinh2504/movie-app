import axios from 'axios';
import queryString from 'query-string';
import { API_ROOT } from '~/utils/constants';
import { jwtDecode } from 'jwt-decode';
import userApi from '~/api/module/user.api';
import { store } from '~/redux/store';
import { setAccessToken } from '~/redux/features/authSlice';
const baseURL = `${API_ROOT}/api/v1/`;
const privateClient = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
    paramsSerializer: {
        encode: (params) => queryString.stringify(params),
    },
});

privateClient.interceptors.request.use(async (config) => {
    const accessToken  = store.getState().auth.accessToken;
    config.headers.Authorization = `Bearer ${accessToken}`;
    let date = new Date();
    const decodeToken = jwtDecode(accessToken);
    if (decodeToken.exp < date.getTime() / 1000) {
        const { response } = await userApi.refreshToken();
        if (response) {
            const newAccessToken = response.data.accessToken;
            store.dispatch(setAccessToken(newAccessToken));
            config.headers.Authorization = `Bearer ${newAccessToken}`;
        }
    }
    return config;
});

privateClient.interceptors.response.use(
    (response) => {
        if (response && response.data) return response.data;
        return response;
    },
    (err) => {
        if (axios.isCancel(err)) {
            throw err;
        } else {
            throw err?.response?.data ?? { message: 'Không thể lấy dữ liệu' };
        }
    },
);

export default privateClient;
