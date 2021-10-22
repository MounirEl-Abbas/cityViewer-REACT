import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Pages
import Home from "./pages-components/Home/Home";
import About from "./pages-components/About/About";
import Error from "./pages-components/Error";
import CountriesPage from "./pages-components/CountriesPage/CountriesPage";
import SingleCountryPage from "./pages-components/singleCountryPage/SingleCountryPage";
import City from "./pages-components/City/City";
import Wishlist from "./pages-components/Wishlist/Wishlist";
//Components
import Navbar from "./globalComponents/Navbar";
import Sidemenu from "./globalComponents/Sidemenu";
import Footer from "./globalComponents/Footer";
import ScrollToTop from "./globalComponents/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidemenu />
        <ScrollToTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/wishlist">
            <Wishlist />
          </Route>
          <Route exact path="/countries">
            <CountriesPage />
          </Route>
          <Route exact path="/countries/:countryName">
            <SingleCountryPage />
          </Route>
          <Route path="/countries/:countryName/:cityName">
            <City />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;

/* 
Home Page
General travel page
  >Look into some travel sites, put pictures
  >Explore btn
    >takes you to countries page
    >https://restcountries.com/v2/alpha?codes={code},{code},{code}
      >Get few countries for options
      
>Once a country is selected
  >show Country's cities (no api, research)

>Once a city is picked
  >Ability to comment/review on city
  >Picture gallery (see comfysloth)
  >Hotel Api
  >research for a description of the city
  >Add to 'wish list' (cart)




*/
