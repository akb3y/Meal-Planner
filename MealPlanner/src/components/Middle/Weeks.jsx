import React from 'react';
import Days from './Days'
function Weeks({weeks, index}) {
 return (
  <div className='weeks'>
  <h2>Week {index+1}</h2>
  {weeks.meals.map((day) =>
  <Days  days= {day} />
)}
  <button type='button'>Add Meal</button>
</div>
 )
}

export default Weeks;