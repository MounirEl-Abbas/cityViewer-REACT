import React, { useContext, useState } from "react";

const SingleCityContext = React.createContext();

const SingleCityContextProvider = ({ children }) => {
  const getCityInfo = (city) => {
    console.log(city);
  };

  return (
    <SingleCityContext.Provider value={{ getCityInfo }}>
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
