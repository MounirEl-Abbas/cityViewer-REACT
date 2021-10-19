import React from "react";
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
