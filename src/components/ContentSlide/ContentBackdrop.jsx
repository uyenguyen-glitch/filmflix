import React from "react";
import { Space, Button } from "antd";
import {
  GlobalOutlined,
  CaretRightFilled,
  StarFilled,
} from "@ant-design/icons";

const ContentBackdrop = ({
  posterURL,
  movieName,
  overview,
  voteAverage,
  releaseYear,
  language,
  genres,
}) => {
  return (
    <div className="absolute bottom-0 justify-evenly flex mx-16 ">
      <div className="shrink-0">
        <img className="w-96 rounded-t-xl" src={posterURL} alt={movieName} />
      </div>
      <div className="px-20 text-white font-Prompt text-sm">
        {/* Year of film */}
        <p className="text-base">{releaseYear}</p>

        {/* Name of film */}
        <p className="text-6xl font-Prompt font-black my-6">{movieName}</p>

        {/* Genres */}
        <Space className="flex my-10 justify-start gap-x-5">
          {genres.map((genre, index) => (
            <Space
              key={index}
              className="backdrop-blur-sm bg-white/30 text-lg rounded-full px-10 py-2"
            >
              {genre}
            </Space>
          ))}
        </Space>

        {/* Overview */}
        <p className="leading-loose">{overview}</p>

        {/* Language && tmdb */}
        <Space className="flex justify-start gap-x-20 my-4">
          <Space className="text-lg">
            <GlobalOutlined className="align-[0.9rem]" />
            <p className="tracking-wider ">
              Language: <span className="font-bold ">{language}</span>
            </p>
          </Space>
          <Space className="text-lg">
            <StarFilled className="text-yellow-600 align-[0.8rem] " />
            <p className="tracking-wider text-white ">
              tmdb: <span className="font-bold ">{voteAverage}/10</span>
            </p>
          </Space>
        </Space>

        {/* Button Watch now */}
        <Button
          type="primary"
          shape="round"
          className="bg-redPrimary text-xl h-fit font-Prompt px-6 py-2"
        >
          <CaretRightFilled className="align-[0.2rem]" />
          <span>Watch now</span>
        </Button>
      </div>
    </div>
  );
};

export default ContentBackdrop;
