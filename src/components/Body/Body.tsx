import React from 'react'
import "./Body.scss";
import Card from '../Card/Card';
import { getContext } from "../../Context/Context";

const Body = () => {

  const { countries } = getContext();

  return (
    <div className='body'>
      {countries.map((country) => <Card key={country.name} name={country?.name} capital={country?.capital} population={country?.population} region={country?.region} flag={country?.flags?.svg} />)}
    </div>
  )
}

export default Body