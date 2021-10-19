import React, { useContext, useState } from "react";
import data from "../assets/data";

const SingleCountryContext = React.createContext();
const SingleCountryContextProvider = ({ children }) => {
  const [countrySelected, setCountrySelected] = useState({});

  const getCountryInfo = (country) => {
    data.forEach((object) => {
      if (country.name.common === object.country) {
        let trends = object.trends;
        let cities = object.cities;
        setCountrySelected({
          countryDataApi: country,
          countryTrends: trends,
          countryCities: cities,
        });
      }
    });
  };

  return (
    <SingleCountryContext.Provider value={{ getCountryInfo, countrySelected }}>
      {children}
    </SingleCountryContext.Provider>
  );
};

export const useSingleCountryContext = () => {
  return useContext(SingleCountryContext);
};

export default SingleCountryContextProvider;
