import React from "react";

const BackdropSlide = ({ backdropURL, contentIMG }) => {
  return (
    <div>
      <img
        src={backdropURL}
        alt={contentIMG}
        className="brightness-25 object-cover w-full h-400"
      />
    </div>
  );
};

export default BackdropSlide;
