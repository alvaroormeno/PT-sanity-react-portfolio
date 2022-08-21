import React, {useState} from 'react'
import './Navbar.scss'
import { HiMenuAlt4, HiX} from 'react-icons/hi'
import { motion } from 'framer-motion'

import {images} from '../../constants/'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

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

      {/* Mobile Menu */}
      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {/* if toggle is true... */}
        {toggle && (
          // to use motion we use motion. followed by the element we want to use, in this case div.
          <motion.div
            whileInView={{ x: [300, 0]}}
            transition={{duration: 0.85, ease: 'easeOut'}}
          >
            <HiX onClick={() => setToggle(false)}/>
            <ul>
              {['home', 'about', 'contact', 'work', 'skills'].map((item => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                </li>
              )))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar