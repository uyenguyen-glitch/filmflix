import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import tmdbConfig from "../../services/config/tmdb.config";
import ContentBackdrop from "../ContentSlide/ContentBackdrop";
import BackdropSlide from "../BackdropSlide/BackdropSlide";
import { mediaAPI } from "../../services/modules/mediaAPI";
import { genresAPI } from "../../services/modules/genreAPI";
import "./HeroSlider.css";

const HeroSlider = ({ mediaType, mediaCategory }) => {
  const [genres, setGenres] = useState([]);
  const [medias, setMedias] = useState([]);
  const [isTV, setTV] = useState("");
  useEffect(() => {
    const getMediasList = async () => {
      mediaType === "tv" ? setTV(true) : setTV(false);
      try {
        const results = await mediaAPI.getMediaList({
          mediaType,
          mediaCategory,
          page: 1,
        });

        const genres = await genresAPI.getGenres();

        if (medias && genres) {
          setMedias(results);
          setGenres(genres);
        }
      } catch (error) {
        return error;
      }
    };

    getMediasList();
  }, [mediaCategory, mediaType]);

  return (
    <div>
      <Swiper loop={true} slidesPerView={1}>
        {medias.slice(0, 15).map((media) => {
          return (
            <SwiperSlide key={media.id}>
              <div className="relative heroSlider">
                <BackdropSlide
                  backdropURL={tmdbConfig.backdropPath(media.backdrop_path)}
                  contentIMG={media.original_title}
                />
                <ContentBackdrop
                  posterURL={tmdbConfig.posterPath(media.poster_path)}
                  mediaName={media.original_title}
                  overview={media.overview}
                  voteAverage={media.vote_average}
                  releaseYear={
                    isTV
                      ? media.first_air_date.slice(0, 4)
                      : media.release_date.slice(0, 4)
                  }
                  language={media.original_language}
                  genres={media.genre_ids
                    .slice(0, 3)
                    .map(
                      (genreId) =>
                        genres.find((e) => e.id === genreId) &&
                        genres.find((e) => e.id === genreId).name
                    )}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
