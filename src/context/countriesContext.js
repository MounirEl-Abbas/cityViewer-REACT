import React, { useContext, useState, useEffect } from "react";

const CountriesContext = React.createContext();

const CountriesContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState("");
  const [isShowMoreInfo, setIsShowMoreInfo] = useState(false);

  /* Get API */
  // const fetchCountries = async () => {
  //   const response = await fetch(
  //     `https://restcountries.com/v3.1/alpha?codes=FRA,DEU,AUT,CHE,ITA&fields=name,capital,population,flags`
  //   );
  //   const data = await response.json();
  //   sortCountries(undefined, data);
  //   setIsLoading(false);
  // };
  // useEffect(() => {
  //   fetchCountries();
  // }, []);
  /***********************************/

  let sortBy;
  const sortCountries = async (e) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=FRA,DEU,AUT,CHE,ITA&fields=name,capital,population,flags`
    );
    const data = await response.json();

    if (e === undefined) {
      sortBy = "alpha-ascending"; //default
    } else {
      console.log(`e.target.value`, e.target.value);
      sortBy = e.target.value; //user choice
    }
    if (sortBy === "alpha-ascending") {
      let sortedData = data.sort((a, b) => {
        let textA = a.name.common.toUpperCase();
        let textB = b.name.common.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
      setCountries(sortedData);
    }
    if (sortBy === "alpha-descending") {
      console.log("sorting by descending now...");
      console.log(`countries`, countries);
      let sortedData = data.sort((a, b) => {
        let textA = a.name.common.toUpperCase();
        let textB = b.name.common.toUpperCase();
        return textA > textB ? -1 : textA < textB ? 1 : 0;
      });
      setCountries(sortedData);
    }
    if (sortBy === "pop-ascending") {
    }
    if (sortBy === "pop-descending") {
    }
    setIsLoading(false);
  };

  return (
    <CountriesContext.Provider
      value={{
        countries,
        isLoading,
        isShowMoreInfo,
        setIsShowMoreInfo,
        sortCountries,
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
