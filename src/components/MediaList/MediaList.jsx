import React, { useState, useEffect } from "react";
import HeroSlider from "../HeroSlider/HeroSlider";
import tmdbConfig from "../../services/config/tmdb.config";
import { mediaAPI } from "../../services/modules/mediaAPI";
import { Card, Divider, Button, Space } from "antd";
import CardItem from "../CardItem/CardItem";

const MediaList = ({ mediaType }) => {
  const [medias, setMedias] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isTV, setTV] = useState(true);
  const [mediaCategory, setMediaCategory] = useState(
    tmdbConfig.mediaCategory.popular
  );

  useEffect(() => {
    const getMedias = async () => {
      mediaType === "tv" ? setTV(true) : setTV(false);

      try {
        const results = await mediaAPI.getMediaList({
          mediaType,
          mediaCategory,
          page: currentPage,
        });

        if (results) {
          setMedias([...medias, ...results]);
        }
      } catch (error) {
        return { error };
      }
    };

    getMedias();
  }, [currentPage, mediaCategory]);

  // Handle Load More
  const handleLoadMore = () => {
    setCurrentPage(() => currentPage + 1);
  };

  const handleChangeMediaCatgory = (kindOfButton) => {
    if (kindOfButton !== mediaCategory) {
      setMediaCategory(kindOfButton);
      setMedias([]);
    }
  };

  return (
    <>
      <HeroSlider
        mediaType={mediaType}
        mediaCategory={tmdbConfig.mediaCategory.popular}
      />

      <div className="bg-black px-16 py-10 relative">
        {/* Grid */}
        <div className="text-white flex justify-end my-10 pb-2 border-b-2 border-borderColor">
          <Button
            type="primary"
            shape="round"
            className=" inline-block mb-2 bg-redPrimary text-base h-fit font-Prompt px-6 py-2 w-32"
            onClick={() =>
              handleChangeMediaCatgory(tmdbConfig.mediaCategory.popular)
            }
          >
            <span>Popular</span>
          </Button>
          <Button
            type="primary"
            shape="round"
            className="mb-2 bg-redPrimary text-base h-fit font-Prompt px-6 py-2 w-32"
            onClick={() =>
              handleChangeMediaCatgory(tmdbConfig.mediaCategory.top_rated)
            }
          >
            <span>Top rated</span>
          </Button>
        </div>
        <div className="grid grid-cols-5 gap-5 relative border-b-2 pb-16 pt-5 border-borderColor">
          {medias.map((media) => {
            return (
              <div className="relative">
                <CardItem
                  posterURL={tmdbConfig.posterPath(media.poster_path)}
                  mediaName={isTV ? media.original_name : media.original_title}
                  releaseYear={
                    isTV
                      ? media.first_air_date.slice(0, 4)
                      : media.release_date.slice(0, 4)
                  }
                  voteAverage={media.vote_average}
                  imgSize={"h-[387px]"}
                />
              </div>
            );
          })}
        </div>

        <div className="absolute z-10 bottom-3.5 right-0 bg-black px-16">
          <Button
            type="primary"
            shape="round"
            className=" mb-2 bg-redPrimary text-base h-fit font-Prompt px-6 py-2 w-32"
            onClick={handleLoadMore}
          >
            <span>Load more</span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default MediaList;
