import React from 'react'
import './Navbar.css'
import hamburger from '../Images/hamburger.svg'


function Navbar() {
  return (
    <div className='Navbar'>
      <ul className='Navb'>
        <a href="mailto:achilihudaniel53@gmail.com"><li>Gmail</li></a>
        <a href="https://web.facebook.com/daniel.achilihu.9/"><li>Images</li></a>
        <img src={hamburger} alt ="hambuger menu"/>
        <button> Sign Up </button>
      </ul>

    </div>
  )
}

export default Navbar