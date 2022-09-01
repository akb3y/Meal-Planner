import React from 'react';
import Weeks from './Weeks'

function Month({menu}) {
 return (
  <div className='menu'>
  {menu.map((weeks, index) =>
  <Weeks  weeks= {weeks} index={index} />
)}

</div>
 )
}

export default Month;