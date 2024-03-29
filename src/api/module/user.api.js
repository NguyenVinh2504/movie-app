import axios from 'axios';
import privateClient from '../client/private.client';
import publicClient from '../client/public.client';
import { API_ROOT } from '~/utils/constants';
const baseURL = `${API_ROOT}/api/v1/`;
axios.defaults.withCredentials = true;
export const userEndpoints = {
    signin: 'auth/login',
    loginGoogle: 'auth/google-login',
    signup: 'auth/signup',
    logOut: 'auth/logout',
    getInfo: 'user/info',
    refreshToken: 'auth/refresh-token',
    profileUpdate: 'user/update-profile',
    passwordUpdate: 'user/update-password',
    deleteUser: 'user/delete',
    checkEmail: 'user/check-email',
    sendEmail: 'user/send-email',
    forgotPassword: 'user/forgot-password'
};
const userApi = {
    signin: async ({ email, password }) => {
        try {
            const response = await publicClient.post(userEndpoints.signin, { email, password });
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
            const response = await privateClient.post(userEndpoints.logOut, {
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
    refreshToken: async ({ refreshToken, accessToken }) => {
        try {
            const response = await axios.post(`${baseURL}auth/refresh-token`, { refreshToken }, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            return { response };
        } catch (err) {
            return { err };
        }
    },
    profileUpdate: async (values) => {
        try {
            const response = await privateClient.postForm(userEndpoints.profileUpdate, values);

            return { response };
        } catch (err) {
            return { err };
        }
    },
    imageUpdate: async (values) => {
        try {
            const response = await privateClient.post(userEndpoints.profileUpdate, values);

            return { response };
        } catch (err) {
            return { err };
        }
    },
    passwordUpdate: async ({ password, newPassword, confirmNewPassword }) => {
        try {
            const response = await privateClient.patch(userEndpoints.passwordUpdate, {
                password,
                newPassword,
                confirmNewPassword,
            });

            return { response };
        } catch (err) {
            return { err };
        }
    },
    deleteUser: async ({ password }) => {
        try {
            const response = await privateClient.patch(userEndpoints.deleteUser, {
                password,
            });

            return { response };
        } catch (err) {
            return { err };
        }
    },
    checkEmail: async ({ email }) => {
        try {
            const response = await publicClient.post(userEndpoints.checkEmail, {
                email,
            });

            return { response };
        } catch (err) {
            return { err };
        }
    },
    sendEmail: async ({ email }) => {
        try {
            const response = await publicClient.post(userEndpoints.sendEmail, {
                email,
            });

            return { response };
        } catch (err) {
            return { err };
        }
    },
    forgotPassword: async ({ email, otp, newPassword }) => {
        try {
            console.log(newPassword);
            const response = await publicClient.post(userEndpoints.forgotPassword, {
                email, otp, newPassword
            });

            return { response };
        } catch (err) {
            return { err };
        }
    },
};

export default userApi;
