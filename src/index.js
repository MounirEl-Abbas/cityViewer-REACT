import React from "react";
import ReactDOM from "react-dom";
import "./styles/css/main.css";
import App from "./App";

/* Context */
import NavigationContextProvider from "./context/navigationContext";
import CountriesContextProvider from "./context/countriesContext";

/* Auth0 */
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}
    >
      <NavigationContextProvider>
        <CountriesContextProvider>
          <App />
        </CountriesContextProvider>
      </NavigationContextProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
