import axios from 'axios';
import queryString from 'query-string';
import { API_ROOT } from '~/utils/constants';
// import { jwtDecode } from 'jwt-decode';
import { userEndpoints } from '~/api/module/user.api';
import { store } from '~/redux/store';
import { removeToken, setToken } from '~/redux/features/authSlice';
import { clearLS, getAccessTokenLs, getRefreshTokenLs, setAccessTokenLs, setRefreshTokenLs } from '~/utils/auth';
import { isAxiosExpiredTokenError, isAxiosUnauthorizedError } from '~/utils/utils';
import { loginOut } from '~/redux/features/userSlice';
import { removeFavorites } from '~/redux/features/favoritesSlice';
import { setIsAuthenticated } from '~/redux/features/isAuthenticated';
const baseURL = `${API_ROOT}/api/v1/`;
// const privateClient1 = axios.create({
//     baseURL,
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     withCredentials: true,
//     paramsSerializer:
//         (params) => queryString.stringify(params),
// });
// let refreshTokenRequest = null
// let accessToken = null
// privateClient.interceptors.request.use(async (config) => {
//     accessToken = accessToken ? accessToken : getAccessTokenLs()
//     // const { accessToken } = store.getState()?.auth;
//     // const accessToken = getAccessTokenLs()
//     if (accessToken) {
//         // let date = new Date();
//         config.headers.Authorization = `Bearer ${accessToken}`;
//         // const decodeToken = jwtDecode(accessToken);
//         // if (decodeToken.exp < date.getTime() / 1000) {
//         //     console.log('ada')
//         //     refreshTokenRequest = refreshTokenRequest ? refreshTokenRequest : userApi.refreshToken({ refreshToken, accessToken });
//         //     const { response } = await refreshTokenRequest;
//         //     console.log('ada 2')
//         //     if (response) {
//         //         const { accessToken, refreshToken } = response.data;
//         //         store.dispatch(setToken({ accessToken, refreshToken }));
//         //         setAccessTokenLs(accessToken)
//         //         config.headers.Authorization = `Bearer ${accessToken}`;
//         //         refreshTokenRequest = null
//         //         return config
//         //     }
//         // }
//         return config
//     }
//     return config;
// });

// privateClient.interceptors.response.use(
//     (response) => {
//         const { url } = response.config
//         if (url === 'auth/logout') {
//             accessToken = null
//         }
//         if (response && response.data) return response.data;
//         return response;
//     },
//     async (err) => {
//         const config = err.response?.config || {}
//         const { url } = config
//         if (isAxiosUnauthorizedError(err) && url !== userEndpoints.refreshToken) {
//             console.log(url);
//             const { refreshToken } = store.getState()?.auth;
//             if (isAxiosExpiredTokenError(err)) {
//                 refreshTokenRequest = refreshTokenRequest ? refreshTokenRequest : userApi.refreshToken({ refreshToken, accessToken });
//                 const { response } = await refreshTokenRequest;
//                 if (response) {
//                     const { accessToken: newAccessToken, refreshToken } = response.data;
//                     accessToken = newAccessToken
//                     store.dispatch(setToken({ accessToken: newAccessToken, refreshToken }));
//                     setAccessTokenLs(newAccessToken)
//                     setTimeout(() => {
//                         refreshTokenRequest = null
//                     }, 10000);
//                     return privateClient({
//                         ...config,
//                         headers: {
//                             ...config.headers,
//                             Authorization: `Bearer ${accessToken}`
//                         }
//                     })
//                 }
//             }
//             store.dispatch(loginOut())
//             store.dispatch(removeToken())
//             store.dispatch(removeFavorites())
//             clearLS()
//         }

//         if (axios.isCancel(err)) {
//             throw err;
//         }
//         // else if (err?.response?.status === 401) {
//         //     store.dispatch(loginOut())
//         //     store.dispatch(removeToken())
//         //     throw err?.response?.data ?? { message: 'Không thể lấy dữ liệu' };
//         // }
//         // else {
//         throw err?.response?.data ?? { message: 'Không thể lấy dữ liệu' };
//         // }
//     },
// );

class PrivateClient {
    constructor() {
        this.accessToken = getAccessTokenLs()
        this.refreshToken = getRefreshTokenLs()
        this.refreshTokenRequest = null
        this.instance = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
            paramsSerializer:
                (params) => queryString.stringify(params),
        })
        this.instance.interceptors.request.use(
            (config) => {
                this.accessToken = this.accessToken ? this.accessToken : getAccessTokenLs()
                if (this.accessToken && config.headers) {
                    config.headers.authorization = `Bearer ${this.accessToken}`
                    return config
                }
                return config
            },
            (error) => {
                return Promise.reject(error)
            }
        )
        this.instance.interceptors.response.use(
            (response) => {
                const { url } = response.config
                if (url === 'auth/logout') {
                    this.accessToken = ''
                    this.refreshToken = ''
                }
                if (response && response.data) return response.data;
                return response;
            },
            (err) => {
                if (isAxiosUnauthorizedError(err)) {
                    const config = err.response?.config || {}
                    const { url } = config
                    if (isAxiosExpiredTokenError(err) && url !== userEndpoints.refreshToken) {
                        this.refreshTokenRequest = this.refreshTokenRequest ? this.refreshTokenRequest :
                            this.handleRefreshToken().finally(() => {
                                // Giữ refreshTokenRequest trong 10s cho những request tiếp theo nếu có 401 thì dùng
                                setTimeout(() => {
                                    this.refreshTokenRequest = null
                                }, 10000)
                            });
                        return this.refreshTokenRequest.then(({ response, err }) => {
                            // Nghĩa là chúng ta tiếp tục gọi lại request cũ vừa bị lỗi
                            if (response) {
                                const { accessToken: newAccessToken, refreshToken } = response;
                                this.accessToken = newAccessToken
                                this.refreshToken = refreshToken
                                store.dispatch(setToken({ accessToken: newAccessToken, refreshToken }));
                                setAccessTokenLs(newAccessToken)
                                setRefreshTokenLs(refreshToken)
                                return this.instance({
                                    ...config,
                                    headers: {
                                        ...config.headers,
                                        Authorization: `Bearer ${newAccessToken}`
                                    }
                                })
                            }
                            if (err) {
                                store.dispatch(loginOut())
                                store.dispatch(removeToken())
                                store.dispatch(removeFavorites())
                                store.dispatch(setIsAuthenticated(false))
                                this.accessToken = ''
                                this.refreshToken = ''
                                clearLS()
                            }
                        })
                    }
                    store.dispatch(loginOut())
                    store.dispatch(removeToken())
                    store.dispatch(removeFavorites())
                    store.dispatch(setIsAuthenticated(false))
                    this.accessToken = ''
                    this.refreshToken = ''
                    clearLS()
                }
                return Promise.reject(err?.response?.data)
            }
        )
    }
    async handleRefreshToken() {
        this.refreshToken = this.refreshToken ? this.refreshToken : getRefreshTokenLs()
        try {
            const response = await this.instance
                .post(`auth/refresh-token`, {
                    refreshToken: this.refreshToken
                }, {
                    withCredentials: true
                })
            return { response };
        } catch (err) {
            return { err };
        }
    }
}

const privateClient = new PrivateClient().instance;
export default privateClient;
