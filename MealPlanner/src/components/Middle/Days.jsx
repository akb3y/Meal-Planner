import React from 'react';

function Days({days, index}) {
 return (
  <div className='days'>
    <h5 onClick={() => alert(days) }>{days}</h5>
</div>
 )
}

export default Days;