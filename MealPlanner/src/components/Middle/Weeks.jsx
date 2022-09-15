import React from 'react';
import Day from './Days'
import { IoIosAdd } from 'react-icons/io'

function Week({weeks, index, addMeal, getIndRecipe}) {
 return (
  <div className='weeks'>
  <h2>Week {index+1}</h2>
  {weeks.meals.map((day) =>
  <Day  days= {day} index={index} getIndRecipe={getIndRecipe}/>
)}
  <button type='button' onClick={()=> addMeal({index})}><IoIosAdd className='plusLogo'/> &nbsp; Add Meal</button> <br />
  <h6 className='gl'>grocery list</h6>
</div>
 )
}

export default Week;