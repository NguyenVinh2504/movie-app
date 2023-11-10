import axios from "axios";
import queryString from "query-string";
import { API_ROOT } from "~/utils/constants";

const baseURL = `${API_ROOT}/api/v1/`;

const privateClient = axios.create({
  baseURL,
  paramsSerializer: {
    encode: params => queryString.stringify(params)
  },
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("actkn")}`
  }
});

privateClient.interceptors.request.use(async config => {
  return {
    ...config,
  };
});

privateClient.interceptors.response.use((response) => {
  if (response && response.data) return response.data;
  return response;
}, (err) => {
  throw err.response.data;
});

export default privateClient;