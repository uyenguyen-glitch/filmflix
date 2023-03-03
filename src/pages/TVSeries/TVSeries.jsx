import React from "react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import MediaList from "../../components/MediaList/MediaList";
import tmdbConfig from "../../services/config/tmdb.config";

const TVSeries = () => {
  return (
    <MediaList
      mediaType={tmdbConfig.mediaType.tv}
      mediaCategory={tmdbConfig.mediaCategory.popular}
    />
  );
};

export default TVSeries;
