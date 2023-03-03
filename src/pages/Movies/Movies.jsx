import React, { useEffect, useState } from "react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import MediaList from "../../components/MediaList/MediaList";
import tmdbConfig from "../../services/config/tmdb.config";
import { mediaAPI } from "../../services/modules/mediaAPI";

const Movies = () => {
  return <MediaList mediaType={tmdbConfig.mediaType.movie} />;
};

export default Movies;
