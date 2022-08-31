import React from 'react';
import Navbar from './Navbar'
import Search from './Search'

function Header() {
  return (
    <div className='header'>
      <div className='logo'>
    <h1> Simply </h1><br />
    <h3>Meal Prep</h3>
    </div>
    <div className='sidebar'>
      <Navbar />
      <Search />
    </div>
    </div>
  )
}

export default Header;