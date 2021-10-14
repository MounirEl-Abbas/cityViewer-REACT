import React, { useState } from "react";
import data from "../../assets/data";

const Country = () => {
  const [countrySelected, setCountrySelected] = useState("France");

  return (
    <div className="test">
      {data.map((country) => {
        if (country.country === countrySelected) {
          return (
            <div className="country-cities">
              {country.cities.map((city) => {
                const { cityName, population, images } = city;
                console.log(`cityName`, cityName);
                return (
                  <div className="city">
                    <p>{cityName}</p>
                    <p>{population}</p>
                    {images.map((img) => (
                      <img src={img} />
                    ))}
                  </div>
                );
              })}
            </div>
          );
        }
        // } else {
        //   return <div className="loading">Loading</div>;
        // }
      })}
    </div>
  );
};

export default Country;
