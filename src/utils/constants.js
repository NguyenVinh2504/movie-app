import { env } from '~/config/environtments';
let apiRoot = '';
if (process.env.REACT_APP_BUILD_MODE === 'dev') {
    apiRoot = env.API_URL_DEV;
}
if (process.env.REACT_APP_BUILD_MODE === 'production') {
    apiRoot = env.API_URL_PROD;
}
export const API_ROOT = apiRoot;
