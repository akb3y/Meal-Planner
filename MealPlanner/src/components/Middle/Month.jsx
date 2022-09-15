import React from 'react';
import Week from './Weeks'

function Month({menu, addMeal, getIndRecipe}) {
 return (
  <>    <select name='mealTime'>
  <option value='Breakfast'>Breakfast</option>
  <option value='Lunch'>Lunch</option>
  <option value='Dinner'>Dinner</option>
  <option value='Snack'>Snack</option>
</select>
<br />
  <div className='menu'>
  {menu.map((weeks, index) =>
  <Week  weeks= {weeks} index={index} addMeal={addMeal} getIndRecipe={getIndRecipe}/>
  )}
</div>
</>
 )
}

export default Month;