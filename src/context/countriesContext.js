import React, { useContext, useState, useEffect } from "react";

const CountriesContext = React.createContext();

const CountriesContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState("");
  const [isShowMoreInfo, setIsShowMoreInfo] = useState(false);

  const [filterOption, setFilterOption] = useState("alpha-ascending");

  /* Get API */
  const fetchCountries = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=FRA,DEU,AUT,CHE,ITA&fields=name,capital,population,flags,currencies,languages`
    );
    const data = await response.json();
    console.log(`data`, data);
    // setCountries(data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchCountries();
  }, []);
  /***********************************/

  const sortBy = (e) => {
    console.log(`e.target`, e.target.value);
    const filterSelected = e.target.value;
    if (filterSelected === "alpha-ascending") {
    }
    if (filterSelected === "alpha-descending") {
    }
    if (filterSelected === "pop-ascending") {
    }
    if (filterSelected === "pop-descending") {
    }
  };

  return (
    <CountriesContext.Provider
      value={{
        countries,
        isLoading,
        isShowMoreInfo,
        setIsShowMoreInfo,
        sortBy,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountriesContext = () => {
  return useContext(CountriesContext);
};

export default CountriesContextProvider;

/* 
https://restcountries.com/v3.1/alpha?codes=FRA,DEU,AUT,CHE,ITA&fields=name,capital,population,flag,currencies,languages
*/
