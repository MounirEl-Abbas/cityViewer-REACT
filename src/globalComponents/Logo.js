import React from "react";
import { GiBinoculars } from "react-icons/gi";

const Logo = () => {
  return (
    <div className="logo">
      <GiBinoculars />
      <h3>
        C<span>i</span>ty
        <span id="span-color">
          V<span>i</span>ewer
        </span>
      </h3>
    </div>
  );
};

export default Logo;
