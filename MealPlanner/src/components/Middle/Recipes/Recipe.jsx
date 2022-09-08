import React from 'react'
import { GrAddCircle } from 'react-icons/gr'

function Recipe({recipe, add}){
  return(
    <div className='recipe'>
      <br />
  <img src={recipe.image} alt="your mom" />
  <GrAddCircle className='addLogo' onClick={()=>add(recipe.title)}/>
  <h4>{recipe.title}</h4>
  </div>
  )
}

export default Recipe;