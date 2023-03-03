import publicClient from "../axios/publicClient";
import tmdbConfig from "../config/tmdb.config";

const genresEndpoints = {
  getGenres: `genre/movie/list?api_key=${tmdbConfig.apiKey}&language=en-US`,
};

export const genresAPI = {
  getGenres: async () => {
    try {
      const { genres } = await publicClient.get(genresEndpoints.getGenres);

      return genres;
    } catch (error) {
      return { error };
    }
  },
};
