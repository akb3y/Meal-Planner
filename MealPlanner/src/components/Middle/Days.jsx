import React from 'react';

function Days({days, index, getIndRecipe}) {
  let id = 716429
 return (

  // map over week and render each day
  //   <Day getIndRecipe={getIndRecipe} day={day} />

  <div className='days'>
    <h5 onClick={() => getIndRecipe({id})}>{days}</h5>
</div>
 )
}

export default Days;