import React from "react";
import { useCountriesContext } from "../../context/countriesContext";
import FilterButtons from "./FilterButtons";
import Countries from "./Countries";

const CountriesPage = () => {
  return (
    <div className="all-countries-page">
      <FilterButtons />
      <Countries />
    </div>
  );
};
export default CountriesPage;
