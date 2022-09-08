import React from 'react';

function Navbar({Home, Recipes}) {
  return (
    <div className='navbar'>
    <p onClick={()=>Home()}> Home </p> &nbsp;&nbsp;&nbsp;
    <p onClick={()=>Recipes()}> Recipes </p>&nbsp;&nbsp;&nbsp;
    <p> Grocery List</p>&nbsp;&nbsp;&nbsp;
    <p> Contact Us </p>&nbsp;&nbsp;&nbsp;
    <p> Login </p>
    </div>
  )
}

export default Navbar;