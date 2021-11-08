import React, { useContext, useState } from "react";

const NavigationContext = React.createContext();

const NavigationContextProvider = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const changeCurrentPage = (e) => {
    const newCurrentPage = String(e.target.textContent);
    setCurrentPage(newCurrentPage);
    setIsMenuOpen(false);
  };

  return (
    <NavigationContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        currentPage,
        changeCurrentPage,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = () => {
  return useContext(NavigationContext);
};

export default NavigationContextProvider;

/* https://restcountries.com/v3.1/alpha?codes=FRA,DEU,AUT,CHE,ITA&fields=name,capital,population,flag,currencies,languages

  France FRA
    >paris 2.2m, marseille 1.6m, lyon 720k, toulouse 440k, nice 340k
  Germany DEU
    >berlin 3.7m, munich 1.4m, frankfurt 730k, hamburg 1.8m, cologne 1m
  Austria AUT
    >Vienna 1.7m, salzburg 160k, innsbruck 130k, graz 290k, linz 190k
  Switzerland CHE
    >Zurich 380k, geneva 200k, basel 170k, lucerne 78k, bern 140k
  Italy ITA
    >Rome 2.6m, venice 260k, florence 380k, milan 1.4m, naples 1m
Belgium
Croatia
Denmark
Finland
Poland
Norway
Greece
Netherlands
Spain
*/
