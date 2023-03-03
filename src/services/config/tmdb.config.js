const baseUrl = "https://api.themoviedb.org/3/";
const apiKey = "d20ee371f9c5ae3135cd0cf31ad4995e";

const mediaType = {
  movie: "movie",
  tv: "tv",
};

const mediaCategory = {
  popular: "popular",
  top_rated: "top_rated",
};

const backdropPath = (imgPath) =>
  `https://image.tmdb.org/t/p/original${imgPath}`;
const posterPath = (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`;
const youtubePath = (videoId) =>
  `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;

const tmdbConfig = {
  mediaType,
  mediaCategory,
  backdropPath,
  posterPath,
  youtubePath,
  baseUrl,
  apiKey,
};

export default tmdbConfig;
