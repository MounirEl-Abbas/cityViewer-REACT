import React from "react";
import ReactDOM from "react-dom";
import "./styles/css/main.css";
import App from "./App";

/* Context */
import NavigationContextProvider from "./context/navigationContext";
import CountriesContextProvider from "./context/countriesContext";
import SingleCountryContextProvider from "./context/singleCountryContext";
import SingleCityContextProvider from "./context/singleCityContext";

/* Auth0 */
import { Auth0Provider } from "@auth0/auth0-react";

/* .env */
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
const googleMapsAPIKey = process.env.REACT_APP_GOOGLEMAPS_API_KEY;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <NavigationContextProvider>
        <CountriesContextProvider>
          <SingleCountryContextProvider>
            <SingleCityContextProvider mapsAPIKey={googleMapsAPIKey}>
              <App />
            </SingleCityContextProvider>
          </SingleCountryContextProvider>
        </CountriesContextProvider>
      </NavigationContextProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
