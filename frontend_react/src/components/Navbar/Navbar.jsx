import React from 'react'
import './Navbar.scss'

import {images} from '../../constants/'

const Navbar = () => {
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.logo} alt="logo" />
      </div>
      {/* Loop through all of elements we need to have in navbar  */}
      <ul className='app__navbar-links'>
        {['home', 'about', 'contact', 'work', 'skills'].map((item => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}>{item}</a>
          </li>
        )))}
      </ul>
    </nav>
  )
}

export default Navbar