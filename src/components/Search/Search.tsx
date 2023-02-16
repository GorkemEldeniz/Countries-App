import React from 'react'
import Input from '../Input/Input'
import Filter from '../Filter/Filter';
import "./Search.scss";

const Search = () => {
  return (
    <div className='search'>
      <Input />
      <Filter />
    </div>
  )
}

export default Search