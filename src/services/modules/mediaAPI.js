import publicClient from "../axios/publicClient";
import tmdbConfig from "../config/tmdb.config";
const mediaEndpoints = {
  getMediaList: ({ mediaType, mediaCategory, page }) =>
    `/${mediaType}/${mediaCategory}?api_key=${tmdbConfig.apiKey}&language=en-US&page=${page}`,
  getTrailer: ({ mediaType, mediaId }) =>
    `/${mediaType}/${mediaId}/videos?api_key=${tmdbConfig.apiKey}&language=en-US`,
};

export const mediaAPI = {
  getMediaList: async ({ mediaType, mediaCategory, page }) => {
    try {
      const { results } = await publicClient.get(
        mediaEndpoints.getMediaList({ mediaType, mediaCategory, page })
      );
      return results;
    } catch (error) {
      return { error };
    }
  },

  getTrailer: async ({ mediaType, mediaId }) => {
    try {
      const { results } = await publicClient.get(
        mediaEndpoints.getTrailer({ mediaType, mediaId })
      );
      return results;
    } catch (error) {
      return { error };
    }
  },
};
