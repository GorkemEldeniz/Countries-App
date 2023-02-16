import React from 'react'
import "./Card.scss";
import { useNavigate } from 'react-router-dom';

interface Iprops {
  name: string;
  population: number;
  region?: string;
  capital?: string;
  flag?: string;
}

const Card: React.FC<Iprops> = ({ name, population, region, capital, flag }) => {

  const formattedPopulation = new Intl.NumberFormat("tr-TR").format(population);

  const navigator = useNavigate();

  return (
    <div className='card' onClick={() => navigator(`/${name}`)}>
      <img src={flag} alt="Flag" />
      <ol className='info'>
        <h2>{name}</h2>
        <li>Population: <span>{formattedPopulation}</span></li>
        <li>Region: <span>{region}</span></li>
        <li>Capital: <span>{capital}</span></li>
      </ol>
    </div>
  )
}

export default Card