import React from 'react';
import Days from './Days'
import { IoIosAdd } from 'react-icons/io'

function Weeks({weeks, index, addMeal}) {
 return (
  <div className='weeks'>
  <h2>Week {index+1}</h2>
  {weeks.meals.map((day) =>
  <Days  days= {day} index={index}/>
)}
  <button type='button' onClick={()=> addMeal({index})}><IoIosAdd className='plusLogo'/> &nbsp; Add Meal</button> <br />
  <h6 className='gl'>grocery list</h6>
</div>
 )
}

export default Weeks;