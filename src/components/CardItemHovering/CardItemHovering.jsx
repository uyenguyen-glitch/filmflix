import React from "react";
import { Card, Button, Space } from "antd";
import { HeartOutlined, StarFilled } from "@ant-design/icons";

const CardItemHovering = ({
  backdropURL,
  mediaName,
  releaseYear,
  voteAverage,
}) => {
  return (
    <>
      <Card>
        <div className="transition ease-in-out duration-10000">
          <img
            className="object-cover rounded-none px-1 brightness-50"
            src={backdropURL}
          />
          <div className="absolute z-20 bottom-0 left-3 bg-transparent text-white text-xl">
            <h1>{mediaName}</h1>
            <Space className="text-lg">
              <p>{releaseYear}</p>
              <StarFilled className="ml-8 text-yellow-600 align-[1rem]" />
              <p>{voteAverage}</p>
            </Space>{" "}
            {/* Button trailer*/}
            <Button
              type="primary"
              shape="round"
              className="block mb-2 bg-redPrimary text-base h-fit font-Prompt px-6 py-2"
            >
              <span>Trailer</span>
            </Button>
          </div>
        </div>
      </Card>
      ;
    </>
  );
};

export default CardItemHovering;
