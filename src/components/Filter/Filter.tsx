import React from 'react'
import "./Filter.scss";
import { useState, useEffect } from 'react';
import data from "../../../data.json";
import { getContext } from "../../Context/Context";

const Filter = () => {

  const { setCountries, setSelectedRegion, selectedRegion, search, setSearch } = getContext();


  const [isOpen, setIsOpen] = useState<boolean>(false);

  const allRegions = ["All Regions", ...new Set(data.map(el => el?.region))];

  const handleRegion = (region: string) => {
    setSelectedRegion(region);
    setIsOpen(false);
  }


  useEffect(() => {
    if (selectedRegion !== "Filter by region") {
      if (selectedRegion === "All Regions") {
        setSearch("");
        setCountries(data)
      }
      else if (search) {
        let selectedRegionArray = data.filter(el => el?.region === selectedRegion && el.name.toLowerCase() === search.toLowerCase())
        setCountries(selectedRegionArray);
      }
      else {
        let selectedRegionArray = data.filter(el => el?.region == selectedRegion);
        setCountries(selectedRegionArray);
      }

    }
  }, [selectedRegion, setSelectedRegion])


  return (
    <div className='filter'>
      <div onClick={() => setIsOpen(pre => !pre)}>{selectedRegion}  {!isOpen ? <i className="fa-solid fa-arrow-down"></i> : <i className="fa-solid fa-arrow-up"></i>}</div>
      {isOpen && <div className='regions'>
        {allRegions.map((region, idx) => <div onClick={() => handleRegion(region)} key={idx}>{region}</div>)}
      </div>}

    </div>
  )
}

export default Filter