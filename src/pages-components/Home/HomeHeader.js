import React from "react";
/* Home Page Header Images */
import hero from "../../assets/global_assets/hero.jpg";
import hero2 from "../../assets/global_assets/hero2.jpg";

const HomeHeader = () => {
  return (
    <header>
      <div className="hero-title">
        <h1>Experience the potentiality of travel</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quos
          eveniet excepturi quasi dignissimos ipsam fuga, perferendis quod
          iusto? Sequi ad sunt cum excepturi rerum vitae iste omnis repellendus
          ipsam!
        </p>
        <button>Explore now</button>
      </div>
      <div className="img-container">
        <img id="hero-main" src={hero2} alt="" />
        <img id="hero-accent" src={hero} alt="" />
      </div>
    </header>
  );
};

export default HomeHeader;
