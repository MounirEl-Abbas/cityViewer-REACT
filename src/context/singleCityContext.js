import React, { useContext, useEffect, useState } from "react";

const SingleCityContext = React.createContext();

const SingleCityContextProvider = ({ children, mapsAPIKey }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cityInfo, setCityInfo] = useState({});
  const [displayImage, setDisplayImage] = useState("");
  const [currentImage, setCurrentImage] = useState("1");

  const getCityInfo = async (city, country) => {
    setIsLoading(true);
    const countryCode = getCountryCode(country);
    const { cityName, population, description, images } = city;
    const cityMap = await getMap(city.cityName, countryCode);
    setCityInfo({
      country,
      cityName,
      population,
      description,
      images,
      cityMap,
    });
    handleChangeImg(images[0]);
    setCurrentImage("1");
    setIsLoading(false);
  };

  const getCountryCode = (country) => {
    let countryCode;
    switch (country) {
      case "Italy":
        countryCode = "IT";
        break;
      case "Germany":
        countryCode = "DE";
        break;
      case "France":
        countryCode = "FR";
        break;
      case "Austria":
        countryCode = "AT";
        break;
      case "Switzerland":
        countryCode = "CH";
        break;
      default:
        countryCode = "";
        break;
    }
    return countryCode;
  };

  const getMap = async (cityName, countryCode) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/staticmap?center=${cityName},${countryCode}&zoom=5&size=600x400&markers=color:red|${cityName},${countryCode}&key=${mapsAPIKey}`
    );
    return response.url;
  };

  const handleChangeImg = (img, n) => {
    setDisplayImage(img);
    setCurrentImage(n);
  };

  return (
    <SingleCityContext.Provider
      value={{
        getCityInfo,
        cityInfo,
        isLoading,
        handleChangeImg,
        displayImage,
        currentImage,
      }}
    >
      {children}
    </SingleCityContext.Provider>
  );
};

export const useCityContext = () => {
  return useContext(SingleCityContext);
};

export default SingleCityContextProvider;

/* 
https://maps.googleapis.com/maps/api/staticmap?center=Venice,IT&zoom=5&size=400x400&markers=color:red|Venice,IT&key=AIzaSyChtMCSnNftrR0pzqOX-SU7-OEp7BYEmKw

https://developers.google.com/maps/documentation/maps-static/overview?hl=en_GB
*/
