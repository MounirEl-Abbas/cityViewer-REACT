import React, { useContext, useState, useEffect } from "react";

const CountriesContext = React.createContext();

const CountriesContextProvider = ({ children }) => {
  const [value, setValue] = useState("");

  const [isLoading, setIsLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [isShowMoreInfo, setIsShowMoreInfo] = useState(false);
  const [countriesSorted, setCountriesSorted] = useState(false);

  /*************** Initial Render -- Get API *******************/
  const fetchCountries = async () => {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=FRA,DEU,AUT,CHE,ITA&fields=name,capital,population,flags`
    );
    const data = await response.json();
    setCountries(data);
    // console.log(`data`, data);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchCountries();
  }, []);
  /*********************************************************/

  /*************** Search *******************/
  const searchCountry = async (value) => {
    const response = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=USA,CAN,FRA,DEU,AUT,CHE,ITA&fields=name,capital,population,flags`
    );
    const data = await response.json();
    let searchResults = data.filter(
      (country) => country.name.common.toLowerCase().indexOf(value) !== -1
    );
    setCountries(searchResults);
  };
  useEffect(() => {
    searchCountry(value);
  }, [value]);
  /* Anytime 'value' state changes, get API data, filter by value - case insensitive*/

  /*************** Selection Options, sort by *******************/
  const sortCountries = (e) => {
    setIsLoading(true);
    let sortBy = e.target.value; //user choice
    switch (sortBy) {
      case "alpha-ascending":
        sortByAlphaAscending();
        break;
      case "alpha-descending":
        sortByAlphaDescending();
        break;
      case "pop-ascending":
        sortByPopulationAscending();
        break;
      case "pop-descending":
        sortByPopulationDescending();
        break;
      default:
        sortByAlphaAscending();
        break;
    }
    setCountriesSorted(!countriesSorted); //Trigger re-render after sorting
    setIsLoading(false);
  };
  //Sorting Options
  const sortByAlphaAscending = () => {
    let sortedData = countries.sort((a, b) => {
      let textA = a.name.common.toUpperCase();
      let textB = b.name.common.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    setCountries(sortedData);
  };
  const sortByAlphaDescending = () => {
    let sortedData = countries.sort((a, b) => {
      let textA = a.name.common.toUpperCase();
      let textB = b.name.common.toUpperCase();
      return textA > textB ? -1 : textA < textB ? 1 : 0;
    });
    setCountries(sortedData);
  };
  const sortByPopulationAscending = () => {
    let sortedData = countries.sort((a, b) => a.population - b.population);
    setCountries(sortedData);
  };
  const sortByPopulationDescending = () => {
    let sortedData = countries.sort((a, b) => b.population - a.population);
    setCountries(sortedData);
  };

  return (
    <CountriesContext.Provider
      value={{
        countries,
        isLoading,
        isShowMoreInfo,
        setIsShowMoreInfo,
        sortCountries,
        value,
        setValue,
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
