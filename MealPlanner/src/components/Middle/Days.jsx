import React from 'react';

function Day({days, index, getIndRecipe}) {
  let id = 716429
 return (
  <div className='days'>
    <ul onClick={() => getIndRecipe({id})}>{days}</ul>
</div>
 )
}

export default Day;