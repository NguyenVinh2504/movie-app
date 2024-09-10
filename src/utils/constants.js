import { env } from '~/config/environtments';
let apiRoot = '';
let apiRender = '';
if (process.env.REACT_APP_BUILD_MODE === 'dev') {
    apiRoot = env.API_URL_DEV;
    apiRender = env.API_URL_DEV;
}
if (process.env.REACT_APP_BUILD_MODE === 'production') {
    apiRoot = env.API_URL_PROD;
    apiRender = env.API_URL_RENDER;
}

export const API_ROOT = apiRoot;
export const API_RENDER = apiRender;
