import React from 'react'
import "./Nav.scss";
import { useState } from "react";

const Nav = () => {

  const [darkMode, setDarkMode] = useState(window.matchMedia("(prefers-color-scheme:dark)").matches);


  return (
    <nav>
      <h1>Where in the world?</h1>
      <div role='button' className='theme'>
        <i className="fa-solid fa-moon"></i>
        <span>Dark mode</span>
      </div>
    </nav>
  )
}

export default Nav