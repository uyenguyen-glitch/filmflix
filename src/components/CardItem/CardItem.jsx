import React, { useState, useEffect } from "react";
import { Card, Button, Space } from "antd";
import Meta from "antd/es/card/Meta";
import tmdbConfig from "../../services/config/tmdb.config";
import { mediaAPI } from "../../services/modules/mediaAPI";
import { HeartOutlined, StarFilled } from "@ant-design/icons";
import "./CardItem.css";

const CardItem = ({
  mediaId,
  mediaType,
  backdropURL,
  posterURL,
  mediaName,
  overview,
  releaseYear,
  voteAverage,
  imgSize,
}) => {
  const [trailer, setTrailer] = useState({});
  const [isHovering, setHovering] = useState(false);
  const [isImgUrl, setImgUrl] = useState(posterURL);

  // useEffect(() => {
  //   // const getTrailer = async (mediaId) => {
  //   //   try {
  //   //     const video = await mediaAPI.getTrailer({
  //   //       mediaType,
  //   //       mediaId,
  //   //     });

  //   //     if (video) {
  //   //       setTrailer(video[0]);
  //   //     }
  //   //   } catch (error) {
  //   //     return { error };
  //   //   }
  //   // };

  //   // getTrailer(mediaId);

  // }, []);

  const handleHover = async () => {
    // try {
    //   const trailers = await mediaAPI.getTrailerList({
    //     mediaType,
    //     mediaId,
    //   });
    //   if (trailers) {
    //     setHovering(true);
    //     setTrailer(trailers[0]);
    //   }
    // } catch (error) {
    //   return { error };
    // }

    backdropURL ? setImgUrl(backdropURL) : setImgUrl(posterURL);
    setHovering(true);
  };

  const handleLeave = () => {
    setImgUrl(posterURL);
    setHovering(false);
  };

  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleLeave}>
      <Card className=" bg-black text-white  border-0 rounded-none">
        <div className="transition ease-in-out duration-1000 delay-500">
          <img
            className={`object-cover rounded-xl px-1 hover:brightness-50 ${imgSize}`}
            src={isImgUrl}
          />
          {isHovering && (
            <div className=" absolute z-20 bottom-0 left-3 bg-transparent text-white text-xl">
              <h1>{mediaName}</h1>
              <Space className="text-lg">
                <p>{releaseYear}</p>
                <StarFilled className="ml-8 text-yellow-600 align-[1rem]" />
                <p>{voteAverage}</p>
              </Space>

              {/* Button trailer*/}
              <Button
                type="primary"
                shape="round"
                className="block mb-2 bg-redPrimary text-base h-fit font-Prompt px-6 py-2"
              >
                <span>Trailer</span>
              </Button>
            </div>
          )}
        </div>

        {/* <img
          className="object-cover rounded-none px-1 h-[246px]"
          src={posterURL}
        /> */}
      </Card>
    </div>
  );
};

export default CardItem;
