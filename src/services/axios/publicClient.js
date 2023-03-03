import axios from "axios";
import queryString from "query-string";
import tmdbConfig from "../config/tmdb.config";

// setting cấu hình cho axios
const publicClient = axios.create({
  baseURL: tmdbConfig.baseUrl,
  paramsSerializer: {
    encode: (params) => queryString.stringify(params),
  },
});

//setup request interceptor
publicClient.interceptors.request.use(async (config) => {
  return {
    ...config,
    headers: {
      "Content-type": "application/json",
    },
  };
});

// setup response interceptor
publicClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
  },
  (error) => {
    return Promise.reject(error.response?.data);
  }
);

export default publicClient;
