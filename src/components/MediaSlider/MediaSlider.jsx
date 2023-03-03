import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { mediaAPI } from "../../services/modules/mediaAPI";
import tmdbConfig from "../../services/config/tmdb.config";
import { Navigation } from "swiper";
import CardItem from "../CardItem/CardItem";

const MediaSlider = ({ mediaType, mediaCategory }) => {
  const [medias, setMedias] = useState([]);
  const [isTV, setTV] = useState(true);

  useEffect(() => {
    const getMedias = async () => {
      mediaType === "tv" ? setTV(true) : setTV(false);

      try {
        const results = await mediaAPI.getMediaList({
          mediaType,
          mediaCategory,
          page: 1,
        });

        if (results) {
          setMedias(results);
        }
      } catch (error) {
        return error;
      }
    };

    getMedias();
  }, [mediaType, mediaCategory]);

  return (
    <div className="text-white px-16 py-24 h-full bg-black">
      <p className="text-[30px] text-bold font-Promt">
        {mediaCategory} {mediaType}
      </p>

      <div>
        <Swiper
          slidesPerView={5}
          grabCursor={true}
          className="overflow-hidden"
          // navigation={true}
          // Navigation
          // loop={true}
        >
          {medias.slice(0, 16).map((media) => {
            console.log(media);
            return (
              <SwiperSlide
                className=" hover:w-[450px] w-[172px] h-[246px] rounded-none border-0"
                key={media.id}
              >
                <CardItem
                  backdropURL={tmdbConfig.backdropPath(media.backdrop_path)}
                  posterURL={tmdbConfig.posterPath(media.poster_path)}
                  mediaName={isTV ? media.original_name : media.original_title}
                  overview={media.overview}
                  releaseYear={
                    isTV
                      ? media.first_air_date.slice(0, 4)
                      : media.release_date.slice(0, 4)
                  }
                  voteAverage={media.vote_average}
                  language={media.original_language}
                  mediaId={media.id}
                  mediaType={mediaType}
                  imgSize={"h-[246px]"}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default MediaSlider;
