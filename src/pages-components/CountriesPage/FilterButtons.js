import React, { useState, useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { RiLayoutGridFill } from "react-icons/ri";
import { HiMenuAlt1 } from "react-icons/hi";
import { useCountriesContext } from "../../context/countriesContext";

const FilterButtons = () => {
  const { isShowMoreInfo, setIsShowMoreInfo, sortBy } = useCountriesContext();

  return (
    <section className="btns-container">
      <div className="search-container">
        <span>
          <BiSearch />
        </span>
        <input type="search" placeholder="Search" />
      </div>

      <div className="filters-container">
        <div className="toggle-btns">
          <button
            onClick={() => setIsShowMoreInfo(false)}
            className={!isShowMoreInfo ? "active" : ""}
          >
            <RiLayoutGridFill />
          </button>
          <button
            onClick={() => setIsShowMoreInfo(true)}
            className={isShowMoreInfo ? "active" : ""}
          >
            <HiMenuAlt1 />
          </button>
        </div>

        <p># Countries Found</p>

        <form>
          <label htmlFor="sort">Sort By: </label>
          <select onChange={(e) => sortBy(e)} name="sort">
            <option value="alpha-ascending">Name (a-z)</option>
            <option value="alpha-descending">Name (z-a)</option>
            <option value="pop-ascending">Population (Lowest)</option>
            <option value="pop-descending">Population (Highest)</option>
          </select>
        </form>
      </div>
    </section>
  );
};

export default FilterButtons;
