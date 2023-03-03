import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mediaAPI } from "../../services/modules/mediaAPI";
import tmdbConfig from "../../services/config/tmdb.config";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import MediaSlider from "../../components/MediaSlider/MediaSlider";
import { Space } from "antd";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSlider
        mediaType={tmdbConfig.mediaType.movie}
        mediaCategory={tmdbConfig.mediaCategory.popular}
      />

      {/* Popular movie */}

      <MediaSlider
        mediaType={tmdbConfig.mediaType.movie}
        mediaCategory={tmdbConfig.mediaCategory.popular}
      />

      {/* Top rated movie*/}

      <MediaSlider
        mediaType={tmdbConfig.mediaType.movie}
        mediaCategory={tmdbConfig.mediaCategory.top_rated}
      />

      {/* Popular series */}

      <MediaSlider
        mediaType={tmdbConfig.mediaType.tv}
        mediaCategory={tmdbConfig.mediaCategory.popular}
      />

      {/* Top rated series */}

      <MediaSlider
        mediaType={tmdbConfig.mediaType.tv}
        mediaCategory={tmdbConfig.mediaCategory.top_rated}
      />
    </React.Fragment>
  );
};

export default Home;
