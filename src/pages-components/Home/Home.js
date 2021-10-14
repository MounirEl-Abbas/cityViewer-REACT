import React from "react";
/* Home Components */
import HomeHeader from "./HomeHeader";
import HomeFeaturedCities from "./HomeFeaturedCities";
import HomeTravelGuarantee from "./HomeTravelGuarantee";
import HomeFooter from "./HomeFooter";

const Home = () => {
  return (
    <div className="home-page">
      <HomeHeader />
      <main>
        <HomeFeaturedCities />
        <HomeTravelGuarantee />
      </main>
      <HomeFooter />
    </div>
  );
};

export default Home;
