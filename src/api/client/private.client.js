import axios from 'axios';
import queryString from 'query-string';
import { API_ROOT } from '~/utils/constants';
import { jwtDecode } from 'jwt-decode';
import userApi from '~/api/module/user.api';
import { store } from '~/redux/store';
import { setUser } from '~/redux/features/userSlice';
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
    const { token, ...user } = store.getState().user.user;
    config.headers.Authorization = `Bearer ${token}`;
    let date = new Date();
    const decodeToken = jwtDecode(token);
    if (decodeToken.exp < date.getTime() / 1000) {
        const { response } = await userApi.refreshToken();
        const refreshUser = {
            ...user,
            token: response.data.accessToken,
        };
        store.dispatch(setUser(refreshUser));
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
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
