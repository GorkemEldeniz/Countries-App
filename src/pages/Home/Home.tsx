import React from 'react'
import "./Home.scss"
import Search from '../../components/Search/Search'
import Body from '../../components/Body/Body'

const Home = () => {
  return (
    <div className='home'>
      <Search />
      <Body />
    </div>
  )
}

export default Home;
