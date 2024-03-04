import axios from 'axios';
import queryString from 'query-string';
import { API_ROOT } from '~/utils/constants';
// import { jwtDecode } from 'jwt-decode';
import userApi from '~/api/module/user.api';
import { store } from '~/redux/store';
import { removeToken, setToken } from '~/redux/features/authSlice';
import { clearLS, getAccessTokenLs, setAccessTokenLs } from '~/utils/auth';
import { isAxiosExpiredTokenError, isAxiosUnauthorizedError } from '~/utils/utils';
import { loginOut } from '~/redux/features/userSlice';
import { removeFavorites } from '~/redux/features/favoritesSlice';
const baseURL = `${API_ROOT}/api/v1/`;
const privateClient = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
    paramsSerializer:
        (params) => queryString.stringify(params),
});
let refreshTokenRequest = null

privateClient.interceptors.request.use(async (config) => {
    // const { refreshToken } = store.getState()?.auth;
    const accessToken = getAccessTokenLs()
    if (accessToken) {
        // let date = new Date();
        config.headers.Authorization = `Bearer ${accessToken}`;
        // const decodeToken = jwtDecode(accessToken);
        // if (decodeToken.exp < date.getTime() / 1000) {
        //     console.log('ada')
        //     refreshTokenRequest = refreshTokenRequest ? refreshTokenRequest : userApi.refreshToken({ refreshToken, accessToken });
        //     const { response } = await refreshTokenRequest;
        //     console.log('ada 2')
        //     if (response) {
        //         const { accessToken, refreshToken } = response.data;
        //         store.dispatch(setToken({ accessToken, refreshToken }));
        //         setAccessTokenLs(accessToken)
        //         config.headers.Authorization = `Bearer ${accessToken}`;
        //         refreshTokenRequest = null
        //         return config
        //     }
        // }
        return config
    }
    return config;
});

privateClient.interceptors.response.use(
    (response) => {
        if (response && response.data) return response.data;
        return response;
    },
    async (err) => {
        const config = err.response?.config || {}
        const { url } = config
        if (isAxiosUnauthorizedError(err) && url !== '/auth/refresh-token') {
            const { refreshToken } = store.getState()?.auth;
            const accessToken = getAccessTokenLs()
            if (isAxiosExpiredTokenError(err)) {
                refreshTokenRequest = refreshTokenRequest ? refreshTokenRequest : userApi.refreshToken({ refreshToken, accessToken });
                const { response } = await refreshTokenRequest;
                if (response) {
                    const { accessToken, refreshToken } = response.data;
                    store.dispatch(setToken({ accessToken, refreshToken }));
                    setAccessTokenLs(accessToken)
                    refreshTokenRequest = null
                    return privateClient(err.response?.config)
                }
            }
            store.dispatch(loginOut())
            store.dispatch(removeToken())
            store.dispatch(removeFavorites())
            clearLS()
        }

        if (axios.isCancel(err)) {
            throw err;
        }
        // else if (err?.response?.status === 401) {
        //     store.dispatch(loginOut())
        //     store.dispatch(removeToken())
        //     throw err?.response?.data ?? { message: 'Không thể lấy dữ liệu' };
        // }
        else {
            throw err?.response?.data ?? { message: 'Không thể lấy dữ liệu' };
        }
    },
);

export default privateClient;
