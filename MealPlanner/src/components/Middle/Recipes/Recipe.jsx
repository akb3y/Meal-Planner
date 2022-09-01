import React from 'react'

function Recipe({recipe}){
  return(
    <div className='recipe'>
  <img src={recipe.image} alt="your mom" />
  <h4>{recipe.title}</h4>
  </div>
  )
}

export default Recipe;