import React from 'react';
import Weeks from './Weeks'

function Month({menu, addMeal}) {
 return (
  <div className='menu'>
  {menu.map((weeks, index) =>
  <Weeks  weeks= {weeks} index={index} addMeal={addMeal}/>
)}

</div>
 )
}

export default Month;