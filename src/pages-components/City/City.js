import React from "react";
import { useCityContext } from "../../context/singleCityContext";
import CityImages from "./CityImages";
import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const City = () => {
  const { cityInfo, isLoading, handleChangeImg, displayImage, currentImage } =
    useCityContext();

  console.log(`cityInfo`, cityInfo);
  const { country, cityName, population, description, images, cityMap } =
    cityInfo;

  return (
    <main className="single-city-container">
      {!isLoading ? (
        <>
          <div className="btn-container">
            <Link to={`/countries/${country}`} id="back-btn">
              <FaChevronLeft />
              <button>Back</button>
            </Link>
          </div>
          <section className="city-info-container">
            <CityImages
              images={images}
              handleChangeImg={handleChangeImg}
              displayImage={displayImage}
              currentImage={currentImage}
            />
            <div className="city-info">
              <h4>{cityName}</h4>
              <p>
                <span>Population: </span>
                {population.toLocaleString()}
              </p>
              <p>{description}</p>
            </div>
          </section>

          <section className="city-map">
            <h4>Google Maps Location of {cityName}</h4>
            <img src={cityMap} alt="" />
          </section>
        </>
      ) : (
        <h4>Loading ....</h4>
      )}
    </main>
  );
};

export default City;
