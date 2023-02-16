import React from 'react'
import "./Input.scss";
import { useState } from "react";
import { getContext } from "../../Context/Context";
import data from "../../../data.json";

const Input = () => {

  const { setCountries, search, setSearch, selectedRegion } = getContext();

  const handleSearch = () => {
    if (search.length) {
      if (selectedRegion !== "Filter by region" && selectedRegion.length) {
        let searchedCountries = data.filter(el => el?.name.toLowerCase() === search.toLowerCase() && selectedRegion === el.region);
        setCountries(searchedCountries);
      }
      else {
        let searchedCountries = data.filter(el => el?.name.toLowerCase() === search.toLowerCase());
        setCountries(searchedCountries);
      }

    }
    else setCountries(data);
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.key === "Enter" ? handleSearch() : null;
  }

  return (
    <div className='input'>
      <button onClick={handleSearch}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <input type="text" placeholder='Search for country...' value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={handleKeyDown} />
    </div>
  )
}

export default Input