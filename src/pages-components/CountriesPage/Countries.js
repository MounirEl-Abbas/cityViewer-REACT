import React from "react";
import { useCountriesContext } from "../../context/countriesContext";

const Countries = () => {
  const { countries, isLoading, isShowMoreInfo } = useCountriesContext();

  let uniqueKey = 0;

  return (
    <section
      className={`${
        isShowMoreInfo ? "countries-container show-more" : "countries-container"
      }`}
    >
      {!isLoading &&
        countries.map((country) => {
          uniqueKey++;
          return (
            <article key={uniqueKey} id={uniqueKey} className="country">
              <div className="country-flag">
                <img src={country.flags.svg} alt="t" />
              </div>
              <div className="country-info">
                <h4>{country.name.common}</h4>
                {isShowMoreInfo && (
                  <>
                    <p>
                      <span>Capital: </span>
                      {country.capital[0]}
                    </p>
                    <p>
                      <span>Population: </span>
                      {country.population}
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Neque, aut.
                    </p>
                  </>
                )}
              </div>
            </article>
          );
        })}
    </section>
  );
};

export default Countries;
