import React from "react";

const CityImages = ({
  images,
  handleChangeImg,
  displayImage,
  currentImage,
}) => {
  return (
    <div className="city-images-container">
      <img src={displayImage} alt="" id="displayImg" />
      <div className="img-indicators-container">
        <img
          src={images[0]}
          alt=""
          className={`${
            currentImage === "1" ? "indicator currentImage" : "indicator"
          }`}
          onClick={() => handleChangeImg(images[0], "1")}
        />
        <img
          src={images[1]}
          alt=""
          className={`${
            currentImage === "2" ? "indicator currentImage" : "indicator"
          }`}
          onClick={() => handleChangeImg(images[1], "2")}
        />
        <img
          src={images[2]}
          alt=""
          className={`${
            currentImage === "3" ? "indicator currentImage" : "indicator"
          }`}
          onClick={() => handleChangeImg(images[2], "3")}
        />
      </div>
    </div>
  );
};

export default CityImages;
