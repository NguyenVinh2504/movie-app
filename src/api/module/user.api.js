import axios from 'axios';
import privateClient from '../client/private.client';
import publicClient from '../client/public.client';
import { API_ROOT } from '~/utils/constants';
const baseURL = `${API_ROOT}/api/v1/`;
const userEndpoints = {
    signin: 'auth/login',
    loginGoogle: 'auth/google-login',
    signup: 'auth/signup',
    logOut: 'auth/logout',
    getInfo: 'user/info',
    refreshToken: 'auth/refresh-token',
    passwordUpdate: 'user/update-password',
};
const userApi = {
    signin: async ({ name, password }) => {
        try {
            const response = await publicClient.post(userEndpoints.signin, { name, password });
            return { response };
        } catch (err) {
            return { err };
        }
    },
    loginGoogle: async ({ name, email, avatar, password, confirmPassword }) => {
        try {
            const response = await publicClient.post(userEndpoints.loginGoogle, {
                name,
                email,
                avatar,
                password,
                confirmPassword,
            });
            return { response };
        } catch (err) {
            return { err };
        }
    },
    signup: async ({ name, email, password, confirmPassword }) => {
        try {
            const response = await publicClient.post(userEndpoints.signup, { name, email, password, confirmPassword });
            return { response };
        } catch (err) {
            return { err };
        }
    },
    logOut: async () => {
        try {
            const response = await privateClient.post(userEndpoints.logOut, undefined, {
                withCredentials: true,
            });
            return { response };
        } catch (err) {
            return { err };
        }
    },
    getInfo: async () => {
        try {
            const response = await privateClient.get(userEndpoints.getInfo);
            return { response };
        } catch (err) {
            return { err };
        }
    },
    refreshToken: async () => {
        try {
            const response = await axios.post(`${baseURL}auth/refresh-token`, undefined, {
                withCredentials: true,
            });
            return { response };
        } catch (err) {
            return { err };
        }
    },
    passwordUpdate: async ({ password, newPassword, confirmNewPassword }) => {
        try {
            const response = await privateClient.put(userEndpoints.passwordUpdate, {
                password,
                newPassword,
                confirmNewPassword,
            });

            return { response };
        } catch (err) {
            return { err };
        }
    },
};

export default userApi;
