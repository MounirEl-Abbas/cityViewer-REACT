import React from "react";
/* Featured Cities Images */
import romeImg from "../../assets/italy/rome/rome1.jpg";
import parisImg from "../../assets/france/paris/paris1.jpg";
import zurichImg from "../../assets/switzerland/zurich/zurich1.jpg";
import viennaImg from "../../assets/austria/vienna/vienna1.jpg";

const HomeFeaturedCities = () => {
  return (
    <section className="featured-cities">
      <h2>Featured Cities</h2>
      <article className="featured-city-1">
        <img src={romeImg} alt="" />
        <h4>Rome</h4>
      </article>
      <article className="featured-city-2">
        <img src={parisImg} alt="" />
        <h4>Paris</h4>
      </article>
      <article className="featured-city-3">
        <img src={zurichImg} alt="" />
        <h4>Zurich</h4>
      </article>
      <article className="featured-city-4">
        <img src={viennaImg} alt="" />
        <h4>Vienna</h4>
      </article>
      <button>All Cities</button>
    </section>
  );
};

export default HomeFeaturedCities;
