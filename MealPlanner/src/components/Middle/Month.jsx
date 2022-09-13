import React from 'react';
import Weeks from './Weeks'

function Month({menu, addMeal, getIndRecipe}) {
 return (
  <div className='menu'>
  {menu.map((weeks, index) =>
  <Weeks  weeks= {weeks} index={index} addMeal={addMeal} getIndRecipe={getIndRecipe}/>
  )}
</div>
 )
}

export default Month;