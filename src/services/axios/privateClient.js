import axios from "axios";
import queryString from "query-string";
import tmdbConfig from "../config/tmdb.config";

// set up axios
const privateClient = axios.create({
  baseURL: tmdbConfig.baseUrl,
  paramsSerializer: (params) => queryString.stringify(params),
});

// setup request interceptor
privateClient.interceptors.request.use(async (config) => {
  const accesstoken =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjBlZTM3MWY5YzVhZTMxMzVjZDBjZjMxYWQ0OTk1ZSIsInN1YiI6IjYzOWQ3MjVlNGYzM2FkMDA4NDU1MWQzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HagRo6Z1oZmlUU8sPSyiariksAQ4NB5HP-Vap8uLAcI";
  return {
    ...config,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${accesstoken}`,
    },
  };
});

// setup response interceptor
privateClient.interceptors.response.use(
  (response) => {
    if (response && response.data) return response.data;
  },
  (error) => {
    return Promise.reject(error.response?.data);
  }
);

export default privateClient;
