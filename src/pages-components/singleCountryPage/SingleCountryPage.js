import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Context
import { useCountryContext } from "../../context/singleCountryContext";
import { useCityContext } from "../../context/singleCityContext";

//Images - Icons
import frameworkTrendLegend from "../../assets/global_assets/frameworks-legend.png";
import languagesTrendLegend from "../../assets/global_assets/languages-legend.png";
import { FaChevronLeft } from "react-icons/fa";

const SingleCountryPage = () => {
  const { countrySelected } = useCountryContext();
  const { countryCities, countryDataApi, countryTrends } = countrySelected;
  const { getCityInfo } = useCityContext();
  return (
    <div className="country-details">
      <Link to="/countries" id="back-btn">
        <FaChevronLeft />
        <button>Back</button>
      </Link>
      <h1>{countryDataApi.name.common}</h1>
      <main>
        <section className="country-trends">
          <h2>Google Trends (12 Months)</h2>
          <article className="frameworks">
            <img src={frameworkTrendLegend} alt="" className="trend-legend" />
            <img
              src={countryTrends.frameworkTrend}
              alt=""
              className="trend-data"
            />
          </article>
          <article className="languages">
            <img src={languagesTrendLegend} alt="" className="trend-legend" />
            <img
              src={countryTrends.languageTrend}
              alt=""
              className="trend-data"
            />
          </article>
        </section>
        <aside className="country-info">
          <div className="img-container">
            <img src={countryDataApi.flags.png} alt="" />
          </div>
          <div className="info-container">
            <h4>{countryDataApi.name.common}</h4>
            <p>
              <span>Capital: </span>
              {countryDataApi.capital}
            </p>
            <p>
              <span>Population: </span>
              {countryDataApi.population.toLocaleString()}
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              possimus! Commodi nobis eius cumque enim.
            </p>
          </div>
        </aside>
        <section className="cities">
          <h3>{countryDataApi.name.common} Cities</h3>
          <div className="country-cities">
            {countryCities.map((city) => {
              return (
                <Link
                  key={city.id}
                  to={`/countries/${countryDataApi.name.common}/${city.cityName}`}
                  onClick={() => getCityInfo(city)}
                >
                  <article>
                    <h4>{city.cityName}</h4>
                    <img src={city.images[0]} alt="" />
                  </article>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <div id="backToTop-btn">
        <a href="#">
          <button>Back to Top</button>
        </a>
      </div>
    </div>
  );
};

export default SingleCountryPage;
